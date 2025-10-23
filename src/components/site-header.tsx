'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
];

const ContactIcon = () => (
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
);

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
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

        <button
          type="button"
          className={`nav-toggle ${isOpen ? 'is-active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${isOpen ? 'nav-open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="contact-button contact-button-mobile text-white"
            href="#contact"
            onClick={closeMenu}
          >
            <ContactIcon />
            Contact Us
          </a>
        </nav>

        <a className="contact-button contact-button-desktop" href="#contact">
          <ContactIcon />
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
