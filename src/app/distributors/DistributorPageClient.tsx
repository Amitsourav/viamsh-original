'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/shared/AnimatedSection';
import DistributorForm from './DistributorForm';
import {
  TrendingUp,
  MapPin,
  Headphones,
  Package,
  Shield,
  BarChart3,
  Truck,
  GraduationCap,
  Megaphone,
  ChevronDown,
  ChevronRight,
  Phone,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  IndianRupee,
  Clock,
  Handshake,
  Zap,
  Target,
  Award,
} from 'lucide-react';

/* ──────────────────────── Data ──────────────────────── */

const heroStats = [
  { value: '18-22%', label: 'Profit Margins', icon: TrendingUp },
  { value: '50+', label: 'Cities Covered', icon: MapPin },
  { value: '48hrs', label: 'Response Time', icon: Clock },
  { value: '10K+', label: 'Retail Touchpoints', icon: Users },
];

const whyPartner = [
  {
    title: 'Industry-Best Margins',
    desc: 'Earn 18-22% margins on every sale — higher than most national FMCG brands that offer 8-12%. Transparent pricing with no hidden deductions.',
    icon: IndianRupee,
    highlight: '18-22%',
  },
  {
    title: 'Exclusive Territory Rights',
    desc: 'Get exclusive distribution rights in your area. No overlap, no competition from other Viamsh distributors in your designated territory.',
    icon: MapPin,
    highlight: 'Zero overlap',
  },
  {
    title: 'Low Entry Investment',
    desc: 'Start with as low as ₹50,000 initial investment. No hefty security deposits or franchise fees that lock your capital.',
    icon: Target,
    highlight: 'From ₹50K',
  },
  {
    title: 'Dedicated Relationship Manager',
    desc: 'Every distributor gets a personal account manager for order support, strategy planning, and issue resolution. Not a call center — a real person.',
    icon: Headphones,
    highlight: 'Personal support',
  },
  {
    title: 'Full Marketing Support',
    desc: 'We provide POS displays, shelf talkers, banners, product samples, and co-branded local campaigns. You sell, we help you market.',
    icon: Megaphone,
    highlight: 'Free materials',
  },
  {
    title: 'Fast-Moving Products',
    desc: 'Detergents and cleaning products are daily essentials with repeat purchases every 2-4 weeks. High inventory turnover means faster returns.',
    icon: Zap,
    highlight: 'Daily essentials',
  },
];

const earningsData = [
  { tier: 'Starter', investment: '₹50K - ₹1L', monthlyRevenue: '₹80K - ₹2L', monthlyProfit: '₹15K - ₹40K', retailers: '50-100' },
  { tier: 'Growth', investment: '₹1L - ₹3L', monthlyRevenue: '₹2L - ₹6L', monthlyProfit: '₹40K - ₹1.2L', retailers: '100-300' },
  { tier: 'Premium', investment: '₹3L - ₹5L', monthlyRevenue: '₹6L - ₹15L', monthlyProfit: '₹1.2L - ₹3L', retailers: '300-500+' },
];

const onboardingSteps = [
  { step: 1, title: 'Apply Online', desc: 'Fill out the application form below with your business details. Takes less than 5 minutes.', duration: 'Day 1' },
  { step: 2, title: 'Team Review', desc: 'Our distribution team reviews your application and assesses territory availability.', duration: 'Day 1-2' },
  { step: 3, title: 'Discovery Call', desc: 'A 30-minute call to understand your business, discuss territory, and answer your questions.', duration: 'Day 3' },
  { step: 4, title: 'Agreement & Onboarding', desc: 'Sign the distribution agreement, complete KYC, and get access to the distributor portal.', duration: 'Day 4-5' },
  { step: 5, title: 'Training & Starter Kit', desc: 'Receive product training, sales playbook, marketing materials, and your first stock.', duration: 'Day 6-7' },
  { step: 6, title: 'Go Live', desc: 'Start selling with full support from your dedicated relationship manager.', duration: 'Week 2' },
];

const starterKit = [
  { item: 'Initial Product Stock', desc: 'First batch of Orma Detergent in all SKUs (80gm, 500gm, 1Kg)' },
  { item: 'POS Display Stand', desc: 'Branded counter display for retail shops' },
  { item: 'Marketing Materials', desc: 'Banners, posters, shelf talkers, product brochures' },
  { item: 'Product Samples', desc: '100+ sachets for consumer sampling campaigns' },
  { item: 'Sales Playbook', desc: 'Territory mapping, retailer pitch scripts, objection handling guide' },
  { item: 'Distributor Portal Access', desc: 'Digital dashboard for orders, inventory tracking, and sales reports' },
];

