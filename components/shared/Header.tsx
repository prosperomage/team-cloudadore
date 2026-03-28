"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
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
          <span className="text-xs md:text-sm">info@cloudadore.com</span>
        </div>

        <div className="flex gap-4 items-center">
          <span className="hidden lg:block text-sm">Follow us:</span>

          <FaFacebookF className="cursor-pointer hover:text-(--color-accent-orange) transition" />
          <FaTwitter className="cursor-pointer hover:text-(--color-accent-orange) transition" />
          <FaInstagram className="cursor-pointer hover:text-(--color-accent-orange) transition" />
        </div>
      </div>

      {/* Navbar */}
     <nav className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-(--color-border) bg-white sticky top-0 z-50">
      
      {/* 1. Logo: Removed 'w-full' so it only takes up the space it needs */}
      <Link href="/" className="shrink-0">
        <Image
          src="/brandlogo.svg"
          alt="CloudAdore Logo"
          width={150} // Set a reasonable base width
          height={40}
          priority // High priority for LCP
          className="h-8 md:h-10 w-auto object-contain"
        />
      </Link>

      {/* 2. Desktop Navigation: Hidden on mobile/tablet */}
      <ul className="hidden lg:flex items-center gap-8 font-medium">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-all pb-1 text-sm xl:text-base border-b-2 ${
                  isActive
                    ? "text-(--color-text-dark) border-(--color-primary-blue)"
                    : "text-(--color-text-light) border-transparent hover:text-(--color-primary-blue)"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* 3. Action Buttons: Hidden on mobile */}
      <div className="hidden lg:flex items-center gap-4">
        <button className="border border-(--color-accent-orange) text-(--color-accent-orange) px-5 py-2.5 rounded-xl font-semibold hover:bg-(--color-accent-orange) hover:text-white transition-all active:scale-95">
          Donate
        </button>

        <button className="bg-(--color-secondary-blue) text-white px-5 py-2.5 rounded-xl font-semibold  transition-all shadow-md active:scale-95">
          Join Community
        </button>
      </div>

      {/* 4. Mobile Toggle */}
      <button
        className="lg:hidden text-2xl text-(--color-primary-blue) p-2 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 5. Mobile Menu Overlay (Optional but needed for functionality) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-(--color-border) lg:hidden flex flex-col p-6 gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-(--color-text-dark)"
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-(--color-border)" />
          <button className="w-full bg-(--color-primary-blue) text-white py-3 rounded-xl font-bold">
            Join Community
          </button>
        </div>
      )}
    </nav>

      {/* Mobile + Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-(--color-border)">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
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
