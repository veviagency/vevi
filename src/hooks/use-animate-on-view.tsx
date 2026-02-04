import { useEffect, useRef, useState } from "react";

export function useAnimateOnView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated, options]);

  return { ref, hasAnimated };
}
