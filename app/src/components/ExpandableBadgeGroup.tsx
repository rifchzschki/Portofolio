import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ExpandableBadgeGroupProps {
  items: string[];
  maxRows?: number;
  className?: string;
  badgeVariant?: "default" | "secondary" | "outline" | "destructive";
}

export function ExpandableBadgeGroup({
  items,
  maxRows = 2,
  className,
  badgeVariant = "secondary",
}: ExpandableBadgeGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(items.length);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !measureRef.current) return;

    const container = containerRef.current;
    const measure = measureRef.current;

    const style = getComputedStyle(container);
    measure.style.width = style.width;

    measure.innerHTML = "";

    const maxHeight = parseFloat(style.lineHeight || "20") * maxRows;

    let lastVisible = items.length;

    items.forEach((item, index) => {
      const badge = document.createElement("span");
      badge.innerText = item;
      badge.className = "inline-flex mr-2 mb-2";

      measure.appendChild(badge);

      if (measure.scrollHeight > maxHeight && lastVisible === items.length) {
        lastVisible = index;
      }
    });

    if (lastVisible < items.length) {
      setVisibleCount(lastVisible);
      setHasOverflow(true);
    } else {
      setVisibleCount(items.length);
      setHasOverflow(false);
    }
  }, [items, maxRows]);

  const visibleItems = expanded ? items : items.slice(0, visibleCount);

  return (
    <>
      <div ref={containerRef} className={cn("flex flex-wrap gap-2", className)}>
        {visibleItems.map((tech) => (
          <Badge key={tech} variant={badgeVariant}>
            {tech}
          </Badge>
        ))}

        {!expanded && hasOverflow && (
          <Badge
            variant="outline"
            className="cursor-pointer"
            onClick={() => setExpanded(true)}
          >
            +{items.length - visibleCount} more
          </Badge>
        )}

        {expanded && hasOverflow && (
          <Badge
            variant="outline"
            className="cursor-pointer"
            onClick={() => setExpanded(false)}
          >
            See less
          </Badge>
        )}
      </div>

      {/* Hidden measurement container */}
      <div
        ref={measureRef}
        className="absolute invisible z-[-1] flex flex-wrap gap-2"
      />
    </>
  );
}
