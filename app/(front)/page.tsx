// 'use client';

// import { useState, useEffect } from 'react';
// import { ArrowRight, Star, ShieldCheck, Leaf, FlaskConical, ChevronLeft, ChevronRight, ShoppingBag, Sparkles, Heart, Zap, Users, Check } from 'lucide-react';
// import Link from 'next/link';
// import { Navigation } from './components/navigation';

// // Hero Slides Data
// const slides = [
//   {
//     id: 1,
//     image: '/2150331705.jpg',
//     subtitle: 'INSPIRED BY BEAUTY',
//     title: 'Science-Backed Skincare',
//     description: 'Experience the perfect fusion of pharmaceutical expertise and luxury cosmetics for visible, lasting results.',
//     cta: 'Shop Collection',
//     link: '/products'
//   },
//   {
//     id: 2,
//     image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop',
//     subtitle: 'RESTORE & REPAIR',
//     title: 'Heal Your Natural Barrier',
//     description: 'Advanced formulations designed to treat acne, hyperpigmentation, and sensitivity at the source.',
//     cta: 'View Treatments',
//     link: '/services'
//   },
//   {
//     id: 3,
//     image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
//     subtitle: 'BEAUTY FROM WITHIN',
//     title: 'Wellness Supplements',
//     description: 'Radiance starts from the inside. Discover our range of collagen and immunity-boosting supplements.',
//     cta: 'Explore Wellness',
//     link: '/products'
//   }
// ];

// // Featured Products Data
// const featuredProducts = [
//   {
//     id: 1,
//     name: 'Acne Control Serum',
//     price: '45,000 UGX',
//     image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop',
//     tag: 'Best Seller',
//     description: 'Salicylic acid & niacinamide blend'
//   },
//   {
//     id: 2,
//     name: 'Beauty Glow Capsules',
//     price: '75,000 UGX',
//     image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop',
//     tag: 'Trending',
//     description: 'Marine collagen & biotin'
//   },
//   {
//     id: 3,
//     name: 'Dark Spot Eraser',
//     price: '52,000 UGX',
//     image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop',
//     tag: 'New',
//     description: 'Vitamin C & licorice extract'
//   },
//   {
//     id: 4,
//     name: 'Hydration Moisturizer',
//     price: '48,000 UGX',
//     image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1887&auto=format&fit=crop',
//     tag: 'Popular',
//     description: 'Hyaluronic acid & ceramides'
//   }
// ];

// // Testimonials Data
// const testimonials = [
//   {
//     id: 1,
//     author: 'Amina K.',
//     rating: 5,
//     text: 'My skin has never felt better! The results are visible within weeks. Highly recommended!',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop'
//   },
//   {
//     id: 2,
//     author: 'Zainab M.',
//     rating: 5,
//     text: 'Finally found products that work for my sensitive African skin. No irritation, only glow!',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'
//   },
//   {
//     id: 3,
//     author: 'Nia T.',
//     rating: 5,
//     text: 'The difference in my skin texture and tone is incredible. Worth every penny!',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop'
//   }
// ];

// // Skincare Routine Data
// const routines = [
//   {
//     id: 1,
//     step: '1. Cleanse',
//     title: 'Gentle Cleanser',
//     description: 'Remove impurities without disrupting skin barrier',
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1887&auto=format&fit=crop'
//   },
//   {
//     id: 2,
//     step: '2. Tone',
//     title: 'Balancing Toner',
//     description: 'Restore pH balance and prepare skin for serums',
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1887&auto=format&fit=crop'
//   },
//   {
//     id: 3,
//     step: '3. Treat',
//     title: 'Active Serum',
//     description: 'Target specific concerns with concentrated formulas',
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1887&auto=format&fit=crop'
//   },
//   {
//     id: 4,
//     step: '4. Moisturize',
//     title: 'Luxury Moisturizer',
//     description: 'Lock in hydration with protective barrier',
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1887&auto=format&fit=crop'
//   }
// ];

// // Key Ingredients
// const ingredients = [
//   {
//     id: 1,
//     name: 'Vitamin C',
//     benefit: 'Brightening & Antioxidant',
//     image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1080&auto=format&fit=crop'
//   },
//   {
//     id: 2,
//     name: 'Hyaluronic Acid',
//     benefit: 'Deep Hydration',
//     image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1080&auto=format&fit=crop'
//   },
//   {
//     id: 3,
//     name: 'Niacinamide',
//     benefit: 'Pore Control & Strength',
//     image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1080&auto=format&fit=crop'
//   },
//   {
//     id: 4,
//     name: 'Retinol',
//     benefit: 'Anti-Aging & Renewal',
//     image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1080&auto=format&fit=crop'
//   }
// ];

