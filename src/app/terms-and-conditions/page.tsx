import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions for using the Viamsh FMCG website and purchasing our products.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the Viamsh FMCG website (www.viamshgroup.com), you agree to be bound by these Terms and Conditions, our Privacy Policy, and any additional guidelines or rules applicable to specific services or features. If you do not agree with any part of these terms, you must not use our website.',
      'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the website after changes constitutes acceptance of the revised terms.',
    ],
  },
  {
    title: '2. Use of Website',
    content: [
      'You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website.',
      'You must not: (a) use the website in any way that violates applicable laws or regulations; (b) use the website to transmit harmful, offensive, or illegal content; (c) attempt to gain unauthorised access to any part of the website or its systems; (d) use automated tools to scrape, crawl, or extract data from the website without prior written consent.',
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
    ],
  },
  {
    title: '3. Product Information',
    content: [
      'We strive to provide accurate product descriptions, images, and specifications on our website. However, we do not warrant that product descriptions, colours, or other content are accurate, complete, or error-free.',
      'Product images are for illustrative purposes only. Actual products may vary slightly in appearance, packaging, or formulation due to updates, seasonal changes, or manufacturing variations.',
      'We reserve the right to modify product information, discontinue products, or limit product availability at any time without prior notice.',
    ],
  },
  {
    title: '4. Pricing',
    content: [
      'All prices displayed on the website are in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. GST and other applicable taxes will be calculated and displayed at checkout.',
      'We make every effort to ensure pricing accuracy. However, in the event of a pricing error, we reserve the right to cancel orders placed at incorrect prices and notify you of the correction.',
      'Prices are subject to change without prior notice. The price applicable to your order is the price displayed at the time of placing the order.',
      'Promotional pricing and discounts are valid for the specified duration and are subject to terms and conditions mentioned alongside the offer.',
    ],
  },
  {
    title: '5. Orders & Payment',
    content: [
      'Placing an order on our website constitutes an offer to purchase. We reserve the right to accept or reject any order at our discretion.',
      'Order confirmation will be sent to your registered email address. An order is confirmed only after successful payment processing (for prepaid orders) or order acceptance confirmation (for Cash on Delivery).',
      'We accept the following payment methods: UPI (PhonePe, Google Pay, Paytm), Credit/Debit Cards (Visa, Mastercard, RuPay), Net Banking, and Cash on Delivery (COD). COD availability may vary by location.',
      'All online payments are processed through secure, PCI-DSS compliant payment gateways. Viamsh FMCG does not store your complete payment card details.',
      'We reserve the right to cancel orders due to stock unavailability, pricing errors, suspected fraud, or any other reason. Full refunds will be issued for cancelled prepaid orders.',
    ],
  },
  {
    title: '6. Shipping & Delivery',
    content: [
      'We aim to deliver orders within 3-7 business days from the date of order confirmation, depending on your location. Delivery timelines may vary for remote areas.',
      'Shipping charges, if applicable, will be displayed at checkout. Orders above a specified value may qualify for free shipping.',
      'Risk of loss and title for products pass to you upon delivery. Please inspect your order upon receipt and report any damage or discrepancy within 24 hours.',
      'For detailed shipping information, please refer to our Shipping Policy page.',
    ],
  },
  {
    title: '7. Returns & Refunds',
    content: [
      'We accept returns within 7 days of delivery, subject to conditions outlined in our Return & Refund Policy.',
      'Products must be returned in their original, unopened condition with all tags and packaging intact.',
      'Refunds will be processed to the original payment method within 7-10 business days after we receive and inspect the returned product.',
      'For complete details, please refer to our Return & Refund Policy page.',
    ],
  },
  {
    title: '8. Intellectual Property',
    content: [
      'All content on this website, including but not limited to text, graphics, logos, brand names (Viamsh, Orma, etc.), images, product designs, software, and other materials, is the property of Viamsh FMCG Pvt. Ltd. or its licensors and is protected by Indian and international intellectual property laws.',
      'You may not reproduce, distribute, modify, display, or create derivative works from any content on this website without prior written consent from Viamsh FMCG Pvt. Ltd.',
      'The Viamsh and Orma trademarks, logos, and service marks displayed on this website are registered trademarks of Viamsh FMCG Pvt. Ltd. Unauthorised use is strictly prohibited.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    content: [
      'To the maximum extent permitted by applicable law, Viamsh FMCG Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the website or products purchased.',
      'Our total liability for any claim arising from your use of the website or purchase of products shall not exceed the amount paid by you for the specific product or service giving rise to the claim.',
      'We do not guarantee uninterrupted, error-free, or secure access to our website. The website is provided on an "as is" and "as available" basis.',
      'We shall not be liable for delays, failures, or interruptions caused by events beyond our reasonable control, including but not limited to natural disasters, strikes, government actions, or technical failures.',
    ],
  },
  {
    title: '10. Governing Law & Dispute Resolution',
    content: [
      'These Terms and Conditions are governed by and construed in accordance with the laws of India.',
      'Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Ranchi, Jharkhand, India.',
      'Before initiating legal proceedings, parties agree to attempt to resolve disputes through good-faith negotiation. If negotiation fails, disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Ranchi, Jharkhand.',
    ],
  },
  {
    title: '11. Contact Us',
    content: [
      'For any questions or concerns regarding these Terms and Conditions, please contact us:',
      'Viamsh FMCG Pvt. Ltd.',
      'Ranchi, Jharkhand, India',
      'Email: contact@viamsh.com',
      'Phone: +91 92962 90854',
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-green-light py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-brand-dark sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-gray-600">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600">
              Welcome to Viamsh FMCG. These Terms and Conditions govern your use of our
              website and the purchase of products from Viamsh FMCG Pvt. Ltd. Please read
              these terms carefully before using our website or placing an order.
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
          </div>
        </div>
      </section>
    </>
  );
}
