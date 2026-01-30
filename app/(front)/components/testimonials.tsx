'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'Genre Cosmetics has completely transformed my skincare routine. The medicated formulas are gentle yet effective.',
    author: 'Asha Malik',
    role: 'Beauty Enthusiast',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'I love how the supplements work together with the skincare products. Noticeable results in just weeks!',
    author: 'Sarah Chen',
    role: 'Wellness Coach',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'The quality is exceptional. This is truly luxury skincare at an accessible price. Highly recommended!',
    author: 'Emma Thompson',
    role: 'Skincare Expert',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6 text-balance">
            What People Are Saying About Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="mb-6">
                <p className="text-muted-foreground leading-relaxed italic">
                  {'"'}
                  {testimonial.quote}
                  {'"'}
                </p>
              </blockquote>

              <div>
                <p className="font-semibold text-secondary">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
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
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
