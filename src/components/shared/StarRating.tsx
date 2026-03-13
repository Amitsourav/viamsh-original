'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

type Size = 'sm' | 'md' | 'lg';

interface StarRatingProps {
  rating: number;
  size?: Size;
  showCount?: boolean;
  count?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

const sizeMap: Record<Size, number> = {
  sm: 14,
  md: 20,
  lg: 28,
};

const GOLD = '#C8A951';
const GRAY = '#D1D5DB';

export default function StarRating({
  rating,
  size = 'md',
  showCount = false,
  count = 0,
  interactive = false,
  onChange,
  className = '',
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const displayRating = hoverRating ?? rating;
  const iconSize = sizeMap[size];

  const handleClick = (starIndex: number) => {
    if (interactive && onChange) {
      onChange(starIndex);
    }
  };

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((starIndex) => {
        const diff = displayRating - starIndex + 1;
        const isFull = diff >= 1;
        const isHalf = !isFull && diff >= 0.5;

        return (
          <button
            key={starIndex}
            type="button"
            disabled={!interactive}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => interactive && setHoverRating(starIndex)}
            onMouseLeave={() => interactive && setHoverRating(null)}
            className={`relative p-0 border-none bg-transparent ${
              interactive ? 'cursor-pointer' : 'cursor-default'
            }`}
            aria-label={`${starIndex} star${starIndex !== 1 ? 's' : ''}`}
          >
            {/* Empty star (background) */}
            <Star
              size={iconSize}
              fill={GRAY}
              stroke={GRAY}
              strokeWidth={1}
            />

            {/* Filled or half-filled overlay */}
            {(isFull || isHalf) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: isFull ? '100%' : '50%' }}
              >
                <Star
                  size={iconSize}
                  fill={GOLD}
                  stroke={GOLD}
                  strokeWidth={1}
                />
              </span>
            )}
          </button>
        );
      })}

      {showCount && (
        <span className="ml-1 text-sm text-gray-500">({count})</span>
      )}
    </div>
  );
}
