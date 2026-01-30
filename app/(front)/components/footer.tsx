'use client';

import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14">
                <img
                  src="/WhatsApp Image 2026-01-28 at 11.49.52 (2).jpeg"
                  alt="Genre Cosmetics Limited"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-lg">Genre</p>
                <p className="text-sm text-white/80">Cosmetics Limited</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Inspired by beauty. Science-backed skincare and wellness solutions for your radiant future.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#why-genre" className="text-white/80 hover:text-white transition-colors">
                  Why Genre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info - UPDATED */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  P.O. Box 860863<br />
                  Kireka - Kampala
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href="tel:+256700607175"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +256 700 607 175
                  </a>
                  <a
                    href="tel:+256792554189"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +256 792 554 189
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:genrecosmetics@gmail.com"
                  className="text-white/80 hover:text-white transition-colors break-all"
                >
                  genrecosmetics@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            <p className="text-sm text-white/80 pt-4">
              Get exclusive offers and beauty tips on our social channels
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom footer */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <p>
            &copy; {currentYear} Genre Cosmetics Limited. All rights reserved. Inspired by beauty.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center font-bold"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}