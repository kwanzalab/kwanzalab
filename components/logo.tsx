import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-10 w-10", className)} aria-hidden>
      <rect width="40" height="40" rx="12" fill="#14532D" />
      <path d="M20 32V20" stroke="#22C55E" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M20 22c0-6.2 4.1-9.8 10.4-9.8 0 6.2-3.7 9.8-10.4 9.8Z" fill="#22C55E" />
      <path d="M20 25.6c0-4.7-3.1-7.3-8.4-7.3 0 4.7 2.9 7.3 8.4 7.3Z" fill="#DCFCE7" />
    </svg>
  );
}

export function Logo({ light, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.1875rem] font-extrabold", light ? "text-white" : "text-deep")}>
          Campus Lab
        </span>
        <span
          className={cn(
            "mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.2em]",
            light ? "text-mint/70" : "text-ink-soft",
          )}
        >
          by KwanzaLabs
        </span>
      </span>
    </span>
  );
}
