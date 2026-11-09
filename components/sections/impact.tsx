"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Recycle, School, TreePine, Users, type LucideIcon } from "lucide-react";
import { activitySeries, allVerified, impactMeta, metrics } from "@/content/impact";
import { Section, Eyebrow, Heading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  schools: School,
  students: Users,
  trees: TreePine,
  activities: Building2,
  waste: Recycle,
};

function Ring({ pct }: { pct: number }) {
  const reduce = useReducedMotion();
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 84 84" className="h-20 w-20 -rotate-90" aria-hidden>
      <circle cx="42" cy="42" r={r} fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="8" />
      <motion.circle
        cx="42"
        cy="42"
        r={r}
        fill="none"
        stroke="#22C55E"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: reduce ? c * (1 - pct) : c }}
        whileInView={{ strokeDashoffset: c * (1 - pct) }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

export function Impact() {
  const max = Math.max(...activitySeries.points.map((p) => p.value));

  return (
    <Section id="impact" className="overflow-hidden bg-deep text-white grain">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-fresh/15 blur-3xl" />
      <Reveal className="relative max-w-3xl">
        <Eyebrow light>{impactMeta.eyebrow}</Eyebrow>
        <Heading>{impactMeta.title}</Heading>
        <p className="mt-6 text-lg leading-relaxed text-mint/80">{impactMeta.intro}</p>
      </Reveal>

      {!allVerified && (
        <Reveal className="relative mt-8">
          <p
            role="note"
            className="inline-flex items-start gap-3 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm text-amber-100"
          >
            <span className="mt-0.5 rounded-full bg-amber-300 px-2 py-0.5 text-[0.625rem] font-extrabold uppercase tracking-wider text-amber-950">
              Placeholder
            </span>
            {impactMeta.placeholderNotice}
          </p>
        </Reveal>
      )}

      <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {metrics.map((m, i) => {
          const Icon = icons[m.id] ?? Users;
          const pct = Math.min(m.value / m.target, 1);
          const featured = i < 2;
          return (
            <Reveal
              key={m.id}
              delay={i * 0.06}
              className={cn(featured ? "lg:col-span-3" : "lg:col-span-2")}
            >
              <div className="flex h-full items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                <div className="min-w-0">
                  <Icon size={22} className="text-fresh" aria-hidden />
                  <p className="font-display mt-4 text-5xl font-extrabold tabular-nums sm:text-6xl">
                    <Counter to={m.value} />
                    {m.unit && <span className="ml-1 text-2xl font-bold text-mint/70">{m.unit}</span>}
                  </p>
                  <p className="mt-2 font-semibold">{m.label}</p>
                  <p className="mt-1 text-sm text-mint/60">{m.hint}</p>
                  {!m.verified && (
                    <span className="mt-3 inline-block rounded-full bg-amber-300/15 px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-amber-200">
                      Placeholder
                    </span>
                  )}
                </div>
                <div className="relative shrink-0">
                  <Ring pct={pct} />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold tabular-nums">
                    {Math.round(pct * 100)}%
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
      <p className="relative mt-3 text-xs text-mint/55">
        Rings show progress towards editable placeholder targets. {impactMeta.asOf}
      </p>

      <Reveal className="relative mt-4">
        <figure className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
          <figcaption className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-display text-xl font-bold">{activitySeries.title}</span>
            {!activitySeries.verified && (
              <span className="rounded-full bg-amber-300/15 px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-amber-200">
                Placeholder data
              </span>
            )}
          </figcaption>
          <div
            className="mt-8 flex h-52 items-end gap-3 sm:gap-6"
            role="img"
            aria-label={`Bar chart of activities per period: ${activitySeries.points.map((p) => `${p.label} ${p.value}`).join(", ")}`}
          >
            {activitySeries.points.map((p, i) => (
              <div key={p.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <span className="text-sm font-bold tabular-nums">{p.value}</span>
                <motion.div
                  className="w-full rounded-t-xl bg-gradient-to-t from-forest to-fresh"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(p.value / max) * 78}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="text-xs font-semibold text-mint/70">{p.label}</span>
              </div>
            ))}
          </div>
        </figure>
      </Reveal>
    </Section>
  );
}
