'use client';

import { useEffect, useRef, useState } from 'react';

export function MixedGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = containerRef.current?.querySelectorAll('[data-grid-item]');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const gridItems = [
    {
      id: 1,
      type: 'large',
      title: 'Body Lotion',
      category: 'BODYCARE',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=500&fit=crop',
    },
    {
      id: 2,
      type: 'small',
      title: 'Moisturizer',
      category: 'SMOOTH',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
    },
    {
      id: 3,
      type: 'small',
      title: 'Face Scrub',
      category: 'ORGANIC',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
    },
    {
      id: 4,
      type: 'small',
      title: 'Tooth Paste',
      category: 'CHEMICAL FREE',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
    },
    {
      id: 5,
      type: 'large-right',
      title: 'Bathing Salts',
      category: 'NATURAL',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=500&fit=crop',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Indulge In Everyday Luxury
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Transform your daily routine with our curated selection of premium skincare and wellness products
          </p>
        </div>

        {/* Mixed Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {gridItems.map((item, index) => (
            <div
              key={item.id}
              data-grid-item
              data-id={item.id}
              className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                visibleItems.includes(item.id) ? 'animate-slideUp opacity-100' : 'opacity-0'
              } ${
                item.type === 'large' || item.type === 'large-right'
                  ? 'lg:row-span-2 sm:col-span-2 lg:col-span-1'
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-xs font-semibold text-white/80 mb-2">{item.category}</p>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{item.title}</h3>
                <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 w-fit">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Browse all */}
        <div className="text-center mt-16 animate-slideUp">
          <button className="px-10 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
            Browse All Products
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
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
