import { ArrowRight } from "lucide-react";
import { expansion } from "@/content/content";
import { Section, Eyebrow, Heading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";

export function Expansion() {
  return (
    <Section id="partners" className="bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>{expansion.eyebrow}</Eyebrow>
          <Heading className="text-deep">{expansion.title}</Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{expansion.text}</p>

          <ol className="mt-10 space-y-6">
            {expansion.steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-deep">{s.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <Photo
            slot="expansion"
            variant="network"
            className="aspect-[5/4] rounded-[2rem] rounded-tl-[6rem]"
          />
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <div className="rounded-[2rem] border border-line bg-paper p-7 sm:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h3 className="font-display text-3xl font-extrabold text-deep">Who we want to work with</h3>
              <p className="mt-2 max-w-xl text-ink-soft">
                We are open to conversations with organisations that share our belief in youth-led climate action.
              </p>
            </div>
            <Button href={expansion.cta.href}>
              {expansion.cta.label} <ArrowRight size={18} aria-hidden />
            </Button>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {expansion.partners.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint text-forest">
                  <Icon size={22} aria-hidden />
                </span>
                <span className="font-semibold text-deep">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
