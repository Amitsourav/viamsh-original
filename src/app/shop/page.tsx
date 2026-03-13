'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, categories } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Star,
  Sparkles,
  ArrowRight,
  Package,
  Tag,
  Phone,
  ChevronRight,
  Plus,
  Minus,
  Check,
} from 'lucide-react';

const activeProducts = products.filter((p) => p.is_active);
const comingSoonProducts = products.filter((p) => !p.is_active);
const featuredProduct = activeProducts[0]; // Orma Detergent

const trustBadges = [
  { icon: Truck, text: 'Free Delivery above ₹199' },
  { icon: Shield, text: '100% Genuine Products' },
  { icon: RotateCcw, text: 'Easy Returns' },
  { icon: Package, text: 'Secure Packaging' },
];

const categoryIcons: Record<string, React.ReactNode> = {
  'cat-detergent': (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="16" y="8" width="32" height="48" rx="6" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
      <rect x="16" y="8" width="32" height="14" rx="6" fill="#6366F1" opacity="0.12" />
      <rect x="22" y="12" width="20" height="6" rx="3" fill="#6366F1" opacity="0.2" />
      <rect x="24" y="30" width="16" height="3" rx="1.5" fill="#C7D2FE" />
      <rect x="24" y="36" width="12" height="3" rx="1.5" fill="#C7D2FE" opacity="0.6" />
      <circle cx="32" cy="48" r="4" fill="#6366F1" opacity="0.1" stroke="#6366F1" strokeWidth="1" />
    </svg>
  ),
  'cat-tea': (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <path d="M14 24 h28 v24 a8 8 0 0 1 -8 8 h-12 a8 8 0 0 1 -8 -8 Z" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
      <path d="M42 30 h6 a6 6 0 0 1 0 12 h-6" stroke="#6366F1" strokeWidth="2" fill="none" />
      <path d="M24 18 Q24 12 28 12" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M30 16 Q30 10 34 10" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
      <rect x="12" y="56" width="32" height="3" rx="1.5" fill="#C7D2FE" opacity="0.5" />
    </svg>
  ),
  'cat-cleaning': (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="24" y="6" width="16" height="10" rx="4" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
      <rect x="18" y="16" width="28" height="40" rx="6" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
      <rect x="18" y="16" width="28" height="12" rx="6" fill="#6366F1" opacity="0.1" />
      <circle cx="32" cy="40" r="8" fill="#6366F1" opacity="0.08" stroke="#6366F1" strokeWidth="1.5" />
      <path d="M28 40 L31 43 L37 37" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function ShopPage() {
  const addItem = useCartStore((s) => s.addItem);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [addedVariants, setAddedVariants] = useState<Set<string>>(new Set());

  const handleAddToCart = (variantIndex: number) => {
    if (!featuredProduct) return;
    const variant = featuredProduct.variants[variantIndex];
    const primaryImage = featuredProduct.images.find((img) => img.is_primary);
    addItem(
      variant,
      {
        id: featuredProduct.id,
        name: featuredProduct.name,
        slug: featuredProduct.slug,
        images: featuredProduct.images,
      },
      1
    );
    setAddedVariants((prev) => new Set(prev).add(variant.id));
    setTimeout(() => {
      setAddedVariants((prev) => {
        const next = new Set(prev);
        next.delete(variant.id);
        return next;
      });
    }, 2000);
  };

  return (
    <>
      <title>Shop | Viamsh FMCG</title>
      <meta
        name="description"
        content="Shop Viamsh FMCG products online — Orma Detergent Powder, premium teas, and cleaning solutions. Free delivery on orders above ₹199."
      />

      {/* Hero Promo Banner */}
      <section className="relative bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />
          <svg className="absolute right-8 top-8 w-16 h-16 opacity-10" viewBox="0 0 80 80" fill="none">
            <path d="M30 38 L35 18 L40 38 L60 42 L40 46 L35 66 L30 46 L10 42Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-white/70" />
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                    Special Offer
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Shop Viamsh Products
                </h1>
                <p className="mt-2 text-white/70 text-lg max-w-lg">
                  Quality cleaning products starting at just <span className="text-white font-bold">₹10</span>. Free delivery on orders above ₹199.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#6366F1] font-semibold text-sm hover:bg-[#EEF2FF] transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Start Shopping
                  </a>
                  <a
                    href="https://wa.me/919296290854?text=Hi%2C%20I%20want%20to%20order%20Viamsh%20products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1EB954] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Order on WhatsApp
                  </a>
                </div>
              </div>

              {/* Promo card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15 max-w-xs">
                <p className="text-xs text-white/60 uppercase tracking-wider font-semibold">Limited Time</p>
                <p className="text-2xl font-bold text-white mt-1">
                  Save up to 9%
                </p>
                <p className="text-sm text-white/70 mt-1">
                  On Orma Detergent Value Packs. MRP ₹110, now only ₹100.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">VALUE PACK</span>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">1Kg</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2">
                <badge.icon className="w-4 h-4 text-[#6366F1]" />
                <span className="text-xs sm:text-sm font-medium text-[#374151]">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-10 lg:py-14 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">Shop by Category</h2>
                <p className="text-sm text-[#6B7280] mt-1">Browse our product range</p>
              </div>
              <Link href="/shop" className="text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat, idx) => {
              const productCount = products.filter((p) => p.category_id === cat.id).length;
              return (
                <AnimatedSection key={cat.id} delay={idx * 0.08}>
                  <Link
                    href={`/shop?category=${cat.id}`}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#C7D2FE] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="shrink-0">
                      {categoryIcons[cat.id]}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#6366F1] transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">
                        {productCount} {productCount === 1 ? 'product' : 'products'}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#C7D2FE] ml-auto group-hover:text-[#6366F1] transition-colors" />
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Product — Orma Detergent */}
      {featuredProduct && (
        <section id="products" className="py-10 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-[#6366F1]" />
                <span className="text-[#6366F1] text-sm font-semibold uppercase tracking-wider">
                  Bestseller
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                {featuredProduct.name}
              </h2>
              <p className="text-sm text-[#6B7280] mt-1 max-w-xl">
                {featuredProduct.description?.slice(0, 120)}...
              </p>
            </AnimatedSection>

            <div className="mt-8 grid gap-8 lg:grid-cols-2 items-start">
              {/* Product Image */}
              <AnimatedSection direction="left">
                <div className="rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] overflow-hidden">
                  {featuredProduct.images.find((img) => img.is_primary) ? (
                    <img
                      src={featuredProduct.images.find((img) => img.is_primary)!.image_url}
                      alt={featuredProduct.images.find((img) => img.is_primary)!.alt_text}
                      className="w-full aspect-square object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/30">O</span>
                    </div>
                  )}
                </div>
              </AnimatedSection>

              {/* Variant Cards */}
              <AnimatedSection direction="right">
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3">
                    Choose Your Size
                  </p>

                  {featuredProduct.variants
                    .filter((v) => v.is_active)
                    .map((variant, idx) => {
                      const hasMrpDiff = variant.mrp > variant.price && variant.price > 0;
                      const discount = hasMrpDiff
                        ? Math.round(((variant.mrp - variant.price) / variant.mrp) * 100)
                        : 0;
                      const isAdded = addedVariants.has(variant.id);

                      return (
                        <div
                          key={variant.id}
                          className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                            selectedVariant === idx
                              ? 'border-[#6366F1] bg-[#EEF2FF]'
                              : 'border-[#E5E7EB] bg-white hover:border-[#C7D2FE]'
                          }`}
                          onClick={() => setSelectedVariant(idx)}
                        >
                          {/* Radio indicator */}
                          <div
                            className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
                              selectedVariant === idx
                                ? 'border-[#6366F1]'
                                : 'border-[#D1D5DB]'
                            }`}
                          >
                            {selectedVariant === idx && (
                              <div className="w-2.5 h-2.5 rounded-full bg-[#6366F1]" />
                            )}
                          </div>

                          {/* Variant info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#1A1A1A]">{variant.name}</span>
                              <span className="px-2 py-0.5 rounded-md bg-[#F5F5F7] text-[10px] font-semibold text-[#6B7280]">
                                {variant.size}
                              </span>
                              {variant.name === 'Value Pack' && (
                                <span className="px-2 py-0.5 rounded-md bg-[#6366F1] text-[10px] font-bold text-white">
                                  BEST VALUE
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#9CA3AF] mt-0.5">
                              SKU: {variant.sku} &middot; {variant.stock_quantity} in stock
                            </p>
                          </div>

                          {/* Price */}
                          <div className="text-right shrink-0">
                            <p className="text-lg font-bold text-[#1A1A1A]">₹{variant.price}</p>
                            {hasMrpDiff && (
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs text-[#9CA3AF] line-through">₹{variant.mrp}</span>
                                <span className="text-xs font-bold text-[#EF4444]">{discount}% off</span>
                              </div>
                            )}
                          </div>

                          {/* Add to cart button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(idx);
                            }}
                            className={`shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                              isAdded
                                ? 'bg-[#10B981] text-white'
                                : 'bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-sm shadow-[#6366F1]/20'
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-4 h-4" />
                                Added
                              </>
                            ) : (
                              <>
                                <Plus className="w-4 h-4" />
                                Add
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}

                  {/* Quick info */}
                  <div className="mt-4 p-4 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB]">
                    <p className="text-xs font-semibold text-[#374151] mb-2">Product Highlights</p>
                    <ul className="space-y-1.5">
                      {['Tough stain removal', 'Long-lasting fragrance', 'Safe for all fabrics', 'Hand wash & machine wash'].map(
                        (item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-[#6B7280]">
                            <Check className="w-3 h-3 text-[#6366F1] shrink-0" />
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* View full details link */}
                  <Link
                    href={`/products/${featuredProduct.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] mt-2"
                  >
                    View Full Product Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon Products */}
      {comingSoonProducts.length > 0 && (
        <section className="py-10 lg:py-14 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6] text-sm font-semibold uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                New Products on the Way
              </h2>
              <p className="text-sm text-[#6B7280] mt-1">
                Be the first to know when these products launch.
              </p>
            </AnimatedSection>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {comingSoonProducts.map((product, idx) => {
                const primaryImage = product.images.find((img) => img.is_primary);
                return (
                  <AnimatedSection key={product.id} delay={idx * 0.1}>
                    <div className="relative group rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden hover:shadow-md transition-all duration-300">
                      {/* Coming soon overlay */}
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0F172A]/40 backdrop-blur-[1px] rounded-2xl">
                        <span className="px-5 py-2.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-bold rounded-full tracking-wide uppercase shadow-lg">
                          Coming Soon
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row">
                        {/* Image */}
                        <div className="sm:w-48 aspect-[4/3] sm:aspect-square bg-[#F5F5F7] shrink-0">
                          {primaryImage ? (
                            <img
                              src={primaryImage.image_url}
                              alt={primaryImage.alt_text}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                              <span className="text-4xl font-bold text-white/20">
                                {product.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="p-5 flex-1">
                          {product.category && (
                            <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">
                              {product.category.name}
                            </span>
                          )}
                          <h3 className="text-lg font-bold text-[#1A1A1A] mt-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-[#6B7280] mt-2 line-clamp-2">
                            {product.description}
                          </p>
                          <p className="text-xs text-[#9CA3AF] italic mt-3">
                            Pricing and availability announced soon
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* WhatsApp Order CTA */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />
              </div>

              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Prefer to Order via WhatsApp?
                  </h2>
                  <p className="mt-2 text-white/70 max-w-md">
                    Send us a message with your order details and we&apos;ll handle the rest. Quick, simple, and personal.
                  </p>
                </div>
                <a
                  href="https://wa.me/919296290854?text=Hi%2C%20I%20want%20to%20order%20Viamsh%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1EB954] transition-colors shadow-lg shrink-0"
                >
                  <Phone className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
