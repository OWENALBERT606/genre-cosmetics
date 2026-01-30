'use client';

import { Heart, ShoppingCart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const womensProducts = [
  {
    id: 1,
    name: 'Detangling Hair Spray',
    category: 'Hair Care',
    rating: 4.5,
    price: '$5.00 - $10.00',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Anti-Aging Face Cream',
    category: 'Skin Care',
    rating: 4.8,
    price: '$5.00 - $10.00',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Moisturizing Curl Activator',
    category: 'Hair Care',
    rating: 5,
    price: '$11.00',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Face Moisturizer & Face Wash',
    category: 'Skin Care',
    rating: 4.7,
    price: '$11.05',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
  },
  {
    id: 5,
    name: 'Anti-Wrinkle Retinol Serum',
    category: 'Skin Care',
    rating: 5,
    price: '$5.00',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
  },
  {
    id: 6,
    name: 'Moisture Filler Day Night',
    category: 'Skin Care',
    rating: 5,
    price: '$3.00 - $9.00',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
  },
];

export function WomensCollection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleProducts, setVisibleProducts] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

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

    const items = containerRef.current?.querySelectorAll('[data-product]');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="womens" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">Women's Collection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover our curated selection of skincare and beauty products designed for women
          </p>
        </div>

        {/* Products Grid */}
        <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {womensProducts.map((product, index) => (
            <div
              key={product.id}
              data-product
              data-id={product.id}
              className={`group relative transition-all duration-500 ${
                visibleProducts.includes(product.id) ? 'animate-slideUp opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product card */}
              <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-lg">
                      {product.category}
                    </span>
                  </div>

                  {/* Wishlist button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-all duration-300"
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      size={20}
                      className={`transition-colors ${
                        wishlist.includes(product.id)
                          ? 'fill-rose-500 text-rose-500'
                          : 'text-slate-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(product.rating) ? 'text-amber-400' : 'text-slate-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.rating})</span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="font-semibold text-primary text-sm">{product.price}</span>
                    <button
                      className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-16 animate-slideUp">
          <button className="px-10 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
            View All Women Products
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
