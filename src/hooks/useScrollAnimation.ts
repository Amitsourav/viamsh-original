'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollAnimationOptions {
  /** GSAP animation properties (e.g. { opacity: 0, y: 60 }) applied as the "from" state */
  from?: gsap.TweenVars;
  /** ScrollTrigger-specific overrides */
  trigger?: Partial<ScrollTrigger.Vars>;
  /** Animation duration in seconds (default: 1) */
  duration?: number;
  /** Delay before animation starts in seconds (default: 0) */
  delay?: number;
  /** Easing function (default: 'power2.out') */
  ease?: string;
}

/**
 * Custom hook that animates an element into view using GSAP ScrollTrigger.
 *
 * Usage:
 * ```tsx
 * const ref = useScrollAnimation<HTMLDivElement>({ from: { opacity: 0, y: 80 } });
 * return <div ref={ref}>Animated content</div>;
 * ```
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) {
  const elementRef = useRef<T>(null);

  const {
    from = { opacity: 0, y: 60 },
    trigger = {},
    duration = 1,
    delay = 0,
    ease = 'power2.out',
  } = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const animation = gsap.from(el, {
      ...from,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        ...trigger,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
    // Run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return elementRef;
}

export default useScrollAnimation;
