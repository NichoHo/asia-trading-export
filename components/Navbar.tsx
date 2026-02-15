"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#services" },
    { name: "Clients", href: "/#clients" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* TOP NAVBAR (DESKTOP + MOBILE BUTTON) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          scrolled
            ? "bg-white/95 dark:bg-neutral-surface-dark/95 backdrop-blur-sm shadow-lg"
            : "bg-white dark:bg-neutral-surface-dark"
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-light dark:hover:bg-neutral-dark transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-neutral-text dark:text-neutral-text-dark" />
            </button>

            {/* Logo */}
            <img
              src={isDark ? "/logo.png" : "/logo-black.png"}
              alt="Asia Trading Export Logo"
              className="h-8 md:h-10 object-contain transition-opacity duration-300"
            />

            {/* Desktop Links (unchanged) */}
            <div className="hidden md:flex items-center space-x-1 flex-1 justify-end mr-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-neutral-text dark:text-neutral-text-dark hover:text-primary dark:hover:text-primary-dark transition-colors rounded-lg hover:bg-neutral-light dark:hover:bg-neutral-dark"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-neutral-light dark:hover:bg-neutral-dark transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-accent-dark" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ------------------------------------------------------ */}
      {/* MOBILE SLIDE-IN MENU OUTSIDE NAV TO REMOVE TRANSPARENCY */}
      {/* ------------------------------------------------------ */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-neutral-surface-dark shadow-2xl z-[60] transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 dark:border-neutral-dark">
          <span className="text-lg font-semibold text-neutral-text dark:text-neutral-text-dark">
            Menu
          </span>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-neutral-light dark:hover:bg-neutral-dark transition"
          >
            <X className="w-6 h-6 text-neutral-text dark:text-neutral-text-dark" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-base font-medium text-neutral-text dark:text-neutral-text-dark border-b border-gray-200 dark:border-neutral-dark hover:text-primary dark:hover:text-primary-dark transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}


