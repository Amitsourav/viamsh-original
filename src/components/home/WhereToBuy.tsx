'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { MapPin, Store, Globe, Phone } from 'lucide-react';

const regions = [
  'Jharkhand',
  'Bihar',
  'West Bengal',
  'Odisha',
  'Uttar Pradesh',
  'Chhattisgarh',
  'Madhya Pradesh',
  'Assam',
];

const channels = [
  { icon: Store, title: 'Retail Stores', description: '500+ partner stores across 8 states' },
  { icon: Globe, title: 'Online', description: 'Available on our website with pan-India delivery' },
  { icon: Phone, title: 'WhatsApp Order', description: 'Message us directly for quick orders' },
];

export default function WhereToBuy() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Where to Buy
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#6B7280]">
            Orma Detergent Powder is available across India through multiple channels.
          </p>
          <div className="mt-4 w-20 h-1 bg-[#6366F1] mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Channels */}
          <AnimatedSection direction="left">
            <div className="space-y-4">
              {channels.map((channel) => (
                <div
                  key={channel.title}
                  className="flex items-start gap-4 p-5 rounded-xl bg-[#F5F5F7] hover:bg-[#EEF2FF] transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm shrink-0">
                    <channel.icon className="h-6 w-6 text-[#6366F1]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">{channel.title}</h3>
                    <p className="text-sm text-[#6B7280] mt-1">{channel.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-[#9CA3AF]">
              Don&apos;t see Orma in your area?{' '}
              <a href="/contact" className="text-[#6366F1] font-semibold hover:underline">
                Request availability
              </a>{' '}
              and we&apos;ll work to bring it to you.
            </p>

            {/* Delivery illustration */}
            <div className="mt-6">
              <svg viewBox="0 0 440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Road */}
                <rect x="0" y="160" width="440" height="4" rx="2" fill="#E2E8F0" />
                <rect x="30" y="160" width="20" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="80" y="160" width="20" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="130" y="160" width="20" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="180" y="160" width="20" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="230" y="160" width="20" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="280" y="160" width="20" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="330" y="160" width="20" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="380" y="160" width="20" height="3" rx="1.5" fill="#CBD5E1" />

                {/* Store building */}
                <rect x="20" y="80" width="90" height="80" rx="6" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
                <rect x="20" y="80" width="90" height="20" rx="6" fill="#6366F1" opacity="0.1" />
                <rect x="45" y="85" width="40" height="8" rx="4" fill="#6366F1" opacity="0.3" />
                {/* Store window */}
                <rect x="32" y="110" width="24" height="20" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
                <rect x="74" y="110" width="24" height="20" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
                {/* Store door */}
                <rect x="52" y="138" width="26" height="22" rx="3" fill="#6366F1" opacity="0.15" stroke="#6366F1" strokeWidth="1" />
                {/* Store label */}
                <text x="65" y="75" textAnchor="middle" fill="#6366F1" fontSize="10" fontWeight="600" fontFamily="sans-serif">Store</text>

                {/* Delivery truck */}
                <rect x="180" y="115" width="70" height="45" rx="5" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
                <rect x="180" y="115" width="70" height="14" rx="5" fill="#6366F1" opacity="0.12" />
                {/* Truck cargo area dots */}
                <rect x="190" y="135" width="14" height="14" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
                <rect x="210" y="135" width="14" height="14" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
                <rect x="230" y="135" width="14" height="14" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
                {/* Truck cabin */}
                <rect x="250" y="125" width="30" height="35" rx="4" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
                <rect x="256" y="132" width="18" height="12" rx="2" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
                {/* Wheels */}
                <circle cx="198" cy="162" r="8" fill="#374151" />
                <circle cx="198" cy="162" r="4" fill="#9CA3AF" />
                <circle cx="262" cy="162" r="8" fill="#374151" />
                <circle cx="262" cy="162" r="4" fill="#9CA3AF" />
                {/* Truck label */}
                <text x="215" y="108" textAnchor="middle" fill="#8B5CF6" fontSize="10" fontWeight="600" fontFamily="sans-serif">Free Delivery</text>

                {/* Home */}
                <polygon points="370,90 400,65 430,90" fill="#8B5CF6" opacity="0.1" stroke="#8B5CF6" strokeWidth="1.5" />
                <rect x="378" y="90" width="44" height="38" rx="3" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
                {/* Home window */}
                <rect x="385" y="98" width="12" height="14" rx="2" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
                {/* Home door */}
                <rect x="405" y="106" width="12" height="22" rx="2" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1" />
                {/* Happy face / heart */}
                <path d="M400 55 Q400 48 405 48 Q410 48 410 55 Q410 62 400 68 Q390 62 390 55 Q390 48 395 48 Q400 48 400 55Z" fill="#A78BFA" opacity="0.3" />
                <text x="400" y="142" textAnchor="middle" fill="#8B5CF6" fontSize="10" fontWeight="600" fontFamily="sans-serif">Your Home</text>

                {/* Arrows connecting them */}
                <path d="M115 135 Q145 125 175 130" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
                <polygon points="175,127 180,130 175,133" fill="#6366F1" />
                <path d="M285 140 Q320 130 365 125" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
                <polygon points="365,122 370,125 365,128" fill="#8B5CF6" />

                {/* Sparkle decorations */}
                <path d="M150 50 L152 44 L154 50 L160 52 L154 54 L152 60 L150 54 L144 52Z" fill="#C7D2FE" opacity="0.5" />
                <path d="M310 70 L312 64 L314 70 L320 72 L314 74 L312 80 L310 74 L304 72Z" fill="#A78BFA" opacity="0.4" />
                <circle cx="140" cy="90" r="2" fill="#D1D5DB" opacity="0.4" />
                <circle cx="340" cy="50" r="2" fill="#D1D5DB" opacity="0.4" />
              </svg>
            </div>
          </AnimatedSection>

          {/* Right — India Map + States + CTA */}
          <AnimatedSection direction="right">
            <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB]">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-[#6366F1]" />
                <h3 className="font-bold text-[#1A1A1A]">Available in 8+ States</h3>
              </div>

              {/* India Map */}
              <div className="flex justify-center">
                <Image
                  src="/india-map.svg"
                  alt="India map showing Orma availability across 8 states"
                  width={360}
                  height={400}
                  className="w-full max-w-xs h-auto"
                  priority={false}
                />
              </div>

              {/* State chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                {regions.map((region) => (
                  <span
                    key={region}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      region === 'Jharkhand'
                        ? 'bg-[#6366F1] text-white'
                        : 'bg-white border border-[#E5E7EB] text-[#374151]'
                    }`}
                  >
                    {region}
                    {region === 'Jharkhand' && <span className="ml-1 text-xs opacity-80">HQ</span>}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white text-center">
                <p className="font-bold text-lg">Expanding Rapidly</p>
                <p className="text-sm text-white/80 mt-1">
                  Adding 5 new states in 2026. Want to be our distribution partner?
                </p>
                <a
                  href="/distributors"
                  className="inline-block mt-3 px-5 py-2 rounded-full bg-white text-[#6366F1] text-sm font-semibold hover:bg-[#EEF2FF] transition-colors"
                >
                  Partner with Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
