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

      // Add shadow/background on scroll
      setScrolled(currentScrollY > 20);

      // Hide navbar on scroll down, show on scroll up
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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        scrolled
          ? "bg-white/95 dark:bg-neutral-surface-dark/95 backdrop-blur-sm shadow-lg"
          : "bg-white dark:bg-neutral-surface-dark"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-light dark:hover:bg-neutral-dark transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-neutral-text dark:text-neutral-text-dark" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-text dark:text-neutral-text-dark" />
            )}
          </button>

          {/* Logo */}
          <img
            src={isDark ? "/logo.png" : "/logo-black.png"}
            alt="Asia Trading Export Logo"
            className="h-8 md:h-10 object-contain transition-opacity duration-300"
          />

          {/* Desktop Links */}
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-surface-dark shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-4 text-base font-medium text-neutral-text dark:text-neutral-text-dark hover:text-primary dark:hover:text-primary-dark hover:translate-x-2 transition-all duration-200 border-b border-neutral-border dark:border-neutral-border-dark"
              style={{
                animation: isOpen
                  ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                  : "none",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: -1 }}
        />
      )}
    </nav>
  );
}
