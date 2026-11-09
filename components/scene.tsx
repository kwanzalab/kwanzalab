import { cn } from "@/lib/utils";

type Variant = "hero" | "campus" | "trees" | "waste" | "climate" | "network" | "lesson" | "classroom";

function Tree({ x, y, s = 1, tone = "#16a34a" }: { x: number; y: number; s?: number; tone?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-3" y="-4" width="6" height="30" rx="3" fill="#064e3b" />
      <circle cx="0" cy="-22" r="24" fill={tone} />
      <circle cx="-16" cy="-8" r="15" fill={tone} />
      <circle cx="16" cy="-8" r="15" fill={tone} />
    </g>
  );
}

function Sapling({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 0V-26" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />
      <path d="M0-14c0-9 6-14 15-14 0 9-5 14-15 14Z" fill="#22c55e" />
      <path d="M0-8c0-7-5-11-12-11 0 7 4 11 12 11Z" fill="#4ade80" />
    </g>
  );
}

const skins = ["#5c3a21", "#7a4a2a", "#8d5a34", "#6b4226", "#a06a3f"];

/** Stylised, faceless figure (feet at y=0). `back` draws it seen from behind. */
function Person({
  x, y, s = 1, skin = skins[0], shirt = "#14532D", teacher = false, back = false, point = false,
}: {
  x: number; y: number; s?: number; skin?: string; shirt?: string; teacher?: boolean; back?: boolean; point?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {!back && (
        <>
          <rect x="-11" y="-30" width="9" height="30" rx="4" fill="#17231C" />
          <rect x="2" y="-30" width="9" height="30" rx="4" fill="#17231C" />
        </>
      )}
      <rect x="-19" y="-78" width="38" height={back ? 54 : 52} rx="14" fill={shirt} />
      {teacher && !back && <path d="M-6-78 0-62 6-78Z" fill="#F8FAF5" />}
      {point ? (
        <>
          <path d="M18-70 52-96" stroke={skin} strokeWidth="9" strokeLinecap="round" />
          <path d="M50-98 74-122" stroke="#C9A27A" strokeWidth="3" strokeLinecap="round" />
          <path d="M-18-70 -24-40" stroke={skin} strokeWidth="9" strokeLinecap="round" />
        </>
      ) : (
        !back && (
          <>
            <path d="M-18-70 -24-40" stroke={skin} strokeWidth="9" strokeLinecap="round" />
            <path d="M18-70 24-40" stroke={skin} strokeWidth="9" strokeLinecap="round" />
          </>
        )
      )}
      <rect x="-5" y="-88" width="10" height="12" rx="4" fill={skin} />
      <circle cx="0" cy="-100" r="15" fill={skin} />
      <path d={back ? "M-15-100a15 15 0 0 1 30 0a15 15 0 0 1-30 0Z" : "M-15-102a15 15 0 0 1 30 0c-6-7-24-7-30 0Z"} fill="#17231C" />
    </g>
  );
}

/**
 * Brand illustration used wherever a photograph has not been supplied yet.
 * Intentionally abstract (layered land, contour lines) rather than cartoon-like.
 */
