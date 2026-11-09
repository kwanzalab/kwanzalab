import { ImageResponse } from "next/og";

/** Renders the Campus Lab mark as a PNG at any size (used for app icons). */
export function brandIcon(size: number, maskable = false) {
  const inner = maskable ? size * 0.56 : size * 0.78;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14532D",
        }}
      >
        <svg width={inner} height={inner} viewBox="0 0 40 40">
          <path d="M20 32V20" stroke="#22C55E" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M20 22c0-6.2 4.1-9.8 10.4-9.8 0 6.2-3.7 9.8-10.4 9.8Z" fill="#22C55E" />
          <path d="M20 25.6c0-4.7-3.1-7.3-8.4-7.3 0 4.7 2.9 7.3 8.4 7.3Z" fill="#DCFCE7" />
        </svg>
      </div>
    ),
    { width: size, height: size },
  );
}
