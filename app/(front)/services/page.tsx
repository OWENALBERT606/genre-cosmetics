'use client';

import { useEffect, useRef, useState } from 'react';
import { Heart, Droplet, Pill, Sparkles, Users, Shield, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
// Note: Ensure these components exist in your project, or remove imports if not needed yet
// import { Footer } from '../components/footer'; 

const services = [
  {
    id: 1,
    icon: Droplet,
    title: 'Medicated Skincare',
    shortDesc: 'Dermatology-inspired products for acne and skin tone.',
    description: 'Dermatology-inspired products formulated to treat acne, dark spots, and uneven skin tone with safe, effective results. Our medical-grade formulations are suitable for all skin types.',
    details: 'Our medicated line penetrates deep into the dermis to target the root cause of skin issues. We use clinically proven ingredients like Salicylic Acid, Niacinamide, and Retinoids balanced with soothing botanicals.',
    color: 'bg-primary',
    delay: '0s',
    features: ['Dermatologist tested', 'Safe ingredients', 'Visible results in 4 weeks']
  },
  {
    id: 2,
    icon: Heart,
    title: 'Skin Treatment & Repair',
    shortDesc: 'Advanced repair solutions for inflammation and barrier health.',
    description: 'Advanced repair solutions focusing on inflammation reduction, texture improvement, and natural glow restoration. Specialized treatments for sensitive and compromised skin.',
    details: 'Whether damaged by sun exposure, harsh chemicals, or environmental stressors, our repair line rebuilds your skin barrier using ceramides, peptides, and hyaluronic acid complexes.',
    color: 'bg-teal-600',
    delay: '0.1s',
    features: ['Anti-inflammatory', 'Barrier repair', 'Glow restoration']
  },
  {
    id: 3,
    icon: Pill,
    title: 'Health Supplements',
    shortDesc: 'Premium supplements for beauty from within.',
    description: 'Premium health and beauty supplements supporting skin, hair, nails, immunity, and overall wellness from within. Formulated with bioavailable ingredients.',
    details: 'True beauty starts from within. Our supplements are GMP certified and contain high-potency collagen, biotin, and antioxidants to support your body’s natural regeneration processes.',
    color: 'bg-indigo-600',
    delay: '0.2s',
    features: ['100% natural', 'Scientifically formulated', 'Third-party tested']
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Beauty-from-Within',
    shortDesc: 'Holistic approach combining skincare with supplements.',
    description: 'Holistic approach combining skincare with supplements for stronger, longer-lasting results and natural beauty. Synergistic formulations for maximum efficacy.',
    details: 'Our signature program that pairs topical treatments with ingestible wellness. This dual-action approach ensures you are treating the symptom and the source simultaneously.',
    color: 'bg-pink-600',
    delay: '0.3s',
    features: ['Integrated approach', 'Synergistic results', 'Long-term benefits']
  },
  {
    id: 5,
    icon: Users,
    title: 'Personalized Guidance',
    shortDesc: 'Expert consultation for your specific skin type.',
    description: 'Expert consultation to help you choose the right products and routines for maximum benefit and safety. Professional advice tailored to your skin type.',
    details: 'Not sure where to start? Our beauty experts analyze your skin type, lifestyle, and goals to build a custom routine just for you. Available via video call or in-person.',
    color: 'bg-primary',
    delay: '0.4s',
    features: ['Free consultation', 'Expert advice', 'Personalized routine']
  },
  {
    id: 6,
    icon: Shield,
    title: 'Quality Assurance',
    shortDesc: 'Strict quality control and safety testing.',
    description: 'Strict quality control with safe, approved ingredients, hygienic processes, and full regulatory compliance. Every product tested for safety and efficacy.',
    details: 'We take no shortcuts. Every batch is tested for purity, potency, and safety. We are ISO certified and adhere to the strictest international cosmetic safety standards.',
    color: 'bg-teal-600',
    delay: '0.5s',
    features: ['ISO certified', 'GMP compliant', 'Full testing']
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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

    const cards = containerRef.current?.querySelectorAll('[data-card-id]');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section with Parallax Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Fixed position for Parallax effect */}
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop")',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white/10 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="space-y-6 animate-slideUp">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-semibold text-white tracking-widest uppercase">
              Premium Care
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-balance drop-shadow-lg">
              Our Complete Collection
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light">
              Discover our full range of medicated cosmetics and wellness products designed for transformative results.
            </p>
            <div className="pt-4">
               <button 
                 onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                 className="animate-bounce bg-white text-gray-900 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
               >
                 <ArrowRight className="rotate-90" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-grid" className="relative py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section intro */}
          <div className="text-center mb-16 sm:mb-20 animate-slideUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Makes Genre Special
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine medical expertise with luxury cosmetics. Click on any service below to learn more about our process.
            </p>
          </div>

          {/* Services Grid */}
          <div
            ref={containerRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isVisible = visibleCards.includes(service.id);

              return (
                <div
                  key={service.id}
                  data-card-id={service.id}
                  data-id={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`group relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                    isVisible ? 'animate-slideUp opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: service.delay }}
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className={`relative w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon size={32} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle2 size={14} className="text-teal-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 group-hover:gap-3 transition-all">
                      View Details <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE POP-UP (MODAL) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" 
            onClick={() => setSelectedService(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleIn">
            {/* Header */}
            <div className={`${selectedService.color} p-8 text-white relative`}>
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <selectedService.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold">{selectedService.title}</h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">About this Service</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {selectedService.details}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Key Benefits</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${selectedService.color.replace('bg-', 'bg-')}`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  className={`px-8 py-2.5 ${selectedService.color} text-white rounded-lg font-semibold hover:opacity-90 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5`}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Beauty Routine?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey with Genre Cosmetics today and experience the difference of medicated beauty solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-teal-500/30"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-lg font-bold transition-all duration-300"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.95) translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </main>
  );
}