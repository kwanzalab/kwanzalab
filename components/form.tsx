"use client";

import { useId, useState, useTransition } from "react";
import { CircleAlert, CircleCheck, Info, LoaderCircle, Send } from "lucide-react";
import { deliver, schemas, type FormKind, type SubmitResult } from "@/lib/forms";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  options?: { value: string; label: string }[];
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
};

const inputClass =
  "w-full rounded-2xl border bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-ink-soft/55 transition-colors focus:border-forest focus:outline-none focus:ring-4 focus:ring-fresh/25";

export function Form({
  kind,
  fields,
  submitLabel = "Send",
  dark,
}: {
  kind: FormKind;
  fields: Field[];
  submitLabel?: string;
  dark?: boolean;
}) {
  const uid = useId();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [pending, start] = useTransition();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    // Honeypot: bots fill hidden fields. Pretend success, send nothing.
    if (raw.website) return setResult({ status: "sent" });

    const parsed = schemas[kind].safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        next[key] ??= issue.message;
      }
      setErrors(next);
      setResult(null);
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }
    setErrors({});
    start(async () => {
      const res = await deliver(kind, parsed.data as Record<string, string>);
      setResult(res);
      if (res.status === "sent" || res.status === "mailto") form.reset();
    });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-busy={pending}>
      {fields.map((f) => {
        const id = `${uid}-${f.name}`;
        const err = errors[f.name];
        const common = {
          id,
          name: f.name,
          autoComplete: f.autoComplete,
          "aria-invalid": err ? true : undefined,
          "aria-describedby": err ? `${id}-err` : undefined,
          className: cn(inputClass, err ? "border-red-500" : "border-line"),
        };
        return (
          <div key={f.name}>
            <label htmlFor={id} className={cn("mb-2 block text-sm font-semibold", dark ? "text-white" : "text-deep")}>
              {f.label}
              {f.required !== false && <span className="text-forest" aria-hidden> *</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea {...common} rows={5} placeholder={f.placeholder} />
            ) : f.type === "select" ? (
              <select {...common} defaultValue={f.options?.[0]?.value}>
                {f.options?.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            ) : (
              <input {...common} type={f.type ?? "text"} placeholder={f.placeholder} />
            )}
            {err && (
              <p id={`${id}-err`} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-600">
                <CircleAlert size={15} aria-hidden /> {err}
              </p>
            )}
          </div>
        );
      })}

      {/* honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? <LoaderCircle size={18} className="animate-spin" aria-hidden /> : <Send size={17} aria-hidden />}
        {pending ? "Sending…" : submitLabel}
      </Button>

      <div role="status" aria-live="polite">
        {result && <Feedback result={result} />}
      </div>
    </form>
  );
}

function Feedback({ result }: { result: SubmitResult }) {
  const tone = {
    sent: { cls: "border-fresh/40 bg-mint text-deep", icon: CircleCheck },
    mailto: { cls: "border-fresh/40 bg-mint text-deep", icon: CircleCheck },
    unconfigured: { cls: "border-amber-300 bg-amber-50 text-amber-950", icon: Info },
    error: { cls: "border-red-300 bg-red-50 text-red-900", icon: CircleAlert },
  }[result.status];
  const Icon = tone.icon;
  const text = {
    sent: "Thank you — your message has been sent. We'll get back to you soon.",
    mailto: `Your email app should now be open with your message ready. Please press send there to complete it — nothing has been sent from this page yet.`,
    unconfigured: `Your details look good, but this website isn't connected to an inbox yet, so nothing was sent or stored. Please try again once ${site.name} has set up its contact email.`,
    error: result.status === "error" ? result.message : "",
  }[result.status];
  return (
    <p className={cn("flex items-start gap-3 rounded-2xl border p-4 text-sm leading-relaxed", tone.cls)}>
      <Icon size={20} className="mt-0.5 shrink-0" aria-hidden />
      {text}
    </p>
  );
}
