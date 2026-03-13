import type { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  Sparkles,
  Users,
  MapPin,
  Package,
  Factory,
  Award,
  TrendingUp,
  Heart,
  Target,
  Eye,
  Zap,
  Shield,
  Leaf,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Viamsh FMCG Pvt. Ltd. — our story, vision, mission, and the team behind premium household products from Ranchi, Jharkhand.',
};

const teamRoles = [
  {
    title: 'Leadership & Strategy',
    role: 'Founder & CEO',
    desc: 'Visionary leadership driving Viamsh FMCG towards becoming a household name across India, with a focus on long-term growth and innovation.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Rising chart */}
        <rect x="8" y="12" width="64" height="56" rx="6" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
        <path d="M18 52 L30 40 L42 46 L54 28 L62 22" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="54" cy="28" r="3" fill="#6366F1" />
        <circle cx="62" cy="22" r="3" fill="#8B5CF6" />
        {/* Arrow up */}
        <path d="M58 18 L62 22 L66 18" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Grid lines */}
        <path d="M18 32 H62" stroke="#C7D2FE" strokeWidth="0.5" strokeDasharray="3 3" />
        <path d="M18 42 H62" stroke="#C7D2FE" strokeWidth="0.5" strokeDasharray="3 3" />
        <path d="M18 52 H62" stroke="#C7D2FE" strokeWidth="0.5" strokeDasharray="3 3" />
        {/* Star */}
        <path d="M22 18 L23 15 L24 18 L27 19 L24 20 L23 23 L22 20 L19 19Z" fill="#A78BFA" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Operations & Quality',
    role: 'Head of Operations',
    desc: 'Ensuring seamless production and distribution with a focus on quality and efficiency at every stage of the supply chain.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Main gear */}
        <circle cx="32" cy="38" r="16" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
        <circle cx="32" cy="38" r="7" fill="#6366F1" opacity="0.15" stroke="#6366F1" strokeWidth="1.5" />
        <circle cx="32" cy="38" r="3" fill="#6366F1" />
        {/* Gear teeth */}
        <rect x="29" y="20" width="6" height="5" rx="1.5" fill="#6366F1" opacity="0.3" />
        <rect x="29" y="51" width="6" height="5" rx="1.5" fill="#6366F1" opacity="0.3" />
        <rect x="14" y="35" width="5" height="6" rx="1.5" fill="#6366F1" opacity="0.3" />
        <rect x="45" y="35" width="5" height="6" rx="1.5" fill="#6366F1" opacity="0.3" />
        {/* Small gear */}
        <circle cx="55" cy="26" r="10" fill="#EEF2FF" stroke="#8B5CF6" strokeWidth="1.5" />
        <circle cx="55" cy="26" r="4" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1" />
        <rect x="53" y="14" width="4" height="4" rx="1" fill="#8B5CF6" opacity="0.3" />
        <rect x="53" y="34" width="4" height="4" rx="1" fill="#8B5CF6" opacity="0.3" />
        <rect x="43" y="24" width="4" height="4" rx="1" fill="#8B5CF6" opacity="0.3" />
        <rect x="63" y="24" width="4" height="4" rx="1" fill="#8B5CF6" opacity="0.3" />
        {/* Checkmark badge */}
        <circle cx="60" cy="55" r="10" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
        <path d="M55 55 L58 58 L65 51" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Marketing & Growth',
    role: 'Marketing Head',
    desc: 'Building the Viamsh brand with innovative strategies, deep market understanding, and a passion for connecting with customers.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Megaphone body */}
        <path d="M18 32 L48 18 L48 58 L18 44 Z" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round" />
        <rect x="10" y="32" width="10" height="12" rx="3" fill="#6366F1" opacity="0.15" stroke="#6366F1" strokeWidth="1.5" />
        {/* Sound waves */}
        <path d="M52 30 Q58 38 52 46" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M56 24 Q65 38 56 52" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M60 20 Q72 38 60 56" stroke="#C7D2FE" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Growth arrow */}
        <path d="M20 60 L32 54 L44 58 L58 48" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="3 2" />
        <circle cx="58" cy="48" r="2.5" fill="#6366F1" />
        {/* Sparkles */}
        <path d="M64 14 L65 11 L66 14 L69 15 L66 16 L65 19 L64 16 L61 15Z" fill="#A78BFA" opacity="0.5" />
        <circle cx="68" cy="40" r="1.5" fill="#C7D2FE" />
      </svg>
    ),
  },
];

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
        <path d="M16 24l5 5 11-11" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 4a20 20 0 0 1 0 40" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'BIS Certified',
    description: 'Bureau of Indian Standards',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="8" width="36" height="32" rx="4" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
        <path d="M18 20h12M18 26h8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="34" r="8" fill="#8B5CF6" opacity="0.15" />
        <path d="M33 34l2 2 4-4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'FSSAI',
    description: 'Food Safety & Standards Authority',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 4l18 8v12c0 10-8 18-18 20C14 42 6 34 6 24V12l18-8z" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
        <path d="M18 24l4 4 8-8" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'GMP',
    description: 'Good Manufacturing Practices',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="14" width="32" height="26" rx="3" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
        <path d="M8 14l16-8 16 8" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round" />
        <rect x="16" y="24" width="6" height="8" rx="1" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="26" y="24" width="6" height="8" rx="1" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
        <circle cx="24" cy="19" r="2" fill="#6366F1" />
      </svg>
    ),
  },
];

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: MapPin, value: '8+', label: 'States Served' },
  { icon: Package, value: '3+', label: 'Product Lines' },
  { icon: Factory, value: '1', label: 'Manufacturing Unit' },
];

