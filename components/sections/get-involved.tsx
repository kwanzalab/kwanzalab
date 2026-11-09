"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { involvement, type InvolvementKind } from "@/content/content";
import { Form, type Field } from "@/components/form";
import { Section, Eyebrow, Heading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const msg = (label: string, placeholder: string): Field => ({
  name: "message",
  label,
  type: "textarea",
  placeholder,
});
const base: Field[] = [
  { name: "name", label: "Full name", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
];

const forms: Record<InvolvementKind, Field[]> = {
  ambassador: [
    ...base,
    { name: "institution", label: "School or university", placeholder: "Where do you study?" },
    { name: "studyLevel", label: "Year or level of study", required: false },
    msg("Why do you want to be an ambassador?", "Tell us about your interest and ideas for your campus."),
  ],
  volunteer: [
    ...base,
    { name: "availability", label: "Availability", placeholder: "e.g. weekends, school holidays" },
    { name: "skills", label: "Skills you can offer", required: false, placeholder: "e.g. photography, teaching, logistics" },
    msg("How would you like to help?", "Tell us what you'd like to get involved in."),
  ],
  partner: [
    ...base,
    { name: "organisation", label: "Organisation" },
    {
      name: "partnerType",
      label: "Type of organisation",
      type: "select",
      options: [
        { value: "school", label: "School or university" },
        { value: "youth", label: "Youth organisation" },
        { value: "ngo", label: "Environmental NGO" },
        { value: "climate", label: "Climate-action organisation" },
        { value: "corporate", label: "Corporate sustainability programme" },
        { value: "development", label: "International development partner" },
        { value: "other", label: "Other" },
      ],
    },
    msg("How could we work together?", "Tell us about your organisation and your idea."),
  ],
  support: [
    ...base,
    { name: "area", label: "Initiative you'd like to support", placeholder: "e.g. Tree Planting & Nature" },
    msg("How would you like to contribute?", "Tell us what kind of support you can offer."),
  ],
};

export function GetInvolved() {
  const [active, setActive] = useState<InvolvementKind>("ambassador");
  const current = involvement.find((i) => i.kind === active)!;

  return (
    <Section id="get-involved">
      <Reveal className="max-w-3xl">
        <Eyebrow>Get involved</Eyebrow>
        <Heading className="text-deep">There’s a place for you in this movement.</Heading>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Choose how you’d like to take part and send us a short note. We read every message.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div role="tablist" aria-label="Ways to get involved" aria-orientation="vertical" className="grid gap-3">
          {involvement.map((item, i) => {
            const selected = item.kind === active;
            return (
              <Reveal key={item.kind} delay={i * 0.06}>
                <button
                  role="tab"
                  id={`tab-${item.kind}`}
                  aria-selected={selected}
                  aria-controls="involve-panel"
                  type="button"
                  onClick={() => setActive(item.kind)}
                  className={cn(
                    "group flex w-full items-start gap-4 rounded-3xl border p-5 text-left transition-all duration-200",
                    selected
                      ? "border-forest bg-forest text-white shadow-[var(--shadow-card)]"
                      : "border-line bg-white hover:border-forest/40",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
                      selected ? "bg-fresh text-deep" : "bg-mint text-forest",
                    )}
                  >
                    <item.icon size={24} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="font-display block text-lg font-bold">{item.title}</span>
                    <span className={cn("mt-1 block text-[0.9375rem] leading-relaxed", selected ? "text-mint/85" : "text-ink-soft")}>
                      {item.text}
                    </span>
                  </span>
                  <ArrowRight size={18} className={cn("mt-1 hidden shrink-0 sm:block", selected ? "text-fresh" : "text-ink-soft/40")} aria-hidden />
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div
            role="tabpanel"
            id="involve-panel"
            aria-labelledby={`tab-${active}`}
            className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-9"
          >
            <h3 className="font-display text-2xl font-extrabold text-deep">{current.title}</h3>
            <p className="mb-7 mt-2 text-ink-soft">{current.text}</p>
            <Form key={active} kind={active} fields={forms[active]} submitLabel={current.cta} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
