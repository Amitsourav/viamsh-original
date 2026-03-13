import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy of Viamsh FMCG Pvt. Ltd. — Learn how we collect, use, and protect your personal information.',
};

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect the following types of information when you use our website, place an order, or interact with our services:',
      'Personal Information: Name, email address, phone number, shipping and billing addresses, payment details, and any other information you provide during account registration or checkout.',
      'Usage Information: Browser type, IP address, device information, pages visited, time spent on pages, referring URLs, and other analytical data collected through cookies and similar technologies.',
      'Transaction Information: Order history, payment records, shipping details, and communication related to your purchases.',
      'Communication Data: Feedback, reviews, customer support inquiries, and any correspondence with Viamsh FMCG.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect for the following purposes:',
      'Order Fulfilment: To process, ship, and deliver your orders and to communicate order status updates via SMS, email, or WhatsApp.',
      'Account Management: To create and maintain your account, manage your preferences, and provide personalised experiences.',
      'Customer Support: To respond to your inquiries, resolve complaints, and provide after-sales assistance.',
      'Marketing & Promotions: To send you promotional offers, newsletters, and product recommendations. You may opt out of marketing communications at any time.',
      'Improvement: To analyse usage patterns, improve our website, products, and services, and conduct research and analytics.',
      'Legal Compliance: To comply with applicable laws, regulations, and legal processes under Indian law, including the Information Technology Act, 2000.',
    ],
  },
  {
    title: '3. Information Sharing & Disclosure',
    content: [
      'We do not sell, rent, or trade your personal information to third parties. We may share your information in the following circumstances:',
      'Service Providers: With trusted third-party service providers who assist us in operating our website, processing payments (Razorpay, PhonePe, etc.), shipping orders, and delivering communications.',
      'Legal Requirements: When required by law, regulation, court order, or governmental authority, or to protect our rights, safety, or property.',
      'Business Transfers: In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.',
      'All third-party service providers are contractually obligated to protect your information and use it solely for the purposes specified by us.',
    ],
  },
  {
    title: '4. Data Security',
    content: [
      'We implement industry-standard security measures to protect your personal information, including:',
      'SSL/TLS encryption for all data transmitted between your browser and our servers.',
      'Secure storage of payment information through PCI-DSS compliant payment gateways. We do not store your complete credit/debit card details on our servers.',
      'Access controls and authentication mechanisms to prevent unauthorised access to your data.',
      'Regular security audits and vulnerability assessments of our systems.',
      'While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.',
    ],
  },
  {
    title: '5. Cookies & Tracking Technologies',
    content: [
      'We use cookies and similar technologies to enhance your browsing experience:',
      'Essential Cookies: Required for the website to function properly, including cart management, authentication, and security.',
      'Analytics Cookies: Used to understand how visitors interact with our website, helping us improve our services (e.g., Google Analytics).',
      'Marketing Cookies: Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.',
      'You can control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.',
    ],
  },
  {
    title: '6. Your Rights',
    content: [
      'As a user, you have the following rights regarding your personal information:',
      'Access: You may request a copy of the personal information we hold about you.',
      'Correction: You may request correction of inaccurate or incomplete information by updating your account profile or contacting us.',
      'Deletion: You may request deletion of your personal data, subject to legal and contractual obligations.',
      'Opt-Out: You may opt out of marketing communications by clicking the "unsubscribe" link in our emails or contacting us directly.',
      'Data Portability: You may request your data in a structured, commonly used format.',
      'To exercise any of these rights, please contact us at contact@viamsh.com.',
    ],
  },
  {
    title: '7. Children\'s Privacy',
    content: [
      'Our website and services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.',
    ],
  },
  {
    title: '8. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.',
      'Significant changes will be communicated via email or a prominent notice on our website.',
    ],
  },
  {
    title: '9. Contact Us',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:',
      'Viamsh FMCG Pvt. Ltd.',
      'Ranchi, Jharkhand, India',
      'Email: contact@viamsh.com',
      'Phone: +91 92962 90854',
      'You may also reach us through our Contact Us page.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-green-light py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-brand-dark sm:text-5xl">
            Privacy Policy
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
              Viamsh FMCG Pvt. Ltd. (&quot;Viamsh,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed
              to protecting the privacy and security of your personal information. This
              Privacy Policy describes how we collect, use, disclose, and safeguard your
              information when you visit our website, make purchases, or interact with
              our services. By using our website, you consent to the practices described
              in this policy.
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

            {/* Governing Law */}
            <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-heading text-lg font-semibold text-brand-dark">
                Governing Law
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                This Privacy Policy is governed by and construed in accordance with the
                laws of India, including the Information Technology Act, 2000 and the
                Information Technology (Reasonable Security Practices and Procedures and
                Sensitive Personal Data or Information) Rules, 2011. Any disputes arising
                from this policy shall be subject to the exclusive jurisdiction of the
                courts in Ranchi, Jharkhand, India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
