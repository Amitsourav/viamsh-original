'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

/* ---------- FAQ Illustration ---------- */
function FAQIllustration() {
  return (
    <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Background shapes */}
      <circle cx="240" cy="200" r="160" fill="#EEF2FF" opacity="0.5" />
      <circle cx="240" cy="200" r="120" fill="#EEF2FF" opacity="0.4" />

      {/* Open book / document */}
      <rect x="100" y="120" width="280" height="200" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="2" />
      {/* Spine line */}
      <line x1="240" y1="120" x2="240" y2="320" stroke="#E5E7EB" strokeWidth="1.5" />

      {/* Left page content - text lines */}
      <rect x="125" y="150" width="90" height="8" rx="4" fill="#C7D2FE" />
      <rect x="125" y="170" width="80" height="6" rx="3" fill="#E5E7EB" />
      <rect x="125" y="186" width="85" height="6" rx="3" fill="#E5E7EB" />
      <rect x="125" y="202" width="70" height="6" rx="3" fill="#E5E7EB" />
      {/* Checkmark items */}
      <circle cx="132" cy="230" r="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
      <path d="M128 230 L131 233 L137 226" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="148" y="227" width="65" height="6" rx="3" fill="#D1D5DB" />
      <circle cx="132" cy="254" r="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
      <path d="M128 254 L131 257 L137 250" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="148" y="251" width="55" height="6" rx="3" fill="#D1D5DB" />
      <circle cx="132" cy="278" r="8" fill="#EEF2FF" stroke="#8B5CF6" strokeWidth="1.5" />
      <path d="M128 278 L131 281 L137 274" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="148" y="275" width="60" height="6" rx="3" fill="#D1D5DB" />

      {/* Right page - Q&A style */}
      <rect x="262" y="148" width="18" height="18" rx="9" fill="#6366F1" />
      <text x="271" y="161" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Q</text>
      <rect x="288" y="152" width="70" height="6" rx="3" fill="#C7D2FE" />
      <rect x="288" y="164" width="55" height="5" rx="2.5" fill="#E5E7EB" />

      <rect x="262" y="186" width="18" height="18" rx="9" fill="#8B5CF6" />
      <text x="271" y="199" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Q</text>
      <rect x="288" y="190" width="65" height="6" rx="3" fill="#C7D2FE" />
      <rect x="288" y="202" width="50" height="5" rx="2.5" fill="#E5E7EB" />

      <rect x="262" y="224" width="18" height="18" rx="9" fill="#A78BFA" />
      <text x="271" y="237" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Q</text>
      <rect x="288" y="228" width="60" height="6" rx="3" fill="#C7D2FE" />
      <rect x="288" y="240" width="45" height="5" rx="2.5" fill="#E5E7EB" />

      <rect x="262" y="262" width="18" height="18" rx="9" fill="#6366F1" opacity="0.6" />
      <text x="271" y="275" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Q</text>
      <rect x="288" y="266" width="55" height="6" rx="3" fill="#C7D2FE" opacity="0.6" />

      {/* Magnifying glass on top */}
      <circle cx="350" cy="100" r="32" fill="white" stroke="#6366F1" strokeWidth="3" />
      <circle cx="350" cy="100" r="22" fill="#EEF2FF" />
      <line x1="372" y1="122" x2="395" y2="145" stroke="#6366F1" strokeWidth="5" strokeLinecap="round" />
      {/* Question mark inside magnifying glass */}
      <text x="350" y="110" textAnchor="middle" fill="#6366F1" fontSize="28" fontWeight="bold" fontFamily="sans-serif">?</text>

      {/* Light bulb - top left (answers / knowledge) */}
      <circle cx="115" cy="80" r="24" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
      <rect x="108" y="104" width="14" height="8" rx="3" fill="#F59E0B" opacity="0.6" />
      <rect x="110" y="112" width="10" height="4" rx="2" fill="#F59E0B" opacity="0.4" />
      {/* Light rays */}
      <line x1="115" y1="48" x2="115" y2="40" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="140" y1="58" x2="146" y2="52" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="90" y1="58" x2="84" y2="52" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="148" y1="80" x2="155" y2="80" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <line x1="82" y1="80" x2="75" y2="80" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

      {/* Chat bubbles - bottom */}
      <rect x="80" y="340" width="100" height="40" rx="12" fill="#6366F1" />
      <polygon points="120,380 130,395 140,380" fill="#6366F1" />
      <rect x="100" y="353" width="55" height="5" rx="2.5" fill="white" opacity="0.7" />
      <rect x="100" y="363" width="40" height="5" rx="2.5" fill="white" opacity="0.5" />

      <rect x="310" y="340" width="100" height="40" rx="12" fill="#EEF2FF" stroke="#D1D5DB" strokeWidth="1.5" />
      <polygon points="370,380 360,395 350,380" fill="#EEF2FF" stroke="#D1D5DB" strokeWidth="1.5" />
      <rect x="325" y="353" width="60" height="5" rx="2.5" fill="#C7D2FE" />
      <rect x="325" y="363" width="45" height="5" rx="2.5" fill="#E5E7EB" />

      {/* Sparkle decorations */}
      <path d="M430 180 L433 170 L436 180 L446 183 L436 186 L433 196 L430 186 L420 183Z" fill="#8B5CF6" opacity="0.3" />
      <path d="M50 250 L52 244 L54 250 L60 252 L54 254 L52 260 L50 254 L44 252Z" fill="#A78BFA" opacity="0.3" />
      <path d="M440 300 L442 294 L444 300 L450 302 L444 304 L442 310 L440 304 L434 302Z" fill="#C7D2FE" opacity="0.35" />

      {/* Small dots */}
      <circle cx="35" cy="160" r="3" fill="#D1D5DB" opacity="0.4" />
      <circle cx="45" cy="170" r="2" fill="#D1D5DB" opacity="0.3" />
      <circle cx="455" cy="240" r="3" fill="#D1D5DB" opacity="0.4" />
      <circle cx="465" cy="250" r="2" fill="#D1D5DB" opacity="0.3" />
    </svg>
  );
}

