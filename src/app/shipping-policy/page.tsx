import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description:
    'Shipping Policy for Viamsh FMCG — delivery timelines, shipping charges, tracking, and serviceability information.',
};

const shippingHighlights = [
  {
    icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
    title: 'Free Shipping',
    description: 'On all orders above ₹299',
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: '3-7 Business Days',
    description: 'Standard delivery timeline',
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    title: 'Order Tracking',
    description: 'Real-time shipment updates',
  },
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    title: 'Pan-India Delivery',
    description: 'We ship across India',
  },
];

const sections = [
  {
    title: '1. Shipping Partners',
    content: [
      'We partner with leading logistics providers to ensure safe and timely delivery of your orders:',
      'Our shipping partners include Delhivery, Blue Dart, DTDC, India Post, and other reputed courier services. The courier partner for your order is selected based on your delivery location and the nature of the products ordered.',
      'All shipments are fully insured against damage or loss during transit.',
    ],
  },
  {
    title: '2. Delivery Timeline',
    content: [
      'Standard Delivery: 3-7 business days from the date of order confirmation and dispatch.',
      'Metro Cities (Delhi, Mumbai, Kolkata, Chennai, Bangalore, Hyderabad): Typically 3-4 business days.',
      'Tier 2 & Tier 3 Cities: Typically 4-6 business days.',
      'Remote / Rural Areas: May take up to 7-10 business days.',
      'Please note that business days exclude Sundays and public holidays. Delivery timelines are estimates and may vary due to unforeseen circumstances such as weather conditions, strikes, or logistical disruptions.',
    ],
  },
  {
    title: '3. Shipping Charges',
    content: [
      'Free Shipping: All orders with a cart value of ₹299 or above qualify for free standard shipping across India.',
      'Orders Below ₹299: A flat shipping charge of ₹49 will be applied at checkout.',
      'Cash on Delivery (COD): An additional COD handling fee of ₹30 may apply on COD orders, depending on the delivery location.',
      'Expedited Shipping: Where available, express delivery options may be offered at an additional charge, displayed at checkout.',
    ],
  },
  {
    title: '4. Order Tracking',
    content: [
      'Once your order is dispatched, you will receive a shipping confirmation via email and SMS containing your tracking number and courier partner details.',
      'You can track your order through: (a) the tracking link provided in the shipping confirmation email/SMS, (b) the courier partner\'s website using the tracking number, or (c) your account on our website under "My Orders."',
      'If you do not receive tracking information within 48 hours of placing your order, please contact our customer support team.',
    ],
  },
  {
    title: '5. Serviceability',
    content: [
      'We deliver to most PIN codes across India. You can check if your location is serviceable by entering your PIN code at checkout.',
      'Certain remote locations may not be serviceable by our courier partners. In such cases, we will notify you and offer alternative arrangements or a full refund.',
      'We currently do not offer international shipping. For bulk or international inquiries, please contact us at orders@viamsh.com.',
    ],
  },
  {
    title: '6. Delayed Shipments',
    content: [
      'While we strive to deliver all orders within the estimated timeline, delays may occasionally occur due to:',
      'High-demand periods (festivals, sales events), weather disruptions or natural calamities, logistics or courier partner delays, address-related issues (incomplete address, incorrect PIN code, unreachable phone number).',
      'In case of significant delays (beyond 10 business days), we will proactively reach out to you with updates and options, including the possibility of cancellation and a full refund.',
      'If your order is marked as "delivered" but you have not received it, please contact us within 48 hours so we can investigate with the courier partner.',
    ],
  },
  {
    title: '7. Delivery Instructions',
    content: [
      'Please ensure that the shipping address and contact number provided are accurate and complete. Orders cannot be redirected once dispatched.',
      'Someone must be available at the delivery address to receive the package. If delivery is unsuccessful after two attempts, the order may be returned to us, and you will be contacted for re-dispatch (additional charges may apply).',
      'Upon delivery, please inspect the package for any visible damage before accepting. If the package appears tampered with or damaged, please refuse delivery and contact us immediately.',
    ],
  },
  {
    title: '8. Contact Us',
    content: [
      'For any shipping-related queries, please reach out to us:',
      'Email: orders@viamsh.com',
      'Phone: +91 92962 90854',
      'Business Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST',
    ],
  },
];

export default function ShippingPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-green-light py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-brand-dark sm:text-5xl">
            Shipping Policy
          </h1>
          <p className="mt-3 text-gray-600">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {shippingHighlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-light">
                  <svg
                    className="h-7 w-7 text-brand-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="mt-3 font-heading text-sm font-semibold text-brand-dark">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600">
              At Viamsh FMCG, we are committed to delivering your orders safely and
              promptly. Please review our shipping policy below for details on delivery
              timelines, charges, and tracking information.
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="font-heading text-2xl font-bold text-brand-dark">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-xl bg-brand-green-light p-6 text-center">
              <p className="text-gray-700">
                Have a question about your shipment?
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-block rounded-lg bg-brand-green px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
