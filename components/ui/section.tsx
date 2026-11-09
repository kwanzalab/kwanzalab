import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
  ...rest
}: { id?: string } & React.ComponentProps<"section">) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)} {...rest}>
      <div className="mx-auto w-full max-w-none px-5 sm:px-10 lg:px-14 2xl:px-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={cn(
        "mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]",
        light ? "text-fresh" : "text-forest",
      )}
    >
      <span className={cn("h-px w-8", light ? "bg-fresh" : "bg-forest/50")} aria-hidden />
      {children}
    </p>
  );
}

export function Heading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