const milestones = [
  { year: '2023', title: 'Company Founded', desc: 'Viamsh FMCG Pvt. Ltd. incorporated in Ranchi, Jharkhand.' },
  { year: '2024', title: 'Orma Launched', desc: 'Flagship Orma Detergent Powder launched across Jharkhand & Bihar.' },
  { year: '2025', title: 'Regional Expansion', desc: 'Expanded to 8 states with 500+ retail partners.' },
  { year: '2026', title: 'New Product Lines', desc: 'Launching premium teas and home cleaning solutions.' },
];

// ─── Illustrative SVGs ───

function StoryIllustration() {
  return (
    <svg viewBox="0 0 400 320" fill="none" className="w-full h-auto">
      {/* Factory building */}
      <rect x="40" y="100" width="140" height="120" rx="8" fill="white" stroke="#C7D2FE" strokeWidth="2" />
      <rect x="40" y="100" width="140" height="30" rx="8" fill="#6366F1" opacity="0.1" />
      {/* Factory chimney */}
      <rect x="60" y="60" width="20" height="40" rx="3" fill="white" stroke="#C7D2FE" strokeWidth="2" />
      <rect x="90" y="70" width="16" height="30" rx="3" fill="white" stroke="#C7D2FE" strokeWidth="2" />
      {/* Smoke puffs */}
      <circle cx="70" cy="48" r="6" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      <circle cx="62" cy="36" r="5" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      <circle cx="98" cy="58" r="5" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      {/* Factory windows */}
      <rect x="56" y="140" width="24" height="20" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
      <rect x="98" y="140" width="24" height="20" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
      <rect x="140" y="140" width="24" height="20" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
      {/* Factory door */}
      <rect x="92" y="180" width="36" height="40" rx="4" fill="#6366F1" opacity="0.12" stroke="#6366F1" strokeWidth="1.5" />
      {/* Viamsh label */}
      <rect x="80" y="108" width="60" height="14" rx="7" fill="#6366F1" opacity="0.15" />
      <text x="110" y="118" textAnchor="middle" fill="#6366F1" fontSize="8" fontWeight="600" fontFamily="sans-serif">VIAMSH</text>

      {/* Products on conveyor */}
      <rect x="200" y="180" width="180" height="4" rx="2" fill="#E5E7EB" />
      <rect x="210" y="155" width="28" height="25" rx="4" fill="white" stroke="#6366F1" strokeWidth="1.5" />
      <rect x="210" y="155" width="28" height="8" rx="4" fill="#6366F1" opacity="0.15" />
      <rect x="250" y="155" width="28" height="25" rx="4" fill="white" stroke="#8B5CF6" strokeWidth="1.5" />
      <rect x="250" y="155" width="28" height="8" rx="4" fill="#8B5CF6" opacity="0.15" />
      <rect x="290" y="155" width="28" height="25" rx="4" fill="white" stroke="#6366F1" strokeWidth="1.5" />
      <rect x="290" y="155" width="28" height="8" rx="4" fill="#6366F1" opacity="0.15" />

      {/* Arrow from factory to products */}
      <path d="M185 170 Q195 165 205 168" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
      <polygon points="205,165 210,168 205,171" fill="#6366F1" />

      {/* Delivery truck */}
      <rect x="220" y="220" width="60" height="36" rx="5" fill="white" stroke="#C7D2FE" strokeWidth="2" />
      <rect x="220" y="220" width="60" height="12" rx="5" fill="#6366F1" opacity="0.1" />
      <rect x="280" y="230" width="24" height="26" rx="4" fill="white" stroke="#C7D2FE" strokeWidth="2" />
      <rect x="285" y="235" width="14" height="10" rx="2" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      {/* Truck wheels */}
      <circle cx="238" cy="258" r="7" fill="#374151" />
      <circle cx="238" cy="258" r="3.5" fill="#9CA3AF" />
      <circle cx="290" cy="258" r="7" fill="#374151" />
      <circle cx="290" cy="258" r="3.5" fill="#9CA3AF" />
      {/* Road */}
      <rect x="30" y="265" width="360" height="3" rx="1.5" fill="#E5E7EB" />

      {/* Home */}
      <polygon points="350,210 370,190 390,210" fill="#8B5CF6" opacity="0.1" stroke="#8B5CF6" strokeWidth="1.5" />
      <rect x="355" y="210" width="30" height="25" rx="3" fill="white" stroke="#C7D2FE" strokeWidth="2" />
      <rect x="360" y="216" width="8" height="10" rx="1.5" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      <rect x="373" y="220" width="8" height="15" rx="1.5" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1" />
      {/* Heart above home */}
      <path d="M370 180 Q370 174 374 174 Q378 174 378 180 Q378 186 370 192 Q362 186 362 180 Q362 174 366 174 Q370 174 370 180Z" fill="#A78BFA" opacity="0.3" />

      {/* Labels */}
      <text x="110" y="240" textAnchor="middle" fill="#6366F1" fontSize="9" fontWeight="600" fontFamily="sans-serif">Made in Ranchi</text>
      <text x="370" y="252" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontWeight="600" fontFamily="sans-serif">Your Home</text>

      {/* Decorative sparkles */}
      <path d="M340 100 L342 94 L344 100 L350 102 L344 104 L342 110 L340 104 L334 102Z" fill="#C7D2FE" opacity="0.5" />
      <path d="M30 280 L32 274 L34 280 L40 282 L34 284 L32 290 L30 284 L24 282Z" fill="#A78BFA" opacity="0.4" />
    </svg>
  );
}

function VisionIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-20 h-20 shrink-0">
      {/* Eye outline */}
      <path d="M20 60 Q60 25 100 60 Q60 95 20 60Z" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
      {/* Iris */}
      <circle cx="60" cy="60" r="16" fill="#6366F1" opacity="0.15" stroke="#6366F1" strokeWidth="2" />
      {/* Pupil */}
      <circle cx="60" cy="60" r="7" fill="#6366F1" />
      {/* Light reflection */}
      <circle cx="64" cy="56" r="2.5" fill="white" />
      {/* Rays */}
      <path d="M60 30 L60 20" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M80 38 L86 30" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M40 38 L34 30" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Stars */}
      <path d="M95 35 L96 32 L97 35 L100 36 L97 37 L96 40 L95 37 L92 36Z" fill="#A78BFA" opacity="0.5" />
      <path d="M22 40 L23 37 L24 40 L27 41 L24 42 L23 45 L22 42 L19 41Z" fill="#C7D2FE" opacity="0.5" />
    </svg>
  );
}

function MissionIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-20 h-20 shrink-0">
      {/* Rocket body */}
      <path d="M60 20 C60 20 45 45 45 70 C45 82 52 90 60 90 C68 90 75 82 75 70 C75 45 60 20 60 20Z" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
      {/* Rocket window */}
      <circle cx="60" cy="55" r="8" fill="#6366F1" opacity="0.15" stroke="#6366F1" strokeWidth="1.5" />
      <circle cx="60" cy="55" r="4" fill="#6366F1" opacity="0.3" />
      {/* Fins */}
      <path d="M45 75 L32 85 L45 82Z" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
      <path d="M75 75 L88 85 L75 82Z" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
      {/* Flame */}
      <path d="M54 90 Q57 102 60 108 Q63 102 66 90" fill="#6366F1" opacity="0.2" />
      <path d="M56 90 Q58 98 60 103 Q62 98 64 90" fill="#8B5CF6" opacity="0.3" />
      {/* Stars */}
      <circle cx="30" cy="30" r="2" fill="#C7D2FE" />
      <circle cx="90" cy="40" r="1.5" fill="#A78BFA" />
      <circle cx="25" cy="60" r="1" fill="#C7D2FE" />
      <circle cx="95" cy="65" r="1.5" fill="#C7D2FE" />
      <path d="M85 25 L86 22 L87 25 L90 26 L87 27 L86 30 L85 27 L82 26Z" fill="#A78BFA" opacity="0.5" />
    </svg>
  );
}

