import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

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
        <header className="site-header">
          <div className="nav-inner">
            <a className="brand" href="#">
              <span className="brand-icon" aria-hidden="true">
                <Image
                  src="/assets/microphone-2.svg"
                  alt=""
                  width={28}
                  height={28}
                  priority
                />
              </span>
              <span className="brand-name">
                <span className="brand-name-primary">Suara.</span>
                <span className="brand-name-accent">ai</span>
              </span>
            </a>
            <nav className="primary-nav" aria-label="Primary">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#how-it-works">How it works</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
              </ul>
            </nav>
            <a className="contact-button" href="#contact">
              <span className="contact-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l1.47-1.47a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h2.75a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.25 1.01l-1.47 1.47Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Contact Us
            </a>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