// export default function HomePage() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// useEffect(() => {
//   let interval: ReturnType<typeof setInterval> | undefined;

//   if (isAutoPlaying) {
//     interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//   }

//   return () => {
//     if (interval) clearInterval(interval);
//   };
// }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <main className="min-h-screen bg-white">
//       <Navigation />

//       {/* ---------------- HERO CAROUSEL ---------------- */}
//       <section className="relative h-screen w-full overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//           >
//             {/* Background Image */}
//             <div
//               className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear transform scale-105"
//               style={{
//                 backgroundImage: `url('${slide.image}')`,
//                 transform: index === currentSlide ? 'scale(110%)' : 'scale(100%)' // Subtle zoom effect
//               }}
//             />

//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-[#003B4F]/90 via-[#003B4F]/40 to-transparent" />

//             {/* Content */}
//             <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
//               <div className="max-w-2xl text-white pt-20">
//                 <div className={`overflow-hidden mb-4 ${index === currentSlide ? 'animate-slideUp' : ''}`}>
//                   <span className="inline-block py-1 px-3 border border-[#2AB09C] text-[#2AB09C] text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-sm bg-black/20 rounded-full">
//                     {slide.subtitle}
//                   </span>
//                 </div>

//                 <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${index === currentSlide ? 'animate-slideUp delay-100' : 'opacity-0'}`}>
//                   {slide.title}
//                 </h1>

//                 <p className={`text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed max-w-lg ${index === currentSlide ? 'animate-slideUp delay-200' : 'opacity-0'}`}>
//                   {slide.description}
//                 </p>

