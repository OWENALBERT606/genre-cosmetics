'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

    const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+256 700 607 175',
      subtext: '+256 792 554 189', // Added second number from image
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'genrecosmetics@gmail.com',
      subtext: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Kireka - Kampala',
      subtext: 'P.O. Box 860863', // Added P.O. Box from image
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon - Sat: 9AM - 6PM',
      subtext: 'Sunday: Closed',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
     {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          // Placeholder image - replace this URL with your local image path like '/images/contact-bg.jpg'
          backgroundImage: "url('/2150331705.jpg')"
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center animate-slideUp">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto font-medium">
            We'd love to hear from you. Whether you have questions about our products or need personalized beauty advice, our team is here to help.
          </p>
        </div>
      </section>


      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 animate-slideUp"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    // Using the Teal color from the logo for the hover border
                    borderColor: 'transparent' 
                  }}
                >
                  {/* Hover Border Effect using Tailwind arbitrary values for logo colors */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#2AB09C] transition-colors duration-300 pointer-events-none"></div>

                  <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                    {/* Icon Container: Light Teal Background */}
                    <div className="w-12 h-12 bg-[#2AB09C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2AB09C]/20 transition-colors duration-300">
                      {/* Icon: Brand Teal Color */}
                      <IconComponent className="text-[#2AB09C]" size={24} />
                    </div>
                    
                    {/* Text: Brand Deep Navy Color */}
                    <h3 className="font-bold text-[#003B4F]">{info.label}</h3>
                    <p className="font-semibold text-[#003B4F]">{info.value}</p>
                    <p className="text-sm text-gray-500">{info.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slideUp">
              <h2 className="text-3xl font-bold text-secondary mb-8">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-slideUp">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+256 (optional)"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="product_inquiry">Product Inquiry</option>
                      <option value="bulk_order">Bulk Order</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-3 bg-primary hover:bg-primary/90 disabled:bg-primary/70 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info Section */}
            <div className="animate-slideDown">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-secondary mb-4">Why Contact Us?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Have questions about our medicated cosmetics or health supplements? Want personalized recommendations? Need bulk orders? We're here to provide expert guidance and exceptional customer service.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary">Common Inquiries</h3>
                  <ul className="space-y-3">
                    {[
                      'Product recommendations for your skin type',
                      'Bulk orders and wholesale pricing',
                      'Ingredient information and allergens',
                      'Partnership and distribution opportunities',
                      'Returns and warranty information',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <MessageSquare size={14} className="text-accent" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-secondary mb-3">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slideUp">
            <h2 className="text-3xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about our products and services</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Are your products suitable for both men and women?',
                a: 'Yes! We offer specialized lines for both men and women. Our cosmetics are formulated to address specific skin concerns for each gender while maintaining our high quality standards.',
              },
              {
                q: 'Are your products dermatologist tested?',
                a: 'All our medicated cosmetics are formulated with dermatological expertise and undergo rigorous testing to ensure safety and efficacy for all skin types.',
              },
              {
                q: 'Do you offer free consultations?',
                a: 'Yes! We provide personalized beauty consultations. Contact us at +256 701 007 175 to schedule a free consultation with our experts.',
              },
              {
                q: 'What is your return policy?',
                a: 'We offer a 30-day money-back guarantee on all products if you\'re not completely satisfied. Please contact us for easy returns.',
              },
              {
                q: 'Can I place bulk orders?',
                a: 'Absolutely! We offer wholesale pricing and bulk orders for businesses and retailers. Contact our sales team for custom packages.',
              },
              {
                q: 'How do you ship orders?',
                a: 'We provide fast, reliable shipping throughout Uganda. Orders are carefully packaged to ensure products arrive in perfect condition.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-card rounded-lg border border-border p-4 cursor-pointer hover:border-primary/50 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <summary className="flex items-center justify-between font-semibold text-secondary hover:text-primary transition-colors duration-300">
                  {faq.q}
                  <span className="ml-4 group-open:rotate-180 transition-transform duration-300">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
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
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </main>
  );
}