const comparisonRows = [
  { feature: 'Distributor Margins', viamsh: '18-22%', national: '8-12%', viamshBetter: true },
  { feature: 'Minimum Investment', viamsh: '₹50,000', national: '₹2-5 Lakhs', viamshBetter: true },
  { feature: 'Territory Exclusivity', viamsh: 'Guaranteed', national: 'Shared / Overlapping', viamshBetter: true },
  { feature: 'Dedicated Account Manager', viamsh: 'Yes — Personal', national: 'Call Center / Regional', viamshBetter: true },
  { feature: 'Response Time', viamsh: '48 Hours', national: '1-2 Weeks', viamshBetter: true },
  { feature: 'Marketing Material', viamsh: 'Free & Customized', national: 'Generic / Paid', viamshBetter: true },
  { feature: 'Return Policy', viamsh: 'Easy Returns', national: 'Strict / No Returns', viamshBetter: true },
  { feature: 'Brand Recognition', viamsh: 'Growing Regional', national: 'Established National', viamshBetter: false },
  { feature: 'Early Mover Advantage', viamsh: 'High — Untapped Areas', national: 'Low — Saturated', viamshBetter: true },
];

const marketStats = [
  { value: '₹6.2L Cr', label: 'Indian FMCG Market (2025)', sub: 'Growing at 10-12% CAGR' },
  { value: '3.8 Cr', label: 'Jharkhand Population', sub: 'Rising purchasing power' },
  { value: '65%', label: 'Rural Market Share', sub: 'Massively underserved' },
  { value: '15%+', label: 'East India FMCG Growth', sub: 'Faster than national average' },
];

const eligibility = [
  { req: 'Storage space of 300-500+ sq ft', optional: false },
  { req: 'Valid GST registration (or willingness to register)', optional: false },
  { req: 'Basic delivery arrangement (vehicle/logistics)', optional: false },
  { req: 'Investment capacity of ₹50,000+', optional: false },
  { req: 'Connections with local retail shops', optional: false },
  { req: 'Prior FMCG distribution experience', optional: true },
  { req: 'Existing distribution infrastructure', optional: true },
  { req: 'Team of 2-3 sales persons', optional: true },
];

const faqData = [
  {
    q: 'What is the minimum investment required?',
    a: 'You can start with as low as ₹50,000 which covers your initial stock purchase. There are no franchise fees, security deposits, or hidden charges. Your entire investment goes into inventory that you sell and earn from.',
  },
  {
    q: 'What profit margins can I expect?',
    a: 'Our distributors earn 18-22% margins on MRP. This is significantly higher than the 8-12% offered by most national FMCG brands. Additionally, we run quarterly incentive programs where top-performing distributors earn bonus margins.',
  },
  {
    q: 'Do I get exclusive territory?',
    a: 'Yes, absolutely. Every distributor gets exclusive rights to their designated territory. We map territories carefully to ensure zero overlap. Your territory is yours alone — no other Viamsh distributor will operate in your area.',
  },
  {
    q: 'What if products don\'t sell? Is there a return policy?',
    a: 'We offer a hassle-free return policy for unsold stock within 90 days of delivery (subject to product condition). We also work with you on sales strategies, provide marketing support, and help with retailer onboarding to ensure healthy sell-through rates.',
  },
  {
    q: 'How quickly can I start after applying?',
    a: 'Our onboarding process takes approximately 2 weeks from application to first delivery. We review applications within 48 hours, conduct a discovery call, and complete agreement and training within the first week. By week 2, you\'re operational.',
  },
  {
    q: 'Do I need prior FMCG experience?',
    a: 'Prior experience is preferred but not mandatory. We provide comprehensive training covering product knowledge, sales techniques, retailer management, and territory planning. Many of our successful distributors started with zero FMCG experience.',
  },
  {
    q: 'What marketing support do you provide?',
    a: 'We provide free POS displays, banners, shelf talkers, product brochures, and consumer samples. We also run co-branded local campaigns, social media promotions for your territory, and seasonal offer programs. All marketing materials are provided at no cost.',
  },
  {
    q: 'Can I distribute only specific product categories?',
    a: 'Yes. While we encourage full portfolio distribution for maximum earnings, you can start with specific categories (e.g., only detergents) and expand as your business grows. We\'ll work with you to find the right product mix for your market.',
  },
  {
    q: 'What digital tools do distributors get?',
    a: 'Every distributor gets access to our digital portal with real-time inventory tracking, order management, sales reports and analytics, payment history, and direct communication with your relationship manager. We\'re also developing a mobile app for on-the-go management.',
  },
  {
    q: 'What areas are currently available for distribution?',
    a: 'We\'re actively expanding across Jharkhand, Bihar, West Bengal, Odisha, and Chhattisgarh. Many districts in these states are still open for distributor appointments. Apply now and we\'ll confirm availability for your specific area within 48 hours.',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Ranchi, Jharkhand',
    role: 'Distributor since 2024',
    quote: 'The margins are genuinely better than what I was earning with a national brand. The personal support from my account manager makes all the difference.',
    rating: 5,
  },
  {
    name: 'Sunita Devi',
    location: 'Jamshedpur, Jharkhand',
    role: 'Distributor since 2024',
    quote: 'I started with just ₹75,000 investment. Within 6 months, my monthly revenue crossed ₹3 lakhs. Viamsh products sell fast because customers love the quality.',
    rating: 5,
  },
  {
    name: 'Amit Sharma',
    location: 'Dhanbad, Jharkhand',
    role: 'Distributor since 2025',
    quote: 'What impressed me most was the transparency. They showed me exact margins, gave me exclusive territory, and delivered everything they promised during onboarding.',
    rating: 5,
  },
];

