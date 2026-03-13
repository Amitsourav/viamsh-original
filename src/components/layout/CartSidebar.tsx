'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';
import { useUIStore } from '@/store/uiStore';

export default function CartSidebar() {
  const cartSidebarOpen = useUIStore((s) => s.cartSidebarOpen);
  const toggleCartSidebar = useUIStore((s) => s.toggleCartSidebar);

  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const getTotal = useCartStore((s) => s.getTotal);

  const subtotal = getTotal();

  return (
    <AnimatePresence>
      {cartSidebarOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50"
            onClick={toggleCartSidebar}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <h2 className="text-lg font-semibold text-[#1A1A2E]">
                Your Cart ({items.length})
              </h2>
              <button
                onClick={toggleCartSidebar}
                className="rounded-full p-2 text-[#1A1A2E] transition-colors hover:bg-[#E8F5E9]"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items */}
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#E8F5E9]">
                  <ShoppingCart className="h-10 w-10 text-[#2E7D32]" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#1A1A2E]">
                  Your cart is empty
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Looks like you haven&apos;t added anything to your cart yet.
                </p>
                <Link
                  href="/shop"
                  onClick={toggleCartSidebar}
                  className="mt-6 rounded-lg bg-[#2E7D32] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1B5E20]"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="space-y-4">
                    {items.map((item) => {
                      const primaryImage = item.product.images?.find(
                        (img) => img.is_primary
                      );
                      const imageUrl =
                        primaryImage?.image_url ||
                        item.product.images?.[0]?.image_url;

                      return (
                        <li
                          key={item.variant.id}
                          className="flex gap-4 rounded-lg border border-gray-100 p-3"
                        >
                          {/* Image */}
                          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-50">
                            {imageUrl ? (
                              <Image
                                src={imageUrl}
                                alt={item.product.name}
                                fill
                                className="object-cover"
                                sizes="80px"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-gray-300">
                                <ShoppingCart className="h-6 w-6" />
                              </div>
                            )}
                          </div>

                          {/* Details */}
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="text-sm font-medium text-[#1A1A2E] line-clamp-1">
                                  {item.product.name}
                                </h4>
                                <p className="mt-0.5 text-xs text-gray-500">
                                  {item.variant.name} &middot; {item.variant.size}
                                </p>
                              </div>
                              <button
                                onClick={() => removeItem(item.variant.id)}
                                className="rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                                aria-label="Remove item"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>

                            <div className="mt-auto flex items-center justify-between pt-2">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-1 rounded-lg border border-gray-200">
                                <button
                                  onClick={() =>
                                    updateQuantity(
                                      item.variant.id,
                                      item.quantity - 1
                                    )
                                  }
                                  className="flex h-7 w-7 items-center justify-center text-gray-500 transition-colors hover:text-[#2E7D32]"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="w-6 text-center text-sm font-medium text-[#1A1A2E]">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(
                                      item.variant.id,
                                      item.quantity + 1
                                    )
                                  }
                                  className="flex h-7 w-7 items-center justify-center text-gray-500 transition-colors hover:text-[#2E7D32]"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>

                              {/* Price */}
                              <p className="text-sm font-semibold text-[#1A1A2E]">
                                ₹{(item.variant.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Subtotal</span>
                    <span className="text-lg font-bold text-[#1A1A2E]">
                      ₹{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">
                    Shipping and taxes calculated at checkout.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Link
                      href="/cart"
                      onClick={toggleCartSidebar}
                      className="rounded-lg border border-[#2E7D32] px-4 py-2.5 text-center text-sm font-semibold text-[#2E7D32] transition-colors hover:bg-[#E8F5E9]"
                    >
                      View Cart
                    </Link>
                    <Link
                      href="/checkout"
                      onClick={toggleCartSidebar}
                      className="rounded-lg bg-[#2E7D32] px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1B5E20]"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