export function Scene({ variant = "hero", className }: { variant?: Variant; className?: string }) {
  const sky: Record<Variant, [string, string]> = {
    hero: ["#DCFCE7", "#F8FAF5"],
    campus: ["#DCFCE7", "#F0FDF4"],
    trees: ["#ECFCCB", "#F0FDF4"],
    waste: ["#CCFBF1", "#F0FDF4"],
    climate: ["#E0F2E9", "#F8FAF5"],
    network: ["#14532D", "#064E3B"],
    lesson: ["#CFF5E0", "#F0FDF4"],
    classroom: ["#F0FDF4", "#F0FDF4"],
  };
  const dark = variant === "network";
  const [a, b] = sky[variant];
  const id = `sky-${variant}`;

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMax slice"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Illustration of a green landscape"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id})`} />

      {/* topographic contours */}
      <g fill="none" stroke={dark ? "#22c55e" : "#14532D"} strokeOpacity={dark ? 0.22 : 0.09} strokeWidth="1.5">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M-20 ${150 + i * 26} C 160 ${90 + i * 30}, 360 ${230 + i * 20}, 820 ${120 + i * 28}`} />
        ))}
      </g>

      <circle cx={variant === "climate" ? 600 : 610} cy="150" r={variant === "hero" ? 70 : 56} fill={dark ? "#22c55e" : "#FDE68A"} opacity={dark ? 0.9 : 0.85} />

      {/* distant hills */}
      <path d="M0 400 C 140 330 260 350 380 390 S 640 340 800 380 V600 H0Z" fill={dark ? "#0b6b4a" : "#86efac"} opacity="0.7" />
      <path d="M0 450 C 160 400 300 430 440 450 S 680 410 800 440 V600 H0Z" fill={dark ? "#14532D" : "#4ade80"} />
      <path d="M0 520 C 180 480 320 510 470 520 S 700 490 800 510 V600 H0Z" fill={dark ? "#0a3d2b" : "#16a34a"} />

      {variant === "hero" && (
        <>
          <Tree x={120} y={430} s={1.1} />
          <Tree x={210} y={455} s={0.8} tone="#15803d" />
          <Tree x={690} y={420} s={1.3} tone="#15803d" />
          <Tree x={600} y={455} s={0.9} />
          {/* campus building */}
          <g transform="translate(300 330)">
            <rect width="220" height="110" rx="6" fill="#F8FAF5" stroke="#14532D" strokeOpacity=".15" />
            <rect x="-14" y="-18" width="248" height="22" rx="4" fill="#14532D" />
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x={20 + i * 40} y="26" width="22" height="30" rx="3" fill="#DCFCE7" />
            ))}
            <rect x="94" y="66" width="32" height="44" rx="4" fill="#14532D" />
          </g>
          <Sapling x={380} y={545} s={1.8} />
          <Sapling x={460} y={555} s={1.4} />
        </>
      )}

      {variant === "campus" && (
        <>
          <g transform="translate(120 320)">
            <rect width="320" height="150" rx="8" fill="#F8FAF5" stroke="#14532D" strokeOpacity=".15" />
            <rect x="-16" y="-22" width="352" height="26" rx="5" fill="#14532D" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect key={i} x={24 + i * 50} y="30" width="28" height="38" rx="3" fill="#BBF7D0" />
            ))}
            <rect x="140" y="86" width="40" height="64" rx="4" fill="#14532D" />
          </g>
          <Tree x={560} y={440} s={1.2} />
          <Tree x={680} y={460} s={0.9} tone="#15803d" />
          <Sapling x={500} y={540} s={1.6} />
        </>
      )}

      {variant === "trees" && (
        <>
          <Tree x={240} y={420} s={1.5} />
          <Tree x={520} y={430} s={1.2} tone="#15803d" />
          <Tree x={680} y={440} s={0.9} />
          {[110, 190, 270, 350, 430, 510, 590, 670].map((x, i) => (
            <Sapling key={x} x={x} y={535 + (i % 2) * 14} s={1.3} />
          ))}
        </>
      )}

      {variant === "waste" && (
        <g transform="translate(0 0)">
          {[
            { x: 170, c: "#14532D" },
            { x: 340, c: "#22c55e" },
            { x: 510, c: "#0d9488" },
          ].map(({ x, c }) => (
            <g key={x} transform={`translate(${x} 360)`}>
              <rect x="0" y="0" width="120" height="150" rx="14" fill={c} />
              <rect x="-8" y="-14" width="136" height="22" rx="8" fill={c} />
              <rect x="-8" y="-14" width="136" height="22" rx="8" fill="#fff" opacity=".18" />
              <g transform="translate(60 80)" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M-18 6 -4 -18 10 6" />
                <path d="M10 6 -18 6" />
              </g>
            </g>
          ))}
          <g fill="none" stroke="#14532D" strokeOpacity=".35" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round">
            <path d="M200 330 C 260 250 420 250 480 330" />
          </g>
        </g>
      )}

      {variant === "climate" && (
        <>
          <g transform="translate(150 330)">
            <path d="M0 150 V0 H200 V150 Q100 125 0 150Z" fill="#F8FAF5" stroke="#14532D" strokeOpacity=".2" />
            <path d="M200 150 V0 H400 V150 Q300 125 200 150Z" fill="#fff" stroke="#14532D" strokeOpacity=".2" />
            <g stroke="#14532D" strokeOpacity=".25" strokeWidth="3" strokeLinecap="round">
              {[28, 52, 76].map((y) => (
                <path key={y} d={`M24 ${y} H176 M224 ${y} H376`} />
              ))}
            </g>
            <path d="M230 110 L280 80 L320 96 L372 40" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <Sapling x={150} y={500} s={1.7} />
          <Sapling x={620} y={510} s={1.4} />
        </>
      )}

      {variant === "lesson" && (
        <>
          {/* Nyiragongo, the volcano above Goma */}
          <path d="M360 400 L520 250 Q560 238 600 250 L760 400Z" fill="#0b6b4a" opacity=".55" />
          <path d="M520 250 Q560 238 600 250 L592 262 Q560 252 528 262Z" fill="#064E3B" opacity=".5" />
          <path d="M560 236c-10-22 12-34 4-58" stroke="#14532D" strokeOpacity=".18" strokeWidth="10" strokeLinecap="round" fill="none" />
          {/* school building */}
          <g transform="translate(40 340)">
            <rect width="300" height="100" rx="6" fill="#F8FAF5" stroke="#14532D" strokeOpacity=".15" />
            <path d="M-12 0 L150-34 L312 0Z" fill="#14532D" />
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={22 + i * 66} y="26" width="34" height="30" rx="3" fill="#BBF7D0" />
            ))}
            <rect x="130" y="52" width="40" height="48" rx="4" fill="#14532D" />
          </g>
          <Tree x={700} y={470} s={1.1} tone="#15803d" />
          <Tree x={380} y={470} s={0.8} />
          {/* planting lesson */}
          <ellipse cx="470" cy="548" rx="46" ry="9" fill="#14532D" opacity=".35" />
          <Sapling x={470} y={548} s={2.2} />
          <Person x={330} y={566} s={1.5} skin={skins[1]} shirt="#064E3B" teacher point />
          <Person x={410} y={572} s={1.15} skin={skins[0]} shirt="#22c55e" />
          <Person x={540} y={574} s={1.1} skin={skins[2]} shirt="#4ade80" />
          <Person x={610} y={568} s={1.2} skin={skins[3]} shirt="#22c55e" />
          <Person x={250} y={575} s={1.1} skin={skins[4]} shirt="#4ade80" />
        </>
      )}

      {variant === "classroom" && (
        <>
          <rect y="0" width="800" height="600" fill="#F0FDF4" />
          <rect y="440" width="800" height="160" fill="#BBF7D0" />
          {/* window onto trees */}
          <g transform="translate(40 90)">
            <rect width="170" height="200" rx="10" fill="#DCFCE7" stroke="#14532D" strokeOpacity=".25" strokeWidth="4" />
            <circle cx="70" cy="140" r="38" fill="#16a34a" />
            <circle cx="112" cy="150" r="30" fill="#22c55e" />
            <path d="M85 0V200M0 100H170" stroke="#14532D" strokeOpacity=".25" strokeWidth="4" />
          </g>
          {/* chalkboard */}
          <g transform="translate(250 70)">
            <rect width="420" height="230" rx="10" fill="#064E3B" stroke="#C9A27A" strokeWidth="8" />
            <g stroke="#F8FAF5" strokeOpacity=".85" strokeWidth="4" strokeLinecap="round" fill="none">
              <path d="M40 50H170M40 80H130" />
              <path d="M300 190V110" />
              <path d="M300 130c-6-26 14-40 44-40 0 26-16 40-44 40Z" />
              <path d="M300 150c4-20-12-32-36-32 0 20 12 32 36 32Z" />
              <path d="M40 190H250" strokeOpacity=".4" />
            </g>
          </g>
          <Person x={700} y={470} s={1.6} skin={skins[1]} shirt="#064E3B" teacher point />
          {/* desks & students facing the board */}
          {[
            { x: 230, r: 0 }, { x: 400, r: 0 }, { x: 570, r: 0 },
          ].map(({ x }, i) => (
            <g key={`b${i}`}>
              <Person x={x} y={545} s={0.9} skin={skins[i]} shirt={["#4ade80", "#22c55e", "#4ade80"][i]} back />
              <rect x={x - 55} y="498" width="110" height="14" rx="5" fill="#C9A27A" />
              <rect x={x - 48} y="512" width="8" height="40" fill="#a98558" />
              <rect x={x + 40} y="512" width="8" height="40" fill="#a98558" />
            </g>
          ))}
          {[
            { x: 140 }, { x: 315 }, { x: 485 }, { x: 650 },
          ].map(({ x }, i) => (
            <g key={`f${i}`}>
              <Person x={x} y={595} s={1.1} skin={skins[(i + 2) % 5]} shirt={["#22c55e", "#4ade80", "#22c55e", "#4ade80"][i]} back />
              <rect x={x - 62} y="545" width="124" height="16" rx="6" fill="#C9A27A" />
              <rect x={x - 54} y="561" width="9" height="38" fill="#a98558" />
              <rect x={x + 45} y="561" width="9" height="38" fill="#a98558" />
            </g>
          ))}
        </>
      )}

      {variant === "network" && (
        <g stroke="#22c55e" strokeOpacity=".5" strokeWidth="2" fill="none">
          <path d="M160 380 L320 300 L470 360 L620 250 M320 300 L360 190 L520 180 L620 250 M470 360 L600 430" />
          {[[160,380],[320,300],[470,360],[620,250],[360,190],[520,180],[600,430]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="22" fill="#14532D" stroke="#22c55e" strokeOpacity=".7" />
              <circle cx={x} cy={y} r="8" fill="#22c55e" />
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
