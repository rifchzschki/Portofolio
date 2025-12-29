import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface RowLimitedBadgeGroupProps {
  items: string[];
  maxRows?: number;
  className?: string;
}

export function RowLimitedBadgeGroup({
  items,
  maxRows = 2,
  className,
}: RowLimitedBadgeGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(items.length);
  const [hiddenCount, setHiddenCount] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !measureRef.current) return;

    const container = containerRef.current;
    const measure = measureRef.current;

    const style = getComputedStyle(container);
    measure.style.width = style.width;

    measure.innerHTML = "";

    const lineHeight = parseFloat(style.lineHeight || "20");
    const maxHeight = lineHeight * maxRows;

    let lastVisible = items.length;

    items.forEach((item, index) => {
      const badge = document.createElement("span");
      badge.className = "inline-flex mr-1.5 mb-1.5 text-xs";
      badge.innerText = item;

      measure.appendChild(badge);

      if (measure.scrollHeight > maxHeight && lastVisible === items.length) {
        lastVisible = index;
      }
    });

    if (lastVisible < items.length) {
      setVisibleCount(lastVisible);
      setHiddenCount(items.length - lastVisible);
    } else {
      setVisibleCount(items.length);
      setHiddenCount(0);
    }
  }, [items, maxRows]);

  return (
    <>
      <div
        ref={containerRef}
        className={cn("flex flex-wrap gap-1.5", className)}
      >
        {items.slice(0, visibleCount).map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}

        {hiddenCount > 0 && (
          <Badge variant="outline" className="text-xs">
            +{hiddenCount}
          </Badge>
        )}
      </div>

      {/* hidden measurement container */}
      <div
        ref={measureRef}
        className="absolute invisible z-[-1] flex flex-wrap gap-1.5"
      />
    </>
  );
}
