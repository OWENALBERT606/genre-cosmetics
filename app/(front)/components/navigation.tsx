'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Text removed, size increased */}
          <div className="flex items-center animate-fadeIn">
            {/* Increased dimensions: w-20 (80px) mobile, sm:w-28 (112px) desktop */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 relative">
              <img
                src="/WhatsApp Image 2026-01-28 at 11.49.52 (2).jpeg"
                alt="Genre Cosmetics Limited"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/why"
              className="text-foreground hover:text-primary transition-colors"
            >
              Why Genre
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slideDown">
            <Link
              href="/services"
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
            >
              Services
            </Link>
            <Link
              href="/products"
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
            >
              Products
            </Link>
            <button
              onClick={() => scrollToSection('why-genre')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
            >
              Why Genre
            </button>
            <Link
              href="/contact"
              className="block w-full text-left px-4 py-2 mt-2 bg-primary text-primary-foreground rounded-lg transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
