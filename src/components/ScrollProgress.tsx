import { useEffect, useRef, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      if (rafRef.current) return; // skip if already queued
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollProgress(scrollPercent);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[100] pointer-events-none">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{ 
          width: `${scrollProgress}%`,
          backgroundColor: '#3b82f6' // Blue-500 - distinct from primary color
        }}
      />
    </div>
  );
};

export default ScrollProgress;
