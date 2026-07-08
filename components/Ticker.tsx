import React from "react";

export default function Ticker({
  items,
  speed = "normal",
}: {
  items: React.ReactNode[];
  speed?: "normal" | "fast";
}) {
  const animationClass =
    speed === "fast" ? "animate-ticker-fast" : "animate-ticker";

  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap bg-surface h-[56px] items-center border-y border-[#1E1E1E]">
      <div className={`flex items-center ${animationClass}`}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {items.map((item, j) => (
              <div key={j} className="flex items-center shrink-0">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
