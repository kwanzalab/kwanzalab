"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { initiatives } from "@/content/content";
import { Section, Eyebrow, Heading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";
import { cn } from "@/lib/utils";

export function Initiatives() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section id="initiatives">
      <Reveal className="max-w-3xl">
        <Eyebrow>Our initiatives</Eyebrow>
        <Heading className="text-deep">Four ways students turn care into action.</Heading>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Every Kwanza Green Campus programme is designed to be run by students, on campus, with practical results
          people can see.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {initiatives.map((item, i) => {
          const open = openId === item.id;
          return (
            <Reveal key={item.id} delay={(i % 2) * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div className="relative">
                  <Photo
                    slot={item.photoKey}
                    variant={item.variant}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="aspect-[16/10]"
                  />
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-forest shadow-sm backdrop-blur">
                    <item.icon size={24} aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-bold text-deep">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{item.description}</p>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`detail-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 rounded-2xl bg-mint/50 p-4 text-[0.9375rem] leading-relaxed text-deep">
                          {item.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : item.id)}
                    aria-expanded={open}
                    aria-controls={`detail-${item.id}`}
                    className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-[0.9375rem] font-bold text-forest"
                  >
                    <span className="border-b-2 border-fresh pb-0.5">{open ? "Show less" : "Learn more"}</span>
                    {open ? (
                      <Plus size={16} className={cn("rotate-45 transition-transform")} aria-hidden />
                    ) : (
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    )}
                  </button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
