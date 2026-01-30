'use client';

import { useEffect, useRef, useState } from 'react';
import { Heart, Droplet, Pill, Sparkles, Users, Shield } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Droplet,
    title: 'Medicated Skincare',
    description: 'Dermatology-inspired products formulated to treat acne, dark spots, and uneven skin tone with safe, effective results.',
    color: 'bg-primary',
    delay: '0s',
  },
  {
    id: 2,
    icon: Heart,
    title: 'Skin Treatment & Repair',
    description: 'Advanced repair solutions focusing on inflammation reduction, texture improvement, and natural glow restoration.',
    color: 'bg-accent-2',
    delay: '0.1s',
  },
  {
    id: 3,
    icon: Pill,
    title: 'Health Supplements',
    description: 'Premium health and beauty supplements supporting skin, hair, nails, immunity, and overall wellness from within.',
    color: 'bg-accent',
    delay: '0.2s',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Beauty-from-Within',
    description: 'Holistic approach combining skincare with supplements for stronger, longer-lasting results and natural beauty.',
    color: 'bg-secondary',
    delay: '0.3s',
  },
  {
    id: 5,
    icon: Users,
    title: 'Personalized Guidance',
    description: 'Expert consultation to help you choose the right products and routines for maximum benefit and safety.',
    color: 'bg-primary',
    delay: '0.4s',
  },
  {
    id: 6,
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Strict quality control with safe, approved ingredients, hygienic processes, and full regulatory compliance.',
    color: 'bg-accent-2',
    delay: '0.5s',
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleCards((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('[data-id]');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20 animate-slideUp">
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6 text-balance">
            Complete Wellness Solutions
          </h2>
        </div>

        {/* Services grid */}
        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(service.id);

            return (
              <div
                key={service.id}
                data-id={service.id}
                className={`group relative p-8 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-500 ${
                  isVisible ? 'animate-slideUp opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: service.delay }}
              >
                <div className="relative z-10 space-y-4">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-white`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-base font-semibold text-secondary">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
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
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
