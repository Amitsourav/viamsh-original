'use client';

import { useState } from 'react';
import { Truck, X } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#6366F1] text-white text-center text-sm py-2 px-4 font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <Truck className="w-4 h-4 shrink-0" />
        <span>
          Free delivery on orders above &#8377;199 &nbsp;|&nbsp; Starting at just{' '}
          <span className="font-bold">&#8377;10</span>
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 p-0.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Close announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
