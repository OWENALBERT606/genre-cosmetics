'use client';

import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

const reasons = [
  'Medicated & cosmetic-grade skincare with proven results',
  'Premium quality health supplements for wellness',
  'Science-backed formulations using approved ingredients',
  'Holistic beauty and wellness solutions for your lifestyle',
  'Customer safety and satisfaction as our first priority',
  'Expert personalized guidance and support',
];

export function WhyGenre() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
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
    <section
      id="why-genre"
      className="relative py-16 sm:py-24 bg-background overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className={`space-y-8 ${isInView ? 'animate-slideIn' : 'opacity-0'}`}>
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Why Choose Genre
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-secondary leading-tight text-balance">
                Beauty That Goes <span className="text-primary">Beyond Surface</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Genre Cosmetics is committed to delivering effective skincare and health supplements that promote confidence, wellness, and lasting beauty. We combine innovation with integrity.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-lg bg-white/50 hover:bg-white transition-all duration-300 transform hover:translate-x-2 ${
                    isInView ? 'animate-slideUp opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent-2 flex items-center justify-center mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent hover:from-primary/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Quality Assured</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/10 to-transparent hover:from-accent/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-accent">6</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Core Services</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent-2/10 to-transparent hover:from-accent-2/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-accent-2">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className={`relative h-96 sm:h-full flex items-center justify-center ${isInView ? 'animate-slideRight' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-2/20 to-accent/20 rounded-3xl transform -rotate-6 hover:rotate-0 transition-transform duration-500" />

            <div className="relative z-10 space-y-8 p-8">
              {/* Feature cards */}
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                    🧪
                  </div>
                  <h3 className="font-bold text-secondary mb-2">Science-Backed</h3>
                  <p className="text-sm text-muted-foreground">Formulated with tested, approved ingredients for maximum efficacy</p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105" style={{ marginLeft: '2rem' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                    🛡️
                  </div>
                  <h3 className="font-bold text-secondary mb-2">Safe & Trusted</h3>
                  <p className="text-sm text-muted-foreground">Strict quality control with full regulatory compliance</p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-2 to-accent-2/60 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                    💡
                  </div>
                  <h3 className="font-bold text-secondary mb-2">Holistic Approach</h3>
                  <p className="text-sm text-muted-foreground">Beauty that starts from within with complete wellness solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }
        .animate-slideRight {
          animation: slideRight 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
