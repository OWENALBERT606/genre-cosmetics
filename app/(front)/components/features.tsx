'use client';

import { Award, Sparkles, Heart, Leaf } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Natural & Pure',
    description: 'Premium ingredients formulated with care and precision',
  },
  {
    icon: Heart,
    title: 'Long-Lasting Results',
    description: 'Dermatologically tested for lasting beauty benefits',
  },
  {
    icon: Sparkles,
    title: 'Handcrafted With Care',
    description: 'Every product made with attention to detail',
  },
  {
    icon: Award,
    title: 'Cruelty-Free & Safe',
    description: 'Ethically sourced without harmful chemicals',
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Icon className="text-accent" size={28} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
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
