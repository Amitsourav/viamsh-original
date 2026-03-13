'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/shop', label: 'Shop' },
  { href: '/distributors', label: 'For Distributors' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const policyLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/shipping-policy', label: 'Shipping Policy' },
  { href: '/return-policy', label: 'Return Policy' },
];

const socialLinks = [
  { href: '#', label: 'Instagram — Coming Soon', icon: Instagram },
  { href: '#', label: 'Facebook — Coming Soon', icon: Facebook },
  { href: '#', label: 'YouTube — Coming Soon', icon: Youtube },
  { href: '#', label: 'LinkedIn — Coming Soon', icon: Linkedin },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-[#A78BFA]">Viamsh</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Premium FMCG products crafted with care. Delivering quality from
              the heart of Jharkhand to homes across India.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-[#6366F1] hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Policies
            </h3>
            <ul className="mt-4 space-y-3">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#A78BFA]" />
                <span className="text-sm text-gray-400">Ranchi, Jharkhand, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#A78BFA]" />
                <a href="tel:+919296290854" className="text-sm text-gray-400 transition-colors hover:text-white">
                  +91 92962 90854
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#A78BFA]" />
                <a href="mailto:contact@viamsh.com" className="text-sm text-gray-400 transition-colors hover:text-white">
                  contact@viamsh.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-lg font-semibold text-white">Subscribe to our Newsletter</h3>
            <p className="mt-2 text-sm text-gray-400">Get updates on new products, offers, and health tips.</p>
            {subscribed ? (
              <p className="mt-4 text-sm font-medium text-[#A78BFA]">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1]"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[#6366F1] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4F46E5]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-500">
            &copy; 2026 Viamsh FMCG Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
