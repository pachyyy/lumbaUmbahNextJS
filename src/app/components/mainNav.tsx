"use client";

import { useState } from "react";
import Image from "next/image";
import logoNavy from "@/src/app/asset/logo/logo-navy.png";

export default function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden sticky top-4 left-4 z-50 bg-sky-700 text-white p-3 rounded-lg hover:bg-sky-500 transition ease-in-out duration-300"
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMobileMenuOpen ? (
            // X icon when menu is open
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon when menu is closed
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:flex items-center justify-between px-10 py-3 fixed top-0 left-0 right-0 z-50 font-rubik bg-white shadow-sm">
        <div>
          <a href="/">
            <Image src={logoNavy} alt="logo" className="w-20 cursor-pointer" />
          </a>
        </div>

        <div className="text-sky-700 font-rubik">
          <ul className="flex items-center gap-12">
            <li className="hover:bg-sky-700 hover:text-white px-5 py-2 rounded-full transition ease-in-out duration-400 cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="hover:bg-sky-700 hover:text-white px-5 py-2 rounded-full transition ease-in-out duration-400 cursor-pointer">
              <a href="/price">Service & Price</a>
            </li>
            <li className="hover:bg-sky-700 hover:text-white px-5 py-2 rounded-full transition ease-in-out duration-400 cursor-pointer">
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>

        <div className="bg-sky-700 px-5 py-4 text-white rounded-2xl hover:bg-sky-500 transition ease-in-out duration-300 cursor-pointer font-light">
          <a href="/login">
            <p>ORDER NOW</p>
          </a>
        </div>
      </nav>

      {/* Mobile Navigation - Only visible when menu is open */}
      {isMobileMenuOpen && (
        <nav className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-40 bg-white font-rubik">
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Logo */}
            <div className="mb-8">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src={logoNavy}
                  alt="logo"
                  className="w-20 cursor-pointer"
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="text-sky-700 font-rubik mb-8">
              <ul className="flex flex-col gap-6">
                <li className="hover:bg-sky-700 hover:text-white px-5 py-3 rounded-full transition ease-in-out duration-400 cursor-pointer">
                  <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </a>
                </li>
                <li className="hover:bg-sky-700 hover:text-white px-5 py-3 rounded-full transition ease-in-out duration-400 cursor-pointer">
                  <a href="/price" onClick={() => setIsMobileMenuOpen(false)}>
                    Service & Price
                  </a>
                </li>
                <li className="hover:bg-sky-700 hover:text-white px-5 py-3 rounded-full transition ease-in-out duration-400 cursor-pointer">
                  <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="bg-sky-700 px-5 py-4 text-white rounded-2xl hover:bg-sky-500 transition ease-in-out duration-300 cursor-pointer font-light text-center">
              <a href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <p>ORDER NOW</p>
              </a>
            </div>
          </div>
        </nav>
      )}

      {/* Backdrop/Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
