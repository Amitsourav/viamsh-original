'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const distributorBenefits = [
  'Exclusive territory rights with no competition',
  'Industry-leading margins and fast ROI',
  'Full marketing support and training from Viamsh',
];

export default function CTASections() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shop Now CTA */}
          <AnimatedSection direction="left">
            <div className="relative overflow-hidden rounded-2xl p-8 lg:p-10 h-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5]">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Shop Now
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-2">
                  Experience the cleaning power of Orma Detergent Powder.
                  Available in Economy, Regular, and Value Pack sizes starting at
                  just{' '}
                  <span className="font-bold text-white">&#8377;10</span>.
                </p>
                <p className="text-white/70 mb-8">
                  Free delivery on orders above &#8377;199. Shop with confidence.
                </p>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#6366F1] font-semibold hover:bg-[#EEF2FF] transition-colors shadow-lg"
                >
                  Browse Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Become a Distributor CTA */}
          <AnimatedSection direction="right">
            <div className="relative overflow-hidden rounded-2xl p-8 lg:p-10 h-full bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
              <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-[#8B5CF6] to-transparent" />
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-transparent to-[#8B5CF6]" />

              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#A78BFA] mb-4">
                  Become a Distributor
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Partner with Viamsh FMCG and grow your business with
                  India&apos;s rising consumer brand.
                </p>

                <ul className="space-y-3 mb-8">
                  {distributorBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 text-[#A78BFA] shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/distributors"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B5CF6] text-white font-semibold hover:bg-[#7C3AED] transition-colors shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Newsletter section */}
        <AnimatedSection delay={0.2} className="mt-16">
          <div className="bg-[#0F172A] rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for product launches, exclusive
              offers, and cleaning tips delivered straight to your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#6366F1] text-white font-semibold hover:bg-[#4F46E5] transition-colors cursor-pointer shadow-lg"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
