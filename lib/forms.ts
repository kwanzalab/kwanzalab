import { z } from "zod";
import { site } from "@/content/site";

const name = z.string().trim().min(2, "Please enter your full name.").max(100);
const email = z.string().trim().email("Please enter a valid email address.");
const message = (min = 10) =>
  z.string().trim().min(min, `Please write at least ${min} characters.`).max(2000, "Please keep this under 2,000 characters.");
const optional = z.string().trim().max(200).optional().default("");

export const schemas = {
  contact: z.object({
    name,
    email,
    topic: z.enum(["general", "partnership", "media", "other"]),
    message: message(),
  }),
  ambassador: z.object({
    name,
    email,
    institution: z.string().trim().min(2, "Please tell us your school or university."),
    studyLevel: optional,
    message: message(),
  }),
  volunteer: z.object({
    name,
    email,
    availability: z.string().trim().min(2, "Please tell us when you are available."),
    skills: optional,
    message: message(),
  }),
  partner: z.object({
    name,
    email,
    organisation: z.string().trim().min(2, "Please enter your organisation."),
    partnerType: z.enum(["school", "youth", "ngo", "climate", "corporate", "development", "other"]),
    message: message(),
  }),
  support: z.object({
    name,
    email,
    area: z.string().trim().min(2, "Please tell us which initiative you want to support."),
    message: message(),
  }),
} as const;

export type FormKind = keyof typeof schemas;

export type SubmitResult =
  | { status: "sent" }
  | { status: "mailto" }
  | { status: "unconfigured" }
  | { status: "error"; message: string };

/**
 * Delivery order:
 * 1. NEXT_PUBLIC_FORM_ENDPOINT set → POST JSON there (e.g. Formspree). Reports success only on an OK response.
 * 2. NEXT_PUBLIC_CONTACT_EMAIL set → open the visitor's email app with the message pre-filled.
 * 3. Neither → nothing is sent, and the UI says so plainly.
 */
export async function deliver(kind: FormKind, data: Record<string, string>): Promise<SubmitResult> {
  if (site.formEndpoint) {
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ form: kind, ...data }),
      });
      if (!res.ok) throw new Error(String(res.status));
      return { status: "sent" };
    } catch {
      return { status: "error", message: "We couldn't send your message. Please check your connection and try again." };
    }
  }

  if (site.emailConfigured) {
    const subject = `[Kwanza Green Campus] ${kind} — ${data.name}`;
    const body = Object.entries(data)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return { status: "mailto" };
  }

  return { status: "unconfigured" };
}
