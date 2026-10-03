import { Zap } from "lucide-react";

/**
 * Product marks, matched to each product's own site header:
 * KaselaPOS draws its "K" monogram as inline SVG; AutoJobs uses a filled
 * lucide Zap on its teal accent square. Decorative: the card heading carries
 * the product name.
 */
export function SaasMark({ name, className = "" }: { name: string; className?: string }) {
  if (name === "KaselaPOS") {
    return (
      <svg viewBox="0 0 512 512" className={className} aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="kasela-k" x1="180" y1="150" x2="340" y2="372" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8e4fe0" />
            <stop offset="100%" stopColor="#cb6ce6" />
          </linearGradient>
          <radialGradient id="kasela-glow" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="#8e4fe0" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8e4fe0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="512" height="512" rx="112" fill="#141419" />
        <rect width="512" height="512" rx="112" fill="url(#kasela-glow)" />
        <g stroke="url(#kasela-k)" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M200,150 L200,362" />
          <path d="M200,256 L320,150" />
          <path d="M200,256 L320,362" />
        </g>
        <circle cx="320" cy="150" r="16" fill="#e9b8f5" />
      </svg>
    );
  }

  if (name === "AutoJobs") {
    return (
      <span
        aria-hidden="true"
        className={`grid place-items-center rounded-[1.1rem] bg-[#2dd4bf] text-[#0b0f17] shadow-[inset_0_1px_0_rgb(255_255_255/0.4)] ${className}`}
      >
        <Zap fill="currentColor" className="h-[46%] w-[46%]" />
      </span>
    );
  }

  return null;
}
