import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  lines?: number;
  className?: string;
}

export function ExpandableText({ text, lines = 4, className }: Props) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const measureRef = useRef<HTMLParagraphElement>(null);

  const [expanded, setExpanded] = useState(false);
  const [truncatedText, setTruncatedText] = useState("");
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !measureRef.current) return;

    const container = containerRef.current;
    const measure = measureRef.current;

    const words = text.split(" ");
    const style = getComputedStyle(container);

    measure.style.width = style.width;
    measure.style.font = style.font;
    measure.style.lineHeight = style.lineHeight;

    const lineHeight = parseFloat(style.lineHeight);
    const maxHeight = lineHeight * (lines + 0.5);

    // ukur teks penuh
    measure.innerText = text;

    if (measure.scrollHeight <= maxHeight) {
      setIsTruncated(false);
      setTruncatedText(text);
      return;
    }

    // binary search
    let left = 0;
    let right = words.length;
    let best = words.length;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      measure.innerText = words.slice(0, mid).join(" ") + "… Read more";

      if (measure.scrollHeight <= maxHeight) {
        best = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setTruncatedText(words.slice(0, best).join(" "));
    setIsTruncated(true);
  }, [text, lines]);

  return (
    <>
      {/* Visible text */}
      <p
        ref={containerRef}
        className={cn("text-sm leading-relaxed text-justify", className)}
      >
        {expanded || !isTruncated ? (
          <>
            {text}
            {isTruncated && (
              <>
                {" "}
                <button
                  onClick={() => setExpanded(false)}
                  className="inline text-primary hover:underline"
                >
                  See less
                </button>
              </>
            )}
          </>
        ) : (
          <>
            {truncatedText}
            {"… "}
            <button
              onClick={() => setExpanded(true)}
              className="inline text-primary hover:underline"
            >
              Read more
            </button>
          </>
        )}
      </p>

      {/* Hidden measurement element */}
      <p
        ref={measureRef}
        className="pointer-events-none absolute invisible z-[-1] h-auto w-full whitespace-normal"
      />
    </>
  );
}
