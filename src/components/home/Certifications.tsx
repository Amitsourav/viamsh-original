'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';
import { ShieldCheck, Award, Leaf, FlaskConical, Factory, BadgeCheck } from 'lucide-react';

const certifications = [
  { icon: ShieldCheck, label: 'ISO 9001:2015', sublabel: 'Quality Management' },
  { icon: Award, label: 'BIS Certified', sublabel: 'Bureau of Indian Standards' },
  { icon: BadgeCheck, label: 'Made in India', sublabel: 'Proudly from Ranchi' },
  { icon: FlaskConical, label: 'Lab Tested', sublabel: 'Every Batch Verified' },
  { icon: Leaf, label: 'Eco-Friendly', sublabel: 'Reduced Phosphates' },
  { icon: Factory, label: 'GMP Compliant', sublabel: 'Good Manufacturing' },
];

export default function Certifications() {
  return (
    <section className="py-16 lg:py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Certified Quality You Can Trust
          </h2>
          <p className="mt-3 text-[#9CA3AF] max-w-xl mx-auto">
            Every Orma product meets the highest national and international quality standards.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, idx) => (
            <AnimatedSection key={cert.label} delay={idx * 0.06}>
              <div className="flex flex-col items-center text-center p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <cert.icon className="h-8 w-8 text-[#A78BFA] mb-3" />
                <p className="text-sm font-bold text-white">{cert.label}</p>
                <p className="text-xs text-[#9CA3AF] mt-1">{cert.sublabel}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