/* ──────────────────────── FAQ Item ──────────────────────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E5E7EB] rounded-xl overflow-hidden transition-colors hover:border-[#C7D2FE]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
      >
        <span className="font-semibold text-[#1A1A1A] text-sm sm:text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#6366F1] shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-[#6B7280] leading-relaxed border-t border-[#F3F4F6]">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────── Main Page ──────────────────────── */

export default function DistributorPageClient() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-[#6366F1] via-[#7C3AED] to-[#8B5CF6] overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                  <Handshake className="w-4 h-4" />
                  Distribution Partnership Program
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                  Grow Your Business with{' '}
                  <span className="text-[#FDE68A]">Viamsh FMCG</span>
                </h1>
                <p className="mt-5 text-lg sm:text-xl text-white/75">
                  Join Jharkhand&apos;s fastest-growing FMCG brand. Earn 18-22% margins, get exclusive territory, and build a profitable distribution business with full support.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#apply"
                    className="px-8 py-3.5 rounded-full bg-white text-[#6366F1] font-bold hover:bg-[#EEF2FF] transition-colors shadow-lg"
                  >
                    Apply Now — It&apos;s Free
                  </a>
                  <a
                    href="https://wa.me/919296290854?text=Hi%2C%20I%20want%20to%20become%20a%20Viamsh%20distributor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1EB954] transition-colors shadow-lg flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Hero Illustration — Partnership Network */}
            <AnimatedSection delay={0.2}>
              <div className="hidden lg:flex justify-center">
                <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
                  {/* Central hub */}
                  <circle cx="200" cy="160" r="50" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
                  <circle cx="200" cy="160" r="38" fill="#6366F1" stroke="white" strokeWidth="2.5" />
                  {/* V logo in center */}
                  <text x="200" y="168" textAnchor="middle" fill="white" fontSize="28" fontWeight="800" fontFamily="system-ui">V</text>

                  {/* Connection lines */}
                  <line x1="200" y1="110" x2="200" y2="50" stroke="#FDE68A" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="248" y1="135" x2="310" y2="90" stroke="#FDE68A" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="248" y1="185" x2="310" y2="230" stroke="#FDE68A" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="152" y1="135" x2="90" y2="90" stroke="#FDE68A" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="152" y1="185" x2="90" y2="230" stroke="#FDE68A" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="200" y1="210" x2="200" y2="270" stroke="#FDE68A" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />

                  {/* Distributor nodes */}
                  {/* Top */}
                  <circle cx="200" cy="38" r="22" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
                  <rect x="189" y="28" width="22" height="16" rx="2" fill="white" fillOpacity="0.7" />
                  <rect x="194" y="46" width="12" height="3" rx="1" fill="white" fillOpacity="0.5" />

                  {/* Top-right */}
                  <circle cx="322" cy="78" r="22" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
                  <path d="M312 72h20l2 14h-24l2-14z" fill="white" fillOpacity="0.7" />
                  <circle cx="322" cy="67" r="5" fill="white" fillOpacity="0.5" />

                  {/* Bottom-right */}
                  <circle cx="322" cy="242" r="22" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
                  <rect x="311" y="232" width="22" height="16" rx="2" fill="white" fillOpacity="0.7" />
                  <rect x="316" y="250" width="12" height="3" rx="1" fill="white" fillOpacity="0.5" />

                  {/* Top-left */}
                  <circle cx="78" cy="78" r="22" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
                  <path d="M68 72h20l2 14H66l2-14z" fill="white" fillOpacity="0.7" />
                  <circle cx="78" cy="67" r="5" fill="white" fillOpacity="0.5" />

                  {/* Bottom-left */}
                  <circle cx="78" cy="242" r="22" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
                  <rect x="67" y="232" width="22" height="16" rx="2" fill="white" fillOpacity="0.7" />
                  <rect x="72" y="250" width="12" height="3" rx="1" fill="white" fillOpacity="0.5" />

                  {/* Bottom-center */}
                  <circle cx="200" cy="282" r="22" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
                  <path d="M190 276h20l2 14h-24l2-14z" fill="white" fillOpacity="0.7" />
                  <circle cx="200" cy="271" r="5" fill="white" fillOpacity="0.5" />

                  {/* Glow effects on nodes */}
                  <circle cx="200" cy="160" r="55" fill="none" stroke="#FDE68A" strokeWidth="1" opacity="0.2" />
                  <circle cx="200" cy="160" r="65" fill="none" stroke="#FDE68A" strokeWidth="0.5" opacity="0.1" />

                  {/* Labels */}
                  <text x="200" y="340" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="12" fontWeight="600" fontFamily="system-ui">Your Distribution Network</text>
                </svg>
              </div>
            </AnimatedSection>
          </div>

          {/* Hero Stats */}
          <AnimatedSection delay={0.3}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                  <stat.icon className="w-5 h-5 text-[#FDE68A] mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section className="bg-[#0F172A] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            {[
              { icon: Shield, text: 'ISO Certified Products' },
              { icon: Award, text: 'BIS Standard Quality' },
              { icon: Truck, text: 'Pan-India Logistics' },
              { icon: Headphones, text: '48-Hour Response Guarantee' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/70">
                <item.icon className="w-4 h-4 text-[#FDE68A]" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY PARTNER WITH US ═══ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Why Viamsh?</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                Built for Distributor Success
              </h2>
              <p className="mt-3 text-[#6B7280]">
                We don&apos;t just sell products — we build profitable partnerships. Here&apos;s what makes Viamsh different.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPartner.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.08}>
                <div className="relative p-6 rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#C7D2FE] hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#6366F1]" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#6366F1]/10 text-[#6366F1] text-xs font-bold">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EARNINGS POTENTIAL ═══ */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Transparent Earnings</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                What You Can Earn
              </h2>
              <p className="mt-3 text-[#6B7280]">
                Real numbers, no guesswork. Here&apos;s what our distributors earn across different investment levels.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {earningsData.map((tier, idx) => (
              <AnimatedSection key={tier.tier} delay={idx * 0.1}>
                <div className={`relative p-7 rounded-2xl border-2 transition-all duration-300 ${
                  idx === 1
                    ? 'border-[#6366F1] bg-white shadow-xl shadow-[#6366F1]/10'
                    : 'border-[#E5E7EB] bg-white hover:border-[#C7D2FE]'
                }`}>
                  {idx === 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#6366F1] text-white text-xs font-bold">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{tier.tier}</h3>
                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs text-[#9CA3AF] font-medium uppercase">Investment</p>
                      <p className="text-xl font-bold text-[#1A1A1A]">{tier.investment}</p>
                    </div>
                    <div className="h-px bg-[#F3F4F6]" />
                    <div>
                      <p className="text-xs text-[#9CA3AF] font-medium uppercase">Monthly Revenue</p>
                      <p className="text-lg font-bold text-[#1A1A1A]">{tier.monthlyRevenue}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#9CA3AF] font-medium uppercase">Monthly Profit</p>
                      <p className="text-xl font-extrabold text-[#059669]">{tier.monthlyProfit}</p>
                    </div>
                    <div className="h-px bg-[#F3F4F6]" />
                    <div>
                      <p className="text-xs text-[#9CA3AF] font-medium uppercase">Retail Network</p>
                      <p className="text-sm font-semibold text-[#6B7280]">{tier.retailers} shops</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p className="mt-8 text-center text-xs text-[#9CA3AF]">
              * Earnings are indicative and based on existing distributor performance. Actual results may vary based on territory, effort, and market conditions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ VIAMSH vs NATIONAL BRANDS ═══ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">The Viamsh Advantage</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                Viamsh vs National Brands
              </h2>
              <p className="mt-3 text-[#6B7280]">
                Why smart distributors are choosing emerging brands with better margins and personal support.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-[#E5E7EB]">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-[#F9FAFB]">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[#6B7280]">Feature</th>
                    <th className="text-center px-6 py-4">
                      <span className="text-sm font-bold text-[#6366F1]">Viamsh FMCG</span>
                    </th>
                    <th className="text-center px-6 py-4">
                      <span className="text-sm font-semibold text-[#9CA3AF]">National Brands</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                      <td className="px-6 py-3.5 text-sm font-medium text-[#374151]">{row.feature}</td>
                      <td className="px-6 py-3.5 text-center">
                        <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                          row.viamshBetter ? 'text-[#059669]' : 'text-[#6B7280]'
                        }`}>
                          {row.viamshBetter && <CheckCircle2 className="w-4 h-4" />}
                          {row.viamsh}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-center text-sm text-[#9CA3AF]">{row.national}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Simple Process</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                From Application to First Sale in 2 Weeks
              </h2>
              <p className="mt-3 text-[#6B7280]">
                Our streamlined onboarding gets you operational faster than any other FMCG brand.
              </p>
            </div>
          </AnimatedSection>

          {/* Journey Timeline Illustration — Desktop */}
          <AnimatedSection delay={0.15}>
            <div className="hidden lg:block mt-12 mb-4">
              <svg viewBox="0 0 900 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-4xl mx-auto">
                {/* Timeline track */}
                <line x1="60" y1="40" x2="840" y2="40" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
                <line x1="60" y1="40" x2="840" y2="40" stroke="url(#timelineGrad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 6" />

                {/* Step nodes */}
                {[60, 216, 372, 528, 684, 840].map((cx, i) => (
                  <g key={i}>
                    <circle cx={cx} cy={40} r="18" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
                    <text x={cx} y={45} textAnchor="middle" fill="#6366F1" fontSize="13" fontWeight="700" fontFamily="system-ui">{i + 1}</text>
                  </g>
                ))}

                {/* Arrow at end */}
                <path d="M846 34l10 6-10 6" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                {/* Gradient def */}
                <defs>
                  <linearGradient id="timelineGrad" x1="60" y1="40" x2="840" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </AnimatedSection>

          <div className="mt-6 lg:mt-0 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {onboardingSteps.map((item, idx) => (
              <AnimatedSection key={item.step} delay={idx * 0.08}>
                <div className="relative p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#6366F1] flex items-center justify-center shrink-0">
                      <span className="text-white text-sm font-bold">{item.step}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#6366F1] text-xs font-bold">
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A1A]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STARTER KIT ═══ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Day 1 Package</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                  Your Distributor Starter Kit
                </h2>
                <p className="mt-3 text-[#6B7280]">
                  Everything you need to hit the ground running — delivered to your doorstep before you start selling.
                </p>

                <div className="mt-8 space-y-4">
                  {starterKit.map((kit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#ECFDF5] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1A1A1A]">{kit.item}</p>
                        <p className="text-xs text-[#6B7280] mt-0.5">{kit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Starter Kit Illustration */}
            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] p-8 lg:p-10">
                <svg viewBox="0 0 400 320" fill="none" className="w-full">
                  {/* Box */}
                  <rect x="80" y="100" width="240" height="160" rx="12" fill="#6366F1" opacity="0.1" stroke="#6366F1" strokeWidth="2" />
                  <rect x="80" y="100" width="240" height="40" rx="12" fill="#6366F1" opacity="0.15" />
                  {/* Box flaps */}
                  <path d="M80 112 L140 70 L200 112" fill="#6366F1" opacity="0.08" stroke="#6366F1" strokeWidth="1.5" />
                  <path d="M320 112 L260 70 L200 112" fill="#6366F1" opacity="0.08" stroke="#6366F1" strokeWidth="1.5" />
                  {/* Viamsh logo on box */}
                  <text x="200" y="125" textAnchor="middle" fill="#6366F1" fontWeight="700" fontSize="14" fontFamily="sans-serif">VIAMSH</text>
                  {/* Items popping out */}
                  {/* Product bottles */}
                  <rect x="110" y="155" width="30" height="50" rx="4" fill="#8B5CF6" opacity="0.6" />
                  <rect x="115" y="160" width="20" height="8" rx="2" fill="white" opacity="0.5" />
                  <rect x="150" y="145" width="30" height="60" rx="4" fill="#6366F1" opacity="0.6" />
                  <rect x="155" y="150" width="20" height="8" rx="2" fill="white" opacity="0.5" />
                  <rect x="190" y="155" width="30" height="50" rx="4" fill="#A78BFA" opacity="0.6" />
                  <rect x="195" y="160" width="20" height="8" rx="2" fill="white" opacity="0.5" />
                  {/* Banner/poster */}
                  <rect x="240" y="145" width="50" height="35" rx="3" fill="#FDE68A" opacity="0.8" stroke="#F59E0B" strokeWidth="1" />
                  <rect x="248" y="153" width="34" height="3" rx="1" fill="#F59E0B" opacity="0.5" />
                  <rect x="248" y="160" width="28" height="3" rx="1" fill="#F59E0B" opacity="0.3" />
                  <rect x="248" y="167" width="20" height="3" rx="1" fill="#F59E0B" opacity="0.3" />
                  {/* Samples sachet */}
                  <rect x="120" y="215" width="22" height="28" rx="3" fill="#34D399" opacity="0.6" />
                  <rect x="148" y="215" width="22" height="28" rx="3" fill="#34D399" opacity="0.4" />
                  <rect x="176" y="215" width="22" height="28" rx="3" fill="#34D399" opacity="0.3" />
                  {/* Playbook */}
                  <rect x="220" y="200" width="60" height="45" rx="4" fill="white" stroke="#6366F1" strokeWidth="1.5" />
                  <rect x="228" y="210" width="44" height="3" rx="1" fill="#6366F1" opacity="0.3" />
                  <rect x="228" y="218" width="36" height="3" rx="1" fill="#6366F1" opacity="0.2" />
                  <rect x="228" y="226" width="40" height="3" rx="1" fill="#6366F1" opacity="0.2" />
                  <text x="250" y="240" textAnchor="middle" fill="#6366F1" fontWeight="600" fontSize="7" fontFamily="sans-serif">SALES PLAYBOOK</text>
                  {/* Sparkles */}
                  <circle cx="100" cy="80" r="3" fill="#FDE68A" />
                  <circle cx="300" cy="75" r="2.5" fill="#A78BFA" />
                  <circle cx="340" cy="130" r="2" fill="#FDE68A" />
                  <circle cx="70" cy="180" r="2" fill="#6366F1" opacity="0.4" />
                </svg>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT PORTFOLIO ═══ */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Our Products</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                What You&apos;ll Distribute
              </h2>
              <p className="mt-3 text-[#6B7280]">
                Fast-moving daily essentials with strong consumer demand and repeat purchases.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Orma Detergent */}
            <AnimatedSection delay={0.05}>
              <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:shadow-lg transition-all">
                <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center mb-5">
                  <span className="text-4xl font-bold text-white/30">O</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-xs font-bold">AVAILABLE NOW</span>
                <h3 className="mt-3 text-lg font-bold text-[#1A1A1A]">Orma Detergent Powder</h3>
                <p className="mt-1.5 text-sm text-[#6B7280]">Our flagship product. Available in 80gm, 500gm, and 1Kg packs. High demand, fast repeat purchases.</p>
                <div className="mt-4 flex gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#F5F5F7] text-xs font-medium text-[#6B7280]">80gm — ₹10</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F5F5F7] text-xs font-medium text-[#6B7280]">500gm — ₹50</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F5F5F7] text-xs font-medium text-[#6B7280]">1Kg — ₹100</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Premium Tea */}
            <AnimatedSection delay={0.1}>
              <div className="relative p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] rounded-2xl z-10 flex items-center justify-center">
                  <span className="px-5 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-bold rounded-full">
                    Coming Soon
                  </span>
                </div>
                <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#059669] to-[#34D399] flex items-center justify-center mb-5">
                  <span className="text-4xl font-bold text-white/30">T</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-[#1A1A1A]">Viamsh Premium Tea</h3>
                <p className="mt-1.5 text-sm text-[#6B7280]">Finest Assam and Darjeeling blend. Rich flavour, deep colour. Another daily essential with massive demand.</p>
              </div>
            </AnimatedSection>

            {/* Bathroom Cleaner */}
            <AnimatedSection delay={0.15}>
              <div className="relative p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] rounded-2xl z-10 flex items-center justify-center">
                  <span className="px-5 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-bold rounded-full">
                    Coming Soon
                  </span>
                </div>
                <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center mb-5">
                  <span className="text-4xl font-bold text-white/30">C</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-[#1A1A1A]">Viamsh Bathroom Cleaner</h3>
                <p className="mt-1.5 text-sm text-[#6B7280]">Powerful cleaning formula for tough stains, lime scale, and soap scum. Expanding the product portfolio.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <p className="mt-8 text-center text-sm text-[#6B7280]">
              More products launching in 2026 — Tea, Cleaning, and Personal Care categories. Early distributors get first access.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ MARKET OPPORTUNITY ═══ */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#FDE68A] text-sm font-bold uppercase tracking-wider">Market Opportunity</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
                The Right Time, The Right Market
              </h2>
              <p className="mt-3 text-white/60">
                Eastern India&apos;s FMCG market is booming — and early movers capture the biggest share.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketStats.map((stat, idx) => (
              <AnimatedSection key={stat.label} delay={idx * 0.08}>
                <div className="text-center p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-white/80">{stat.label}</p>
                  <p className="mt-1 text-xs text-white/40">{stat.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 max-w-5xl mx-auto grid lg:grid-cols-[280px_1fr] gap-8 items-start">
              {/* Eastern India Map — Jharkhand highlighted */}
              <div className="hidden lg:flex justify-center">
                <svg viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[240px]">
                  {/* Eastern India outline (simplified) */}
                  <path
                    d="M60 20 L140 10 L180 30 L200 70 L210 120 L190 160 L200 200 L180 240 L160 260 L140 300 L100 310 L60 280 L40 240 L30 200 L40 160 L50 120 L40 70 Z"
                    fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.2" strokeWidth="1.5"
                  />
                  {/* Bihar */}
                  <path
                    d="M70 60 L140 50 L170 70 L180 110 L150 130 L100 140 L60 120 L50 80 Z"
                    fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.15" strokeWidth="1"
                  />
                  <text x="115" y="100" textAnchor="middle" fill="white" fillOpacity="0.25" fontSize="10" fontFamily="system-ui">Bihar</text>

                  {/* Jharkhand — highlighted */}
                  <path
                    d="M60 120 L100 140 L150 130 L170 150 L160 180 L130 200 L90 195 L55 170 L45 145 Z"
                    fill="#6366F1" fillOpacity="0.5" stroke="#FDE68A" strokeWidth="2"
                  />
                  <text x="108" y="168" textAnchor="middle" fill="#FDE68A" fontSize="11" fontWeight="700" fontFamily="system-ui">Jharkhand</text>

                  {/* City dots */}
                  <circle cx="105" cy="148" r="3" fill="#FDE68A" /> {/* Ranchi */}
                  <text x="105" y="143" textAnchor="middle" fill="white" fillOpacity="0.6" fontSize="7" fontFamily="system-ui">Ranchi</text>

                  <circle cx="145" cy="145" r="2.5" fill="#FDE68A" opacity="0.7" /> {/* Jamshedpur */}
                  <text x="145" y="140" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="6" fontFamily="system-ui">Jamshedpur</text>

                  <circle cx="118" cy="136" r="2.5" fill="#FDE68A" opacity="0.7" /> {/* Dhanbad */}
                  <text x="118" y="131" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="6" fontFamily="system-ui">Dhanbad</text>

                  <circle cx="88" cy="155" r="2" fill="#FDE68A" opacity="0.6" /> {/* Bokaro */}

                  {/* West Bengal */}
                  <path
                    d="M130 200 L160 180 L180 200 L190 240 L170 270 L140 300 L110 290 L100 250 L110 220 Z"
                    fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.15" strokeWidth="1"
                  />
                  <text x="150" y="248" textAnchor="middle" fill="white" fillOpacity="0.25" fontSize="10" fontFamily="system-ui">W. Bengal</text>

                  {/* Odisha */}
                  <path
                    d="M55 170 L90 195 L110 220 L100 250 L60 280 L35 250 L30 210 Z"
                    fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.15" strokeWidth="1"
                  />
                  <text x="72" y="235" textAnchor="middle" fill="white" fillOpacity="0.25" fontSize="10" fontFamily="system-ui">Odisha</text>

                  {/* Glow around Jharkhand */}
                  <path
                    d="M60 120 L100 140 L150 130 L170 150 L160 180 L130 200 L90 195 L55 170 L45 145 Z"
                    fill="none" stroke="#6366F1" strokeWidth="1" opacity="0.3"
                    transform="scale(1.05) translate(-5, -8)"
                  />

                  {/* Legend */}
                  <rect x="10" y="295" width="8" height="8" rx="2" fill="#6366F1" fillOpacity="0.5" stroke="#FDE68A" strokeWidth="1" />
                  <text x="22" y="303" fill="white" fillOpacity="0.5" fontSize="8" fontFamily="system-ui">Active Territory</text>
                </svg>
              </div>

              {/* Why Jharkhand content */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Why Jharkhand & Eastern India?</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Growing urbanization in Ranchi, Jamshedpur, Dhanbad, Bokaro',
                    'Rising middle-class purchasing power across tier-2 & tier-3 cities',
                    'Lower competition compared to Western & Southern India',
                    'Strong demand for quality branded products at affordable prices',
                    'Improving road & logistics infrastructure enabling wider distribution',
                    'Large untapped rural market with 65%+ population',
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FDE68A] shrink-0 mt-0.5" />
                      <p className="text-sm text-white/70">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Distributor Stories</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                Hear from Our Partners
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <AnimatedSection key={t.name} delay={idx * 0.1}>
                <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E5E7EB] h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${s <= t.rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'fill-[#E5E7EB] text-[#E5E7EB]'}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#374151] leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#6366F1] flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{t.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1A1A1A]">{t.name}</p>
                        <p className="text-xs text-[#9CA3AF]">{t.location} &middot; {t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div>
                <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Requirements</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                  Who Can Apply?
                </h2>
                <p className="mt-3 text-[#6B7280]">
                  We keep the bar accessible. Prior FMCG experience is helpful but not required — we provide full training.
                </p>

                <div className="mt-8 space-y-3">
                  {eligibility.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        item.optional ? 'bg-[#FEF3C7]' : 'bg-[#ECFDF5]'
                      }`}>
                        {item.optional ? (
                          <span className="text-[#F59E0B] text-xs font-bold">+</span>
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                        )}
                      </div>
                      <p className="text-sm text-[#374151]">
                        {item.req}
                        {item.optional && (
                          <span className="ml-2 text-xs text-[#9CA3AF] font-medium">(preferred, not required)</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Illustration below checklist */}
                <div className="mt-16 flex justify-center">
                  <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px]">
                    {/* Clipboard body */}
                    <rect x="60" y="20" width="180" height="175" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                    {/* Clipboard clip */}
                    <rect x="110" y="8" width="80" height="24" rx="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
                    <circle cx="150" cy="20" r="5" fill="#6366F1" />

                    {/* Checklist rows */}
                    {[0, 1, 2, 3].map((i) => (
                      <g key={i}>
                        <rect x="84" y={52 + i * 34} width="16" height="16" rx="4" fill={i < 3 ? '#ECFDF5' : '#FEF3C7'} stroke={i < 3 ? '#059669' : '#F59E0B'} strokeWidth="1.5" />
                        {i < 3 && (
                          <path d={`M88 ${60 + i * 34}l2.5 2.5 5-5`} stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                        {i === 3 && (
                          <text x="92" y={64 + i * 34} textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="700" fontFamily="system-ui">+</text>
                        )}
                        <rect x="110" y={54 + i * 34} width={90 + (i % 3) * 15} height="8" rx="4" fill="#F3F4F6" />
                      </g>
                    ))}

                    {/* Approval badge */}
                    <circle cx="228" cy="38" r="18" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
                    <path d="M220 38l5 5 9-9" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Decorative dots */}
                    <circle cx="48" cy="80" r="4" fill="#EEF2FF" />
                    <circle cx="258" cy="140" r="3" fill="#EEF2FF" />
                  </svg>
                </div>
              </div>
            </AnimatedSection>

            {/* Support System */}
            <AnimatedSection delay={0.1}>
                <div>
                  <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Ongoing Support</span>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                    We Don&apos;t Just Onboard — We Support
                  </h2>
                  <p className="mt-3 text-[#6B7280]">
                    Our partnership doesn&apos;t end at onboarding. Here&apos;s what you get every single month.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      { icon: Headphones, title: 'Dedicated Account Manager', desc: 'Your personal point of contact for everything — orders, issues, strategy.' },
                      { icon: GraduationCap, title: 'Monthly Training Sessions', desc: 'Product updates, sales techniques, retail management, and market insights.' },
                      { icon: BarChart3, title: 'Sales Analytics Dashboard', desc: 'Real-time data on your performance, inventory levels, and growth trends.' },
                      { icon: Megaphone, title: 'Local Marketing Campaigns', desc: 'Co-branded promotions, seasonal offers, and consumer engagement programs.' },
                      { icon: Truck, title: 'Reliable Supply Chain', desc: 'Consistent stock availability with 3-5 day delivery from our Ranchi facility.' },
                      { icon: IndianRupee, title: 'Flexible Payment Terms', desc: '15-30 day credit period based on performance. No pressure, no penalties.' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E5E7EB]">
                        <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center shrink-0">
                          <item.icon className="w-4.5 h-4.5 text-[#6366F1]" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#1A1A1A]">{item.title}</p>
                          <p className="text-xs text-[#6B7280] mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">
            {/* FAQ Illustration — Left side */}
            <AnimatedSection>
              <div className="lg:sticky lg:top-24">
                <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Common Questions</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-[#6B7280]">
                  Everything you need to know before getting started.
                </p>

                <div className="hidden lg:block mt-8">
                  <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px]">
                    {/* Person thinking */}
                    {/* Head */}
                    <circle cx="160" cy="80" r="32" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
                    {/* Face */}
                    <circle cx="148" cy="74" r="3" fill="#6366F1" />
                    <circle cx="172" cy="74" r="3" fill="#6366F1" />
                    <path d="M150 88c4 4 16 4 20 0" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />

                    {/* Body */}
                    <path d="M130 112c0 0 10-4 30-4s30 4 30 4v40c0 8-6 14-14 14h-32c-8 0-14-6-14-14v-40z" fill="#6366F1" fillOpacity="0.1" stroke="#6366F1" strokeWidth="1.5" />

                    {/* Question bubbles */}
                    <rect x="200" y="30" width="80" height="36" rx="10" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
                    <text x="240" y="53" textAnchor="middle" fill="#6366F1" fontSize="18" fontWeight="700" fontFamily="system-ui">?</text>
                    <circle cx="198" cy="68" r="4" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1" />
                    <circle cx="194" cy="78" r="2.5" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1" />

                    <rect x="40" y="45" width="66" height="32" rx="10" fill="#ECFDF5" stroke="#059669" strokeWidth="1.5" />
                    <text x="73" y="66" textAnchor="middle" fill="#059669" fontSize="14" fontWeight="700" fontFamily="system-ui">FAQ</text>
                    <circle cx="108" cy="72" r="3" fill="#ECFDF5" stroke="#059669" strokeWidth="1" />

                    {/* Floating question marks */}
                    <text x="56" cy="24" y="24" fill="#6366F1" fillOpacity="0.2" fontSize="20" fontWeight="700" fontFamily="system-ui">?</text>
                    <text x="264" y="18" fill="#6366F1" fillOpacity="0.15" fontSize="16" fontWeight="700" fontFamily="system-ui">?</text>
                    <text x="30" y="130" fill="#6366F1" fillOpacity="0.1" fontSize="24" fontWeight="700" fontFamily="system-ui">?</text>

                    {/* Answer cards */}
                    <rect x="60" y="190" width="200" height="16" rx="6" fill="#F3F4F6" />
                    <rect x="60" y="190" width="120" height="16" rx="6" fill="#EEF2FF" />
                    <rect x="80" y="214" width="200" height="16" rx="6" fill="#F3F4F6" />
                    <rect x="80" y="214" width="140" height="16" rx="6" fill="#ECFDF5" />
                    <rect x="50" y="238" width="200" height="16" rx="6" fill="#F3F4F6" />
                    <rect x="50" y="238" width="100" height="16" rx="6" fill="#FEF3C7" />

                    {/* Decorative dots */}
                    <circle cx="290" cy="100" r="4" fill="#EEF2FF" />
                    <circle cx="20" cy="200" r="5" fill="#F3F4F6" />
                    <circle cx="300" cy="230" r="3" fill="#EEF2FF" />
                  </svg>
                </div>
              </div>
            </AnimatedSection>

            {/* FAQ Items — Right side */}
            <div className="mt-0 lg:mt-14 space-y-3">
              {faqData.map((faq, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.04}>
                  <FAQItem q={faq.q} a={faq.a} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ APPLICATION FORM ═══ */}
      <section id="apply" className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Start Your Journey</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                Apply to Become a Distributor
              </h2>
              <p className="mt-3 text-[#6B7280]">
                Fill in your details below and our team will contact you within 48 hours. No fees, no obligations.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-10">
            <DistributorForm />
          </div>
        </div>
      </section>

      {/* ═══ WHATSAPP CTA ═══ */}
      <section className="py-12 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Have Questions? Let&apos;s Talk.</h3>
              <p className="mt-1 text-white/70">
                Prefer a quick chat? Reach us on WhatsApp for instant answers about our distributor program.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919296290854?text=Hi%2C%20I%20have%20questions%20about%20becoming%20a%20Viamsh%20distributor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1EB954] transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919296290854"
                className="px-8 py-3.5 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