//                 <div className={`${index === currentSlide ? 'animate-slideUp delay-300' : 'opacity-0'}`}>
//                   <Link
//                     href={slide.link}
//                     className="group inline-flex items-center gap-3 bg-[#2AB09C] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#003B4F] transition-all duration-300"
//                   >
//                     {slide.cta}
//                     <ArrowRight className="group-hover:translate-x-1 transition-transform" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Carousel Controls */}
//         <div className="absolute bottom-8 right-8 z-20 flex gap-4">
//           <button onClick={prevSlide} className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#003B4F] transition-all backdrop-blur-sm">
//             <ChevronLeft size={24} />
//           </button>
//           <button onClick={nextSlide} className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#003B4F] transition-all backdrop-blur-sm">
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => { setIsAutoPlaying(false); setCurrentSlide(idx); }}
//               className={`h-1 transition-all duration-300 rounded-full ${
//                 idx === currentSlide ? 'w-8 bg-[#2AB09C]' : 'w-2 bg-white/50 hover:bg-white'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ---------------- VALUE PROPS ---------------- */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
//               <div className="w-12 h-12 bg-[#003B4F]/10 rounded-xl flex items-center justify-center text-[#003B4F] mb-6">
//                 <FlaskConical size={24} />
//               </div>
//               <h3 className="text-xl font-bold text-[#003B4F] mb-3">Medicated Formula</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Clinically proven ingredients blended with botanical extracts for effective, safe results.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
//               <div className="w-12 h-12 bg-[#2AB09C]/10 rounded-xl flex items-center justify-center text-[#2AB09C] mb-6">
//                 <Leaf size={24} />
//               </div>
//               <h3 className="text-xl font-bold text-[#003B4F] mb-3">Premium Ingredients</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Sourced from the finest origins, ensuring purity and potency in every drop and capsule.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
//               <div className="w-12 h-12 bg-[#003B4F]/10 rounded-xl flex items-center justify-center text-[#003B4F] mb-6">
//                 <ShieldCheck size={24} />
//               </div>
//               <h3 className="text-xl font-bold text-[#003B4F] mb-3">Dermatologist Tested</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Rigorously tested for safety and efficacy on diverse skin types, specifically African skin.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- BEST SELLERS ---------------- */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-end mb-12">
//             <div>
//               <h2 className="text-4xl font-bold text-[#003B4F] mb-2">Best Sellers</h2>
//               <div className="h-1 w-20 bg-[#2AB09C] rounded-full" />
//             </div>
//             <Link href="/products" className="hidden md:flex items-center gap-2 text-[#2AB09C] font-semibold hover:gap-3 transition-all">
//               View All Products <ArrowRight size={20} />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {featuredProducts.map((product, idx) => (
//               <div key={product.id} className="group cursor-pointer opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}>
//                 <div className="relative h-80 overflow-hidden rounded-3xl bg-gray-100 mb-4">
//                   <img
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#003B4F] rounded-full">
//                       {product.tag}
//                     </span>
//                   </div>
//                   {/* Quick Action Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#003B4F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-6">
//                     <button className="w-full bg-[#2AB09C] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-[#003B4F] transition-all shadow-lg">
//                       <ShoppingBag size={18} /> Quick Add
//                     </button>
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold text-[#003B4F] group-hover:text-[#2AB09C] transition-colors">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-2">{product.description}</p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex text-yellow-400 text-xs">
//                     {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
//                   </div>
//                   <p className="font-bold text-[#003B4F]">{product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 text-center md:hidden">
//             <Link href="/products" className="inline-flex items-center gap-2 text-[#2AB09C] font-semibold">
//               View All Products <ArrowRight size={20} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- SKINCARE ROUTINE GUIDE ---------------- */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-[#003B4F] mb-4">The Perfect Skincare Routine</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">Master your glow with our 4-step routine designed for lasting results</p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {routines.map((routine, idx) => (
//               <div key={routine.id} className="text-center group cursor-pointer opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}>
//                 <div className="relative h-64 rounded-2xl overflow-hidden mb-6 group-hover:shadow-xl transition-shadow">
//                   <img 
//                     src={routine.image || "/placeholder.svg"}
//                     alt={routine.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#003B4F]/60 to-transparent flex items-end justify-center pb-6">
//                     <span className="text-white text-sm font-bold">{routine.step}</span>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold text-[#003B4F] mb-2">{routine.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{routine.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- KEY INGREDIENTS SHOWCASE ---------------- */}
//       <section className="py-24 bg-gradient-to-br from-[#003B4F]/5 to-[#2AB09C]/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-[#003B4F] mb-4">Powerhouse Ingredients</h2>
//             <p className="text-lg text-gray-600">Science-backed actives that deliver visible transformations</p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {ingredients.map((ingredient) => (
//               <div 
//                 key={ingredient.id} 
//                 className="group cursor-pointer"
//                 style={{
//                   animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
//                   animationDelay: `${ingredient.id * 100}ms`
//                 }}
//               >
//                 <div className="relative h-48 rounded-2xl overflow-hidden mb-4 group-hover:shadow-2xl transition-all duration-300">
//                   <img 
//                     src={ingredient.image || "/placeholder.svg"}
//                     alt={ingredient.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                     <Sparkles className="text-white" size={32} />
//                   </div>
//                 </div>
//                 <h3 className="font-bold text-[#003B4F] mb-1">{ingredient.name}</h3>
//                 <p className="text-sm text-gray-600">{ingredient.benefit}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- CUSTOMER TESTIMONIALS ---------------- */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-[#003B4F] mb-4">Trusted by Thousands</h2>
//             <p className="text-lg text-gray-600">Real stories from real customers</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial) => (
//               <div 
//                 key={testimonial.id} 
//                 className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 opacity-0 animate-fadeInUp"
//                 style={{ animationDelay: `${testimonial.id * 100}ms`, animationFillMode: 'forwards' }}
//               >
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
//                 <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
//                   <img 
//                     src={testimonial.image || "/placeholder.svg"}
//                     alt={testimonial.author}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="font-bold text-[#003B4F]">{testimonial.author}</p>
//                     <p className="text-sm text-gray-500">Verified Customer</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- BEFORE & AFTER RESULTS ---------------- */}
//       <section className="py-24 bg-gradient-to-br from-[#003B4F] to-[#002836]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">Real Results. Real Stories.</h2>
//             <p className="text-lg text-gray-200">See the transformation in just 8 weeks</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((_, idx) => (
//               <div key={idx} className="group cursor-pointer opacity-0 animate-fadeInUp" style={{ animationDelay: `${(idx + 1) * 100}ms`, animationFillMode: 'forwards' }}>
//                 <div className="relative rounded-2xl overflow-hidden h-96 bg-gray-800 shadow-2xl group-hover:shadow-3xl transition-shadow">
//                   <div className="absolute inset-0 flex">
//                     <div className="w-1/2 overflow-hidden">
//                       <img 
//                         src={`https://images.unsplash.com/photo-1607631814074-e51df1bdc82f?q=80&w=1000&auto=format&fit=crop`}
//                         alt="Before"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="w-1/2 overflow-hidden">
//                       <img 
//                         src={`https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1000&auto=format&fit=crop`}
//                         alt="After"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-[#003B4F]">
//                       8 WEEKS
//                     </div>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
//                     <p className="font-bold mb-1">Acne Control Program</p>
//                     <p className="text-sm text-gray-200">84% clearer skin in 8 weeks</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- WHY CHOOSE US DETAILED ---------------- */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-[#003B4F] mb-4">Why Choose Genre</h2>
//             <p className="text-lg text-gray-600">The difference is in the details</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="bg-gradient-to-br from-[#2AB09C]/10 to-transparent rounded-2xl p-8 border border-[#2AB09C]/20 hover:border-[#2AB09C]/50 transition-colors">
//               <div className="w-12 h-12 bg-[#2AB09C] rounded-xl flex items-center justify-center text-white mb-4">
//                 <Zap size={24} />
//               </div>
//               <h3 className="text-lg font-bold text-[#003B4F] mb-2">Fast Results</h3>
//               <p className="text-gray-600 text-sm">See visible improvements within 2-4 weeks</p>
//             </div>

//             <div className="bg-gradient-to-br from-[#003B4F]/10 to-transparent rounded-2xl p-8 border border-[#003B4F]/20 hover:border-[#003B4F]/50 transition-colors">
//               <div className="w-12 h-12 bg-[#003B4F] rounded-xl flex items-center justify-center text-white mb-4">
//                 <ShieldCheck size={24} />
//               </div>
//               <h3 className="text-lg font-bold text-[#003B4F] mb-2">Dermatologist Tested</h3>
//               <p className="text-gray-600 text-sm">Certified safe for all skin types, including sensitive</p>
//             </div>

//             <div className="bg-gradient-to-br from-[#2AB09C]/10 to-transparent rounded-2xl p-8 border border-[#2AB09C]/20 hover:border-[#2AB09C]/50 transition-colors">
//               <div className="w-12 h-12 bg-[#2AB09C] rounded-xl flex items-center justify-center text-white mb-4">
//                 <Heart size={24} />
//               </div>
//               <h3 className="text-lg font-bold text-[#003B4F] mb-2">Cruelty-Free</h3>
//               <p className="text-gray-600 text-sm">100% vegan and never tested on animals</p>
//             </div>

//             <div className="bg-gradient-to-br from-[#003B4F]/10 to-transparent rounded-2xl p-8 border border-[#003B4F]/20 hover:border-[#003B4F]/50 transition-colors">
//               <div className="w-12 h-12 bg-[#003B4F] rounded-xl flex items-center justify-center text-white mb-4">
//                 <Users size={24} />
//               </div>
//               <h3 className="text-lg font-bold text-[#003B4F] mb-2">Expert Support</h3>
//               <p className="text-gray-600 text-sm">Free consultation with our skincare specialists</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- PARALLAX BANNER ---------------- */}
//       <section
//         className="relative py-32 bg-fixed bg-center bg-cover"
//         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=1926&auto=format&fit=crop')" }}
//       >
//         <div className="absolute inset-0 bg-[#003B4F]/80" />
//         <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Where Science Meets Beauty
//           </h2>
//           <p className="text-xl text-gray-200 mb-10 font-light leading-relaxed">
//             We don't just cover up imperfections; we treat them. Our holistic approach combines
//             powerful topicals with nutrient-rich supplements to transform your skin from the inside out.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/why"
//               className="px-8 py-3 bg-white text-[#003B4F] rounded-full font-bold hover:bg-gray-100 transition-colors"
//             >
//               Our Philosophy
//             </Link>
//             <Link
//               href="/contact"
//               className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#003B4F] transition-colors"
//             >
//               Book Consultation
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- NEWSLETTER ---------------- */}
//       <section className="py-20 bg-[#2AB09C]">
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Join the Genre Community</h2>
//           <p className="text-white/90 mb-8">
//             Subscribe to receive expert beauty tips, exclusive offers, and early access to new launches.
//           </p>
//           <form className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="flex-1 px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-[#003B4F] outline-none"
//             />
//             <button className="px-8 py-4 bg-[#003B4F] text-white rounded-full font-bold hover:bg-[#002836] transition-colors shadow-lg">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>


