'use client';

import { useEffect, useRef, useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Acne Control Serum',
    category: 'Skincare',
    price: '45,000 UGX',
    description: 'Medicated serum targeting acne and pimples with advanced actives',
    gradient: 'from-blue-400 to-primary',
    icon: '💧',
  },
  {
    id: 2,
    name: 'Dark Spot Eraser',
    category: 'Skincare',
    price: '52,000 UGX',
    description: 'Specialized treatment for hyperpigmentation and dark spots',
    gradient: 'from-yellow-300 to-accent',
    icon: '✨',
  },
  {
    id: 3,
    name: 'Skin Repair Cream',
    category: 'Treatment',
    price: '58,000 UGX',
    description: 'Rich cream for damaged skin repair and texture improvement',
    gradient: 'from-pink-300 to-red-300',
    icon: '🌺',
  },
  {
    id: 4,
    name: 'Beauty Glow Capsules',
    category: 'Supplements',
    price: '75,000 UGX',
    description: 'Premium supplement for skin luminosity and hair health',
    gradient: 'from-green-300 to-emerald-400',
    icon: '💚',
  },
  {
    id: 5,
    name: 'Collagen Complex',
    category: 'Supplements',
    price: '89,000 UGX',
    description: 'Advanced collagen formula for skin elasticity and repair',
    gradient: 'from-purple-300 to-pink-300',
    icon: '👑',
  },
  {
    id: 6,
    name: 'Immunity Boost Pack',
    category: 'Supplements',
    price: '65,000 UGX',
    description: 'Comprehensive wellness supplement for immune health',
    gradient: 'from-orange-300 to-red-300',
    icon: '⚡',
  },
  {
    id: 7,
    name: 'Hydration Moisturizer',
    category: 'Skincare',
    price: '48,000 UGX',
    description: 'Deep hydration for dry and sensitive skin types',
    gradient: 'from-cyan-300 to-blue-400',
    icon: '💧',
  },
  {
    id: 8,
    name: 'Anti-Inflammatory Mask',
    category: 'Treatment',
    price: '42,000 UGX',
    description: 'Soothing mask to reduce inflammation and irritation',
    gradient: 'from-indigo-300 to-purple-400',
    icon: '🎭',
  },
];

export function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [visibleProducts, setVisibleProducts] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleProducts((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = containerRef.current?.querySelectorAll('[data-product-id]');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="products" className="relative py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20 animate-slideUp">
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Curated Collection
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6 text-balance">
            Our Most Loved Products
          </h2>
        </div>

        {/* Mixed grid products layout */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {products.map((product, index) => {
            const isVisible = visibleProducts.includes(product.id);

            return (
              <div
                key={product.id}
                data-product-id={product.id}
                data-id={product.id}
                className={`group relative overflow-hidden rounded-xl transition-all duration-500 transform ${
                  isVisible ? 'animate-slideUp opacity-100' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Card content - Elegant minimal design */}
                <div className="relative z-10 p-6 h-full flex flex-col bg-card shadow-md group-hover:shadow-xl transition-all duration-300 rounded-xl border border-border">
                  {/* Icon and category */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  {/* Product info */}
                  <h3 className="text-base font-semibold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price and button */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-semibold text-primary text-sm">{product.price}</span>
                    <button
                      className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 sm:mt-20 text-center animate-slideUp">
          <button className="px-10 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
            View All Products
          </button>
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
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
