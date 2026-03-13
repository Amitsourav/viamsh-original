'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type OrderStatusType = 'placed' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

interface OrderRow {
  id: string;
  order_number: string;
  date: string;
  status: OrderStatusType;
  total: number;
  items_count: number;
}

const statusConfig: Record<OrderStatusType, { label: string; color: string; bg: string }> = {
  placed: { label: 'Placed', color: 'text-blue-700', bg: 'bg-blue-100' },
  confirmed: { label: 'Confirmed', color: 'text-indigo-700', bg: 'bg-indigo-100' },
  shipped: { label: 'Shipped', color: 'text-orange-700', bg: 'bg-orange-100' },
  delivered: { label: 'Delivered', color: 'text-green-700', bg: 'bg-green-100' },
  cancelled: { label: 'Cancelled', color: 'text-red-700', bg: 'bg-red-100' },
};

// Placeholder sample orders for layout demonstration
const sampleOrders: OrderRow[] = [
  {
    id: '1',
    order_number: 'VM-ORD-20260310-A1B2',
    date: '2026-03-10',
    status: 'confirmed',
    total: 847.0,
    items_count: 3,
  },
  {
    id: '2',
    order_number: 'VM-ORD-20260305-C3D4',
    date: '2026-03-05',
    status: 'shipped',
    total: 1249.0,
    items_count: 5,
  },
  {
    id: '3',
    order_number: 'VM-ORD-20260225-E5F6',
    date: '2026-02-25',
    status: 'delivered',
    total: 499.0,
    items_count: 2,
  },
  {
    id: '4',
    order_number: 'VM-ORD-20260220-G7H8',
    date: '2026-02-20',
    status: 'cancelled',
    total: 325.0,
    items_count: 1,
  },
];

export default function OrdersPage() {
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn] = useState(false); // Placeholder - no auth yet

  useEffect(() => {
    setMounted(true);
    document.title = 'My Orders | Viamsh FMCG';
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h1 className="mt-6 font-heading text-2xl font-bold text-brand-dark">
            Please Login to View Your Orders
          </h1>
          <p className="mt-2 text-gray-500">
            You need to be logged in to view your order history and track your deliveries.
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

  return (
    <>
      {/* Header */}
      <section className="bg-brand-green-light py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-brand-dark">My Orders</h1>
          <p className="mt-1 text-gray-600">Track and manage your orders</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {sampleOrders.length === 0 ? (
            <div className="py-20 text-center">
              <svg className="mx-auto h-16 w-16 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h2 className="mt-4 font-heading text-xl font-semibold text-brand-dark">
                No orders yet
              </h2>
              <p className="mt-2 text-gray-500">
                When you place an order, it will appear here.
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-block rounded-lg bg-brand-green px-8 py-3 font-semibold text-white transition-colors hover:bg-green-800"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                      <th className="px-6 py-4">Order Number</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Items</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Total</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {sampleOrders.map((order) => {
                      const status = statusConfig[order.status];
                      return (
                        <tr key={order.id} className="transition-colors hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-brand-dark">
                            {order.order_number}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {new Date(order.date).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {order.items_count} {order.items_count === 1 ? 'item' : 'items'}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${status.bg} ${status.color}`}
                            >
                              {status.label}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right text-sm font-semibold text-brand-dark">
                            ₹{order.total.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Link
                              href={`/account/orders/${order.id}`}
                              className="text-sm font-medium text-brand-green hover:underline"
                            >
                              View Details
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="space-y-4 md:hidden">
                {sampleOrders.map((order) => {
                  const status = statusConfig[order.status];
                  return (
                    <div
                      key={order.id}
                      className="rounded-xl border border-gray-200 bg-white p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-brand-dark">
                            {order.order_number}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-500">
                            {new Date(order.date).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${status.bg} ${status.color}`}
                        >
                          {status.label}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between border-t pt-3">
                        <div>
                          <p className="text-xs text-gray-500">
                            {order.items_count} {order.items_count === 1 ? 'item' : 'items'}
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-brand-dark">
                            ₹{order.total.toFixed(2)}
                          </p>
                        </div>
                        <Link
                          href={`/account/orders/${order.id}`}
                          className="rounded-lg border border-brand-green px-4 py-2 text-xs font-medium text-brand-green transition-colors hover:bg-brand-green hover:text-white"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