//       <style jsx>{`
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-slideUp {
//           animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .delay-100 { animation-delay: 0.1s; }
//         .delay-200 { animation-delay: 0.2s; }
//         .delay-300 { animation-delay: 0.3s; }
//       `}</style>
//     </main>
//   );
// }




'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Star, ShieldCheck, Leaf, FlaskConical, ChevronLeft, ChevronRight, ShoppingBag, Sparkles, Heart, Zap, Users, Check } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';

// Hero Slides Data
const slides = [
  {
    id: 1,
    image: '/2150331705.jpg',
    subtitle: 'INSPIRED BY BEAUTY',
    title: 'Science-Backed Skincare',
    description: 'Experience the perfect fusion of pharmaceutical expertise and luxury cosmetics for visible, lasting results.',
    cta: 'Shop Collection',
    link: '/products'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop',
    subtitle: 'RESTORE & REPAIR',
    title: 'Heal Your Natural Barrier',
    description: 'Advanced formulations designed to treat acne, hyperpigmentation, and sensitivity at the source.',
    cta: 'View Treatments',
    link: '/services'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    subtitle: 'BEAUTY FROM WITHIN',
    title: 'Wellness Supplements',
    description: 'Radiance starts from the inside. Discover our range of collagen and immunity-boosting supplements.',
    cta: 'Explore Wellness',
    link: '/products'
  }
];

// Featured Products Data
const featuredProducts = [
  {
    id: 1,
    name: 'Acne Control Serum',
    price: '45,000 UGX',
    image: '/best/WhatsApp Image 2026-01-24 at 12.14.49.jpeg',
    tag: 'Best Seller',
    description: 'Salicylic acid & niacinamide blend'
  },
  {
    id: 2,
    name: 'Beauty Glow Capsules',
    price: '75,000 UGX',
    image: '/best/WhatsApp Image 2026-01-24 at 12.15.03.jpeg',
    tag: 'Trending',
    description: 'Marine collagen & biotin'
  },
  {
    id: 3,
    name: 'Dark Spot Eraser',
    price: '52,000 UGX',
    image: '/best/WhatsApp Image 2026-01-24 at 12.15.13.jpeg',
    tag: 'New',
    description: 'Vitamin C & licorice extract'
  },
  {
    id: 4,
    name: 'Hydration Moisturizer',
    price: '48,000 UGX',
    image: '/best/WhatsApp Image 2026-01-24 at 12.15.13.jpeg',
    tag: 'Popular',
    description: 'Hyaluronic acid & ceramides'
  }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    author: 'Amina K.',
    rating: 5,
    text: 'My skin has never felt better! The results are visible within weeks. Highly recommended!',
    image: '/best/WhatsApp Image 2026-01-24 at 12.15.13.jpeg'
  },
  {
    id: 2,
    author: 'Zainab M.',
    rating: 5,
    text: 'Finally found products that work for my sensitive African skin. No irritation, only glow!',
    image: '/best/WhatsApp Image 2026-01-24 at 12.15.13.jpeg'
  },
  {
    id: 3,
    author: 'Nia T.',
    rating: 5,
    text: 'The difference in my skin texture and tone is incredible. Worth every penny!',
    image: 'public/best/WhatsApp Image 2026-01-24 at 12.15.13.jpeg'
  }
];

