'use client';

import { products } from '@/data/products';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

const highlights = [
  { icon: Zap, text: 'Powerful stain removal in one wash' },
  { icon: Shield, text: 'Safe for hand wash & machine wash' },
  { icon: Sparkles, text: 'Long-lasting refreshing fragrance' },
];

export default function FeaturedProducts() {
  const orma = products.find((p) => p.id === 'prod-orma-detergent');
  if (!orma) return null;

  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Our Product
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#6B7280]">
            Meet Orma Detergent Powder &mdash; powerful cleaning trusted by
            thousands of families across India.
          </p>
          <div className="mt-4 w-20 h-1 bg-[#8B5CF6] mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Description */}
          <AnimatedSection direction="left">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#EEF2FF] text-[#6366F1] text-sm font-semibold mb-4">
                Flagship Product
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                {orma.name}
              </h3>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
                {orma.description}
              </p>

              <ul className="space-y-4 mb-8">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
                      <item.icon className="h-5 w-5 text-[#6366F1]" />
                    </div>
                    <span className="text-[#374151] font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 mb-8">
                {orma.variants.map((v) => (
                  <span
                    key={v.id}
                    className="px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-sm font-medium text-[#374151]"
                  >
                    {v.size}
                  </span>
                ))}
              </div>

              <Link
                href={`/products/${orma.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6366F1] text-white font-semibold hover:bg-[#4F46E5] transition-colors shadow-lg shadow-[#6366F1]/20"
              >
                View Product Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right — Product Image */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 rounded-3xl blur-2xl" />

              {/* Floating decorative SVG elements around product */}
              <svg className="absolute -top-8 -left-8 w-24 h-24 pointer-events-none" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="30" fill="#EEF2FF" opacity="0.6" />
                <path d="M30 35 L35 25 L40 35 L50 38 L40 41 L35 51 L30 41 L20 38Z" fill="#A78BFA" opacity="0.3" />
              </svg>
              <svg className="absolute -bottom-6 -right-6 w-20 h-20 pointer-events-none" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="25" fill="#F5F3FF" opacity="0.5" />
                <circle cx="40" cy="40" r="10" fill="#C7D2FE" opacity="0.3" />
              </svg>
              <svg className="absolute top-1/2 -right-10 w-16 h-16 pointer-events-none" viewBox="0 0 60 60" fill="none">
                <path d="M20 28 L24 18 L28 28 L38 32 L28 36 L24 46 L20 36 L10 32Z" fill="#8B5CF6" opacity="0.15" />
              </svg>

              {/* Bubble decorations */}
              <div className="absolute -top-4 right-8 w-6 h-6 rounded-full bg-[#C7D2FE]/30" />
              <div className="absolute top-12 -right-4 w-4 h-4 rounded-full bg-[#A78BFA]/20" />
              <div className="absolute -bottom-3 left-12 w-5 h-5 rounded-full bg-[#EEF2FF]/60" />

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 lg:p-12 flex items-center justify-center aspect-square max-w-lg mx-auto">
                {/* Decorative circles */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/5" />
                <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-white/5" />

                {/* Inner decorative pattern */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none">
                  <circle cx="100" cy="100" r="3" fill="white" opacity="0.15" />
                  <circle cx="300" cy="80" r="2" fill="white" opacity="0.1" />
                  <circle cx="80" cy="300" r="2.5" fill="white" opacity="0.12" />
                  <circle cx="320" cy="320" r="2" fill="white" opacity="0.1" />
                  <circle cx="200" cy="60" r="1.5" fill="white" opacity="0.15" />
                  <circle cx="350" cy="200" r="2" fill="white" opacity="0.1" />
                  <path d="M50 200 L55 185 L60 200 L75 205 L60 210 L55 225 L50 210 L35 205Z" fill="white" opacity="0.08" />
                  <path d="M340 120 L343 112 L346 120 L354 123 L346 126 L343 134 L340 126 L332 123Z" fill="white" opacity="0.08" />
                </svg>

                {/* Product image placeholder — replace gradient content with <Image> when image is ready */}
                <div className="relative z-10 text-center">
                  <span className="text-white/90 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wider uppercase">
                    Orma
                  </span>
                  <p className="mt-2 text-white/60 text-lg font-medium">
                    Detergent Powder
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
