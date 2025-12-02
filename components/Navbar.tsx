"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 text-white focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 my-1 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[280px] glass z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
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
              href="/"
              onClick={closeMenu}
              className="text-white hover:text-primary transition-colors text-lg font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/"
              onClick={closeMenu}
              className="text-white hover:text-primary transition-colors text-lg font-medium py-2"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