// Skincare Routine Data
const routines = [
  {
    id: 1,
    step: '1. Cleanse',
    title: 'Gentle Cleanser',
    description: 'Remove impurities without disrupting skin barrier',
    image: '/best/WhatsApp Image 2026-01-24 at 12.14.49.jpeg'
  },
  {
    id: 2,
    step: '2. Tone',
    title: 'Balancing Toner',
    description: 'Restore pH balance and prepare skin for serums',
    image: '/best/WhatsApp Image 2026-01-24 at 12.15.03.jpeg'
  },
  {
    id: 3,
    step: '3. Treat',
    title: 'Active Serum',
    description: 'Target specific concerns with concentrated formulas',
    image: '/best/WhatsApp Image 2026-01-24 at 12.15.13.jpeg'
  },
  {
    id: 4,
    step: '4. Moisturize',
    title: 'Luxury Moisturizer',
    description: 'Lock in hydration with protective barrier',
    image: '/best/WhatsApp Image 2026-01-24 at 12.15.13.jpeg'
  }
];

// Key Ingredients
const ingredients = [
  {
    id: 1,
    name: 'Vitamin C',
    benefit: 'Brightening & Antioxidant',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1080&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Hyaluronic Acid',
    benefit: 'Deep Hydration',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1080&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Niacinamide',
    benefit: 'Pore Control & Strength',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1080&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Retinol',
    benefit: 'Anti-Aging & Renewal',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1080&auto=format&fit=crop'
  }
];

// Lifestyle & Cosmetics Products
const lifestyleProducts = [
  {
    id: 1,
    title: 'Natural Glow Palette',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Velvet Lip Collection',
    category: 'Lip Care',
    image: '/img-20220921-wa0028-jpg.jpg'
  },
  {
    id: 3,
    title: 'Luxury Brush Set',
    category: 'Tools',
    image: '/71FJHo+xdjL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 4,
    title: 'Radiance Foundation',
    category: 'Base',
    image: '/2150331705.jpg'
  },
  {
    id: 5,
    title: 'Eyeliner Perfection',
    category: 'Eyes',
    image: '/images.jpg'
  },
  {
    id: 6,
    title: 'Sunscreen Shield',
    category: 'Protection',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop'
  }
];

