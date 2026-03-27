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
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "MerchStore",
    href: "/Merch",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <span className="text-xs sm:text-sm">info@cloudadore.com</span>
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-xs sm:text-sm">Follow us:</span>
          <FaFacebookF className="cursor-pointer hover:opacity-80 transition" />
          <FaTwitter className="cursor-pointer hover:opacity-80 transition" />
          <FaInstagram className="cursor-pointer hover:opacity-80 transition" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 bg-white border-b border-light">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-primary">
          Cloudadore
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="border border-accent-orange text-accent-orange px-4 py-2 rounded-lg hover:bg-accent-orange hover:text-white transition">
            Donate
          </button>

          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
            Join Community
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-light">
          <ul className="flex flex-col gap-0 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 sm:px-6 py-3 transition border-l-4 ${
                    pathname === link.href
                      ? 'text-primary border-l-primary bg-gray-50'
                      : 'text-muted hover:text-primary border-l-transparent hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 p-4 sm:p-6 border-t border-light">
            <button className="flex-1 border border-accent-orange text-accent-orange px-4 py-2 rounded-lg hover:bg-accent-orange hover:text-white transition">
              Donate
            </button>

            <button className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
              Join Community
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
