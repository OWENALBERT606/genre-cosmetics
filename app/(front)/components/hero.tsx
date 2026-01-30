'use client';

import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const elements = containerRef.current.querySelectorAll('[data-parallax]');
      elements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
        (element as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background pt-20 overflow-hidden">
      {/* Subtle background elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        data-parallax="0.3"
      />
      <div
        className="absolute -bottom-32 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        data-parallax="0.2"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left content - Text focus */}
          <div className="space-y-8 animate-slideUp flex flex-col justify-center">
            <div className="space-y-4">
              <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase">
                Elevate Your Beauty
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary leading-tight text-balance">
                Luxurious Skincare & Wellness
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed font-light">
                Discover medicated cosmetics and premium supplements designed to transform your beauty routine. Science meets luxury in every product.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('products');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg inline-flex items-center gap-2"
              >
                Shop Collection
                <span className="text-lg">→</span>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 border border-primary/30 text-secondary hover:border-primary/60 rounded-lg font-semibold transition-all duration-300"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Right side - Logo showcase with elegant frame */}
          <div className="relative h-96 sm:h-full flex items-center justify-center animate-slideDown">
            <div className="w-full max-w-md h-96 relative group">
              {/* Elegant frame effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl transform -rotate-2 group-hover:rotate-1 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform rotate-1 group-hover:-rotate-1 transition-transform duration-500" />

              {/* Logo container */}
              <div className="relative z-10 h-full flex items-center justify-center p-8 bg-white rounded-2xl">
                <img
                  src="/images/genre-logo.jpg"
                  alt="Genre Cosmetics Limited - Medicated Skincare"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
          <ChevronDown className="text-primary" size={28} />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.2s both;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}
