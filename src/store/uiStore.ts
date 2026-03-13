'use client';

import { create } from 'zustand';
import type { Product } from '@/types';

interface UIState {
  cartSidebarOpen: boolean;
  mobileMenuOpen: boolean;
  quickViewProduct: Product | null;
  toggleCartSidebar: () => void;
  toggleMobileMenu: () => void;
  setQuickViewProduct: (product: Product | null) => void;
}

export const useUIStore = create<UIState>()((set) => ({
  cartSidebarOpen: false,
  mobileMenuOpen: false,
  quickViewProduct: null,

  toggleCartSidebar: () => {
    set((state) => ({ cartSidebarOpen: !state.cartSidebarOpen }));
  },

  toggleMobileMenu: () => {
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen }));
  },

  setQuickViewProduct: (product) => {
    set({ quickViewProduct: product });
  },
}));
