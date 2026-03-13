'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Zap, Sparkles, ShieldCheck, Users, MapPin, Star } from 'lucide-react';

// ---------- Data ----------

const sizes = [
  { label: '80gm', price: 10, tag: 'Economy' },
  { label: '500gm', price: 50, tag: 'Regular' },
  { label: '1Kg', price: 100, tag: 'Value Pack' },
];

const usps = [
  { icon: Zap, text: 'Tough Stain Removal' },
  { icon: Sparkles, text: 'Long-lasting Fragrance' },
  { icon: ShieldCheck, text: 'Safe for All Fabrics' },
];

const trustBadges = [
  { icon: '🇮🇳', text: 'Made in India' },
  { text: 'ISO Certified', icon: '✓' },
  { text: 'Eco-Friendly', icon: '🌿' },
];

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: MapPin, value: '50+', label: 'Cities Served' },
  { icon: Star, value: '4.8/5', label: 'Customer Rating' },
];

// ---------- 3D Scene (no SSR) ----------

const Scene3D = dynamic(() => import('./HeroScene3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-[#6366F1]/30 border-t-[#6366F1] rounded-full animate-spin" />
    </div>
  ),
});

// ---------- Main component ----------

export default function HeroCarousel3D() {
  const [selectedSize, setSelectedSize] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: '90vh',
          background: 'linear-gradient(180deg, #FAFAFA 0%, #F0F0F5 50%, #E8E8F0 100%)',
        }}
      >
        {/* Subtle background dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${2 + ((i * 7 + 3) % 5) * 0.8}px`,
                height: `${2 + ((i * 7 + 3) % 5) * 0.8}px`,
                top: `${(i * 37 + 13) % 100}%`,
                left: `${(i * 53 + 7) % 100}%`,
                background: 'rgba(99, 102, 241, 0.12)',
                animationDelay: `${(i * 0.6) % 4}s`,
                animationDuration: `${2 + (i * 3) % 4}s`,
              }}
            />
          ))}
        </div>

        {/* Radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '800px',
            height: '800px',
            top: '50%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-16 md:py-20">
          {/* Left side */}
          <div
            className="flex-1 text-center md:text-left pt-8 md:pt-0 transition-all duration-700"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(40px)',
            }}
          >
            {/* Trust Badges */}
            <div
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-5 transition-all duration-700 delay-100"
              style={{ opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(20px)' }}
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#374151] shadow-sm"
                >
                  <span>{badge.icon}</span>
                  {badge.text}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1A1A1A] leading-tight">
              Experience the
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A78BFA 100%)',
                }}
              >
                Power of Clean
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-2 text-[#6366F1] font-semibold text-base sm:text-lg italic">
              &ldquo;Safaai mein Bharosa, Orma ka Vaada&rdquo;
            </p>

            {/* Subheadline */}
            <p
              className="mt-3 text-lg sm:text-xl text-[#6B7280] max-w-lg mx-auto md:mx-0 transition-all duration-700 delay-200"
              style={{
                opacity: show ? 1 : 0,
                transform: show ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              Orma Detergent Powder — Powerful stain removal, refreshing
              fragrance, crafted for every Indian home.
            </p>

            {/* USP Icons */}
            <div
              className="mt-5 flex items-center gap-5 flex-wrap justify-center md:justify-start transition-all duration-700 delay-300"
              style={{ opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(20px)' }}
            >
              {usps.map((usp, idx) => (
                <div key={usp.text} className="flex items-center gap-2">
                  <usp.icon className="h-4 w-4 text-[#6366F1]" />
                  <span className="text-sm font-bold text-[#4B5563]">{usp.text}</span>
                  {idx < usps.length - 1 && (
                    <span className="ml-3 text-[#D1D5DB]">|</span>
                  )}
                </div>
              ))}
            </div>

            {/* Size selector — all sizes visible */}
            <div
              className="mt-6 transition-all duration-700 delay-400"
              style={{ opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(20px)' }}
            >
              <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">
                Available Sizes
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {sizes.map((s, idx) => (
                  <button
                    key={s.label}
                    onClick={() => setSelectedSize(idx)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      idx === selectedSize
                        ? 'bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/25'
                        : 'bg-white border border-[#E5E7EB] text-[#374151] hover:border-[#6366F1] hover:text-[#6366F1]'
                    }`}
                  >
                    {s.label} — <span className="font-bold">&#8377;{s.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div
              className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start transition-all duration-700 delay-500"
              style={{
                opacity: show ? 1 : 0,
                transform: show ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <Link
                href="/shop"
                className="px-8 py-3 rounded-full bg-[#6366F1] text-white font-semibold hover:bg-[#4F46E5] hover:scale-105 transition-all shadow-lg shadow-[#6366F1]/25"
              >
                Shop Now
              </Link>
              <a
                href="https://wa.me/919296290854?text=Hi%2C%20I%20want%20to%20order%20Orma%20Detergent%20Powder"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1EB954] hover:scale-105 transition-all shadow-lg shadow-[#25D366]/25"
              >
                Order on WhatsApp
              </a>
              <Link
                href="/about"
                className="px-8 py-3 rounded-full border-2 border-[#D1D5DB] text-[#374151] font-semibold hover:bg-[#F3F4F6] hover:border-[#9CA3AF] hover:scale-105 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Social proof stats */}
            <div
              className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start transition-all duration-700 delay-700"
              style={{ opacity: show ? 1 : 0 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <stat.icon className="h-4 w-4 text-[#6366F1]" />
                  <div>
                    <span className="font-bold text-[#1A1A1A] text-sm">{stat.value}</span>
                    <span className="text-[#9CA3AF] text-xs ml-1">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — 3D Scene */}
          <div
            className="flex-1 w-full max-w-md md:max-w-lg h-[300px] md:h-[500px] transition-all duration-1000 delay-300"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'scale(1)' : 'scale(0.9)',
            }}
          >
            <Scene3D activeIndex={selectedSize} />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none" />
      </section>
    </>
  );
}
