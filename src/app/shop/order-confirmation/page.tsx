'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';

export default function OrderConfirmationPage() {
  const [mounted, setMounted] = useState(false);

  const orderNumber = useMemo(() => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `VM-${timestamp}-${random}`;
  }, []);

  const estimatedDelivery = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, []);

  useEffect(() => {
    setMounted(true);
    document.title = 'Order Confirmed | Viamsh FMCG';
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-green border-t-transparent" />
      </div>
    );
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Confetti Dots */}
        <div className="pointer-events-none relative">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce rounded-full"
              style={{
                width: `${6 + Math.random() * 8}px`,
                height: `${6 + Math.random() * 8}px`,
                backgroundColor: ['#2E7D32', '#C8A951', '#4CAF50', '#FFD54F', '#81C784', '#FFC107'][i % 6],
                left: `${5 + Math.random() * 90}%`,
                top: `${-40 + Math.random() * 60}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Success Checkmark */}
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-green shadow-lg shadow-green-200">
            <svg
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
                className="animate-[draw_0.5s_ease-in-out_0.3s_forwards]"
                style={{
                  strokeDasharray: 24,
                  strokeDashoffset: 0,
                }}
              />
            </svg>
          </div>

          <h1 className="mt-6 font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
            Order Placed Successfully!
          </h1>
          <p className="mt-3 text-gray-600">
            Thank you for shopping with Viamsh FMCG. Your order has been confirmed.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            {/* Order Number */}
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Order Number
                </p>
                <p className="mt-1 font-heading text-lg font-bold text-brand-dark">
                  {orderNumber}
                </p>
              </div>
              <div className="rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green">
                Confirmed
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Order Date
                </p>
                <p className="mt-1 text-sm font-medium text-brand-dark">
                  {new Date().toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Estimated Delivery
                </p>
                <p className="mt-1 text-sm font-medium text-brand-dark">
                  {estimatedDelivery}
                </p>
              </div>
            </div>

            {/* What's Next */}
            <div className="border-t pt-4">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                What&apos;s Next?
              </p>
              <div className="mt-3 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-dark">Order Confirmation</p>
                    <p className="text-xs text-gray-500">
                      You will receive a confirmation email with your order details shortly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-500">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-dark">Order Processing</p>
                    <p className="text-xs text-gray-500">
                      We will prepare your order for dispatch within 1-2 business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-500">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-dark">Shipping</p>
                    <p className="text-xs text-gray-500">
                      Once shipped, you will receive a tracking link via email and SMS.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-500">
                    4
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-dark">Delivery</p>
                    <p className="text-xs text-gray-500">
                      Estimated delivery by {estimatedDelivery}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/account/orders"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-green px-6 py-3 font-semibold text-brand-green transition-colors hover:bg-brand-green hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Track Order
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-6 py-3 font-semibold text-white transition-colors hover:bg-green-800"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* Support */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Need help?{' '}
            <Link href="/contact" className="text-brand-green hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
