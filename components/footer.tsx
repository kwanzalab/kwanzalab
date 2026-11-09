import { nav, site } from "@/content/site";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto max-w-none px-5 py-16 sm:px-10 lg:px-14 2xl:px-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-6 text-sm text-mint/70">A KwanzaLabs project.</p>
            <p className="font-display mt-4 max-w-sm text-2xl font-bold leading-snug">{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-fresh">Explore</p>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-mint/80 transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-fresh">Contact</p>
            <address className="mt-5 space-y-3 not-italic text-mint/80">
              <p>{site.location}</p>
              <p><a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></p>
              <p><a className="hover:text-white" href={site.phone.href}>{site.phone.display}</a></p>
              <p><a className="hover:text-white" href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">WhatsApp {site.whatsapp.display}</a></p>
            </address>
            <ul className="mt-5 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/10">
                      {s.label}
                    </a>
                  ) : (
                    <span className="rounded-full border border-dashed border-white/15 px-3 py-1.5 text-xs text-mint/50" title="Link to be configured">
                      {s.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-mint/60 sm:flex-row">
          <p>© {site.founded} Kwanza Green Campus · A KwanzaLabs project. All rights reserved.</p>
          <p>Goma, DR Congo</p>
        </div>
      </div>
    </footer>
  );
}
