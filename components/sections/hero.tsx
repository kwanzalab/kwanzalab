"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Leaf, MapPin, Megaphone } from "lucide-react";
import { hero } from "@/content/content";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* organic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-mint blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-fresh/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-none items-center gap-12 px-5 pb-20 sm:px-10 lg:px-14 2xl:px-24 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-28">
        <div>
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-forest shadow-sm sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fresh opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fresh" />
            </span>
            {hero.badge}
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="font-display mt-7 text-balance text-[2.6rem] font-extrabold leading-[1.02] text-deep sm:text-6xl lg:text-[4.2rem]"
          >
            {hero.headline[0]}{" "}
            <span className="relative text-forest">
              <span className="bg-gradient-to-r from-forest to-fresh bg-clip-text text-transparent">
                {hero.headline[1]}
              </span>
            </span>
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {hero.body}
          </motion.p>

          <motion.div {...fade(0.3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primary.href} className="h-13 px-7">
              {hero.primary.label} <ArrowRight size={18} aria-hidden />
            </Button>
            <Button href={hero.secondary.href} variant="secondary" className="h-13 px-7">
              <Megaphone size={17} aria-hidden /> {hero.secondary.label}
            </Button>
          </motion.div>

          <motion.p {...fade(0.4)} className="mt-8 flex items-center gap-2 text-sm text-ink-soft">
            <MapPin size={16} className="text-forest" aria-hidden /> {site.location}
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Photo
            slot="hero"
            variant="lesson"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/4.4] rounded-[2.5rem] rounded-tr-[7rem] border border-forest/10 shadow-[0_40px_80px_-30px_rgb(6_78_59/0.45)] sm:aspect-[4/3.6] lg:aspect-[4/3.4] lg:max-h-[78vh] lg:w-full"
          />
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-line bg-white/95 p-4 shadow-[var(--shadow-card)] backdrop-blur sm:-left-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-fresh">
              <Leaf size={22} aria-hidden />
            </span>
            <span>
              <span className="font-display block text-sm font-bold text-deep">A KwanzaLabs project</span>
              <span className="block text-xs text-ink-soft">Student-led · Goma, DRC</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
