"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "MerchStore", href: "/merchstore" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      
      {/* Top Bar */}
      <div className="hidden md:flex bg-(--color-primary-blue) text-white text-sm py-2 px-4 lg:px-10 justify-between items-center">
        
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-(--color-accent-orange)" />
          <span className="text-xs md:text-sm">
            info@cloudadore.com
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <span className="hidden lg:block text-sm">
            Follow us:
          </span>

          <FaFacebookF className="cursor-pointer hover:text-(--color-accent-orange) transition" />
          <FaTwitter className="cursor-pointer hover:text-(--color-accent-orange) transition" />
          <FaInstagram className="cursor-pointer hover:text-(--color-accent-orange) transition" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 border-b border-(--color-border)">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold text-(--color-primary-blue)">
            Cloud
            <span className="text-(--color-accent-orange)">
              Adore
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition pb-1 text-sm xl:text-base ${
                  pathname === link.href
                    ? "text-dark border-b-2 border-(--color-primary-blue)"
                    : "text-(--color-text-light) hover:text-(--color-primary-blue)"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tablet Buttons */}
        {/* <div className="hidden md:flex lg:hidden gap-2">
          <button className="border border-(--color-accent-orange) text-(--color-accent-orange) px-3 py-2 text-sm rounded-lg hover:bg-(--color-accent-orange) hover:text-white transition">
            Donate
          </button>
        </div> */}

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <button className="border border-(--color-accent-orange) text-(--color-accent-orange) px-4 py-2 rounded-lg hover:bg-(--color-accent-orange) hover:text-white transition">
            Donate
          </button>

          <button className="bg-(--color-primary-blue) text-white px-4 py-2 rounded-lg hover:bg-(--color-secondary-blue) transition">
            Join Community
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-2xl text-(--color-primary-blue)"
          onClick={() =>
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile + Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-(--color-border)">
          
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() =>
                    setIsMobileMenuOpen(false)
                  }
                  className={`block px-6 py-3 border-l-4 ${
                    pathname === link.href
                      ? "border-(--color-accent-orange) bg-(--color-bg-light) text-(--color-primary-blue)"
                      : "border-transparent text-(--color-text-light) hover:bg-(--color-bg-light)"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-(--color-border)">
            <button className="flex-1 border border-(--color-accent-orange) text-(--color-accent-orange) px-4 py-2 rounded-lg hover:bg-(--color-accent-orange) hover:text-white transition">
              Donate
            </button>

            <button className="flex-1 bg-(--color-primary-blue) text-white px-4 py-2 rounded-lg hover:bg-(--color-secondary-blue) transition">
              Join Community
            </button>
          </div>
        </div>
      )}
    </header>
  );
}