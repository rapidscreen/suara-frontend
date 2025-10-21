import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Suara.ai",
  description: "Empowering voices across Malaysia with cutting-edge AI technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
