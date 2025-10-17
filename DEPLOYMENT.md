# 🚀 Suara Frontend - Production Deployment Guide

## 📋 Overview

Simple production deployment pipeline using GitHub Actions for deploying the Suara Next.js frontend to Azure Static Web Apps.

## 🏗️ Infrastructure

- **Azure Storage Account**: `productionsuara`
- **Resource Group**: `swe`
- **Location**: Southeast Asia (Singapore) - Optimized for Malaysia 🇲🇾
- **Live URL**: https://productionsuara.z23.web.core.windows.net/

## ⚡ Quick Setup

### 1. Create Azure Service Principal (Run these commands directly)

```bash
# Set variables
RESOURCE_GROUP="swe"
STORAGE_ACCOUNT="productionsuara"
SUBSCRIPTION_ID=$(az account show --query id -o tsv)

# Create service principal with Storage Blob Data Contributor role
az ad sp create-for-rbac \
  --name "suara-github-actions" \
  --role "Storage Blob Data Contributor" \
  --scopes "/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.Storage/storageAccounts/$STORAGE_ACCOUNT" \
  --sdk-auth

# Copy the JSON output and add it as AZURE_CREDENTIALS secret in GitHub
```

### 2. Add GitHub Secret

1. Copy the JSON output from step 1
2. Go to your GitHub repository
3. Navigate to `Settings > Secrets and variables > Actions`
4. Click `New repository secret`
5. Name: `AZURE_CREDENTIALS`
6. Value: Paste the JSON output
7. Click `Add secret`

### 3. Deploy! 

That's it! Push to `main` branch and the deployment will start automatically.

## 🔄 Production Deployment Workflow

**Trigger**: Push to `main` branch
**What happens**:
- 🛡️ Security scanning
- 🏗️ Build and test 
- 🌐 Deploy to Azure
- 🏥 Health check
- 📊 Deployment summary

## � How to Deploy

### Automatic (Recommended)
1. Make your changes
2. Push to `main` branch
3. GitHub Actions deploys automatically
4. Check the Actions tab for progress

### Manual
1. Go to Actions tab in GitHub
2. Select "🚀 Deploy to Azure Production" 
3. Click "Run workflow"
4. Wait for completion

## 🔧 Local Development

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Commands
- `npm run build`: Build the application
- `npm run export`: Export static files (included in build)
- `npm run build:export`: Combined build and export
- `npm run clean`: Clean build artifacts

## 📊 Monitoring & Analytics

### Build Metrics
Each deployment provides:
- 📦 Bundle size analysis
- 📈 Build time metrics
- 🔍 File count by type
- 📊 Performance scores

### Security Scanning
- **Trivy**: Vulnerability scanning
- **TruffleHog**: Secret detection
- **Dependency Review**: Package security
- **Weekly scheduled scans**: Automated security monitoring

### Performance Monitoring
- **Lighthouse CI**: Performance, accessibility, SEO scores
- **Bundle analysis**: Size optimization tracking
- **Load time monitoring**: Real-world performance metrics

## 🛡️ Security Features

### Pipeline Security
- 🔐 Secret scanning with TruffleHog
- 🛡️ Vulnerability scanning with Trivy
- 📦 Dependency security reviews
- 🔒 Minimal permission scopes
- ⏱️ Workflow timeouts

### Application Security
- 🚫 Console log removal in production
- 🔒 Security headers configuration
- 🛡️ Content Security Policy ready
- 🔐 No sensitive data in build output

## 🔧 Troubleshooting

### Common Issues

#### 1. Deployment Fails with Authentication Error
**Solution**: Verify `AZURE_CREDENTIALS` secret is correctly set
```bash
# Test authentication
az login --service-principal -u CLIENT_ID -p CLIENT_SECRET --tenant TENANT_ID
```

#### 2. Build Fails on Dependencies
**Solution**: Clear cache and reinstall
```bash
npm run clean
rm -rf node_modules package-lock.json
npm install
```

#### 3. Static Export Issues
**Solution**: Check for unsupported features in `next.config.ts`
- Remove server-side only features
- Ensure all images use `unoptimized: true`
- Check for dynamic routing issues

#### 4. Azure Storage Upload Fails
**Solution**: Verify service principal permissions
```bash
# Check current permissions
az role assignment list --assignee YOUR_SERVICE_PRINCIPAL_ID --scope STORAGE_ACCOUNT_SCOPE
```

### Debug Commands
```bash
# Test local build
npm run build && npm run preview

# Check bundle size
npm run build && du -sh out/*

# Validate configuration
node -p "JSON.parse(require('fs').readFileSync('next.config.ts'))"
```

## 📈 Performance Optimization

### Recommendations
1. **Images**: Use Next.js Image component with `unoptimized: true`
2. **Fonts**: Self-host fonts for better performance
3. **Bundle Size**: Use `optimizePackageImports` for large libraries
4. **Caching**: Leverage Azure CDN (can be added later)
5. **Compression**: Enable gzip/brotli at Azure level

### Monitoring
- Lighthouse scores target: >80 for all categories
- Bundle size alerts if >500KB
- Performance budget enforcement

## 🔮 Future Enhancements

### Planned Features
- 📊 Azure CDN integration (when providers are registered)
- 🔐 Azure Key Vault integration
- 📈 Advanced monitoring with Application Insights
- 🌍 Multi-environment deployments (staging, UAT)
- 🚀 Blue-green deployments
- 📱 Mobile performance optimization

### Optional Integrations
- **Slack/Teams notifications**: Deployment status updates
- **Sentry**: Error monitoring and performance tracking
- **Hotjar/Google Analytics**: User behavior analytics
- **Vercel Analytics**: Performance insights

## 📞 Support

### Resources
- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Next.js Static Export Guide](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

### Team Contacts
- **DevOps**: GitHub Issues or team communication channels
- **Security**: Report security issues through private channels
- **Performance**: Monitor Lighthouse reports and build summaries

---

## 🎉 Quick Start Checklist

- [ ] Set up Azure Service Principal
- [ ] Add `AZURE_CREDENTIALS` to GitHub Secrets
- [ ] Configure branch protection rules
- [ ] Set up production environment with reviewers
- [ ] Test deployment with a small change
- [ ] Monitor first deployment for any issues
- [ ] Review security scan results
- [ ] Check performance metrics

**🚀 You're ready to deploy!** Push to `main` or create a PR to see the CI/CD pipeline in action.