const processSteps = [
  {
    step: '01',
    title: 'Raw Materials',
    desc: 'Premium-grade surfactants, enzymes, and fragrance compounds sourced from certified suppliers.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="6" y="14" width="22" height="28" rx="4" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
        <rect x="36" y="14" width="22" height="28" rx="4" fill="#EEF2FF" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="14" y="46" width="36" height="10" rx="3" fill="#6366F1" opacity="0.1" stroke="#C7D2FE" strokeWidth="1" />
        <circle cx="17" cy="28" r="4" fill="#6366F1" opacity="0.2" />
        <circle cx="47" cy="28" r="4" fill="#8B5CF6" opacity="0.2" />
        <path d="M10 8 L11 5 L12 8 L15 9 L12 10 L11 13 L10 10 L7 9Z" fill="#A78BFA" opacity="0.4" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Mixing & Processing',
    desc: 'Automated blending systems ensure precise formulation with consistent quality in every batch.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="26" cy="30" r="16" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
        <circle cx="26" cy="30" r="7" fill="#6366F1" opacity="0.12" stroke="#6366F1" strokeWidth="1" />
        <circle cx="26" cy="30" r="3" fill="#6366F1" />
        <rect x="22" y="12" width="8" height="5" rx="2" fill="#6366F1" opacity="0.25" />
        <rect x="22" y="41" width="8" height="5" rx="2" fill="#6366F1" opacity="0.25" />
        <rect x="8" y="26" width="5" height="8" rx="2" fill="#6366F1" opacity="0.25" />
        <rect x="39" y="26" width="5" height="8" rx="2" fill="#6366F1" opacity="0.25" />
        <circle cx="48" cy="18" r="10" fill="#EEF2FF" stroke="#8B5CF6" strokeWidth="1.5" />
        <circle cx="48" cy="18" r="4" fill="#8B5CF6" opacity="0.15" />
        <circle cx="48" cy="18" r="2" fill="#8B5CF6" opacity="0.4" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Quality Testing',
    desc: 'Multi-stage lab testing for pH balance, stain removal efficiency, fabric safety, and fragrance longevity.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="10" y="8" width="44" height="48" rx="6" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
        <path d="M22 26 L28 32 L42 18" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="20" y="38" width="24" height="3" rx="1.5" fill="#6366F1" opacity="0.15" />
        <rect x="20" y="44" width="16" height="3" rx="1.5" fill="#8B5CF6" opacity="0.12" />
        <circle cx="48" cy="50" r="10" fill="white" stroke="#8B5CF6" strokeWidth="1.5" />
        <path d="M45 50 L47 52 L52 47" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Packaging',
    desc: 'Sealed in moisture-resistant packs with tamper-proof packaging to preserve freshness and quality.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="10" y="16" width="34" height="40" rx="5" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
        <rect x="10" y="16" width="34" height="12" rx="5" fill="#6366F1" opacity="0.1" />
        <rect x="16" y="20" width="22" height="4" rx="2" fill="#6366F1" opacity="0.2" />
        <rect x="18" y="34" width="18" height="3" rx="1.5" fill="#C7D2FE" />
        <rect x="18" y="40" width="12" height="3" rx="1.5" fill="#C7D2FE" opacity="0.6" />
        <path d="M44 10 L54 10 L54 48 L44 48" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.4" />
        <path d="M48 4 L49 1 L50 4 L53 5 L50 6 L49 9 L48 6 L45 5Z" fill="#A78BFA" opacity="0.4" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Dispatch & Delivery',
    desc: 'Shipped from our Ranchi facility to 500+ retail partners and directly to customers across 8 states.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="4" y="20" width="38" height="26" rx="4" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
        <rect x="4" y="20" width="38" height="9" rx="4" fill="#6366F1" opacity="0.08" />
        <rect x="42" y="26" width="18" height="20" rx="3" fill="white" stroke="#6366F1" strokeWidth="1.5" />
        <rect x="46" y="30" width="10" height="8" rx="2" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
        <circle cx="16" cy="48" r="6" fill="#374151" />
        <circle cx="16" cy="48" r="2.5" fill="#9CA3AF" />
        <circle cx="50" cy="48" r="6" fill="#374151" />
        <circle cx="50" cy="48" r="2.5" fill="#9CA3AF" />
        <rect x="0" y="54" width="64" height="3" rx="1.5" fill="#E5E7EB" />
        <path d="M12 34 L16 30 L20 34 L24 28 L28 32" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white/[0.03]" />
          <svg className="absolute right-10 top-10 w-20 h-20 opacity-10" viewBox="0 0 80 80" fill="none">
            <path d="M30 38 L35 18 L40 38 L60 42 L40 46 L35 66 L30 46 L10 42Z" fill="white" />
          </svg>
          <svg className="absolute left-10 bottom-10 w-16 h-16 opacity-10" viewBox="0 0 80 80" fill="none">
            <path d="M30 38 L35 18 L40 38 L60 42 L40 46 L35 66 L30 46 L10 42Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <AnimatedSection>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-white/70" />
                <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                About Viamsh FMCG
              </h1>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Building trust, one product at a time. From the heart of Jharkhand to homes across India.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats row */}
          <AnimatedSection>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {stats.map((stat, idx) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                  {idx < stats.length - 1 && (
                    <div className="hidden md:block w-px h-10 bg-white/15 ml-4" />
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-4 h-4 text-[#6366F1]" />
                <span className="text-[#6366F1] text-sm font-semibold uppercase tracking-wider">
                  How It Started
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Founded in Ranchi, Jharkhand, Viamsh FMCG Pvt. Ltd. is committed
                  to delivering premium quality household products at prices every
                  Indian family can afford. What started as a dream to create
                  world-class cleaning solutions from the heart of India has grown
                  into a brand trusted by thousands of households.
                </p>
                <p>
                  Our flagship product, Orma Detergent Powder, embodies our core
                  philosophy — powerful performance without compromise. We believe
                  that quality should never be a luxury, and every household
                  deserves products that work as hard as they do.
                </p>
                <p>
                  With a state-of-the-art manufacturing facility and a passionate
                  team, we are expanding our product range to include teas, cleaning
                  solutions, and more — all under the trusted Viamsh umbrella.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] p-6 lg:p-8">
                <StoryIllustration />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-[#6366F1]" />
                <span className="text-[#6366F1] text-sm font-semibold uppercase tracking-wider">
                  Our Journey
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Milestones That Define Us
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-xl mx-auto">
                From a small startup in Ranchi to a brand serving thousands across India.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E5E7EB] -translate-x-1/2" />

            <div className="space-y-8 md:space-y-0">
              {milestones.map((m, idx) => (
                <AnimatedSection key={m.year} delay={idx * 0.1}>
                  <div className={`md:flex items-center gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} mb-8`}>
                    <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-sm font-bold text-[#6366F1]">{m.year}</p>
                        <h3 className="text-lg font-bold text-[#1A1A1A] mt-1">{m.title}</h3>
                        <p className="text-sm text-[#6B7280] mt-1">{m.desc}</p>
                      </div>
                    </div>
                    {/* Center dot */}
                    <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#6366F1] shadow-lg shadow-[#6366F1]/25 shrink-0 z-10">
                      <span className="text-white text-xs font-bold">{idx + 1}</span>
                    </div>
                    <div className="flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                What Drives Us
              </h2>
              <div className="mt-3 w-16 h-1 bg-[#6366F1] mx-auto rounded-full" />
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] p-8 h-full">
                <div className="flex items-start gap-5">
                  <VisionIllustration />
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">
                      Our Vision
                    </h3>
                    <p className="mt-3 text-[#6B7280] leading-relaxed">
                      To be India&apos;s most trusted household FMCG brand, known for
                      quality, innovation, and value — reaching every corner of the
                      nation.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] p-8 h-full">
                <div className="flex items-start gap-5">
                  <MissionIllustration />
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">
                      Our Mission
                    </h3>
                    <p className="mt-3 text-[#6B7280] leading-relaxed">
                      Delivering quality products at affordable prices to every Indian
                      household. We combine modern manufacturing with traditional values
                      to create products that families can rely on, day after day.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#6366F1]" />
                <span className="text-[#6366F1] text-sm font-semibold uppercase tracking-wider">
                  The Team
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Who Drives Viamsh
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-xl mx-auto">
                Three core departments power our mission — each led by experienced professionals
                committed to quality and growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamRoles.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="rounded-2xl bg-white border border-[#E5E7EB] p-6 hover:shadow-lg hover:border-[#C7D2FE] transition-all duration-300">
                  {/* Role illustration */}
                  <div className="w-20 h-20 mb-5">
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                    {item.role}
                  </p>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mt-1">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Factory className="w-4 h-4 text-[#6366F1]" />
                <span className="text-[#6366F1] text-sm font-semibold uppercase tracking-wider">
                  Our Process
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Manufacturing Excellence
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-xl mx-auto">
                From sourcing raw materials to doorstep delivery — every step is designed
                for quality and consistency.
              </p>
            </div>
          </AnimatedSection>

          {/* Detailed SVG Illustration */}
          <AnimatedSection>
            <div className="rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] p-4 sm:p-6 lg:p-8">
              <svg viewBox="0 0 900 340" fill="none" className="w-full h-auto">
                {/* ── Conveyor belt ── */}
                <rect x="10" y="260" width="880" height="10" rx="5" fill="#E5E7EB" />
                <circle cx="40" cy="265" r="10" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1.5" />
                <circle cx="40" cy="265" r="4" fill="#9CA3AF" />
                <circle cx="860" cy="265" r="10" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1.5" />
                <circle cx="860" cy="265" r="4" fill="#9CA3AF" />
                {/* Belt dashes */}
                <rect x="70" y="263" width="18" height="4" rx="2" fill="#CBD5E1" />
                <rect x="110" y="263" width="18" height="4" rx="2" fill="#CBD5E1" />
                <rect x="250" y="263" width="18" height="4" rx="2" fill="#CBD5E1" />
                <rect x="400" y="263" width="18" height="4" rx="2" fill="#CBD5E1" />
                <rect x="550" y="263" width="18" height="4" rx="2" fill="#CBD5E1" />
                <rect x="700" y="263" width="18" height="4" rx="2" fill="#CBD5E1" />
                <rect x="800" y="263" width="18" height="4" rx="2" fill="#CBD5E1" />

                {/* ══════ STEP 1: Raw Materials ══════ */}
                <rect x="20" y="100" width="140" height="150" rx="10" fill="white" stroke="#C7D2FE" strokeWidth="2" />
                {/* Bags / containers */}
                <rect x="35" y="125" width="35" height="45" rx="5" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
                <rect x="38" y="130" width="29" height="10" rx="3" fill="#6366F1" opacity="0.12" />
                <rect x="44" y="145" width="8" height="8" rx="2" fill="#6366F1" opacity="0.15" />
                <rect x="56" y="145" width="8" height="8" rx="2" fill="#6366F1" opacity="0.15" />
                <rect x="44" y="157" width="20" height="6" rx="1.5" fill="#C7D2FE" opacity="0.5" />
                {/* Second container */}
                <rect x="80" y="130" width="30" height="40" rx="5" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
                <rect x="83" y="134" width="24" height="8" rx="2" fill="#8B5CF6" opacity="0.12" />
                <circle cx="95" cy="153" r="6" fill="#8B5CF6" opacity="0.1" stroke="#8B5CF6" strokeWidth="1" />
                {/* Bottles */}
                <rect x="118" y="140" width="14" height="28" rx="4" fill="#EEF2FF" stroke="#A78BFA" strokeWidth="1" />
                <rect x="120" y="136" width="10" height="6" rx="2" fill="#A78BFA" opacity="0.2" />
                <rect x="123" y="150" width="4" height="10" rx="1" fill="#A78BFA" opacity="0.15" />
                {/* Pallet base */}
                <rect x="32" y="178" width="100" height="8" rx="2" fill="#6366F1" opacity="0.06" stroke="#C7D2FE" strokeWidth="1" />
                {/* Step badge */}
                <circle cx="90" cy="86" r="14" fill="#6366F1" />
                <text x="90" y="91" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="sans-serif">01</text>
                {/* Label */}
                <text x="90" y="210" textAnchor="middle" fill="#6366F1" fontSize="12" fontWeight="700" fontFamily="sans-serif">Raw Materials</text>
                <text x="90" y="226" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">Surfactants, enzymes</text>
                <text x="90" y="238" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">&amp; fragrance compounds</text>

                {/* ── Arrow 1→2 ── */}
                <path d="M168 175 Q190 165 208 170" stroke="#6366F1" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                <polygon points="208,166 215,170 208,174" fill="#6366F1" />

                {/* ══════ STEP 2: Mixing & Processing ══════ */}
                <rect x="200" y="85" width="160" height="165" rx="10" fill="white" stroke="#C7D2FE" strokeWidth="2" />
                {/* Mixing tank */}
                <rect x="230" y="115" width="60" height="70" rx="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
                <rect x="230" y="115" width="60" height="16" rx="8" fill="#6366F1" opacity="0.08" />
                {/* Tank contents - liquid levels */}
                <rect x="236" y="155" width="48" height="24" rx="4" fill="#6366F1" opacity="0.08" />
                <rect x="236" y="165" width="48" height="14" rx="4" fill="#6366F1" opacity="0.06" />
                {/* Mixer blades */}
                <line x1="260" y1="120" x2="260" y2="150" stroke="#6366F1" strokeWidth="2" />
                <path d="M250 145 L260 150 L270 145" stroke="#6366F1" strokeWidth="1.5" fill="none" />
                <path d="M252 140 L260 144 L268 140" stroke="#6366F1" strokeWidth="1" fill="none" opacity="0.5" />
                {/* Temperature gauge */}
                <rect x="300" y="125" width="18" height="40" rx="4" fill="white" stroke="#8B5CF6" strokeWidth="1.5" />
                <rect x="304" y="145" width="10" height="16" rx="3" fill="#8B5CF6" opacity="0.2" />
                <circle cx="309" cy="155" r="4" fill="#8B5CF6" opacity="0.3" />
                <rect x="306" y="130" width="6" height="20" rx="2" fill="#8B5CF6" opacity="0.1" />
                {/* Control panel dots */}
                <circle cx="340" cy="135" r="3" fill="#6366F1" opacity="0.15" stroke="#6366F1" strokeWidth="1" />
                <circle cx="340" cy="145" r="3" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1" />
                <circle cx="340" cy="155" r="3" fill="#A78BFA" opacity="0.15" stroke="#A78BFA" strokeWidth="1" />
                {/* Pipe from tank */}
                <rect x="244" y="185" width="6" height="14" rx="2" fill="#C7D2FE" />
                <rect x="268" y="185" width="6" height="14" rx="2" fill="#C7D2FE" />
                {/* Step badge */}
                <circle cx="280" cy="72" r="14" fill="#6366F1" />
                <text x="280" y="77" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="sans-serif">02</text>
                {/* Label */}
                <text x="280" y="215" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="700" fontFamily="sans-serif">Mixing &amp; Processing</text>
                <text x="280" y="231" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">Automated blending with</text>
                <text x="280" y="243" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">precise temperature control</text>

                {/* ── Arrow 2→3 ── */}
                <path d="M368 170 Q390 160 408 165" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                <polygon points="408,161 415,165 408,169" fill="#8B5CF6" />

                {/* ══════ STEP 3: Quality Testing ══════ */}
                <rect x="400" y="90" width="140" height="160" rx="10" fill="white" stroke="#C7D2FE" strokeWidth="2" />
                {/* Lab clipboard */}
                <rect x="420" y="115" width="50" height="65" rx="5" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
                <rect x="435" y="108" width="20" height="10" rx="3" fill="#6366F1" opacity="0.2" stroke="#6366F1" strokeWidth="1" />
                {/* Checklist items */}
                <rect x="428" y="125" width="6" height="6" rx="1" fill="#6366F1" opacity="0.2" stroke="#6366F1" strokeWidth="1" />
                <path d="M429 128 L431 130 L434 126" stroke="#6366F1" strokeWidth="1" strokeLinecap="round" />
                <rect x="438" y="127" width="24" height="3" rx="1.5" fill="#C7D2FE" />
                <rect x="428" y="137" width="6" height="6" rx="1" fill="#6366F1" opacity="0.2" stroke="#6366F1" strokeWidth="1" />
                <path d="M429 140 L431 142 L434 138" stroke="#6366F1" strokeWidth="1" strokeLinecap="round" />
                <rect x="438" y="139" width="20" height="3" rx="1.5" fill="#C7D2FE" />
                <rect x="428" y="149" width="6" height="6" rx="1" fill="#6366F1" opacity="0.2" stroke="#6366F1" strokeWidth="1" />
                <path d="M429 152 L431 154 L434 150" stroke="#6366F1" strokeWidth="1" strokeLinecap="round" />
                <rect x="438" y="151" width="18" height="3" rx="1.5" fill="#C7D2FE" />
                <rect x="428" y="161" width="6" height="6" rx="1" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1" />
                <rect x="438" y="163" width="22" height="3" rx="1.5" fill="#C7D2FE" opacity="0.6" />
                {/* Microscope / lab tool */}
                <circle cx="502" cy="135" r="16" fill="#EEF2FF" stroke="#8B5CF6" strokeWidth="1.5" />
                <circle cx="502" cy="135" r="8" fill="#8B5CF6" opacity="0.08" stroke="#8B5CF6" strokeWidth="1" />
                <circle cx="502" cy="135" r="3" fill="#8B5CF6" opacity="0.2" />
                {/* Magnifier handle */}
                <line x1="512" y1="145" x2="520" y2="155" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
                {/* pH indicator bar */}
                <rect x="485" y="160" width="40" height="6" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
                <rect x="485" y="160" width="28" height="6" rx="3" fill="#6366F1" opacity="0.2" />
                <circle cx="513" cy="163" r="4" fill="white" stroke="#6366F1" strokeWidth="1" />
                {/* Step badge */}
                <circle cx="470" cy="76" r="14" fill="#6366F1" />
                <text x="470" y="81" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="sans-serif">03</text>
                {/* Label */}
                <text x="470" y="215" textAnchor="middle" fill="#6366F1" fontSize="12" fontWeight="700" fontFamily="sans-serif">Quality Testing</text>
                <text x="470" y="231" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">pH balance, stain removal,</text>
                <text x="470" y="243" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">fabric safety &amp; fragrance</text>

                {/* ── Arrow 3→4 ── */}
                <path d="M548 170 Q570 160 588 165" stroke="#6366F1" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                <polygon points="588,161 595,165 588,169" fill="#6366F1" />

                {/* ══════ STEP 4: Packaging ══════ */}
                <rect x="580" y="95" width="130" height="155" rx="10" fill="white" stroke="#C7D2FE" strokeWidth="2" />
                {/* Main product box */}
                <rect x="600" y="118" width="50" height="65" rx="6" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
                <rect x="600" y="118" width="50" height="16" rx="6" fill="#6366F1" opacity="0.12" />
                <rect x="610" y="122" width="30" height="8" rx="4" fill="#6366F1" opacity="0.15" />
                {/* Product box label lines */}
                <rect x="608" y="142" width="34" height="3" rx="1.5" fill="#C7D2FE" />
                <rect x="608" y="149" width="26" height="3" rx="1.5" fill="#C7D2FE" opacity="0.6" />
                <rect x="608" y="156" width="30" height="3" rx="1.5" fill="#C7D2FE" opacity="0.4" />
                {/* Weight mark */}
                <rect x="610" y="166" width="18" height="10" rx="2" fill="#6366F1" opacity="0.08" stroke="#6366F1" strokeWidth="0.5" />
                <text x="619" y="174" textAnchor="middle" fill="#6366F1" fontSize="6" fontWeight="600" fontFamily="sans-serif">1Kg</text>
                {/* Smaller boxes */}
                <rect x="660" y="130" width="30" height="38" rx="4" fill="#EEF2FF" stroke="#8B5CF6" strokeWidth="1.5" />
                <rect x="660" y="130" width="30" height="10" rx="4" fill="#8B5CF6" opacity="0.1" />
                <rect x="666" y="146" width="18" height="3" rx="1" fill="#C7D2FE" />
                <rect x="666" y="152" width="12" height="3" rx="1" fill="#C7D2FE" opacity="0.5" />
                <rect x="668" y="160" width="10" height="6" rx="1" fill="#8B5CF6" opacity="0.06" stroke="#8B5CF6" strokeWidth="0.5" />
                <text x="673" y="165" textAnchor="middle" fill="#8B5CF6" fontSize="5" fontWeight="600" fontFamily="sans-serif">500g</text>
                {/* Seal stamp */}
                <circle cx="680" cy="190" r="10" fill="white" stroke="#6366F1" strokeWidth="1.5" />
                <path d="M675 190 L678 193 L686 185" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Step badge */}
                <circle cx="645" cy="82" r="14" fill="#6366F1" />
                <text x="645" y="87" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="sans-serif">04</text>
                {/* Label */}
                <text x="645" y="215" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="700" fontFamily="sans-serif">Packaging</text>
                <text x="645" y="231" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">Tamper-proof, moisture</text>
                <text x="645" y="243" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">resistant sealed packs</text>

                {/* ── Arrow 4→5 ── */}
                <path d="M718 170 Q738 160 755 165" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                <polygon points="755,161 762,165 755,169" fill="#8B5CF6" />

                {/* ══════ STEP 5: Dispatch & Delivery ══════ */}
                <rect x="748" y="100" width="140" height="150" rx="10" fill="white" stroke="#C7D2FE" strokeWidth="2" />
                {/* Truck body */}
                <rect x="765" y="135" width="70" height="45" rx="5" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
                <rect x="765" y="135" width="70" height="14" rx="5" fill="#6366F1" opacity="0.08" />
                {/* Cargo boxes inside truck */}
                <rect x="773" y="155" width="16" height="16" rx="3" fill="white" stroke="#C7D2FE" strokeWidth="1" />
                <rect x="773" y="155" width="16" height="5" rx="3" fill="#6366F1" opacity="0.08" />
                <rect x="793" y="155" width="16" height="16" rx="3" fill="white" stroke="#C7D2FE" strokeWidth="1" />
                <rect x="793" y="155" width="16" height="5" rx="3" fill="#8B5CF6" opacity="0.08" />
                <rect x="813" y="155" width="16" height="16" rx="3" fill="white" stroke="#C7D2FE" strokeWidth="1" />
                <rect x="813" y="155" width="16" height="5" rx="3" fill="#6366F1" opacity="0.08" />
                {/* Truck cabin */}
                <rect x="835" y="145" width="32" height="35" rx="4" fill="white" stroke="#6366F1" strokeWidth="1.5" />
                <rect x="840" y="150" width="22" height="14" rx="2" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
                {/* Windshield reflection */}
                <line x1="845" y1="152" x2="850" y2="160" stroke="white" strokeWidth="1.5" opacity="0.8" />
                {/* Truck wheels */}
                <circle cx="785" cy="182" r="9" fill="#374151" />
                <circle cx="785" cy="182" r="4" fill="#9CA3AF" />
                <circle cx="855" cy="182" r="9" fill="#374151" />
                <circle cx="855" cy="182" r="4" fill="#9CA3AF" />
                {/* Map pin above truck */}
                <path d="M800 120 C800 112 808 108 812 108 C816 108 824 112 824 120 C824 128 812 135 812 135 C812 135 800 128 800 120Z" fill="#8B5CF6" opacity="0.12" stroke="#8B5CF6" strokeWidth="1" />
                <circle cx="812" cy="119" r="3" fill="#8B5CF6" opacity="0.3" />
                {/* Step badge */}
                <circle cx="818" cy="87" r="14" fill="#6366F1" />
                <text x="818" y="92" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="sans-serif">05</text>
                {/* Label */}
                <text x="818" y="210" textAnchor="middle" fill="#6366F1" fontSize="12" fontWeight="700" fontFamily="sans-serif">Dispatch &amp; Delivery</text>
                <text x="818" y="226" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">500+ retail partners</text>
                <text x="818" y="238" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">across 8 states</text>

                {/* ── Decorative sparkles ── */}
                <path d="M175 55 L177 48 L179 55 L186 57 L179 59 L177 66 L175 59 L168 57Z" fill="#C7D2FE" opacity="0.5" />
                <path d="M555 50 L557 43 L559 50 L566 52 L559 54 L557 61 L555 54 L548 52Z" fill="#A78BFA" opacity="0.4" />
                <path d="M740 45 L741 40 L742 45 L747 46 L742 47 L741 52 L740 47 L735 46Z" fill="#C7D2FE" opacity="0.4" />
                <circle cx="20" cy="60" r="2" fill="#C7D2FE" opacity="0.4" />
                <circle cx="450" cy="45" r="2.5" fill="#A78BFA" opacity="0.3" />
                <circle cx="880" cy="70" r="2" fill="#C7D2FE" opacity="0.4" />

                {/* ── "Made in Ranchi" label ── */}
                <rect x="330" y="285" width="240" height="30" rx="15" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
                <rect x="345" y="292" width="16" height="16" rx="4" fill="#6366F1" opacity="0.12" />
                <path d="M349 300 L349 296 L353 293 L357 296 L357 300 Z" fill="#6366F1" opacity="0.4" />
                <rect x="350" y="298" width="3" height="3" rx="0.5" fill="#6366F1" opacity="0.25" />
                <text x="460" y="304" textAnchor="middle" fill="#6366F1" fontSize="11" fontWeight="600" fontFamily="sans-serif">Made with Pride in Ranchi, Jharkhand</text>
              </svg>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[#6366F1]" />
                <span className="text-[#6366F1] text-sm font-semibold uppercase tracking-wider">
                  Trust & Quality
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Certifications & Compliance
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-xl mx-auto">
                Our products meet the highest national and international quality
                standards.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="flex flex-col items-center rounded-2xl bg-white border border-[#E5E7EB] p-6 text-center hover:shadow-lg hover:border-[#C7D2FE] transition-all duration-300">
                  <div className="mb-3">
                    {cert.icon}
                  </div>
                  <h4 className="font-bold text-[#1A1A1A]">
                    {cert.name}
                  </h4>
                  <p className="mt-1 text-xs text-[#6B7280]">{cert.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Experience the Difference?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Join thousands of happy customers who trust Viamsh FMCG for their household needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#6366F1] font-semibold hover:bg-[#EEF2FF] transition-colors shadow-lg"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
