'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotal = useCartStore((state) => state.getTotal);
  const getItemCount = useCartStore((state) => state.getItemCount);

  // Hydration guard for zustand persisted store
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    document.title = 'Cart | Viamsh FMCG';
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-green border-t-transparent" />
      </div>
    );
  }

  const subtotal = getTotal();
  const itemCount = getItemCount();
  const shippingEstimate = subtotal > 500 ? 0 : 49;
  const gst = Math.round(subtotal * 0.18 * 100) / 100;
  const total = subtotal + shippingEstimate + gst;

  // Empty cart
  if (items.length === 0) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <svg className="mx-auto h-24 w-24 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <h1 className="mt-6 font-heading text-2xl font-bold text-brand-dark">
              Your cart is empty
            </h1>
            <p className="mt-2 text-gray-500">
              Looks like you haven&apos;t added anything to your cart yet.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-block rounded-lg bg-brand-green px-8 py-3 font-semibold text-white transition-colors hover:bg-green-800"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="font-heading text-3xl font-bold text-brand-dark">
            Shopping Cart
          </h1>
          <span className="text-sm text-gray-500">
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {/* Desktop Table Header */}
            <div className="hidden border-b pb-3 text-xs font-medium uppercase tracking-wide text-gray-400 sm:grid sm:grid-cols-12 sm:gap-4">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <div className="divide-y">
              {items.map((item) => {
                const primaryImage = item.product.images.find((img) => img.is_primary);
                const itemTotal = item.variant.price * item.quantity;

                return (
                  <div
                    key={item.variant.id}
                    className="py-6 sm:grid sm:grid-cols-12 sm:items-center sm:gap-4"
                  >
                    {/* Product */}
                    <div className="flex gap-4 sm:col-span-6">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        {primaryImage ? (
                          <Image
                            src={primaryImage.image_url}
                            alt={primaryImage.alt_text}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-medium text-brand-dark hover:text-brand-green"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {item.variant.name} — {item.variant.size}
                        </p>
                        <button
                          onClick={() => removeItem(item.variant.id)}
                          className="mt-1 text-xs text-red-500 hover:text-red-700 sm:hidden"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-3 sm:col-span-2 sm:mt-0 sm:text-center">
                      <span className="text-sm text-gray-600">₹{item.variant.price}</span>
                    </div>

                    {/* Quantity */}
                    <div className="mt-3 flex items-center gap-2 sm:col-span-2 sm:mt-0 sm:justify-center">
                      <div className="flex items-center rounded-lg border border-gray-300">
                        <button
                          onClick={() =>
                            updateQuantity(item.variant.id, item.quantity - 1)
                          }
                          className="px-2 py-1 text-sm text-gray-600 hover:text-brand-dark"
                        >
                          -
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.variant.id, item.quantity + 1)
                          }
                          className="px-2 py-1 text-sm text-gray-600 hover:text-brand-dark"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.variant.id)}
                        className="hidden text-xs text-red-500 hover:text-red-700 sm:block"
                        aria-label="Remove item"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    {/* Total */}
                    <div className="mt-3 sm:col-span-2 sm:mt-0 sm:text-right">
                      <span className="font-semibold text-brand-dark">₹{itemTotal}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-between border-t pt-6">
              <Link
                href="/shop"
                className="flex items-center gap-1 text-sm font-medium text-brand-green hover:underline"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-sm text-gray-400 hover:text-red-500"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-brand-dark">
                Order Summary
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium">
                    {shippingEstimate === 0 ? (
                      <span className="text-brand-green">FREE</span>
                    ) : (
                      `₹${shippingEstimate}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">GST (18%)</span>
                  <span className="font-medium">₹{gst.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-base font-bold">
                    <span className="text-brand-dark">Total</span>
                    <span className="text-brand-dark">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {subtotal < 500 && (
                <p className="mt-3 text-xs text-gray-400">
                  Add ₹{(500 - subtotal).toFixed(0)} more for free shipping.
                </p>
              )}

              <button className="mt-6 w-full rounded-lg bg-brand-green py-3 font-semibold text-white transition-colors hover:bg-green-800">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
