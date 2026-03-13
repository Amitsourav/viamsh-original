'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type OrderStatusType = 'placed' | 'confirmed' | 'processing' | 'shipped' | 'delivered';

interface TimelineStep {
  status: OrderStatusType;
  label: string;
  date: string | null;
  completed: boolean;
  current: boolean;
}

const statusBadge: Record<string, { label: string; color: string; bg: string }> = {
  placed: { label: 'Placed', color: 'text-blue-700', bg: 'bg-blue-100' },
  confirmed: { label: 'Confirmed', color: 'text-indigo-700', bg: 'bg-indigo-100' },
  processing: { label: 'Processing', color: 'text-purple-700', bg: 'bg-purple-100' },
  shipped: { label: 'Shipped', color: 'text-orange-700', bg: 'bg-orange-100' },
  delivered: { label: 'Delivered', color: 'text-green-700', bg: 'bg-green-100' },
  cancelled: { label: 'Cancelled', color: 'text-red-700', bg: 'bg-red-100' },
};

// Sample order data for template
const sampleOrder = {
  order_number: 'VM-ORD-20260310-A1B2',
  date: '2026-03-10',
  status: 'shipped' as OrderStatusType,
  payment_method: 'UPI',
  payment_status: 'Paid',
  items: [
    {
      id: '1',
      name: 'Orma Detergent Powder',
      variant: 'Regular - 1 Kg',
      quantity: 2,
      unit_price: 189,
      total_price: 378,
    },
    {
      id: '2',
      name: 'Orma Liquid Detergent',
      variant: 'Fresh Fragrance - 500ml',
      quantity: 1,
      unit_price: 249,
      total_price: 249,
    },
  ],
  shipping_address: {
    full_name: 'Rahul Kumar',
    address_line_1: '42, Park Street',
    address_line_2: 'Near City Mall',
    city: 'Ranchi',
    state: 'Jharkhand',
    pin_code: '834001',
    phone: '9296290854',
  },
  subtotal: 627,
  shipping_charge: 0,
  gst: 112.86,
  total: 739.86,
  tracking_number: 'DL1234567890',
};

const getTimeline = (currentStatus: OrderStatusType): TimelineStep[] => {
  const allStatuses: OrderStatusType[] = ['placed', 'confirmed', 'processing', 'shipped', 'delivered'];
  const currentIndex = allStatuses.indexOf(currentStatus);

  return allStatuses.map((status, index) => ({
    status,
    label: status.charAt(0).toUpperCase() + status.slice(1),
    date: index <= currentIndex ? '10 Mar 2026' : null,
    completed: index < currentIndex,
    current: index === currentIndex,
  }));
};

