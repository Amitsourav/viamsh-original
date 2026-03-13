'use client';

import { useState, useMemo } from 'react';
import { MessageSquarePlus, BadgeCheck, ChevronDown } from 'lucide-react';
import type { Review } from '@/types';
import StarRating from '@/components/shared/StarRating';

interface ReviewSectionProps {
  productId: string;
  reviews: Review[];
}

type SortOption = 'recent' | 'helpful' | 'highest' | 'lowest';

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'helpful', label: 'Most Helpful' },
  { value: 'highest', label: 'Highest Rated' },
  { value: 'lowest', label: 'Lowest Rated' },
];

function RatingBar({
  star,
  count,
  total,
}: {
  star: number;
  count: number;
  total: number;
}) {
  const pct = total > 0 ? (count / total) * 100 : 0;

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="w-8 text-right text-gray-500">{star}&#9733;</span>
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#C8A951] rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-8 text-gray-400 text-xs">{count}</span>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function ReviewSection({
  productId,
  reviews,
}: ReviewSectionProps) {
  const [sort, setSort] = useState<SortOption>('recent');
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Rating summary
  const avgRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    return (
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    );
  }, [reviews]);

  const distribution = useMemo(() => {
    const dist = [0, 0, 0, 0, 0]; // index 0 = 1-star, index 4 = 5-star
    reviews.forEach((r) => {
      const idx = Math.max(0, Math.min(4, r.rating - 1));
      dist[idx]++;
    });
    return dist;
  }, [reviews]);

  // Sort reviews
  const sortedReviews = useMemo(() => {
    const copy = [...reviews];
    switch (sort) {
      case 'recent':
        return copy.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      case 'helpful':
        // No helpfulness metric in the type, fall back to verified first then recent
        return copy.sort((a, b) => {
          if (a.is_verified_purchase !== b.is_verified_purchase)
            return a.is_verified_purchase ? -1 : 1;
          return (
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
          );
        });
      case 'highest':
        return copy.sort((a, b) => b.rating - a.rating);
      case 'lowest':
        return copy.sort((a, b) => a.rating - b.rating);
      default:
        return copy;
    }
  }, [reviews, sort]);

  // Empty state
  if (reviews.length === 0) {
    return (
      <section className="py-10" id={`reviews-${productId}`}>
        <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">
          Customer Reviews
        </h2>
        <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-2xl text-center">
          <MessageSquarePlus size={40} className="text-gray-300 mb-3" />
          <p className="text-gray-500 font-medium">No reviews yet</p>
          <p className="text-sm text-gray-400 mt-1 max-w-xs">
            Be the first to share your experience with this product.
          </p>
          <button
            type="button"
            onClick={() => setShowLoginPrompt(true)}
            className="mt-5 px-6 py-2.5 bg-[#2E7D32] text-white text-sm font-medium rounded-xl hover:bg-[#256d29] transition-colors cursor-pointer"
          >
            Write a Review
          </button>
          {showLoginPrompt && (
            <p className="mt-3 text-sm text-gray-500 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-lg">
              Please log in to write a review.
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-10" id={`reviews-${productId}`}>
      <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        {/* Rating Summary */}
        <div className="bg-gray-50 rounded-2xl p-6 space-y-4 h-fit">
          <div className="text-center">
            <p className="text-5xl font-bold text-[#1A1A2E]">
              {avgRating.toFixed(1)}
            </p>
            <StarRating rating={avgRating} size="md" className="justify-center mt-2" />
            <p className="text-sm text-gray-500 mt-1">
              {reviews.length} review{reviews.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="space-y-1.5">
            {[5, 4, 3, 2, 1].map((star) => (
              <RatingBar
                key={star}
                star={star}
                count={distribution[star - 1]}
                total={reviews.length}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowLoginPrompt(true)}
            className="w-full py-2.5 bg-[#2E7D32] text-white text-sm font-medium rounded-xl hover:bg-[#256d29] transition-colors cursor-pointer"
          >
            Write a Review
          </button>
          {showLoginPrompt && (
            <p className="text-sm text-gray-500 bg-yellow-50 border border-yellow-200 px-3 py-2 rounded-lg text-center">
              Please log in to write a review.
            </p>
          )}
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {/* Sort */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="review-sort"
              className="text-sm text-gray-500 shrink-0"
            >
              Sort by:
            </label>
            <div className="relative">
              <select
                id="review-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/30 focus:border-[#2E7D32]"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
              />
            </div>
          </div>

          {/* Reviews */}
          {sortedReviews.map((review) => (
            <article
              key={review.id}
              className="bg-white border border-gray-100 rounded-xl p-5 space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#1A1A2E]">
                      {review.user?.name ?? 'Anonymous'}
                    </span>
                    {review.is_verified_purchase && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded-full">
                        <BadgeCheck size={12} />
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <StarRating rating={review.rating} size="sm" />
                </div>
                <time className="text-xs text-gray-400 shrink-0">
                  {formatDate(review.created_at)}
                </time>
              </div>

              {review.title && (
                <h4 className="text-sm font-semibold text-[#1A1A2E]">
                  {review.title}
                </h4>
              )}

              {review.comment && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {review.comment}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
