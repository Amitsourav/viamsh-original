'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';
import ShareButtons from '@/components/shared/ShareButtons';
import StarRating from '@/components/shared/StarRating';
import ProductCard from '@/components/products/ProductCard';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [pinCode, setPinCode] = useState('');
  const [pinCheckResult, setPinCheckResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'usage' | 'reviews'>('description');

  const addItem = useCartStore((state) => state.addItem);
  const selectedVariant = product.variants[selectedVariantIndex];

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addItem(
      selectedVariant,
      { id: product.id, name: product.name, slug: product.slug, images: product.images },
      quantity
    );
  };

  const handlePinCheck = () => {
    if (pinCode.length === 6) {
      setPinCheckResult('Delivery available to this pin code. Estimated delivery: 3-5 business days.');
    } else {
      setPinCheckResult('Please enter a valid 6-digit pin code.');
    }
  };

  const discount = selectedVariant
    ? Math.round(((selectedVariant.mrp - selectedVariant.price) / selectedVariant.mrp) * 100)
    : 0;

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Product Main */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
              {product.images.length > 0 ? (
                <Image
                  src={product.images[selectedImageIndex]?.image_url || '/images/placeholder.jpg'}
                  alt={product.images[selectedImageIndex]?.alt_text || product.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-brand-green-light">
                  <svg className="h-24 w-24 text-brand-green/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              {!product.is_active && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="rounded-full bg-brand-gold px-6 py-2 text-lg font-bold text-white">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImageIndex === index
                        ? 'border-brand-green'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={img.image_url}
                      alt={img.alt_text}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {product.category && (
              <Link
                href={`/shop?category=${product.category.slug}`}
                className="text-sm font-medium text-brand-green hover:underline"
              >
                {product.category.name}
              </Link>
            )}

            <h1 className="mt-2 font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating placeholder */}
            <div className="mt-3 flex items-center gap-2">
              <StarRating rating={4.5} />
              <span className="text-sm text-gray-500">
                ({product.reviews.length} reviews)
              </span>
            </div>

            {/* Price */}
            {selectedVariant && selectedVariant.price > 0 && (
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-brand-dark">
                  ₹{selectedVariant.price}
                </span>
                {selectedVariant.mrp > selectedVariant.price && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      ₹{selectedVariant.mrp}
                    </span>
                    <span className="rounded-full bg-brand-green-light px-2 py-0.5 text-sm font-semibold text-brand-green">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>
            )}

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700">
                  Size / Variant
                </h3>
                <div className="mt-2 flex flex-wrap gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={variant.id}
                      onClick={() => {
                        setSelectedVariantIndex(index);
                        setQuantity(1);
                      }}
                      disabled={!variant.is_active}
                      className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors ${
                        selectedVariantIndex === index
                          ? 'border-brand-green bg-brand-green-light text-brand-green'
                          : variant.is_active
                            ? 'border-gray-200 text-gray-700 hover:border-brand-green'
                            : 'cursor-not-allowed border-gray-100 text-gray-300'
                      }`}
                    >
                      {variant.name} — {variant.size}
                      {variant.price > 0 && (
                        <span className="ml-1 text-xs">₹{variant.price}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            {product.is_active && selectedVariant?.is_active && (
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center rounded-lg border border-gray-300">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-lg text-gray-600 hover:text-brand-dark"
                  >
                    -
                  </button>
                  <span className="min-w-[2rem] text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2 text-lg text-gray-600 hover:text-brand-dark"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 rounded-lg bg-brand-green px-8 py-3 font-semibold text-white transition-colors hover:bg-green-800 sm:flex-none"
                >
                  Add to Cart
                </button>
              </div>
            )}

            {!product.is_active && (
              <div className="mt-6 rounded-lg bg-brand-gold-light p-4">
                <p className="font-medium text-brand-gold">
                  This product is coming soon. Stay tuned!
                </p>
              </div>
            )}

            {/* Pin Code Checker */}
            <div className="mt-6 rounded-lg border border-gray-200 p-4">
              <h4 className="text-sm font-medium text-gray-700">
                Check Delivery Availability
              </h4>
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  value={pinCode}
                  onChange={(e) => {
                    setPinCode(e.target.value.replace(/\D/g, '').slice(0, 6));
                    setPinCheckResult(null);
                  }}
                  placeholder="Enter PIN code"
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                  maxLength={6}
                />
                <button
                  onClick={handlePinCheck}
                  className="rounded-lg bg-brand-dark px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Check
                </button>
              </div>
              {pinCheckResult && (
                <p className="mt-2 text-sm text-gray-600">{pinCheckResult}</p>
              )}
            </div>

            {/* Share */}
            <div className="mt-6">
              <ShareButtons title={product.name} url={typeof window !== 'undefined' ? window.location.href : `/products/${product.slug}`} />
            </div>
          </div>
        </div>

        {/* Tabs: Description, Ingredients, Usage, Reviews */}
        <div className="mt-12 border-t pt-8">
          <div className="flex gap-0 overflow-x-auto border-b">
            {(
              [
                { key: 'description', label: 'Description' },
                { key: 'ingredients', label: 'Ingredients' },
                { key: 'usage', label: 'How to Use' },
                { key: 'reviews', label: 'Reviews' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap border-b-2 px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'border-brand-green text-brand-green'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none text-gray-600">
                <p>{product.description}</p>
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div className="prose max-w-none text-gray-600">
                {product.ingredients ? (
                  <p>{product.ingredients}</p>
                ) : (
                  <p className="text-gray-400">Ingredients information will be available soon.</p>
                )}
              </div>
            )}
            {activeTab === 'usage' && (
              <div className="prose max-w-none text-gray-600">
                {product.usage_instructions ? (
                  <p>{product.usage_instructions}</p>
                ) : (
                  <p className="text-gray-400">Usage instructions will be available soon.</p>
                )}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                {product.reviews.length === 0 ? (
                  <div className="rounded-lg bg-gray-50 py-12 text-center">
                    <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                    <button className="mt-4 rounded-lg bg-brand-green px-6 py-2 text-sm font-medium text-white hover:bg-green-800">
                      Write a Review
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-center gap-2">
                          <StarRating rating={review.rating} />
                          {review.title && (
                            <span className="font-medium text-brand-dark">{review.title}</span>
                          )}
                        </div>
                        {review.comment && (
                          <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                        )}
                        <p className="mt-2 text-xs text-gray-400">
                          {review.user?.name || 'Anonymous'} &middot;{' '}
                          {new Date(review.created_at).toLocaleDateString('en-IN')}
                          {review.is_verified_purchase && (
                            <span className="ml-2 text-brand-green">Verified Purchase</span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              Related Products
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
