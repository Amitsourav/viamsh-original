import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Return & Refund Policy',
  description:
    'Return and Refund Policy for Viamsh FMCG — return window, conditions, refund process, and exchange information.',
};

const sections = [
  {
    title: '1. Return Window',
    content: [
      'We offer a 7-day return window from the date of delivery. If 7 days have passed since delivery, we are unable to offer a return or refund.',
      'To be eligible for a return, you must initiate the return request within 7 calendar days of receiving your order.',
      'The return window may be extended during promotional events or festivals, which will be communicated at the time of purchase.',
    ],
  },
  {
    title: '2. Conditions for Return',
    content: [
      'To qualify for a return, the following conditions must be met:',
      'The product must be unused, unopened, and in its original packaging with all seals intact.',
      'The product must be in the same condition as received, with all original tags, labels, and accessories included.',
      'You must provide a valid reason for the return, such as: damaged or defective product received, wrong product delivered, product significantly different from the description, or expired product received.',
      'Products that have been opened, used, or tampered with will not be accepted for return, except in cases of manufacturing defects.',
      'Proof of purchase (order confirmation email or order number) is required for all returns.',
    ],
  },
  {
    title: '3. How to Initiate a Return',
    content: [
      'To initiate a return, please follow these steps:',
      'Step 1: Log in to your account on our website and navigate to "My Orders." Select the order containing the item you wish to return and click "Request Return."',
      'Step 2: Select the item(s) you want to return, choose the reason for return, and upload photos of the product (especially if damaged or defective).',
      'Step 3: Our customer support team will review your request within 24-48 hours and confirm the return via email or SMS.',
      'Step 4: Once approved, a reverse pickup will be arranged by our logistics partner. You will receive pickup details via email/SMS.',
      'Alternatively, you can contact us directly at contact@viamsh.com or call +91 92962 90854 to initiate a return.',
    ],
  },
  {
    title: '4. Refund Process',
    content: [
      'Once we receive and inspect the returned product, we will notify you of the approval or rejection of your refund.',
      'Approved Refunds: Refunds will be processed within 7-10 business days to the original payment method used during purchase.',
      'Prepaid Orders: The refund will be credited to the original payment source (bank account, UPI, credit/debit card).',
      'COD Orders: Refunds for Cash on Delivery orders will be processed via bank transfer (NEFT/IMPS). You will need to provide your bank account details.',
      'Shipping charges paid during the original order are non-refundable unless the return is due to our error (wrong/defective product).',
      'Please allow 3-5 additional business days for the refund to reflect in your account after processing, depending on your bank or payment provider.',
    ],
  },
  {
    title: '5. Exchange Policy',
    content: [
      'We currently offer exchanges for the same product in a different variant or size, subject to availability.',
      'To request an exchange, follow the same process as initiating a return and select "Exchange" as the preferred resolution.',
      'If the requested variant is not available, we will process a full refund instead.',
      'Exchange orders will be shipped within 3-5 business days after we receive the original product.',
      'No additional shipping charges will be applied for exchanges due to our error. For customer-initiated exchanges (e.g., size preference), standard shipping charges may apply.',
    ],
  },
  {
    title: '6. Non-Returnable Items',
    content: [
      'The following items are not eligible for return or exchange:',
      'Products that have been opened, used, or partially consumed.',
      'Products without original packaging, seals, tags, or labels.',
      'Products marked as "Non-Returnable" or "Final Sale" on the product page.',
      'Products damaged due to misuse, negligence, or improper storage by the customer.',
      'Gift cards and promotional items.',
      'Products purchased more than 7 days before the return request.',
    ],
  },
  {
    title: '7. Damaged or Defective Products',
    content: [
      'If you receive a damaged, defective, or incorrect product, please contact us within 48 hours of delivery with:',
      'Your order number, photographs clearly showing the damage or defect, and a brief description of the issue.',
      'We will arrange a free return pickup and send a replacement or issue a full refund, including shipping charges, at no extra cost to you.',
    ],
  },
  {
    title: '8. Cancellation Policy',
    content: [
      'You may cancel your order before it is shipped by visiting "My Orders" in your account or by contacting our support team.',
      'Once an order has been shipped, it cannot be cancelled. You may refuse delivery and initiate a return once the product is returned to us.',
      'For prepaid cancelled orders, a full refund will be processed within 5-7 business days.',
    ],
  },
  {
    title: '9. Contact Us',
    content: [
      'For any return or refund related queries, please reach out:',
      'Email: contact@viamsh.com',
      'Phone: +91 92962 90854',
      'Business Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST',
    ],
  },
];

export default function ReturnPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-green-light py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-brand-dark sm:text-5xl">
            Return &amp; Refund Policy
          </h1>
          <p className="mt-3 text-gray-600">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="border-b py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light">
                <svg className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-3 font-heading font-semibold text-brand-dark">7-Day Returns</h3>
              <p className="mt-1 text-xs text-gray-500">From date of delivery</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light">
                <svg className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h3 className="mt-3 font-heading font-semibold text-brand-dark">Easy Refunds</h3>
              <p className="mt-1 text-xs text-gray-500">7-10 business days</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light">
                <svg className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mt-3 font-heading font-semibold text-brand-dark">Free Exchange</h3>
              <p className="mt-1 text-xs text-gray-500">Subject to availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600">
              At Viamsh FMCG, customer satisfaction is our top priority. If you are not
              completely satisfied with your purchase, we are here to help. Please review
              our return and refund policy below.
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
                Need help with a return or refund?
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
