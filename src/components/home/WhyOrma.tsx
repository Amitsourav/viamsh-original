'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';

/* ---------- Mini SVG Illustrations ---------- */
function ValueIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
      <circle cx="32" cy="32" r="28" fill="#EEF2FF" />
      <circle cx="32" cy="28" r="14" fill="white" stroke="#6366F1" strokeWidth="2" />
      <text x="32" y="33" textAnchor="middle" fill="#6366F1" fontSize="14" fontWeight="bold" fontFamily="sans-serif">₹</text>
      <path d="M22 44 L32 50 L42 44" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="14" cy="20" r="3" fill="#C7D2FE" />
      <circle cx="50" cy="20" r="3" fill="#C7D2FE" />
      <circle cx="32" cy="10" r="2" fill="#A78BFA" opacity="0.5" />
    </svg>
  );
}

function StainIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
      <circle cx="32" cy="32" r="28" fill="#EEF2FF" />
      {/* Water drops */}
      <path d="M24 18 Q24 28 24 30 A6 6 0 0 0 36 30 Q36 28 24 18Z" fill="#6366F1" opacity="0.2" stroke="#6366F1" strokeWidth="1.5" />
      <path d="M36 26 Q36 34 36 36 A5 5 0 0 0 46 36 Q46 34 36 26Z" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
      {/* Sparkle */}
      <path d="M18 42 L20 36 L22 42 L28 44 L22 46 L20 52 L18 46 L12 44Z" fill="#A78BFA" opacity="0.4" />
      {/* Stain blob being removed */}
      <circle cx="42" cy="48" r="6" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="38" y1="44" x2="46" y2="52" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FragranceIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
      <circle cx="32" cy="32" r="28" fill="#EEF2FF" />
      {/* Flower center */}
      <circle cx="32" cy="34" r="6" fill="#8B5CF6" opacity="0.3" stroke="#8B5CF6" strokeWidth="1.5" />
      {/* Petals */}
      <ellipse cx="32" cy="22" rx="5" ry="8" fill="#C7D2FE" />
      <ellipse cx="43" cy="30" rx="5" ry="8" fill="#C7D2FE" transform="rotate(60 43 30)" />
      <ellipse cx="43" cy="42" rx="5" ry="8" fill="#C7D2FE" transform="rotate(120 43 42)" />
      <ellipse cx="32" cy="46" rx="5" ry="8" fill="#C7D2FE" />
      <ellipse cx="21" cy="42" rx="5" ry="8" fill="#C7D2FE" transform="rotate(-120 21 42)" />
      <ellipse cx="21" cy="30" rx="5" ry="8" fill="#C7D2FE" transform="rotate(-60 21 30)" />
      {/* Scent waves */}
      <path d="M48 16 Q52 20 48 24" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M52 14 Q57 20 52 26" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
    </svg>
  );
}

function FabricIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
      <circle cx="32" cy="32" r="28" fill="#EEF2FF" />
      {/* T-shirt shape */}
      <path d="M18 20 L26 16 L32 22 L38 16 L46 20 L42 28 L40 28 L40 48 L24 48 L24 28 L22 28Z" fill="white" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round" />
      {/* Shield on shirt */}
      <path d="M28 32 L32 30 L36 32 L36 38 Q32 42 28 38Z" fill="#6366F1" opacity="0.15" stroke="#6366F1" strokeWidth="1" />
      <path d="M30 35 L31.5 37 L35 33" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EcoIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
      <circle cx="32" cy="32" r="28" fill="#EEF2FF" />
      {/* Leaf */}
      <path d="M20 44 Q20 24 44 18 Q44 42 24 48Z" fill="#A78BFA" opacity="0.2" stroke="#8B5CF6" strokeWidth="2" />
      {/* Leaf vein */}
      <path d="M22 44 Q30 36 42 20" stroke="#8B5CF6" strokeWidth="1" fill="none" />
      <path d="M28 40 Q30 34 34 30" stroke="#8B5CF6" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Water drops */}
      <circle cx="48" cy="28" r="3" fill="#C7D2FE" />
      <circle cx="50" cy="36" r="2" fill="#C7D2FE" opacity="0.6" />
      {/* Recycle circle hint */}
      <path d="M14 30 A5 5 0 0 1 20 24" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}

function LabIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
      <circle cx="32" cy="32" r="28" fill="#EEF2FF" />
      {/* Flask */}
      <rect x="27" y="14" width="10" height="16" rx="2" fill="white" stroke="#6366F1" strokeWidth="2" />
      <path d="M24 30 L27 30 L27 28 L37 28 L37 30 L40 30 L44 46 Q44 50 40 50 L24 50 Q20 50 20 46Z" fill="white" stroke="#6366F1" strokeWidth="2" />
      {/* Liquid inside */}
      <path d="M22 42 L42 42 L44 46 Q44 50 40 50 L24 50 Q20 50 20 46Z" fill="#8B5CF6" opacity="0.15" />
      {/* Bubbles */}
      <circle cx="30" cy="44" r="2.5" fill="#C7D2FE" />
      <circle cx="36" cy="46" r="2" fill="#C7D2FE" opacity="0.7" />
      <circle cx="33" cy="40" r="1.5" fill="#C7D2FE" opacity="0.5" />
      {/* Checkmark badge */}
      <circle cx="48" cy="18" r="7" fill="#6366F1" opacity="0.15" stroke="#6366F1" strokeWidth="1.5" />
      <path d="M44 18 L47 21 L52 15" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const differentiators = [
  {
    illustration: <ValueIllustration />,
    title: 'Unbeatable Value',
    description: 'Premium cleaning starting at just ₹10. More power per rupee than any leading brand.',
  },
  {
    illustration: <StainIllustration />,
    title: 'Superior Stain Removal',
    description: 'Advanced formula tackles the toughest stains — oil, mud, turmeric, ink — in a single wash.',
  },
  {
    illustration: <FragranceIllustration />,
    title: 'All-day Fragrance',
    description: 'Long-lasting freshness that keeps your clothes smelling clean from morning to night.',
  },
  {
    illustration: <FabricIllustration />,
    title: 'Fabric Safe',
    description: 'Gentle on all fabrics and colours. Safe for hand wash, top-load, and front-load machines.',
  },
  {
    illustration: <EcoIllustration />,
    title: 'Eco-conscious Formula',
    description: 'Reduced phosphates and biodegradable ingredients for a cleaner wash and a cleaner planet.',
  },
  {
    illustration: <LabIllustration />,
    title: 'Lab Tested Quality',
    description: 'Every batch undergoes rigorous quality testing in our Ranchi facility before reaching your home.',
  },
];

export default function WhyOrma() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Why Choose Orma?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#6B7280]">
            See how Orma Detergent Powder stands apart from the rest.
          </p>
          <div className="mt-4 w-20 h-1 bg-[#6366F1] mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => (
            <AnimatedSection key={item.title} delay={idx * 0.08}>
              <div className="h-full p-6 rounded-2xl bg-[#F5F5F7] hover:bg-[#EEF2FF] transition-colors group">
                {item.illustration}
                <h3 className="mt-4 text-lg font-bold text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-2 text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
