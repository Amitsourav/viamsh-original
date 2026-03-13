'use client';

import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import type { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const primaryImage = product.images.find((img) => img.is_primary);
  const defaultVariant = product.variants[0];
  const price = defaultVariant?.price ?? 0;
  const mrp = defaultVariant?.mrp ?? 0;
  const hasMrpDiff = mrp > price && price > 0;
  const discount = hasMrpDiff ? Math.round(((mrp - price) / mrp) * 100) : 0;

  const avgRating =
    product.reviews.length > 0
      ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
      : 0;

  const initial = product.name.charAt(0).toUpperCase();

  return (
    <div className="relative group rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden hover:shadow-lg hover:border-[#C7D2FE] transition-all duration-300">
      {/* Coming Soon Overlay */}
      {!product.is_active && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0F172A]/50 backdrop-blur-[2px] rounded-2xl">
          <span className="px-5 py-2.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-bold rounded-full tracking-wide uppercase shadow-lg">
            Coming Soon
          </span>
        </div>
      )}

      <Link href={`/products/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F7]">
          {primaryImage ? (
            <img
              src={primaryImage.image_url}
              alt={primaryImage.alt_text}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
              <span className="text-5xl font-bold text-white/30">{initial}</span>
            </div>
          )}

          {/* Discount badge */}
          {hasMrpDiff && product.is_active && (
            <span className="absolute top-3 left-3 bg-[#EF4444] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
              {discount}% OFF
            </span>
          )}

          {/* Category badge */}
          {product.category && (
            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#6366F1] text-xs font-semibold px-2.5 py-1 rounded-lg">
              {product.category.name}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-bold text-[#1A1A1A] line-clamp-2 leading-snug group-hover:text-[#6366F1] transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          {avgRating > 0 && (
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3.5 h-3.5 ${
                      star <= Math.round(avgRating)
                        ? 'fill-[#F59E0B] text-[#F59E0B]'
                        : 'fill-[#E5E7EB] text-[#E5E7EB]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#9CA3AF]">({product.reviews.length})</span>
            </div>
          )}

          {/* Variants preview */}
          {product.variants.length > 1 && product.is_active && (
            <div className="flex items-center gap-1.5 mt-3">
              {product.variants.map((v) => (
                <span
                  key={v.id}
                  className="px-2 py-0.5 rounded-md bg-[#F5F5F7] text-[10px] font-medium text-[#6B7280]"
                >
                  {v.size}
                </span>
              ))}
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-3">
            {product.is_active && price > 0 ? (
              <>
                <span className="text-xl font-bold text-[#1A1A1A]">&#8377;{price}</span>
                {hasMrpDiff && (
                  <span className="text-sm text-[#9CA3AF] line-through">&#8377;{mrp}</span>
                )}
              </>
            ) : (
              <span className="text-sm text-[#9CA3AF] italic">Price coming soon</span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart */}
      {product.is_active && defaultVariant && (
        <div className="px-5 pb-5">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addItem(
                defaultVariant,
                {
                  id: product.id,
                  name: product.name,
                  slug: product.slug,
                  images: product.images,
                },
                1
              );
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200 cursor-pointer shadow-sm shadow-[#6366F1]/20"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}
