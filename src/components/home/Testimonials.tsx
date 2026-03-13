'use client';

import { useState } from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import StarRating from '@/components/shared/StarRating';
import AnimatedSection from '@/components/shared/AnimatedSection';
import type { Testimonial } from '@/types';

const avatarColors = ['#6366F1', '#8B5CF6', '#4F46E5', '#7C3AED', '#818CF8', '#A78BFA'];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const initials = testimonial.name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2);
  const avatarBg = avatarColors[index % avatarColors.length];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-full border border-[#E5E7EB]">
      <Quote className="w-8 h-8 text-[#6366F1]/25 mb-3" />
      <p className="text-[#4B5563] italic leading-relaxed flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-4">
        <StarRating rating={testimonial.rating} size="sm" />
      </div>
      <div className="mt-4 flex items-center gap-3 pt-4 border-t border-[#F3F4F6]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ backgroundColor: avatarBg }}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-bold text-[#1A1A1A] truncate">{testimonial.name}</p>
          <p className="text-sm text-[#9CA3AF] truncate">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <circle cx="5%" cy="20%" r="120" fill="#EEF2FF" opacity="0.4" />
        <circle cx="95%" cy="80%" r="100" fill="#EEF2FF" opacity="0.3" />
        <circle cx="50%" cy="10%" r="60" fill="#F5F3FF" opacity="0.3" />
        {/* Quote decorations */}
        <text x="3%" y="45%" fill="#6366F1" fontSize="120" fontFamily="Georgia, serif" opacity="0.04">&ldquo;</text>
        <text x="85%" y="70%" fill="#8B5CF6" fontSize="120" fontFamily="Georgia, serif" opacity="0.04">&rdquo;</text>
        {/* Sparkle shapes */}
        <path d="M80 600 L83 590 L86 600 L96 603 L86 606 L83 616 L80 606 L70 603Z" fill="#C7D2FE" opacity="0.2" />
        <path d="M1400 100 L1403 90 L1406 100 L1416 103 L1406 106 L1403 116 L1400 106 L1390 103Z" fill="#A78BFA" opacity="0.15" />
        {/* Dots pattern */}
        <circle cx="10%" cy="90%" r="3" fill="#D1D5DB" opacity="0.3" />
        <circle cx="12%" cy="92%" r="2" fill="#D1D5DB" opacity="0.2" />
        <circle cx="88%" cy="15%" r="3" fill="#D1D5DB" opacity="0.3" />
        <circle cx="90%" cy="13%" r="2" fill="#D1D5DB" opacity="0.2" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg max-w-2xl mx-auto">
            Trusted by thousands of families across India for powerful cleaning and great value.
          </p>
          <div className="mt-4 w-16 h-1 bg-[#6366F1] mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, idx) => (
            <AnimatedSection key={t.id} delay={idx * 0.1}>
              <TestimonialCard testimonial={t} index={idx} />
            </AnimatedSection>
          ))}
        </div>

        {testimonials.length > 3 && (
          <AnimatedSection delay={0.4} className="mt-10 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-3 rounded-full border-2 border-[#6366F1] text-[#6366F1] font-semibold hover:bg-[#6366F1] hover:text-white transition-colors cursor-pointer"
            >
              {showAll ? 'Show Less' : 'Show More Reviews'}
            </button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
