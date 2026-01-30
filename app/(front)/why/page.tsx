'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  FlaskConical, 
  Leaf, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';
import { Footer } from '../components/footer';
import { Navigation } from '../components/navigation';

export default function WhyUsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: FlaskConical,
      title: "Science-Backed Formulas",
      description: "We don't guess; we formulate. Every product is developed using clinical-grade ingredients proven to treat specific skin conditions effectively.",
    },
    {
      icon: Leaf,
      title: "Safe & Natural",
      description: "We bridge the gap between medical efficacy and natural safety. Our products are free from harmful harsh chemicals and safe for long-term use.",
    },
    {
      icon: ShieldCheck,
      title: "Rigorously Tested",
      description: "Your safety is non-negotiable. All our cosmetics and supplements undergo strict quality control and dermatological testing.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Guidance",
      description: "We are more than a shop. We are your beauty partners, offering free consultations to ensure you use the right products for your skin type.",
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[60vh] flex items-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-[#003B4F]/80"></div> {/* Navy Overlay */}
        
        <div className="relative z-10 max-w-7xl mx-auto text-center animate-slideUp">
          <span className="inline-block py-1 px-3 rounded-full bg-[#2AB09C]/20 border border-[#2AB09C] text-[#2AB09C] text-sm font-bold tracking-wider mb-6 backdrop-blur-sm">
            INSPIRED BY BEAUTY
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why Choose Genre?
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
            We are redefining beauty by combining pharmaceutical precision with luxury skincare. 
            Discover the science behind your radiance.
          </p>
        </div>
      </section>

      {/* The Genre Difference - Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#003B4F] mb-4">The Genre Difference</h2>
            <div className="w-20 h-1 bg-[#2AB09C] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-[#2AB09C] group animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-[#2AB09C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2AB09C] transition-colors duration-300">
                    <Icon className="text-[#2AB09C] group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#003B4F] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story / Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative animate-slideRight">
              <div className="absolute -inset-4 bg-[#2AB09C]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
                alt="Genre Cosmetics Laboratory" 
                className="relative rounded-2xl shadow-lg w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur rounded-xl p-6 shadow-lg border-l-4 border-[#003B4F]">
                <div className="flex items-center gap-4">
                  <Award className="text-[#2AB09C]" size={32} />
                  <div>
                    <p className="font-bold text-[#003B4F]">Excellence Guaranteed</p>
                    <p className="text-sm text-gray-600">Committed to the highest standards of quality.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="animate-slideLeft">
              <h2 className="text-4xl font-bold text-[#003B4F] mb-6">
                More Than Just Cosmetics.<br />
                <span className="text-[#2AB09C]">We Are Skin Health Experts.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Genre Cosmetics Limited, we believe that true beauty is a reflection of health. Founded with a mission to solve persistent skin issues that generic products couldn't fix, we turned to science.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We understand that every individual's skin is unique. That's why we don't just sell products; we provide solutions. From treating acne and hyperpigmentation to restoring your natural glow with our health supplements, our holistic approach ensures long-lasting results.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Dermatologically formulated specifically for African skin types',
                  'Holistic approach: Treating from the inside (supplements) and out (topicals)',
                  'Located conveniently in Kireka - Kampala for easy access'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#2AB09C] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#003B4F] text-white rounded-lg font-semibold hover:bg-[#003B4F]/90 transition-all hover:gap-4">
                Speak to an Expert <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#003B4F] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '50k+', label: 'Happy Clients' },
              { number: '100%', label: 'Quality Tested' },
              { number: '24h', label: 'Support Response' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#2AB09C]">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003B4F]">
            Ready to Experience the Genre Difference?
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied customers who have transformed their skin and health with our medicated solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/products" 
              className="px-8 py-4 bg-[#2AB09C] text-white rounded-lg font-bold hover:bg-[#259b89] transition-all shadow-lg hover:shadow-[#2AB09C]/30"
            >
              Shop Our Products
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-[#003B4F] border-2 border-[#003B4F] rounded-lg font-bold hover:bg-gray-50 transition-all"
            >
              Visit Our Store
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-slideRight {
          animation: slideRight 0.8s ease-out forwards;
        }
        .animate-slideLeft {
          animation: slideLeft 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}