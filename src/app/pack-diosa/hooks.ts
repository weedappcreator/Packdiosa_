"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValue, useSpring, useInView } from "motion/react";

/* ── Scroll Reveal ── */
export function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return {
    ref,
    isInView,
    motionProps: {
      initial: { opacity: 0, y: 30 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
      transition: { duration: 0.6, delay: delay / 1000, type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };
}

/* ── Count Up ── */
export function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

/* ── Parallax ── */
export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  return { ref, y };
}

/* ── Magnetic Hover ── */
export function useMagneticHover(strength = 0.3) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }, [x, y, strength]);

  const handleLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  return { ref, springX, springY, handleMouse, handleLeave };
}