// Product Gallery
const productGallery = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    title: 'Complete Beauty Line'
  },
  {
    id: 2,
    image: '/img-20220921-wa0028-jpg.jpg',
    title: 'Premium Serums'
  },
  {
    id: 3,
    image: '/1425019_US_Group_01_600x600.avif',
    title: 'Skincare Essentials'
  },
  {
    id: 4,
    image: '/71FJHo+xdjL._AC_UF1000,1000_QL80_.jpg',
    title: 'Luxury Collection'
  }
];


export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

 useEffect(() => {
  let interval: ReturnType<typeof setInterval> | undefined;

  if (isAutoPlaying) {
    interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  }

  return () => {
    if (interval) clearInterval(interval);
  };
}, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* ---------------- HERO CAROUSEL ---------------- */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear transform scale-105"
              style={{
                backgroundImage: `url('${slide.image}')`,
                transform: index === currentSlide ? 'scale(110%)' : 'scale(100%)' // Subtle zoom effect
              }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#003B4F]/90 via-[#003B4F]/40 to-transparent" />

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl text-white pt-20">
                <div className={`overflow-hidden mb-4 ${index === currentSlide ? 'animate-slideUp' : ''}`}>
                  <span className="inline-block py-1 px-3 border border-[#2AB09C] text-[#2AB09C] text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-sm bg-black/20 rounded-full">
                    {slide.subtitle}
                  </span>
                </div>

                <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${index === currentSlide ? 'animate-slideUp delay-100' : 'opacity-0'}`}>
                  {slide.title}
                </h1>

                <p className={`text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed max-w-lg ${index === currentSlide ? 'animate-slideUp delay-200' : 'opacity-0'}`}>
                  {slide.description}
                </p>

                <div className={`${index === currentSlide ? 'animate-slideUp delay-300' : 'opacity-0'}`}>
                  <Link
                    href={slide.link}
                    className="group inline-flex items-center gap-3 bg-[#2AB09C] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#003B4F] transition-all duration-300"
                  >
                    {slide.cta}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-4">
          <button onClick={prevSlide} className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#003B4F] transition-all backdrop-blur-sm">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#003B4F] transition-all backdrop-blur-sm">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setIsAutoPlaying(false); setCurrentSlide(idx); }}
              className={`h-1 transition-all duration-300 rounded-full ${
                idx === currentSlide ? 'w-8 bg-[#2AB09C]' : 'w-2 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ---------------- VALUE PROPS ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#003B4F]/10 rounded-xl flex items-center justify-center text-[#003B4F] mb-6">
                <FlaskConical size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#003B4F] mb-3">Medicated Formula</h3>
              <p className="text-gray-600 leading-relaxed">
                Clinically proven ingredients blended with botanical extracts for effective, safe results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#2AB09C]/10 rounded-xl flex items-center justify-center text-[#2AB09C] mb-6">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#003B4F] mb-3">Premium Ingredients</h3>
              <p className="text-gray-600 leading-relaxed">
                Sourced from the finest origins, ensuring purity and potency in every drop and capsule.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#003B4F]/10 rounded-xl flex items-center justify-center text-[#003B4F] mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#003B4F] mb-3">Dermatologist Tested</h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorously tested for safety and efficacy on diverse skin types, specifically African skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- BEST SELLERS ---------------- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#003B4F] mb-2">Best Sellers</h2>
              <div className="h-1 w-20 bg-[#2AB09C] rounded-full" />
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-[#2AB09C] font-semibold hover:gap-3 transition-all">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <div key={product.id} className="group cursor-pointer opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}>
                <div className="relative h-80 overflow-hidden rounded-3xl bg-gray-100 mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#003B4F] rounded-full">
                      {product.tag}
                    </span>
                  </div>
                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003B4F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-6">
                    <button className="w-full bg-[#2AB09C] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-[#003B4F] transition-all shadow-lg">
                      <ShoppingBag size={18} /> Quick Add
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#003B4F] group-hover:text-[#2AB09C] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="font-bold text-[#003B4F]">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/products" className="inline-flex items-center gap-2 text-[#2AB09C] font-semibold">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SKINCARE ROUTINE GUIDE ---------------- */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003B4F] mb-4">The Perfect Skincare Routine</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Master your glow with our 4-step routine designed for lasting results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {routines.map((routine, idx) => (
              <div key={routine.id} className="text-center group cursor-pointer opacity-0 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}>
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 group-hover:shadow-xl transition-shadow">
                  <img 
                    src={routine.image || "/71FJHo+xdjL._AC_UF1000,1000_QL80_.jpg"}
                    alt={routine.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003B4F]/60 to-transparent flex items-end justify-center pb-6">
                    <span className="text-white text-sm font-bold">{routine.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#003B4F] mb-2">{routine.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{routine.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LIFESTYLE & COSMETICS PRODUCTS ---------------- */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003B4F] mb-4">Beauty Beyond Skincare</h2>
            <p className="text-lg text-gray-600">Complete your beauty routine with our cosmetics and tools collection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifestyleProducts.map((product, idx) => (
              <div 
                key={product.id}
                className="group cursor-pointer rounded-2xl overflow-hidden h-72 relative opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${idx * 80}ms`, animationFillMode: 'forwards' }}
              >
                <img 
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003B4F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-[#2AB09C] text-sm font-semibold">{product.category}</p>
                  <button className="mt-4 w-full bg-[#2AB09C] text-white py-2 rounded-lg font-semibold hover:bg-white hover:text-[#003B4F] transition-all">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCT GALLERY SHOWCASE ---------------- */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003B4F] mb-4">Our Collections</h2>
            <p className="text-lg text-gray-600">Discover the full range of professional-grade skincare and cosmetics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productGallery.map((item, idx) => (
              <div 
                key={item.id}
                className={`group cursor-pointer rounded-3xl overflow-hidden relative opacity-0 animate-fadeInUp ${
                  idx === 0 ? 'md:col-span-2 h-96' : 'h-80'
                }`}
                style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
              >
                <img 
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-8">
                  <div>
                    <h3 className="text-white text-3xl font-bold mb-3">{item.title}</h3>
                    <button className="bg-[#2AB09C] text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#003B4F] transition-all inline-flex items-center gap-2">
                      Shop Now
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- KEY INGREDIENTS SHOWCASE ---------------- */}
      <section className="py-8 bg-gradient-to-br from-[#003B4F]/5 to-[#2AB09C]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003B4F] mb-4">Powerhouse Ingredients</h2>
            <p className="text-lg text-gray-600">Science-backed actives that deliver visible transformations</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {ingredients.map((ingredient) => (
              <div 
                key={ingredient.id} 
                className="group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${ingredient.id * 100}ms`
                }}
              >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 group-hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={ingredient.image || "/placeholder.svg"}
                    alt={ingredient.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Sparkles className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="font-bold text-[#003B4F] mb-1">{ingredient.name}</h3>
                <p className="text-sm text-gray-600">{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCT CLOSE-UP GALLERY ---------------- */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003B4F] mb-4">Premium Formulations</h2>
            <p className="text-lg text-gray-600">Experience luxury skincare at its finest with our flagship products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Large Featured Product */}
            <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              <div className="rounded-3xl overflow-hidden h-96 mb-6 group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
                  alt="Signature Serum"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-[#003B4F] mb-3">Signature Serum</h3>
                <p className="text-gray-600 mb-4">Our bestselling serum combines Vitamin C with peptide technology to brighten and revitalize tired skin. Results visible in just 7 days.</p>
                <div className="flex gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#2AB09C]">50ml</p>
                    <p className="text-xs text-gray-500">Concentrated Formula</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#2AB09C]">30%</p>
                    <p className="text-xs text-gray-500">Active Ingredients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#2AB09C]">8hrs</p>
                    <p className="text-xs text-gray-500">Hydration Lock</p>
                  </div>
                </div>
                <button className="w-full bg-[#003B4F] text-white py-3 rounded-lg font-semibold hover:bg-[#2AB09C] transition-all">
                  Add to Cart - 45,000 UGX
                </button>
              </div>
            </div>

            {/* Right Column - Product Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <div className="rounded-2xl overflow-hidden h-48 mb-4 group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=800&auto=format&fit=crop"
                    alt="Cleansing Gel"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-bold text-[#003B4F] text-sm">Cleansing Gel</h4>
                <p className="text-xs text-gray-500">38,000 UGX</p>
              </div>

              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
                <div className="rounded-2xl overflow-hidden h-48 mb-4 group cursor-pointer">
                  <img 
                    src="/rec.webp"
                    alt="Recovery Cream"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-bold text-[#003B4F] text-sm">Recovery Cream</h4>
                <p className="text-xs text-gray-500">52,000 UGX</p>
              </div>

              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <div className="rounded-2xl overflow-hidden h-48 mb-4 group cursor-pointer">
                  <img 
                    src="/natural-makeup-tutorials-black-women-hero-mudc-082223.webp"
                    alt="Eye Contour"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-bold text-[#003B4F] text-sm">Eye Contour</h4>
                <p className="text-xs text-gray-500">48,000 UGX</p>
              </div>

              <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}>
                <div className="rounded-2xl overflow-hidden h-48 mb-4 group cursor-pointer">
                  <img 
                    src="/The-INKEY-List-Ceramide-Night-Treatment-30ml_7cdb67ec-6b20-4b3c-b81e-d3ec604a7e80.d44a1ec5241a68cc608d3288ede09cd7.avif"
                    alt="Night Treatment"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-bold text-[#003B4F] text-sm">Night Treatment</h4>
                <p className="text-xs text-gray-500">55,000 UGX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CUSTOMER TESTIMONIALS ---------------- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003B4F] mb-4">Trusted by Thousands</h2>
            <p className="text-lg text-gray-600">Real stories from real customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${testimonial.id * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img 
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#003B4F]">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BEFORE & AFTER RESULTS ---------------- */}
      <section className="py-24 bg-gradient-to-br from-[#003B4F] to-[#002836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Real Results. Real Stories.</h2>
            <p className="text-lg text-gray-200">See the transformation in just 8 weeks</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="group cursor-pointer opacity-0 animate-fadeInUp" style={{ animationDelay: `${(idx + 1) * 100}ms`, animationFillMode: 'forwards' }}>
                <div className="relative rounded-2xl overflow-hidden h-96 bg-gray-800 shadow-2xl group-hover:shadow-3xl transition-shadow">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-1607631814074-e51df1bdc82f?q=80&w=1000&auto=format&fit=crop`}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/2 overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1000&auto=format&fit=crop`}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-[#003B4F]">
                      8 WEEKS
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                    <p className="font-bold mb-1">Acne Control Program</p>
                    <p className="text-sm text-gray-200">84% clearer skin in 8 weeks</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US DETAILED ---------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003B4F] mb-4">Why Choose Genre</h2>
            <p className="text-lg text-gray-600">The difference is in the details</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#2AB09C]/10 to-transparent rounded-2xl p-8 border border-[#2AB09C]/20 hover:border-[#2AB09C]/50 transition-colors">
              <div className="w-12 h-12 bg-[#2AB09C] rounded-xl flex items-center justify-center text-white mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#003B4F] mb-2">Fast Results</h3>
              <p className="text-gray-600 text-sm">See visible improvements within 2-4 weeks</p>
            </div>

            <div className="bg-gradient-to-br from-[#003B4F]/10 to-transparent rounded-2xl p-8 border border-[#003B4F]/20 hover:border-[#003B4F]/50 transition-colors">
              <div className="w-12 h-12 bg-[#003B4F] rounded-xl flex items-center justify-center text-white mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#003B4F] mb-2">Dermatologist Tested</h3>
              <p className="text-gray-600 text-sm">Certified safe for all skin types, including sensitive</p>
            </div>

            <div className="bg-gradient-to-br from-[#2AB09C]/10 to-transparent rounded-2xl p-8 border border-[#2AB09C]/20 hover:border-[#2AB09C]/50 transition-colors">
              <div className="w-12 h-12 bg-[#2AB09C] rounded-xl flex items-center justify-center text-white mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#003B4F] mb-2">Cruelty-Free</h3>
              <p className="text-gray-600 text-sm">100% vegan and never tested on animals</p>
            </div>

            <div className="bg-gradient-to-br from-[#003B4F]/10 to-transparent rounded-2xl p-8 border border-[#003B4F]/20 hover:border-[#003B4F]/50 transition-colors">
              <div className="w-12 h-12 bg-[#003B4F] rounded-xl flex items-center justify-center text-white mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#003B4F] mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Free consultation with our skincare specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PARALLAX BANNER ---------------- */}
      <section
        className="relative py-32 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=1926&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#003B4F]/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Where Science Meets Beauty
          </h2>
          <p className="text-xl text-gray-200 mb-10 font-light leading-relaxed">
            We don't just cover up imperfections; we treat them. Our holistic approach combines
            powerful topicals with nutrient-rich supplements to transform your skin from the inside out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/why"
              className="px-8 py-3 bg-white text-[#003B4F] rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Our Philosophy
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#003B4F] transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- NEWSLETTER ---------------- */}
      <section className="py-20 bg-[#2AB09C]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the Genre Community</h2>
          <p className="text-white/90 mb-8">
            Subscribe to receive expert beauty tips, exclusive offers, and early access to new launches.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-[#003B4F] outline-none"
            />
            <button className="px-8 py-4 bg-[#003B4F] text-white rounded-full font-bold hover:bg-[#002836] transition-colors shadow-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-slideUp {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </main>
  );
}
