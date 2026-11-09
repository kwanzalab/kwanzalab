import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg,#064E3B 0%,#14532D 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 40 40">
            <rect width="40" height="40" rx="12" fill="#22C55E" />
            <path d="M20 32V20" stroke="#064E3B" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M20 22c0-6.2 4.1-9.8 10.4-9.8 0 6.2-3.7 9.8-10.4 9.8Z" fill="#064E3B" />
            <path d="M20 25.6c0-4.7-3.1-7.3-8.4-7.3 0 4.7 2.9 7.3 8.4 7.3Z" fill="#DCFCE7" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 800 }}>Campus Lab</span>
            <span style={{ fontSize: 20, letterSpacing: 4, color: "#86efac" }}>BY KWANZALABS</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Building Greener Campuses.
          </span>
          <span style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: "#22C55E" }}>
            Growing a Sustainable Future.
          </span>
        </div>
        <span style={{ fontSize: 26, color: "#bbf7d0" }}>
          Youth-led climate action · Goma, DR Congo · Est. 2024
        </span>
      </div>
    ),
    size,
  );
}
