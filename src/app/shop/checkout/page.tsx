'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
  'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
  'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal', 'Andaman & Nicobar Islands', 'Chandigarh',
  'Dadra & Nagar Haveli and Daman & Diu', 'Delhi', 'Jammu & Kashmir',
  'Ladakh', 'Lakshadweep', 'Puducherry',
];

type PaymentMethodType = 'upi' | 'card' | 'netbanking' | 'cod';

interface ShippingForm {
  full_name: string;
  phone: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  pin_code: string;
}

const initialShipping: ShippingForm = {
  full_name: '',
  phone: '',
  address_line_1: '',
  address_line_2: '',
  city: '',
  state: '',
  pin_code: '',
};

const paymentMethods: { id: PaymentMethodType; label: string; icon: string; desc: string }[] = [
  {
    id: 'upi',
    label: 'UPI',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    desc: 'Google Pay, PhonePe, Paytm',
  },
  {
    id: 'card',
    label: 'Credit / Debit Card',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    desc: 'Visa, Mastercard, RuPay',
  },
  {
    id: 'netbanking',
    label: 'Net Banking',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    desc: 'All major Indian banks',
  },
  {
    id: 'cod',
    label: 'Cash on Delivery',
    icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    desc: 'Pay when you receive',
  },
];

const steps = ['Shipping', 'Payment', 'Review'];

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const getTotal = useCartStore((state) => state.getTotal);
  const getItemCount = useCartStore((state) => state.getItemCount);
  const clearCart = useCartStore((state) => state.clearCart);

  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [shipping, setShipping] = useState<ShippingForm>(initialShipping);
  const [shippingErrors, setShippingErrors] = useState<Record<string, string>>({});
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('upi');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.title = 'Checkout | Viamsh FMCG';
  }, []);

  // Redirect if cart is empty
  useEffect(() => {
    if (mounted && items.length === 0) {
      router.push('/');
    }
  }, [mounted, items.length, router]);

  const subtotal = useMemo(() => (mounted ? getTotal() : 0), [mounted, getTotal]);
  const shippingCharge = subtotal >= 299 ? 0 : 49;
  const codFee = paymentMethod === 'cod' ? 30 : 0;
  const gst = Math.round(subtotal * 0.18 * 100) / 100;
  const total = subtotal + shippingCharge + codFee + gst;

  const validateShipping = (): boolean => {
    const errors: Record<string, string> = {};
    if (!shipping.full_name.trim()) errors.full_name = 'Full name is required';
    if (!shipping.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(shipping.phone)) {
      errors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!shipping.address_line_1.trim()) errors.address_line_1 = 'Address is required';
    if (!shipping.city.trim()) errors.city = 'City is required';
    if (!shipping.state) errors.state = 'State is required';
    if (!shipping.pin_code.trim()) {
      errors.pin_code = 'PIN code is required';
    } else if (!/^\d{6}$/.test(shipping.pin_code)) {
      errors.pin_code = 'Enter a valid 6-digit PIN code';
    }
    setShippingErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleShippingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShipping((prev) => ({ ...prev, [name]: value }));
    if (shippingErrors[name]) {
      setShippingErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const goToStep = (step: number) => {
    if (step === 1 && currentStep === 0) {
      if (!validateShipping()) return;
    }
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlaceOrder = async () => {
    setIsPlacingOrder(true);
    // Simulate order placement
    await new Promise((resolve) => setTimeout(resolve, 2000));
    clearCart();
    router.push('/shop/order-confirmation');
  };

  const inputClasses = (field: string) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-1 ${
      shippingErrors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
        : 'border-gray-300 focus:border-brand-green focus:ring-brand-green'
    }`;

  if (!mounted || items.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-green border-t-transparent" />
      </div>
    );
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back to Cart */}
        <Link
          href="/shop/cart"
          className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-green"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cart
        </Link>

        <h1 className="font-heading text-3xl font-bold text-brand-dark">Checkout</h1>

        {/* Step Indicators */}
        <div className="mt-8 mb-10">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      index < currentStep
                        ? 'bg-brand-green text-white'
                        : index === currentStep
                        ? 'border-2 border-brand-green bg-white text-brand-green'
                        : 'border-2 border-gray-300 bg-white text-gray-400'
                    }`}
                  >
                    {index < currentStep ? (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      index <= currentStep ? 'text-brand-green' : 'text-gray-400'
                    }`}
                  >
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`mx-4 h-0.5 w-16 sm:w-24 ${
                      index < currentStep ? 'bg-brand-green' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping */}
            {currentStep === 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h2 className="font-heading text-xl font-semibold text-brand-dark">
                  Shipping Address
                </h2>
                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={shipping.full_name}
                      onChange={handleShippingChange}
                      className={inputClasses('full_name')}
                      placeholder="Enter your full name"
                    />
                    {shippingErrors.full_name && (
                      <p className="mt-1 text-xs text-red-500">{shippingErrors.full_name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={shipping.phone}
                      onChange={handleShippingChange}
                      className={inputClasses('phone')}
                      placeholder="10-digit mobile number"
                    />
                    {shippingErrors.phone && (
                      <p className="mt-1 text-xs text-red-500">{shippingErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="address_line_1" className="block text-sm font-medium text-gray-700">
                      Address Line 1 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address_line_1"
                      name="address_line_1"
                      value={shipping.address_line_1}
                      onChange={handleShippingChange}
                      className={inputClasses('address_line_1')}
                      placeholder="House/Flat No., Building, Street"
                    />
                    {shippingErrors.address_line_1 && (
                      <p className="mt-1 text-xs text-red-500">{shippingErrors.address_line_1}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="address_line_2" className="block text-sm font-medium text-gray-700">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      id="address_line_2"
                      name="address_line_2"
                      value={shipping.address_line_2}
                      onChange={handleShippingChange}
                      className={inputClasses('address_line_2')}
                      placeholder="Area, Colony, Landmark (optional)"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={shipping.city}
                        onChange={handleShippingChange}
                        className={inputClasses('city')}
                        placeholder="City"
                      />
                      {shippingErrors.city && (
                        <p className="mt-1 text-xs text-red-500">{shippingErrors.city}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={shipping.state}
                        onChange={handleShippingChange}
                        className={inputClasses('state')}
                      >
                        <option value="">Select State</option>
                        {INDIAN_STATES.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      {shippingErrors.state && (
                        <p className="mt-1 text-xs text-red-500">{shippingErrors.state}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="pin_code" className="block text-sm font-medium text-gray-700">
                        PIN Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="pin_code"
                        name="pin_code"
                        value={shipping.pin_code}
                        onChange={handleShippingChange}
                        className={inputClasses('pin_code')}
                        placeholder="6-digit PIN"
                        maxLength={6}
                      />
                      {shippingErrors.pin_code && (
                        <p className="mt-1 text-xs text-red-500">{shippingErrors.pin_code}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => goToStep(1)}
                    className="rounded-lg bg-brand-green px-8 py-3 font-semibold text-white transition-colors hover:bg-green-800"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {currentStep === 1 && (
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h2 className="font-heading text-xl font-semibold text-brand-dark">
                  Payment Method
                </h2>
                <div className="mt-6 space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-colors ${
                        paymentMethod === method.id
                          ? 'border-brand-green bg-brand-green-light'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment_method"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                        className="h-4 w-4 border-gray-300 text-brand-green focus:ring-brand-green"
                      />
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                        <svg
                          className="h-5 w-5 text-brand-green"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={method.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-brand-dark">{method.label}</p>
                        <p className="text-xs text-gray-500">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {paymentMethod === 'cod' && (
                  <div className="mt-4 rounded-lg bg-yellow-50 p-3 text-sm text-yellow-800">
                    A COD handling fee of ₹30 will be added to your order total.
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => goToStep(0)}
                    className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => goToStep(2)}
                    className="rounded-lg bg-brand-green px-8 py-3 font-semibold text-white transition-colors hover:bg-green-800"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Items */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <h2 className="font-heading text-xl font-semibold text-brand-dark">
                    Order Items
                  </h2>
                  <div className="mt-4 divide-y">
                    {items.map((item) => {
                      const primaryImage = item.product.images.find((img) => img.is_primary);
                      return (
                        <div key={item.variant.id} className="flex gap-4 py-4">
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            {primaryImage ? (
                              <Image
                                src={primaryImage.image_url}
                                alt={primaryImage.alt_text}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center">
                                <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-brand-dark">{item.product.name}</p>
                            <p className="text-xs text-gray-500">
                              {item.variant.name} - {item.variant.size} x {item.quantity}
                            </p>
                          </div>
                          <p className="font-semibold text-brand-dark">
                            ₹{(item.variant.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading text-xl font-semibold text-brand-dark">
                      Shipping Address
                    </h2>
                    <button
                      onClick={() => goToStep(0)}
                      className="text-sm text-brand-green hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <p className="font-medium text-brand-dark">{shipping.full_name}</p>
                    <p>{shipping.address_line_1}</p>
                    {shipping.address_line_2 && <p>{shipping.address_line_2}</p>}
                    <p>
                      {shipping.city}, {shipping.state} - {shipping.pin_code}
                    </p>
                    <p>Phone: {shipping.phone}</p>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading text-xl font-semibold text-brand-dark">
                      Payment Method
                    </h2>
                    <button
                      onClick={() => goToStep(1)}
                      className="text-sm text-brand-green hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    {paymentMethods.find((m) => m.id === paymentMethod)?.label}
                  </p>
                </div>

                {/* Place Order */}
                <div className="flex justify-between">
                  <button
                    onClick={() => goToStep(1)}
                    className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={isPlacingOrder}
                    className="rounded-lg bg-brand-green px-10 py-3 font-semibold text-white transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isPlacingOrder ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Placing Order...
                      </span>
                    ) : (
                      `Place Order - ₹${total.toFixed(2)}`
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-brand-dark">
                Order Summary
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                {getItemCount()} {getItemCount() === 1 ? 'item' : 'items'}
              </p>

              {/* Collapsed items list */}
              <div className="mt-4 max-h-48 space-y-2 overflow-y-auto border-b pb-4">
                {items.map((item) => (
                  <div key={item.variant.id} className="flex justify-between text-sm">
                    <span className="truncate text-gray-600">
                      {item.product.name} x{item.quantity}
                    </span>
                    <span className="shrink-0 font-medium">
                      ₹{(item.variant.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium">
                    {shippingCharge === 0 ? (
                      <span className="text-brand-green">FREE</span>
                    ) : (
                      `₹${shippingCharge}`
                    )}
                  </span>
                </div>
                {codFee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">COD Fee</span>
                    <span className="font-medium">₹{codFee}</span>
                  </div>
                )}
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

              {subtotal < 299 && (
                <p className="mt-3 text-xs text-gray-400">
                  Add ₹{(299 - subtotal).toFixed(0)} more for free shipping.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
