import Image from "next/image";
import { photos } from "@/content/site";
import { Scene } from "@/components/scene";
import { cn } from "@/lib/utils";

type Variant = React.ComponentProps<typeof Scene>["variant"];

/**
 * Renders the photograph configured in content/site.ts, or a brand illustration
 * when no photo has been supplied yet.
 */
export function Photo({
  slot,
  variant,
  className,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  slot: keyof typeof photos;
  variant: Variant;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const { src, alt, position } = photos[slot];
  return (
    <div className={cn("relative overflow-hidden bg-mint", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" style={position ? { objectPosition: position } : undefined} />
      ) : (
        <Scene variant={variant} />
      )}
    </div>
  );
}