export default function OrderDetailPage() {
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn] = useState(false); // Placeholder - no auth yet

  useEffect(() => {
    setMounted(true);
    document.title = `Order ${sampleOrder.order_number} | Viamsh FMCG`;
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-green border-t-transparent" />
      </div>
    );
  }

  // Not logged in
  if (!isLoggedIn) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-green-light">
            <svg className="h-10 w-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="mt-6 font-heading text-2xl font-bold text-brand-dark">
            Please Login to View Order Details
          </h1>
          <p className="mt-2 text-gray-500">
            You need to be logged in to view your order details and tracking information.
          </p>
          <Link
            href="/account/login"
            className="mt-6 inline-block rounded-lg bg-brand-green px-8 py-3 font-semibold text-white transition-colors hover:bg-green-800"
          >
            Login to Your Account
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/account/register" className="text-brand-green hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </section>
    );
  }

  const timeline = getTimeline(sampleOrder.status);
  const badge = statusBadge[sampleOrder.status];

  return (
    <>
      {/* Header */}
      <section className="bg-brand-green-light py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/account/orders"
            className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-green"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Orders
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-2xl font-bold text-brand-dark sm:text-3xl">
                Order {sampleOrder.order_number}
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Placed on{' '}
                {new Date(sampleOrder.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
            <span
              className={`inline-flex rounded-full px-3 py-1.5 text-sm font-semibold ${badge.bg} ${badge.color}`}
            >
              {badge.label}
            </span>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          {/* Status Timeline */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="font-heading text-lg font-semibold text-brand-dark">
              Order Status
            </h2>
            <div className="mt-6">
              {/* Desktop Timeline */}
              <div className="hidden sm:block">
                <div className="flex items-center justify-between">
                  {timeline.map((step, index) => (
                    <div key={step.status} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                            step.completed
                              ? 'bg-brand-green text-white'
                              : step.current
                              ? 'border-2 border-brand-green bg-white text-brand-green'
                              : 'border-2 border-gray-300 bg-white text-gray-400'
                          }`}
                        >
                          {step.completed ? (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            index + 1
                          )}
                        </div>
                        <p
                          className={`mt-2 text-xs font-medium ${
                            step.completed || step.current ? 'text-brand-dark' : 'text-gray-400'
                          }`}
                        >
                          {step.label}
                        </p>
                        {step.date && (
                          <p className="text-[10px] text-gray-400">{step.date}</p>
                        )}
                      </div>
                      {index < timeline.length - 1 && (
                        <div
                          className={`mx-2 h-0.5 flex-1 ${
                            step.completed ? 'bg-brand-green' : 'bg-gray-300'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="sm:hidden">
                <div className="space-y-4">
                  {timeline.map((step, index) => (
                    <div key={step.status} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                            step.completed
                              ? 'bg-brand-green text-white'
                              : step.current
                              ? 'border-2 border-brand-green bg-white text-brand-green'
                              : 'border-2 border-gray-300 bg-white text-gray-400'
                          }`}
                        >
                          {step.completed ? (
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            index + 1
                          )}
                        </div>
                        {index < timeline.length - 1 && (
                          <div
                            className={`h-8 w-0.5 ${
                              step.completed ? 'bg-brand-green' : 'bg-gray-300'
                            }`}
                          />
                        )}
                      </div>
                      <div className="pb-4">
                        <p
                          className={`text-sm font-medium ${
                            step.completed || step.current ? 'text-brand-dark' : 'text-gray-400'
                          }`}
                        >
                          {step.label}
                        </p>
                        {step.date && (
                          <p className="text-xs text-gray-400">{step.date}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {sampleOrder.tracking_number && (
              <div className="mt-6 rounded-lg bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Tracking Number
                </p>
                <p className="mt-1 font-mono text-sm font-medium text-brand-dark">
                  {sampleOrder.tracking_number}
                </p>
              </div>
            )}
          </div>

          {/* Order Items */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="font-heading text-lg font-semibold text-brand-dark">
              Order Items
            </h2>
            <div className="mt-4 divide-y">
              {sampleOrder.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                    <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-brand-dark">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      {item.variant} x {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-brand-dark">
                      ₹{item.total_price.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-400">₹{item.unit_price} each</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Shipping Address */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="font-heading text-lg font-semibold text-brand-dark">
                Shipping Address
              </h2>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium text-brand-dark">
                  {sampleOrder.shipping_address.full_name}
                </p>
                <p>{sampleOrder.shipping_address.address_line_1}</p>
                {sampleOrder.shipping_address.address_line_2 && (
                  <p>{sampleOrder.shipping_address.address_line_2}</p>
                )}
                <p>
                  {sampleOrder.shipping_address.city}, {sampleOrder.shipping_address.state} -{' '}
                  {sampleOrder.shipping_address.pin_code}
                </p>
                <p className="mt-2">Phone: {sampleOrder.shipping_address.phone}</p>
              </div>
            </div>

            {/* Payment Info */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="font-heading text-lg font-semibold text-brand-dark">
                Payment Information
              </h2>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Payment Method</span>
                  <span className="font-medium text-brand-dark">{sampleOrder.payment_method}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Payment Status</span>
                  <span className="font-medium text-green-600">{sampleOrder.payment_status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Total Breakdown */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="font-heading text-lg font-semibold text-brand-dark">
              Order Total
            </h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">₹{sampleOrder.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium">
                  {sampleOrder.shipping_charge === 0 ? (
                    <span className="text-brand-green">FREE</span>
                  ) : (
                    `₹${sampleOrder.shipping_charge.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">GST (18%)</span>
                <span className="font-medium">₹{sampleOrder.gst.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-base font-bold">
                  <span className="text-brand-dark">Total</span>
                  <span className="text-brand-dark">₹{sampleOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/account/orders"
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Back to Orders
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-brand-green px-5 py-2.5 text-sm font-medium text-brand-green transition-colors hover:bg-brand-green hover:text-white"
            >
              Need Help?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
