'use client';

import { useState } from 'react';
import { X, SlidersHorizontal, ChevronDown } from 'lucide-react';

export interface ProductFilters {
  categories: string[];
  priceRanges: string[];
  sizes: string[];
  minRating: number | null;
  sort: string;
}

export const defaultFilters: ProductFilters = {
  categories: [],
  priceRanges: [],
  sizes: [],
  minRating: null,
  sort: 'newest',
};

interface ProductFilterProps {
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
}

const CATEGORIES = [
  { value: 'Detergent', label: 'Detergent' },
  { value: 'Tea', label: 'Tea' },
  { value: 'Cleaning', label: 'Cleaning' },
];

const PRICE_RANGES = [
  { value: '0-25', label: '\u20B90 \u2013 \u20B925' },
  { value: '25-75', label: '\u20B925 \u2013 \u20B975' },
  { value: '75-150', label: '\u20B975 \u2013 \u20B9150' },
];

const SIZES = [
  { value: '80gm', label: '80gm' },
  { value: '500gm', label: '500gm' },
  { value: '1Kg', label: '1Kg' },
];

const RATINGS = [4, 3, 2, 1];

const SORT_OPTIONS = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
  { value: 'popular', label: 'Most Popular' },
];

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-100 pb-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 text-sm font-semibold text-[#1A1A2E] cursor-pointer"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="mt-2 space-y-2">{children}</div>}
    </div>
  );
}

function CheckboxItem({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#1A1A2E]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded border-gray-300 text-[#2E7D32] accent-[#2E7D32]"
      />
      {label}
    </label>
  );
}

function FilterContent({ filters, onFilterChange }: ProductFilterProps) {
  const toggleArray = (arr: string[], value: string) =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

  const update = (partial: Partial<ProductFilters>) =>
    onFilterChange({ ...filters, ...partial });

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.priceRanges.length > 0 ||
    filters.sizes.length > 0 ||
    filters.minRating !== null ||
    filters.sort !== 'newest';

  return (
    <div className="space-y-4">
      {/* Sort */}
      <div className="pb-4 border-b border-gray-100">
        <label
          htmlFor="sort-select"
          className="block text-sm font-semibold text-[#1A1A2E] mb-2"
        >
          Sort By
        </label>
        <select
          id="sort-select"
          value={filters.sort}
          onChange={(e) => update({ sort: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/30 focus:border-[#2E7D32]"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}
      <FilterSection title="Category">
        {CATEGORIES.map((cat) => (
          <CheckboxItem
            key={cat.value}
            label={cat.label}
            checked={filters.categories.includes(cat.value)}
            onChange={() =>
              update({ categories: toggleArray(filters.categories, cat.value) })
            }
          />
        ))}
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range">
        {PRICE_RANGES.map((pr) => (
          <CheckboxItem
            key={pr.value}
            label={pr.label}
            checked={filters.priceRanges.includes(pr.value)}
            onChange={() =>
              update({
                priceRanges: toggleArray(filters.priceRanges, pr.value),
              })
            }
          />
        ))}
      </FilterSection>

      {/* Size */}
      <FilterSection title="Size">
        {SIZES.map((s) => (
          <CheckboxItem
            key={s.value}
            label={s.label}
            checked={filters.sizes.includes(s.value)}
            onChange={() =>
              update({ sizes: toggleArray(filters.sizes, s.value) })
            }
          />
        ))}
      </FilterSection>

      {/* Rating */}
      <FilterSection title="Rating">
        {RATINGS.map((r) => (
          <label
            key={r}
            className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#1A1A2E]"
          >
            <input
              type="radio"
              name="rating"
              checked={filters.minRating === r}
              onChange={() => update({ minRating: r })}
              className="w-4 h-4 text-[#2E7D32] accent-[#2E7D32]"
            />
            {r}+ Stars
          </label>
        ))}
      </FilterSection>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={() => onFilterChange(defaultFilters)}
          className="w-full py-2.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors cursor-pointer"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}

export default function ProductFilter({
  filters,
  onFilterChange,
}: ProductFilterProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile trigger */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      {/* Mobile bottom sheet / overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Sheet */}
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#1A1A2E]">Filters</h3>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <FilterContent filters={filters} onFilterChange={onFilterChange} />

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="mt-4 w-full py-3 bg-[#2E7D32] text-white text-sm font-semibold rounded-xl hover:bg-[#256d29] transition-colors cursor-pointer"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h3 className="text-base font-semibold text-[#1A1A2E] mb-4">
            Filters
          </h3>
          <FilterContent filters={filters} onFilterChange={onFilterChange} />
        </div>
      </aside>
    </>
  );
}
