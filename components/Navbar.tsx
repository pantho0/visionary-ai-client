"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav>
        <Link href="/" className="logo" onClick={closeMenu}>
          <p>
            Visionary<span className="text-primary">AI</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/generate">Generate Image</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 text-white focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "" : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-full w-[280px] glass z-50">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white hover:text-primary focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col h-full pt-20 px-6">
            <ul className="flex flex-col gap-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-white hover:text-primary transition-colors text-lg font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/generate"
                onClick={closeMenu}
                className="text-white hover:text-primary transition-colors text-lg font-medium py-2"
              >
                Generate Image
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-white hover:text-primary transition-colors text-lg font-medium py-2"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-white hover:text-primary transition-colors text-lg font-medium py-2"
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
