import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Initiatives } from "@/components/sections/initiatives";
import { Impact } from "@/components/sections/impact";
import { Expansion } from "@/components/sections/expansion";
import { GetInvolved } from "@/components/sections/get-involved";
import { Contact } from "@/components/sections/contact";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  parentOrganization: { "@type": "Organization", name: site.parent },
  description: site.description,
  foundingDate: String(site.founded),
  address: { "@type": "PostalAddress", addressLocality: "Goma", addressRegion: "North Kivu", addressCountry: "CD" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Initiatives />
        <Impact />
        <Expansion />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
