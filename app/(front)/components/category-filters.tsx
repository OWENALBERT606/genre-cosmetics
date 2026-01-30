'use client';

import { useState } from 'react';

const categories = [
  { id: 1, name: 'All Products', icon: '🎁' },
  { id: 2, name: 'Skin Care', icon: '✨' },
  { id: 3, name: 'Body Care', icon: '💆' },
  { id: 4, name: 'Hair Care', icon: '💇' },
];

export function CategoryFilters() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <section className="py-8 bg-background sticky top-16 z-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-muted text-secondary hover:bg-muted/80'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
