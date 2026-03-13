import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileMenu from '@/components/layout/MobileMenu';
import CartSidebar from '@/components/layout/CartSidebar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Viamsh FMCG',
    default: 'Viamsh FMCG - Premium FMCG Products',
  },
  description:
    'Viamsh FMCG Pvt. Ltd. — Premium cleaning products, detergents, and household essentials from Ranchi, Jharkhand. Quality you can trust.',
  keywords: [
    'Viamsh',
    'FMCG',
    'Orma Detergent',
    'cleaning products',
    'Ranchi',
    'Jharkhand',
    'household essentials',
  ],
  authors: [{ name: 'Viamsh FMCG Pvt. Ltd.' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Viamsh FMCG',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <AnnouncementBar />
        <Header />
        <main className="min-h-screen pt-[100px] md:pt-[116px]">{children}</main>
        <Footer />
        <MobileMenu />
        <CartSidebar />
      </body>
    </html>
  );
}
