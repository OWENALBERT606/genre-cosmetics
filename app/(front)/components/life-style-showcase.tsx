'use client';

export function LifestyleShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <div className="text-center mb-16 animate-slideUp">
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Experience Luxury
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 text-balance">
            Indulge In Everyday Aromatic Luxury
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your daily beauty routine into moments of pure indulgence with our premium collections.
          </p>
        </div>

        {/* Mixed grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Large featured image - Left */}
          <div className="md:col-span-1 lg:row-span-2 animate-slideUp">
            <div className="h-80 md:h-96 lg:h-[600px] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/lifestyle-1.jpg"
                alt="Luxury beauty lifestyle"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content cards - Top right */}
          <div className="md:col-span-1 lg:col-span-2 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="h-80 md:h-96 bg-card border border-border rounded-xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-secondary">Soothing Wax Melts & Candles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the perfect blend of natural wax and premium fragrance oils, handcrafted for a luxurious aromatherapy experience in your home.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent/10 text-accent text-sm rounded-full font-medium">Long Lasting Fragrance</span>
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium">Hand Poured With Care</span>
              </div>
            </div>
          </div>

          {/* Product image - Bottom right */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="h-72 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/product-showcase.jpg"
                  alt="Premium skincare products"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-secondary">Premium Quality</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every product is crafted with the finest ingredients and undergoes rigorous quality testing.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">100% Natural Ingredients</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">Handcrafted With Care</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Cruelty-Free & Safe</span>
                  </div>
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
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
