import { Handshake, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Form, type Field } from "@/components/form";
import { Section, Eyebrow, Heading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

const fields: Field[] = [
  { name: "name", label: "Full name", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    name: "topic",
    label: "What is this about?",
    type: "select",
    options: [
      { value: "general", label: "General enquiry" },
      { value: "partnership", label: "Partnership enquiry" },
      { value: "media", label: "Media" },
      { value: "other", label: "Something else" },
    ],
  },
  { name: "message", label: "Message", type: "textarea", placeholder: "How can we help?" },
];

export function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <Heading className="text-deep">Let’s grow something together.</Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Questions, ideas or partnership enquiries — we’d love to hear from you.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-forest">
                <MapPin size={22} aria-hidden />
              </span>
              <div>
                <p className="font-display font-bold text-deep">Location</p>
                <p className="text-ink-soft">{site.location}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-forest">
                <Mail size={22} aria-hidden />
              </span>
              <div>
                <p className="font-display font-bold text-deep">Email</p>
                <a href={`mailto:${site.email}`} className="text-forest underline decoration-fresh underline-offset-4">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-forest">
                <Phone size={22} aria-hidden />
              </span>
              <div>
                <p className="font-display font-bold text-deep">Phone</p>
                <a href={site.phone.href} className="text-forest underline decoration-fresh underline-offset-4">
                  {site.phone.display}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-forest">
                <MessageCircle size={22} aria-hidden />
              </span>
              <div>
                <p className="font-display font-bold text-deep">WhatsApp</p>
                <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className="text-forest underline decoration-fresh underline-offset-4">
                  {site.whatsapp.display}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-forest">
                <Handshake size={22} aria-hidden />
              </span>
              <div>
                <p className="font-display font-bold text-deep">Partnership enquiries</p>
                <p className="text-ink-soft">Choose “Partnership enquiry” in the form, or use the Get Involved section.</p>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <p className="font-display mb-3 font-bold text-deep">Follow Kwanza Green Campus</p>
            <ul className="flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm font-semibold text-deep transition-colors hover:border-forest hover:bg-mint"
                    >
                      {s.label}
                    </a>
                  ) : (
                    <span
                      title="Link to be configured"
                      className="inline-flex min-h-10 items-center rounded-full border border-dashed border-line px-4 text-sm font-medium text-ink-soft/70"
                    >
                      {s.label} · soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-line bg-paper p-6 sm:p-9">
            <h3 className="font-display mb-6 text-2xl font-extrabold text-deep">Send us a message</h3>
            <Form kind="contact" fields={fields} submitLabel="Send message" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
