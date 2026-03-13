'use client';

import type { ProductVariant } from '@/types';

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant | null;
  onSelect: (variant: ProductVariant) => void;
}

function stockLabel(qty: number): {
  text: string;
  color: string;
  disabled: boolean;
} {
  if (qty <= 0) return { text: 'Out of Stock', color: 'text-red-500', disabled: true };
  if (qty <= 10) return { text: 'Low Stock', color: 'text-orange-500', disabled: false };
  return { text: 'In Stock', color: 'text-[#2E7D32]', disabled: false };
}

export default function VariantSelector({
  variants,
  selectedVariant,
  onSelect,
}: VariantSelectorProps) {
  const sorted = [...variants].sort((a, b) => a.sort_order - b.sort_order);

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-[#1A1A2E]">Select Size</p>

      <div className="flex flex-wrap gap-3">
        {sorted.map((variant) => {
          const isSelected = selectedVariant?.id === variant.id;
          const { text, color, disabled } = stockLabel(variant.stock_quantity);

          return (
            <button
              key={variant.id}
              type="button"
              disabled={disabled || !variant.is_active}
              onClick={() => onSelect(variant)}
              className={`
                relative flex flex-col items-center px-5 py-3 rounded-xl border-2 transition-all duration-200 cursor-pointer
                ${
                  disabled || !variant.is_active
                    ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                    : isSelected
                    ? 'border-[#2E7D32] bg-[#2E7D32]/5 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-[#2E7D32]/40'
                }
              `}
            >
              {/* Size */}
              <span
                className={`text-sm font-semibold ${
                  isSelected ? 'text-[#2E7D32]' : 'text-[#1A1A2E]'
                }`}
              >
                {variant.size}
              </span>

              {/* Price */}
              <span className="text-xs text-gray-500 mt-0.5">
                {variant.price > 0 ? `\u20B9${variant.price}` : '\u2014'}
              </span>

              {/* Stock badge */}
              <span className={`text-[10px] font-medium mt-1 ${color}`}>
                {text}
              </span>

              {/* Selected indicator */}
              {isSelected && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#2E7D32] rounded-full flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L4.5 7.5L8 3"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
