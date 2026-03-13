import type { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import DistributorPageClient from './DistributorPageClient';

export const metadata: Metadata = {
  title: 'Become a Distributor | Viamsh FMCG',
  description:
    'Partner with Viamsh FMCG Pvt. Ltd. as an authorized distributor. 18-22% margins, exclusive territory, marketing support, low investment, and dedicated growth support across Jharkhand & Eastern India.',
};

export default function DistributorsPage() {
  return <DistributorPageClient />;
}
