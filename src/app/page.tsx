import type { Metadata } from 'next';
import HeroCarousel3D from '@/components/home/HeroCarousel3D';
import BrandStory from '@/components/home/BrandStory';
import WhyOrma from '@/components/home/WhyOrma';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import HowItWorks from '@/components/home/HowItWorks';
import Certifications from '@/components/home/Certifications';
import Testimonials from '@/components/home/Testimonials';
import WhereToBuy from '@/components/home/WhereToBuy';
import FAQ from '@/components/home/FAQ';
import CTASections from '@/components/home/CTASections';

export const metadata: Metadata = {
  title: 'Viamsh FMCG - Premium Cleaning Products | Orma Detergent',
  description:
    'Viamsh FMCG Pvt. Ltd. brings you Orma Detergent and premium household cleaning products. Quality, affordability, and trust — made in Ranchi, Jharkhand, for every Indian home.',
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel3D />
      <BrandStory />
      <WhyOrma />
      <FeaturedProducts />
      <HowItWorks />
      <Certifications />
      <Testimonials />
      <WhereToBuy />
      <FAQ />
      <CTASections />
    </>
  );
}
