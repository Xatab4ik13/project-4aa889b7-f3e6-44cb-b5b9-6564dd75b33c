import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface OptimizedBackgroundProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
  overlay?: boolean;
  overlayClassName?: string;
}

const OptimizedBackground = ({
  src,
  className,
  children,
  priority = false,
  overlay = true,
  overlayClassName,
}: OptimizedBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.01,
      }
    );

    if (containerRef.current && !priority) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;
  }, [isInView, src]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Placeholder gradient */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-muted transition-opacity duration-700",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Actual background image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ backgroundImage: isInView ? `url(${src})` : undefined }}
      />

      {/* Optional overlay */}
      {overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60",
            overlayClassName
          )}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default OptimizedBackground;
