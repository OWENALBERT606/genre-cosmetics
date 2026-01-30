'use client';

import { useEffect, useRef, useState } from 'react';

export function FeaturedProduct() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Product Image */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=600&fit=crop"
                alt="Featured Product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Product Details */}
          <div className={`space-y-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div>
              <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
                Pure and Simple
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-secondary leading-tight mb-4">
                Deeply Nourishing Hair Serum
              </h2>
              <p className="text-lg text-muted-foreground">
                For Glowing & Healthy Hair
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Ut tempor sem leo, a ultricies quam aliquam eget. Vivamus commodo scelerisq ue velit, quis viverra velit bibendum vel. Phasell sus id leo et vestibulum.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                    🍌
                  </div>
                  <span className="font-semibold text-secondary">Strong & Smooth</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                    🌍
                  </div>
                  <span className="font-semibold text-secondary">Sulfate-free</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                    🚫
                  </div>
                  <span className="font-semibold text-secondary">Paraben-free</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                    🌱
                  </div>
                  <span className="font-semibold text-secondary">100% Vegan</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-6">
              <button className="px-10 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Shop Lilac
              </button>
              <button className="px-10 py-3 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold transition-all duration-300">
                Chat Us Anytime
              </button>
            </div>

            {/* Contact */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Contact Support</p>
              <p className="text-lg font-semibold text-secondary">+00 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