const faqs = [
  {
    question: 'Is Orma Detergent safe for coloured clothes?',
    answer:
      'Yes! Orma is formulated to be gentle on colours while being tough on stains. It contains optical brighteners that protect fabric colour integrity wash after wash.',
  },
  {
    question: 'Can I use Orma in a washing machine?',
    answer:
      'Absolutely. Orma Detergent Powder works great in both top-load and front-load washing machines, as well as for hand wash. Use 2 scoops per machine load for best results.',
  },
  {
    question: 'What sizes are available and what are the prices?',
    answer:
      'Orma is available in three sizes: Economy (80gm) at ₹10, Regular (500gm) at ₹50, and Value Pack (1Kg) at ₹100. The Value Pack offers the best per-gram value.',
  },
  {
    question: 'Is Orma eco-friendly?',
    answer:
      'Yes. Our formula uses reduced phosphates and biodegradable surfactants that break down naturally. We are committed to minimising our environmental footprint without compromising on cleaning power.',
  },
  {
    question: 'How does Orma compare to Surf Excel or Tide?',
    answer:
      'Orma delivers comparable cleaning performance at a significantly lower price point. Our lab-tested formula removes tough stains effectively while being gentler on fabrics and easier on your budget.',
  },
  {
    question: 'How can I become an Orma distributor?',
    answer:
      'We are actively expanding our distribution network. Visit our Distributors page or WhatsApp us at +91 92962 90854 to learn about exclusive territory rights, margins, and support we offer.',
  },
  {
    question: 'Do you offer free delivery?',
    answer:
      'Yes! We offer free delivery on all orders above ₹199. Orders are typically delivered within 3–5 business days depending on your location.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-[#F5F5F7] transition-colors"
      >
        <span className="font-semibold text-[#1A1A1A]">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 text-[#6366F1] shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <p className="px-6 pb-5 text-[#6B7280] leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Heading + Illustration */}
          <AnimatedSection direction="left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-[#6B7280] max-w-md">
              Everything you need to know about Orma Detergent Powder. Can&apos;t find your answer?{' '}
              <a href="/contact" className="text-[#6366F1] font-semibold hover:underline">
                Contact us
              </a>
            </p>
            <div className="mt-4 w-20 h-1 bg-[#8B5CF6] rounded-full" />

            {/* FAQ Illustration */}
            <div className="mt-8">
              <FAQIllustration />
            </div>
          </AnimatedSection>

          {/* Right — Accordion */}
          <AnimatedSection direction="right">
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  faq={faq}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
