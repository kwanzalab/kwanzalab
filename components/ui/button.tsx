import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-fresh text-deep hover:bg-[#4ade80] shadow-[0_8px_24px_-8px_rgb(34_197_94/0.7)]",
  secondary:
    "border border-forest/25 bg-white text-forest hover:border-forest hover:bg-mint/50",
  ghost: "text-forest hover:bg-mint/60",
  light: "bg-white text-deep hover:bg-mint",
};

const base =
  "inline-flex min-h-11 whitespace-nowrap items-center justify-center gap-2 rounded-full px-6 text-[0.9375rem] font-semibold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

type Shared = { variant?: Variant; className?: string; children: React.ReactNode };
type AnchorProps = Shared & { href: string } & Omit<React.ComponentProps<"a">, "href" | "className" | "children">;
type ButtonProps = Shared & { href?: undefined } & Omit<React.ComponentProps<"button">, "className" | "children">;

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);
  if (typeof rest.href === "string") {
    return (
      <Link {...(rest as Omit<AnchorProps, keyof Shared>)} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button {...(rest as Omit<ButtonProps, keyof Shared>)} className={classes}>
      {children}
    </button>
  );
}
