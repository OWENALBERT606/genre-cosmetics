'use client';

import React from "react"

import { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-background via-muted to-background"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section header */}
        <div className={`text-center mb-16 sm:mb-20 ${isInView ? 'animate-slideUp' : 'opacity-0'}`}>
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6 text-balance">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <div
            className={`space-y-8 ${isInView ? 'animate-slideIn' : 'opacity-0'}`}
          >
            {/* Contact cards */}
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:translate-x-2">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kireka A, Namugongo Division,
                    <br />
                    Kira, Uganda
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:translate-x-2">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Phone</h3>
                  <a
                    href="tel:+256700607175"
                    className="text-primary hover:underline font-medium"
                  >
                    +256 700 607 175
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:translate-x-2">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-2 to-accent-2/60 rounded-xl flex items-center justify-center text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Email</h3>
                  <a
                    href="mailto:genrecosmetics@gmail.com"
                    className="text-primary hover:underline font-medium break-all"
                  >
                    genrecosmetics@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">PO Box 860863</p>
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
              <h3 className="font-bold text-secondary mb-4">Operating Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`${isInView ? 'animate-slideRight' : 'opacity-0'}`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your skincare concerns..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full py-3 bg-gradient-to-r from-primary to-accent-2 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <span>✓ Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-6">
                We{'"'}ll get back to you within 24 hours. Thank you for choosing Genre!
              </p>
            </div>
          </div>
        </div>

        {/* Map or additional info */}
        <div
          className={`mt-16 sm:mt-20 p-8 bg-white rounded-2xl shadow-lg ${isInView ? 'animate-slideUp opacity-100' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Find Us</h3>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl h-80 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin size={48} className="text-primary mx-auto" />
              <p className="text-lg font-semibold text-secondary">
                Kireka A, Namugongo Division, Kira
              </p>
              <p className="text-muted-foreground">
                Visit us for personalized beauty consultations and product demonstrations
              </p>
              <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium mt-4">
                Get Directions
              </button>
            </div>
          </div>
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
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out 0.2s both;
        }
        .animate-slideRight {
          animation: slideRight 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
}
