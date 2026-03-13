'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';
import Counter from '@/components/shared/Counter';
import { Shield, IndianRupee, Heart } from 'lucide-react';

const stats = [
  { end: 10000, suffix: '+', label: 'Happy Customers' },
  { end: 50, suffix: '+', label: 'Distributors' },
  { end: 15, suffix: '+', label: 'Cities' },
];

const brandValues = [
  {
    icon: <Shield className="w-10 h-10 text-[#6366F1]" />,
    title: 'Quality',
    description:
      'Every product is rigorously tested to deliver consistent, dependable performance that Indian families can trust.',
  },
  {
    icon: <IndianRupee className="w-10 h-10 text-[#6366F1]" />,
    title: 'Affordability',
    description:
      'Premium cleaning power at prices that respect your budget. Great value without compromising on results.',
  },
  {
    icon: <Heart className="w-10 h-10 text-[#6366F1]" />,
    title: 'Trust',
    description:
      'Born in Ranchi, loved across India. We build lasting relationships with every customer and distributor.',
  },
];

/* ---------- Factory / City Illustration ---------- */
function StoryIllustration() {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Sky gradient background */}
      <rect width="400" height="320" rx="20" fill="#F8FAFC" />
      <rect y="220" width="400" height="100" rx="0" fill="#EEF2FF" />

      {/* Sun */}
      <circle cx="320" cy="60" r="30" fill="#FEF3C7" />
      <circle cx="320" cy="60" r="22" fill="#FDE68A" />

      {/* Clouds */}
      <ellipse cx="80" cy="50" rx="35" ry="14" fill="white" />
      <ellipse cx="65" cy="46" rx="20" ry="10" fill="white" />
      <ellipse cx="200" cy="35" rx="28" ry="11" fill="white" opacity="0.7" />

      {/* Factory building */}
      <rect x="40" y="120" width="120" height="100" rx="4" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
      {/* Factory roof */}
      <polygon points="30,120 100,80 170,120" fill="#6366F1" opacity="0.15" />
      <polygon points="30,120 100,80 170,120" fill="none" stroke="#6366F1" strokeWidth="1.5" />
      {/* Chimney */}
      <rect x="120" y="70" width="16" height="50" rx="2" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1" />
      {/* Smoke puffs */}
      <circle cx="128" cy="58" r="8" fill="#E5E7EB" opacity="0.6" />
      <circle cx="135" cy="45" r="6" fill="#E5E7EB" opacity="0.4" />
      <circle cx="125" cy="35" r="5" fill="#E5E7EB" opacity="0.3" />
      {/* Factory windows */}
      <rect x="55" y="140" width="18" height="22" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      <rect x="85" y="140" width="18" height="22" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      <rect x="115" y="140" width="18" height="22" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      {/* Factory door */}
      <rect x="80" y="185" width="30" height="35" rx="4" fill="#6366F1" opacity="0.2" stroke="#6366F1" strokeWidth="1" />
      {/* Viamsh label on factory */}
      <rect x="55" y="175" width="80" height="6" rx="3" fill="#6366F1" opacity="0.3" />

      {/* Product box / detergent pack */}
      <rect x="190" y="150" width="55" height="70" rx="6" fill="white" stroke="#8B5CF6" strokeWidth="2" />
      <rect x="198" y="158" width="39" height="10" rx="3" fill="#8B5CF6" opacity="0.2" />
      <rect x="200" y="175" width="35" height="5" rx="2.5" fill="#C7D2FE" />
      <rect x="200" y="185" width="28" height="5" rx="2.5" fill="#E5E7EB" />
      <circle cx="217" cy="205" r="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
      <text x="217" y="209" textAnchor="middle" fill="#6366F1" fontSize="10" fontWeight="bold" fontFamily="sans-serif">O</text>

      {/* Arrow from factory to product */}
      <path d="M165 180 Q178 180 185 180" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 3" fill="none" markerEnd="url(#arrowStory)" />
      <defs>
        <marker id="arrowStory" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#6366F1" />
        </marker>
      </defs>

      {/* Delivery truck */}
      <rect x="270" y="185" width="60" height="35" rx="4" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
      <rect x="270" y="185" width="60" height="12" rx="4" fill="#6366F1" opacity="0.15" />
      <rect x="330" y="195" width="25" height="25" rx="3" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
      <rect x="336" y="200" width="14" height="10" rx="2" fill="#EEF2FF" />
      {/* Wheels */}
      <circle cx="285" cy="222" r="7" fill="#374151" />
      <circle cx="285" cy="222" r="3" fill="#9CA3AF" />
      <circle cx="340" cy="222" r="7" fill="#374151" />
      <circle cx="340" cy="222" r="3" fill="#9CA3AF" />

      {/* Arrow from product to truck */}
      <path d="M248 195 Q258 195 265 195" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 3" fill="none" markerEnd="url(#arrowStory2)" />
      <defs>
        <marker id="arrowStory2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#8B5CF6" />
        </marker>
      </defs>

      {/* Home */}
      <polygon points="370,165 395,145 420,165" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1" />
      <rect x="375" y="165" width="40" height="35" rx="2" fill="white" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="382" y="173" width="10" height="12" rx="2" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      <rect x="400" y="180" width="10" height="20" rx="2" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1" />

      {/* Ground details */}
      <rect x="20" y="225" width="360" height="2" rx="1" fill="#D1D5DB" opacity="0.5" />
      {/* Small trees */}
      <rect x="175" y="230" width="4" height="15" rx="1" fill="#A78BFA" opacity="0.4" />
      <circle cx="177" cy="225" r="10" fill="#A78BFA" opacity="0.15" />
      <rect x="260" y="235" width="3" height="12" rx="1" fill="#A78BFA" opacity="0.4" />
      <circle cx="261" cy="230" r="8" fill="#A78BFA" opacity="0.15" />

      {/* Labels */}
      <text x="100" y="260" textAnchor="middle" fill="#6366F1" fontSize="10" fontWeight="600" fontFamily="sans-serif">Made in Ranchi</text>
      <text x="300" y="260" textAnchor="middle" fill="#8B5CF6" fontSize="10" fontWeight="600" fontFamily="sans-serif">Delivered Across India</text>

      {/* Decorative dots */}
      <circle cx="15" cy="280" r="2" fill="#C7D2FE" opacity="0.5" />
      <circle cx="385" cy="280" r="2" fill="#C7D2FE" opacity="0.5" />
      <circle cx="200" cy="290" r="2" fill="#C7D2FE" opacity="0.4" />
    </svg>
  );
}

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Our Story
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#6366F1] mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Illustration */}
          <AnimatedSection direction="left" delay={0.15}>
            <StoryIllustration />
          </AnimatedSection>

          {/* Right — Text + Stats */}
          <AnimatedSection direction="right" delay={0.25}>
            <p className="text-lg leading-relaxed text-[#4B5563]">
              Founded in the heart of Ranchi, Jharkhand, <strong className="text-[#1A1A1A]">Viamsh FMCG Pvt. Ltd.</strong> was
              born from a simple conviction: every Indian household deserves access to
              high-quality everyday products at honest prices. Our journey began with a
              deep understanding of the needs of families across Tier-2 and Tier-3 cities.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
              Our flagship product, <strong className="text-[#1A1A1A]">Orma Detergent Powder</strong>, embodies this
              mission. Engineered for powerful stain removal and a long-lasting fragrance,
              Orma is designed for both hand wash and machine wash, making it the ideal
              companion for every laundry routine.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
              With a growing network of distributors and retailers, we are rapidly expanding
              our presence across India. Our commitment to quality, affordability, and
              customer satisfaction drives everything we do as we build a brand that Indian
              families can rely on, every single day.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-[#F5F5F7] rounded-2xl p-6"
                >
                  <Counter
                    end={stat.end}
                    suffix={stat.suffix}
                    className="text-3xl lg:text-4xl font-bold text-[#6366F1]"
                  />
                  <p className="mt-1 text-sm font-medium text-[#4B5563]">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4} className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandValues.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-[#E5E7EB]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EEF2FF] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{value.title}</h3>
                <p className="leading-relaxed text-[#6B7280]">{value.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
