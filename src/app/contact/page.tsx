'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Building2, ChevronRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

/* ─── Types ─── */

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

/* ─── Quick Contact Cards Data ─── */

const quickContacts = [
  {
    icon: Phone,
    title: 'Call Us',
    desc: 'Mon–Sat, 9 AM – 6 PM',
    value: '+91 92962 90854',
    href: 'tel:+919296290854',
    color: 'bg-[#EEF2FF]',
    iconColor: 'text-[#6366F1]',
  },
  {
    icon: Mail,
    title: 'Email Us',
    desc: 'We reply within 24 hours',
    value: 'contact@viamsh.com',
    href: 'mailto:contact@viamsh.com',
    color: 'bg-[#ECFDF5]',
    iconColor: 'text-[#059669]',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: 'Quick chat support',
    value: 'Message us',
    href: 'https://wa.me/919296290854?text=Hi%2C%20I%20have%20a%20question%20about%20Viamsh%20products',
    color: 'bg-[#F0FDF4]',
    iconColor: 'text-[#25D366]',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    desc: 'Ranchi, Jharkhand',
    value: 'Get Directions',
    href: '#map',
    color: 'bg-[#FEF3C7]',
    iconColor: 'text-[#D97706]',
  },
];

/* ─── Component ─── */

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (formData.phone && !/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  const inputClasses = (field: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
      errors[field]
        ? 'border-red-300 focus:border-red-400 focus:ring-red-400/20'
        : 'border-[#E5E7EB] focus:border-[#6366F1] focus:ring-[#6366F1]/20'
    }`;

  return (
    <>
      <title>Contact Us | Viamsh FMCG</title>
      <meta
        name="description"
        content="Get in touch with Viamsh FMCG Pvt. Ltd. for sales, support, distribution inquiries, or general questions. Located in Ranchi, Jharkhand."
      />

      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-[#6366F1] via-[#7C3AED] to-[#8B5CF6] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Get In Touch
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                We&apos;d Love to Hear <span className="text-[#FDE68A]">From You</span>
              </h1>
              <p className="mt-4 text-lg text-white/70">
                Whether you have a question about products, distribution, or anything else — our team is ready to help.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ QUICK CONTACT CARDS ═══ */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickContacts.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.08}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#C7D2FE] transition-all duration-300 text-center"
                >
                  <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mx-auto`}>
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-[#1A1A1A]">{item.title}</h3>
                  <p className="mt-0.5 text-xs text-[#9CA3AF]">{item.desc}</p>
                  <p className="mt-2 text-sm font-semibold text-[#6366F1]">{item.value}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORM + INFO ═══ */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
            {/* Form */}
            <AnimatedSection>
              <div className="rounded-2xl bg-white border border-[#E5E7EB] p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl font-extrabold text-[#1A1A1A]">Send Us a Message</h2>
                <p className="mt-1 text-sm text-[#6B7280]">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>

                {isSubmitted ? (
                  <div className="mt-8 py-12 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-[#ECFDF5] flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-[#059669]" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-[#1A1A1A]">Message Sent!</h3>
                    <p className="mt-2 text-sm text-[#6B7280]">
                      Thank you for reaching out. Our team will respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-sm font-medium text-[#6366F1] hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Name & Phone — side by side */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1.5">
                          Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClasses('name')}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClasses('phone')}
                          placeholder="10-digit number"
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Email & Subject — side by side */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1.5">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClasses('email')}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-[#374151] mb-1.5">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={inputClasses('subject')}
                        >
                          <option value="">Select a topic</option>
                          <option value="Product Inquiry">Product Inquiry</option>
                          <option value="Distribution">Distribution Partnership</option>
                          <option value="Order Support">Order Support</option>
                          <option value="Feedback">Feedback</option>
                          <option value="General">General Question</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={inputClasses('message')}
                        placeholder="How can we help you?"
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#6366F1] py-3 text-sm font-bold text-white hover:bg-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-60 transition-colors cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Office Info */}
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl bg-white border border-[#E5E7EB] p-6">
                  <h3 className="text-base font-bold text-[#1A1A1A]">Office Address</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[#6366F1]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#374151]">Viamsh FMCG Pvt. Ltd.</p>
                        <p className="text-sm text-[#6B7280]">Ranchi, Jharkhand, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-[#6366F1]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#374151]">Business Hours</p>
                        <p className="text-sm text-[#6B7280]">Mon – Sat: 9 AM – 6 PM</p>
                        <p className="text-xs text-[#9CA3AF]">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Links */}
              <AnimatedSection delay={0.15}>
                <div className="rounded-2xl bg-white border border-[#E5E7EB] p-6">
                  <h3 className="text-base font-bold text-[#1A1A1A]">Quick Links</h3>
                  <div className="mt-4 space-y-2">
                    {[
                      { label: 'Become a Distributor', href: '/distributors', desc: 'Partnership opportunities' },
                      { label: 'Browse Products', href: '/shop', desc: 'Shop our product range' },
                      { label: 'About Viamsh', href: '/about', desc: 'Our story & mission' },
                      { label: 'FAQs', href: '/distributors#faq', desc: 'Common questions' },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F9FAFB] transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-medium text-[#374151] group-hover:text-[#6366F1] transition-colors">{link.label}</p>
                          <p className="text-xs text-[#9CA3AF]">{link.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#D1D5DB] group-hover:text-[#6366F1] transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Social Media */}
              <AnimatedSection delay={0.2}>
                <div className="rounded-2xl bg-white border border-[#E5E7EB] p-6">
                  <h3 className="text-base font-bold text-[#1A1A1A]">Follow Us</h3>
                  <div className="mt-4 flex gap-3">
                    {[
                      { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                      { name: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z' },
                      { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                      { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        aria-label={social.name}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3F4F6] text-[#6B7280] hover:bg-[#6366F1] hover:text-white transition-colors"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAP ═══ */}
      <section id="map" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-[#E5E7EB]">
              <div className="flex h-72 items-center justify-center bg-[#F9FAFB]">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-[#D1D5DB] mx-auto" />
                  <p className="mt-3 text-sm font-medium text-[#6B7280]">Google Maps Embed</p>
                  <p className="mt-1 text-xs text-[#9CA3AF]">Ranchi, Jharkhand, India</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
