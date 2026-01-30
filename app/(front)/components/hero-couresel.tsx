'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselSlides = [
  {
    id: 1,
    title: 'Elevate Your Skin',
    subtitle: 'Medicated Skincare for Every Complexion',
    description: 'Science-backed formulations designed for radiant, healthy skin',
    cta: 'Shop Women Collection',
    color: 'from-rose-100 to-pink-50',
    textColor: 'text-slate-800',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Men\'s Grooming',
    subtitle: 'Premium Care for Modern Men',
    description: 'Advanced skincare and grooming solutions tailored for men',
    cta: 'Explore Men\'s Line',
    color: 'from-slate-600 to-slate-800',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Wellness Supplements',
    subtitle: 'Beauty from Within',
    description: 'Premium health supplements for glowing skin and vitality',
    cta: 'Discover Supplements',
    color: 'from-amber-100 to-orange-50',
    textColor: 'text-slate-800',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=600&fit=crop',
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % carouselSlides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlay(false);
  };

  const slide = carouselSlides[current];

  return (
    <div
      className="relative w-full h-screen bg-background overflow-hidden pt-16"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Carousel slides */}
      {carouselSlides.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pt-16 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`h-full bg-gradient-to-r ${item.color} flex items-center`}>
            {/* Left content */}
            <div className="w-full md:w-1/2 px-8 sm:px-12 py-12 flex flex-col justify-center">
              <div className={`space-y-6 ${item.textColor}`}>
                <div className="space-y-2">
                  <p className="text-sm font-semibold tracking-widest uppercase opacity-75">
                    NEW COLLECTION
                  </p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                    {item.title}
                  </h1>
                </div>

                <p className="text-lg opacity-90 max-w-md leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4">
                  <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                    {item.cta}
                  </button>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="hidden md:flex w-1/2 h-full items-center justify-center px-8">
              <div className="relative w-full h-96 animate-float">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="text-white" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-white' : 'w-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
