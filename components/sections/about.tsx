import { Compass, Eye, Target, Users } from "lucide-react";
import { about } from "@/content/content";
import { Section, Eyebrow, Heading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";

export function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative lg:sticky lg:top-28 lg:self-start">
          <Photo
            slot="about"
            variant="classroom"
            className="aspect-[4/3] rounded-[2rem] rounded-bl-[6rem] border border-forest/10"
          />
          <div className="absolute -bottom-6 right-4 rounded-2xl bg-deep p-6 text-white shadow-[var(--shadow-card)] sm:-right-6">
            <p className="font-display text-5xl font-extrabold text-fresh">2024</p>
            <p className="mt-1 text-sm text-mint/80">Launched in Goma</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <Heading className="text-deep">{about.title}</Heading>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { ...about.mission, icon: Target },
              { ...about.vision, icon: Eye },
            ].map((card, i) => (
              <Reveal key={card.title} delay={0.1 * i}>
                <div className="h-full rounded-3xl border border-line bg-paper p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-forest">
                    <card.icon size={22} aria-hidden />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-deep">{card.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4">
            <div className="rounded-3xl bg-deep p-7 text-white sm:p-9">
              <div className="flex items-center gap-3">
                <Compass size={22} className="text-fresh" aria-hidden />
                <h3 className="font-display text-2xl font-bold">{about.whyCampuses.title}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {about.whyCampuses.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-mint/85">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fresh" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="mt-4">
            <div className="flex gap-4 rounded-3xl border border-line bg-paper p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint text-forest">
                <Users size={22} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-deep">{about.commitment.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{about.commitment.text}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
