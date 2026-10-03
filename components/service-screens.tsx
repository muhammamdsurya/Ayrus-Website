import type { ReactNode } from "react";
import { C, display, sans } from "./hero-devices";

/**
 * App home screens for each service, drawn as SVG. Each screen has its own
 * palette (light/blue, light/green, navy/blue, white/black, mono, purple) so
 * the six read as different real products, not six copies of the site theme.
 * Each scales to its container's full width and crops from the bottom only;
 * any extra height is filled with the screen's own background, so the browser
 * bar and the left edge always show. Figures and names are sample data;
 * callers hide the SVG from assistive tech.
 */

export type Palette = {
  bg: string;
  side: string;
  sunken: string;
  card: string;
  line: string;
  ink: string;
  muted: string;
  faint: string;
  brand: string;
  deep: string;
  soft: string;
  alt: string;
  /** Text on a solid `brand` fill. */
  onBrand: string;
  /** Text on a brand gradient card. */
  onGrad: string;
  ok: string;
  warn: string;
  chrome: string;
  url: string;
  dot: string;
};

const palettes = {
  // Putih biru
  custom: {
    bg: "#f5f7fb", side: "#ffffff", sunken: "#eef2f8", card: "#ffffff", line: "#e2e8f0",
    ink: "#0f172a", muted: "#64748b", faint: "#94a3b8",
    brand: "#2563eb", deep: "#1e40af", soft: "#93c5fd", alt: "#38bdf8",
    onBrand: "#ffffff", onGrad: "#ffffff", ok: "#16a34a", warn: "#d97706",
    chrome: "#e9eef5", url: "#ffffff", dot: "#cbd5e1",
  },
  // Putih hijau
  pos: {
    bg: "#f6f8f7", side: "#ffffff", sunken: "#eef3f1", card: "#ffffff", line: "#e2e8e5",
    ink: "#0f1f1a", muted: "#5b6b66", faint: "#9aa8a3",
    brand: "#059669", deep: "#047857", soft: "#6ee7b7", alt: "#f59e0b",
    onBrand: "#ffffff", onGrad: "#ffffff", ok: "#059669", warn: "#d97706",
    chrome: "#e8eeeb", url: "#ffffff", dot: "#c9d3cf",
  },
  // Hitam biru
  finance: {
    bg: "#0b1120", side: "#0f172a", sunken: "#0d1526", card: "#111b30", line: "#1f2b45",
    ink: "#e5edf7", muted: "#94a3b8", faint: "#5f6f88",
    brand: "#3b82f6", deep: "#1d4ed8", soft: "#67e8f9", alt: "#22d3ee",
    onBrand: "#ffffff", onGrad: "#ffffff", ok: "#22c55e", warn: "#f59e0b",
    chrome: "#0f172a", url: "#16213a", dot: "#2a3854",
  },
  // Putih hitam, aksen amber
  web: {
    bg: "#ffffff", side: "#ffffff", sunken: "#f5f5f4", card: "#f7f7f5", line: "#e7e5e4",
    ink: "#141414", muted: "#57534e", faint: "#a8a29e",
    brand: "#141414", deep: "#3f3f46", soft: "#fcd34d", alt: "#d97706",
    onBrand: "#ffffff", onGrad: "#ffffff", ok: "#16a34a", warn: "#d97706",
    chrome: "#f1f1ef", url: "#ffffff", dot: "#d6d3d1",
  },
  // Hitam putih
  erp: {
    bg: "#0a0a0a", side: "#111111", sunken: "#0f0f0f", card: "#161616", line: "#262626",
    ink: "#fafafa", muted: "#a3a3a3", faint: "#6b6b6b",
    brand: "#fafafa", deep: "#d4d4d4", soft: "#a3a3a3", alt: "#737373",
    onBrand: "#0a0a0a", onGrad: "#0a0a0a", ok: "#4ade80", warn: "#facc15",
    chrome: "#121212", url: "#1c1c1c", dot: "#333333",
  },
  // Ungu gelap: the one screen that follows the site theme
  ai: {
    bg: C.bg, side: C.side, sunken: "#111117", card: C.card, line: C.line,
    ink: C.ink, muted: C.muted, faint: C.faint,
    brand: C.brand, deep: C.deep, soft: C.soft, alt: "#818cf8",
    onBrand: "#0a0a0a", onGrad: "#ffffff", ok: C.ok, warn: C.warn,
    chrome: C.side, url: "#1b1b23", dot: "#34343e",
  },
} satisfies Record<string, Palette>;

export function ServiceScreen({ slug }: { slug: string }) {
  switch (slug) {
    case "custom-software":
      return <CustomScreen p={palettes.custom} />;
    case "sistem-pos":
      return <PosScreen p={palettes.pos} />;
    case "aplikasi-keuangan":
      return <FinanceScreen p={palettes.finance} />;
    case "website":
      return <WebsiteScreen p={palettes.web} />;
    case "erp":
      return <ErpScreen p={palettes.erp} />;
    case "ai-automation":
      return <AiScreen p={palettes.ai} />;
    default:
      return null;
  }
}

/* ------------------------------- primitives ------------------------------- */

export function Screen({ p, h = 750, children }: { p: Palette; h?: number; children: ReactNode }) {
  return (
    <div className="absolute inset-0" style={{ background: p.bg }}>
      <svg viewBox={`0 0 1200 ${h}`} className="block h-auto w-full" style={sans} aria-hidden="true" focusable="false">
        <rect width="1200" height={h} fill={p.bg} />
        {children}
      </svg>
    </div>
  );
}

export function Grad({ id, from, to }: { id: string; from: string; to: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={from} />
      <stop offset="1" stopColor={to} />
    </linearGradient>
  );
}

export function Chrome({ p, url }: { p: Palette; url: string }) {
  return (
    <g>
      <rect width="1200" height="56" fill={p.chrome} />
      {[30, 54, 78].map((x) => (
        <circle key={x} cx={x} cy="28" r="7" fill={p.dot} />
      ))}
      <rect x="410" y="14" width="380" height="28" rx="14" fill={p.url} stroke={p.line} strokeWidth="1.5" />
      <text x="600" y="33" fontSize="15" fill={C.faint} textAnchor="middle">
        {url}
      </text>
      <line x1="0" y1="56" x2="1200" y2="56" stroke={C.line} strokeWidth="2" />
    </g>
  );
}

export function Panel({ p, x, y, w, h, r = 18, fill }: { p: Palette; x: number; y: number; w: number; h: number; r?: number; fill?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx={r} fill={fill ?? p.card} stroke={p.line} strokeWidth="2" />;
}

/** Rounded label; `tone` tints it, `solid` fills it with the brand. */
export function Pill({
  p,
  x,
  y,
  w,
  h = 34,
  label,
  tone,
  solid = false,
  size = 15,
}: {
  p: Palette;
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  tone?: string;
  solid?: boolean;
  size?: number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={h / 2}
        fill={solid ? p.brand : (tone ?? p.muted)}
        fillOpacity={solid ? 1 : 0.14}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + size * 0.36}
        fontSize={size}
        fontWeight="600"
        fill={solid ? p.onBrand : (tone ?? p.muted)}
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

export function Label({ p, x, y, children, size = 16, color, weight, anchor, heading = false }: {
  p: Palette;
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  color?: string;
  weight?: number;
  anchor?: "start" | "middle" | "end";
  heading?: boolean;
}) {
  return (
    <text x={x} y={y} fontSize={size} fill={color ?? p.muted} fontWeight={weight} textAnchor={anchor} style={heading ? display : undefined}>
      {children}
    </text>
  );
}

/* ------------------------------ web & mobile ------------------------------ */

const columns = [
  {
    title: "Baru",
    cards: [
      { id: "#ORD-1046", title: "Seragam batik 120 pcs", tag: "Prioritas", tone: "warn" as const, due: "14 Jun" },
      { id: "#ORD-1045", title: "Kaos event 300 pcs", tag: "Reguler", tone: "soft" as const, due: "18 Jun" },
      { id: "#ORD-1044", title: "Topi bordir 80 pcs", tag: "Reguler", tone: "soft" as const, due: "20 Jun" },
      { id: "#ORD-1043", title: "Rompi proyek 40 pcs", tag: "Prioritas", tone: "warn" as const, due: "21 Jun" },
      { id: "#ORD-1040", title: "Kaos komunitas 150 pcs", tag: "Reguler", tone: "soft" as const, due: "24 Jun" },
    ],
  },
  {
    title: "Diproses",
    cards: [
      { id: "#ORD-1042", title: "Jaket tim 45 pcs", tag: "Jahit", tone: "brand" as const, due: "12 Jun", progress: 0.62 },
      { id: "#ORD-1041", title: "Polo karyawan 200 pcs", tag: "Potong", tone: "brand" as const, due: "15 Jun", progress: 0.34 },
      { id: "#ORD-1037", title: "Seragam sekolah 90 pcs", tag: "Sablon", tone: "brand" as const, due: "16 Jun", progress: 0.81 },
      { id: "#ORD-1036", title: "Jersey futsal 24 pcs", tag: "Potong", tone: "brand" as const, due: "17 Jun", progress: 0.15 },
    ],
  },
  {
    title: "Siap kirim",
    cards: [
      { id: "#ORD-1039", title: "Kemeja kantor 60 pcs", tag: "Siap", tone: "ok" as const, due: "11 Jun" },
      { id: "#ORD-1038", title: "Totebag 500 pcs", tag: "Siap", tone: "ok" as const, due: "11 Jun" },
      { id: "#ORD-1035", title: "Apron kafe 30 pcs", tag: "Siap", tone: "ok" as const, due: "10 Jun" },
      { id: "#ORD-1034", title: "Batik kantor 75 pcs", tag: "Siap", tone: "ok" as const, due: "10 Jun" },
    ],
  },
];

const steps = [
  { label: "Diterima", state: "done" },
  { label: "Potong kain", state: "done" },
  { label: "Jahit", state: "active" },
  { label: "Quality control", state: "todo" },
  { label: "Kirim", state: "todo" },
];

function CustomScreen({ p }: { p: Palette }) {
  return (
    <Screen p={p} h={1360}>
      <defs>
        <Grad id="ss-cs-brand" from={p.brand} to={p.deep} />
        <filter id="ss-cs-shadow" x="-30%" y="-20%" width="160%" height="140%">
          <feDropShadow dx="0" dy="24" stdDeviation="22" floodColor="#000" floodOpacity="0.75" />
        </filter>
      </defs>
      <Chrome p={p} url="app.usahaanda.co.id/order" />

      <rect x="0" y="56" width="84" height="1304" fill={p.side} />
      <line x1="84" y1="56" x2="84" y2="1360" stroke={p.line} strokeWidth="2" />
      <rect x="22" y="80" width="40" height="40" rx="11" fill="url(#ss-cs-brand)" />
      <rect x="14" y="148" width="56" height="48" rx="12" fill={p.brand} fillOpacity="0.15" />
      <rect x="30" y="160" width="24" height="24" rx="6" fill={p.brand} />
      {[224, 288, 352, 416].map((y) => (
        <rect key={y} x="30" y={y} width="24" height="24" rx="6" fill="none" stroke={p.faint} strokeWidth="2.5" />
      ))}

      <Label p={p} x={120} y={132} size={34} color={p.ink} weight={700} heading>
        Order masuk
      </Label>
      <Label p={p} x={120} y={164} size={18}>
        128 order minggu ini
      </Label>
      <Pill p={p} x={946} y={100} w={210} h={52} label="+ Order baru" solid size={19} />
      {[
        ["Semua 128", 140],
        ["Diproses 34", 140],
        ["Selesai 86", 130],
        ["Dibatalkan 8", 150],
      ].reduce<{ x: number; els: ReactNode[] }>(
        (acc, [label, w], i) => {
          acc.els.push(
            <Pill p={p} key={label} x={acc.x} y={196} w={w as number} h={40} label={label as string} tone={i === 0 ? p.brand : p.muted} />,
          );
          acc.x += (w as number) + 12;
          return acc;
        },
        { x: 120, els: [] },
      ).els}

      {columns.map((col, ci) => {
        const x = 120 + ci * 354;
        return (
          <g key={col.title}>
            <rect x={x} y="256" width="330" height="1124" rx="20" fill={p.sunken} stroke={p.line} strokeWidth="2" />
            <Label p={p} x={x + 20} y={298} size={19} color={p.ink} weight={600}>
              {col.title}
            </Label>
            <Pill p={p} x={x + 270} y={278} w={40} h={28} label={String(col.cards.length)} tone={p.brand} size={14} />
            {col.cards.map((c, i) => {
              const y = 318 + i * 166;
              return (
                <g key={c.id}>
                  <Panel p={p} x={x + 16} y={y} w={298} h={150} r={16} />
                  <Label p={p} x={x + 36} y={y + 38} size={15} color={p.faint}>
                    {c.id}
                  </Label>
                  <Pill p={p} x={x + 204} y={y + 18} w={90} h={28} label={c.tag} tone={p[c.tone]} size={14} />
                  <Label p={p} x={x + 36} y={y + 76} size={20} color={p.ink} weight={600}>
                    {c.title}
                  </Label>
                  {"progress" in c && c.progress ? (
                    <>
                      <rect x={x + 36} y={y + 94} width="258" height="8" rx="4" fill={p.line} />
                      <rect x={x + 36} y={y + 94} width={258 * c.progress} height="8" rx="4" fill={p.brand} />
                    </>
                  ) : null}
                  <circle cx={x + 50} cy={y + 125} r="12" fill="url(#ss-cs-brand)" />
                  <circle cx={x + 72} cy={y + 125} r="12" fill={p.soft} stroke={p.card} strokeWidth="3" />
                  <Label p={p} x={x + 294} y={y + 131} size={15} anchor="end">
                    {c.due}
                  </Label>
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Companion phone app: the same order, from the floor. */}
      <g filter="url(#ss-cs-shadow)">
        <rect x="880" y="470" width="240" height="500" rx="38" fill="#0a0a0d" stroke="#2e2e38" strokeWidth="3" />
      </g>
      <rect x="892" y="482" width="216" height="476" rx="28" fill={p.bg} />
      <rect x="962" y="494" width="76" height="18" rx="9" fill="#000" />
      <Label p={p} x={910} y={508} size={12} color={p.ink} weight={600}>
        9:41
      </Label>
      <Label p={p} x={910} y={554} size={18} color={p.ink} weight={700} heading>
        Order #1042
      </Label>
      <Label p={p} x={910} y={576} size={12}>
        Jaket tim 45 pcs
      </Label>
      <Pill p={p} x={910} y={590} w={92} h={26} label="Diproses" tone={p.brand} size={12} />
      {steps.map((s, i) => {
        const y = 652 + i * 50;
        return (
          <g key={s.label}>
            {i < steps.length - 1 ? (
              <line x1="922" y1={y + 10} x2="922" y2={y + 40} stroke={s.state === "done" ? p.brand : p.line} strokeWidth="3" />
            ) : null}
            {s.state === "done" ? <circle cx="922" cy={y} r="9" fill={p.brand} /> : null}
            {s.state === "active" ? (
              <>
                <circle cx="922" cy={y} r="10" fill={p.bg} stroke={p.brand} strokeWidth="3" />
                <circle cx="922" cy={y} r="4" fill={p.brand} />
              </>
            ) : null}
            {s.state === "todo" ? <circle cx="922" cy={y} r="8" fill="none" stroke={p.faint} strokeWidth="2" /> : null}
            <Label p={p} x={944} y={y + 5} size={14} color={s.state === "todo" ? p.muted : p.ink} weight={s.state === "active" ? 700 : 400}>
              {s.label}
            </Label>
          </g>
        );
      })}
      <Pill p={p} x={910} y={910} w={180} h={36} label="Update status" solid size={14} />
    </Screen>
  );
}

/* ---------------------------------- POS ---------------------------------- */

const products = [
  { name: "Kopi Susu Aren", price: "Rp 22.000", food: false },
  { name: "Americano", price: "Rp 18.000", food: false },
  { name: "Matcha Latte", price: "Rp 26.000", food: false },
  { name: "Croissant", price: "Rp 20.000", food: true },
  { name: "Teh Leci", price: "Rp 16.000", food: false },
  { name: "Roti Bakar", price: "Rp 18.000", food: true },
];

const order = [
  { qty: 2, name: "Kopi Susu Aren", price: "Rp 44.000" },
  { qty: 1, name: "Croissant", price: "Rp 20.000" },
  { qty: 1, name: "Teh Leci", price: "Rp 16.000" },
];

function PosScreen({ p }: { p: Palette }) {
  const grads = ["url(#ss-pos-a)", "url(#ss-pos-b)", "url(#ss-pos-c)"];
  return (
    <Screen p={p}>
      <defs>
        <Grad id="ss-pos-a" from={p.brand} to={p.deep} />
        <Grad id="ss-pos-b" from={p.soft} to={p.brand} />
        <Grad id="ss-pos-c" from={p.alt} to="#ea580c" />
        <Grad id="ss-pos-me" from={p.brand} to={p.deep} />
      </defs>
      <Chrome p={p} url="kasir.tokoanda.id" />

      <Panel p={p} x={32} y={80} w={420} h={48} r={24} />
      <circle cx="62" cy="103" r="9" fill="none" stroke={p.faint} strokeWidth="3" />
      <line x1="69" y1="110" x2="76" y2="117" stroke={p.faint} strokeWidth="3" strokeLinecap="round" />
      <Label p={p} x={86} y={110} size={17} color={p.faint}>
        Cari menu
      </Label>
      <Label p={p} x={716} y={110} size={16} anchor="end">
        Kasir: Dinda
      </Label>
      <circle cx="750" cy="104" r="20" fill="url(#ss-pos-me)" />

      {[
        ["Semua", 96],
        ["Kopi", 80],
        ["Non-kopi", 116],
        ["Makanan", 116],
        ["Snack", 90],
      ].reduce<{ x: number; els: ReactNode[] }>(
        (acc, [label, w], i) => {
          acc.els.push(<Pill p={p} key={label} x={acc.x} y={148} w={w as number} h={40} label={label as string} solid={i === 0} />);
          acc.x += (w as number) + 10;
          return acc;
        },
        { x: 32, els: [] },
      ).els}

      {products.map((item, i) => {
        const x = 32 + (i % 3) * 256;
        const y = 212 + Math.floor(i / 3) * 256;
        const cx = x + 118;
        return (
          <g key={item.name}>
            <Panel p={p} x={x} y={y} w={236} h={236} />
            <rect x={x + 12} y={y + 12} width="212" height="128" rx="12" fill={grads[i % 3]} />
            {item.food ? (
              <>
                <ellipse cx={cx} cy={y + 80} rx="40" ry="24" fill="#fff" fillOpacity="0.9" />
                <path d={`M ${cx - 22} ${y + 74} q 22 -12 44 0`} stroke={p.deep} strokeOpacity="0.5" strokeWidth="4" fill="none" />
              </>
            ) : (
              <>
                <rect x={cx - 24} y={y + 54} width="44" height="38" rx="8" fill="#fff" fillOpacity="0.92" />
                <path
                  d={`M ${cx + 20} ${y + 62} h 8 a 11 11 0 0 1 0 22 h -8`}
                  stroke="#fff"
                  strokeOpacity="0.92"
                  strokeWidth="5"
                  fill="none"
                />
                <rect x={cx - 32} y={y + 96} width="60" height="7" rx="3.5" fill="#fff" fillOpacity="0.92" />
              </>
            )}
            <Label p={p} x={x + 16} y={y + 172} size={18} color={p.ink} weight={600}>
              {item.name}
            </Label>
            <Label p={p} x={x + 16} y={y + 202} size={17} color={p.brand} weight={700}>
              {item.price}
            </Label>
            <circle cx={x + 206} cy={y + 196} r="17" fill={p.brand} fillOpacity="0.18" />
            <path d={`M ${x + 199} ${y + 196} h 14 M ${x + 206} ${y + 189} v 14`} stroke={p.brand} strokeWidth="3" strokeLinecap="round" />
          </g>
        );
      })}

      <rect x="820" y="56" width="380" height="694" fill={p.side} />
      <line x1="820" y1="56" x2="820" y2="750" stroke={p.line} strokeWidth="2" />
      <Label p={p} x={848} y={106} size={24} color={p.ink} weight={700} heading>
        Pesanan
      </Label>
      <Label p={p} x={848} y={134} size={15}>
        #A-1042, Meja 7
      </Label>
      {order.map((o, i) => {
        const y = 190 + i * 58;
        return (
          <g key={o.name}>
            <rect x="848" y={y - 24} width="34" height="34" rx="9" fill={p.brand} fillOpacity="0.15" />
            <Label p={p} x={865} y={y - 1} size={16} color={p.brand} weight={700} anchor="middle">
              {o.qty}
            </Label>
            <Label p={p} x={896} y={y} size={18} color={p.ink}>
              {o.name}
            </Label>
            <Label p={p} x={1172} y={y} size={18} color={p.ink} weight={600} anchor="end">
              {o.price}
            </Label>
          </g>
        );
      })}
      <line x1="848" y1="336" x2="1172" y2="336" stroke={p.line} strokeWidth="2" strokeDasharray="6 8" />
      <Label p={p} x={848} y={372} size={17}>
        Subtotal
      </Label>
      <Label p={p} x={1172} y={372} size={17} color={p.ink} anchor="end">
        Rp 80.000
      </Label>
      <Label p={p} x={848} y={404} size={17}>
        Pajak 10%
      </Label>
      <Label p={p} x={1172} y={404} size={17} color={p.ink} anchor="end">
        Rp 8.000
      </Label>
      <Label p={p} x={848} y={458} size={20} color={p.ink} weight={700}>
        Total
      </Label>
      <Label p={p} x={1172} y={462} size={30} color={p.ink} weight={700} anchor="end" heading>
        Rp 88.000
      </Label>
      {["Tunai", "QRIS", "Kartu"].map((m, i) => (
        <g key={m}>
          <rect
            x={848 + i * 112}
            y="486"
            width="100"
            height="44"
            rx="22"
            fill={i === 1 ? p.brand : p.card}
            fillOpacity={i === 1 ? 0.14 : 1}
            stroke={i === 1 ? p.brand : p.line}
            strokeWidth="2"
          />
          <Label p={p} x={898 + i * 112} y={514} size={16} color={i === 1 ? p.brand : p.muted} weight={600} anchor="middle">
            {m}
          </Label>
        </g>
      ))}
      <Pill p={p} x={848} y={556} w={324} h={62} label="Bayar Rp 88.000" solid size={21} />
    </Screen>
  );
}

/* -------------------------------- finance -------------------------------- */

const cashIn = [140, 152, 148, 165, 171, 184];
const cashOut = [95, 102, 110, 108, 115, 122];
const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"];

const receivables = [
  { initials: "MB", name: "CV Maju Bersama", due: "14 Jun", amount: "Rp 8,4 jt" },
  { initials: "SJ", name: "Toko Sinar Jaya", due: "16 Jun", amount: "Rp 3,2 jt" },
  { initials: "LB", name: "PT Laut Biru", due: "21 Jun", amount: "Rp 12,6 jt" },
  { initials: "TM", name: "UD Tani Makmur", due: "28 Jun", amount: "Rp 1,9 jt" },
];

function FinanceScreen({ p }: { p: Palette }) {
  return (
    <Screen p={p}>
      <defs>
        <Grad id="ss-fin-brand" from={p.brand} to={p.deep} />
        <clipPath id="ss-fin-clip">
          <rect x="40" y="168" width="360" height="126" rx="18" />
        </clipPath>
      </defs>
      <Chrome p={p} url="keuangan.usahaanda.id" />

      <Label p={p} x={40} y={116} size={30} color={p.ink} weight={700} heading>
        Laporan keuangan
      </Label>
      <Label p={p} x={40} y={144} size={17}>
        Ringkasan arus kas usaha
      </Label>
      <Panel p={p} x={1000} y={86} w={160} h={44} r={22} />
      <Label p={p} x={1064} y={114} size={16} color={p.ink} anchor="middle">
        Juni 2026
      </Label>
      <path d="M 1128 104 l 6 6 l 6 -6" stroke={p.muted} strokeWidth="2.5" fill="none" strokeLinecap="round" />

      <rect x="40" y="168" width="360" height="126" rx="18" fill="url(#ss-fin-brand)" />
      <circle cx="380" cy="170" r="90" fill="#fff" fillOpacity="0.08" clipPath="url(#ss-fin-clip)" />
      <Label p={p} x={68} y={208} size={16} color={p.onGrad}>
        Laba bersih
      </Label>
      <Label p={p} x={68} y={254} size={36} color={p.onGrad} weight={700} heading>
        Rp 62,5 jt
      </Label>
      <Label p={p} x={68} y={280} size={15} color={p.onGrad}>
        +14% dari bulan lalu
      </Label>
      {[
        { x: 420, label: "Pemasukan", value: "Rp 184,2 jt", delta: "+9,1%", tone: p.ok },
        { x: 800, label: "Pengeluaran", value: "Rp 121,7 jt", delta: "+3,2%", tone: p.warn },
      ].map((k) => (
        <g key={k.label}>
          <Panel p={p} x={k.x} y={168} w={360} h={126} />
          <Label p={p} x={k.x + 28} y={208} size={16}>
            {k.label}
          </Label>
          <Label p={p} x={k.x + 28} y={256} size={36} color={p.ink} weight={700} heading>
            {k.value}
          </Label>
          <Pill p={p} x={k.x + 256} y={186} w={80} h={30} label={k.delta} tone={k.tone} size={14} />
        </g>
      ))}

      <Panel p={p} x={40} y={318} w={720} h={412} r={20} />
      <Label p={p} x={72} y={364} size={22} color={p.ink} weight={600}>
        Arus kas 6 bulan
      </Label>
      <circle cx="566" cy="358" r="7" fill={p.brand} />
      <Label p={p} x={580} y={364} size={16}>
        Masuk
      </Label>
      <circle cx="656" cy="358" r="7" fill={p.soft} />
      <Label p={p} x={670} y={364} size={16}>
        Keluar
      </Label>
      {[420, 490, 560, 630].map((y) => (
        <line key={y} x1="72" y1={y} x2="728" y2={y} stroke={p.line} strokeWidth="2" strokeDasharray="6 8" />
      ))}
      <line x1="72" y1="690" x2="728" y2="690" stroke={p.line} strokeWidth="2" />
      {months.map((m, i) => {
        const g = 110 + i * 104;
        const hin = cashIn[i] * 1.45;
        const hout = cashOut[i] * 1.45;
        return (
          <g key={m}>
            <rect x={g} y={690 - hin} width="30" height={hin} rx="6" fill={p.brand} fillOpacity={i === 5 ? 1 : 0.8} />
            <rect x={g + 36} y={690 - hout} width="30" height={hout} rx="6" fill={p.soft} fillOpacity="0.65" />
            <Label p={p} x={g + 33} y={716} size={15} anchor="middle">
              {m}
            </Label>
          </g>
        );
      })}

      <Panel p={p} x={784} y={318} w={376} h={412} r={20} />
      <Label p={p} x={812} y={364} size={20} color={p.ink} weight={600}>
        Piutang jatuh tempo
      </Label>
      {receivables.map((r, i) => {
        const y = 388 + i * 72;
        return (
          <g key={r.name}>
            <circle cx="832" cy={y + 30} r="20" fill={p.brand} fillOpacity="0.15" />
            <Label p={p} x={832} y={y + 35} size={13} color={p.brand} weight={700} anchor="middle">
              {r.initials}
            </Label>
            <Label p={p} x={864} y={y + 26} size={16} color={p.ink} weight={600}>
              {r.name}
            </Label>
            <Label p={p} x={864} y={y + 48} size={13}>
              Jatuh tempo {r.due}
            </Label>
            <Label p={p} x={1132} y={y + 36} size={16} color={p.ink} weight={700} anchor="end">
              {r.amount}
            </Label>
          </g>
        );
      })}
      <rect x="812" y="676" width="320" height="40" rx="20" fill={p.brand} fillOpacity="0.08" stroke={p.brand} strokeWidth="2" />
      <Label p={p} x={972} y={702} size={15} color={p.brand} weight={600} anchor="middle">
        Kirim pengingat WhatsApp
      </Label>
    </Screen>
  );
}

/* -------------------------------- website -------------------------------- */

function WebsiteScreen({ p }: { p: Palette }) {
  return (
    <Screen p={p}>
      <defs>
        <Grad id="ss-web-logo" from={p.brand} to={p.deep} />
        <Grad id="ss-web-img" from={p.deep} to={p.brand} />
        <clipPath id="ss-web-clip">
          <rect x="640" y="150" width="520" height="380" rx="28" />
        </clipPath>
      </defs>
      <Chrome p={p} url="www.karyabangun.co.id" />

      <rect x="40" y="76" width="36" height="36" rx="10" fill="url(#ss-web-logo)" />
      <Label p={p} x={88} y={101} size={21} color={p.ink} weight={700} heading>
        Karya Bangun
      </Label>
      {["Beranda", "Layanan", "Proyek", "Tentang"].map((l, i) => (
        <Label p={p} key={l} x={560 + i * 100} y={101} size={17} color={i === 0 ? p.ink : p.muted} weight={i === 0 ? 600 : 400}>
          {l}
        </Label>
      ))}
      <Pill p={p} x={1010} y={74} w={150} h={42} label="Hubungi" solid size={17} />

      <rect x="40" y="156" width="220" height="34" rx="17" fill={p.alt} fillOpacity="0.1" stroke={p.alt} strokeOpacity="0.4" strokeWidth="2" />
      <Label p={p} x={150} y={178} size={14} color={p.alt} weight={600} anchor="middle">
        Kontraktor sejak 2012
      </Label>
      <Label p={p} x={40} y={258} size={54} color={p.ink} weight={700} heading>
        Bangun lebih rapi,
      </Label>
      <Label p={p} x={40} y={322} size={54} color={p.alt} weight={700} heading>
        tepat waktu.
      </Label>
      <Label p={p} x={40} y={370} size={19}>
        Renovasi dan konstruksi untuk rumah,
      </Label>
      <Label p={p} x={40} y={398} size={19}>
        kantor, dan ruang usaha.
      </Label>
      <Pill p={p} x={40} y={428} w={176} h={54} label="Konsultasi" solid size={18} />
      <rect x="228" y="428" width="170" height="54" rx="27" fill="none" stroke={p.faint} strokeWidth="2" />
      <Label p={p} x={313} y={461} size={18} color={p.ink} weight={600} anchor="middle">
        Lihat proyek
      </Label>
      {[
        { x: 40, v: "250+", l: "Proyek selesai" },
        { x: 210, v: "12", l: "Tahun" },
        { x: 340, v: "4,9", l: "Rating Google" },
      ].map((s) => (
        <g key={s.l}>
          <Label p={p} x={s.x} y={548} size={30} color={p.ink} weight={700} heading>
            {s.v}
          </Label>
          <Label p={p} x={s.x} y={574} size={14}>
            {s.l}
          </Label>
        </g>
      ))}

      <rect x="640" y="150" width="520" height="380" rx="28" fill="url(#ss-web-img)" />
      <g clipPath="url(#ss-web-clip)">
        <circle cx="1060" cy="232" r="44" fill={p.soft} fillOpacity="0.55" />
        <rect x="700" y="330" width="90" height="200" fill="#fff" fillOpacity="0.16" />
        <rect x="800" y="268" width="110" height="262" fill="#fff" fillOpacity="0.26" />
        {[0, 1, 2].flatMap((c) =>
          [0, 1, 2, 3, 4].map((r) => (
            <rect key={`${c}-${r}`} x={816 + c * 30} y={288 + r * 40} width="18" height="24" rx="3" fill="#fff" fillOpacity="0.35" />
          )),
        )}
        <rect x="920" y="360" width="80" height="170" fill="#fff" fillOpacity="0.2" />
        <rect x="1010" y="300" width="100" height="230" fill="#fff" fillOpacity="0.13" />
        <rect x="640" y="500" width="520" height="30" fill="#000" fillOpacity="0.18" />
      </g>
      <Panel p={p} x={590} y={452} w={240} h={92} />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={614 + i * 18} cy={480} r="6" fill={p.alt} />
      ))}
      <Label p={p} x={608} y={512} size={16} color={p.ink} weight={600}>
        Sangat profesional
      </Label>
      <Label p={p} x={608} y={532} size={13}>
        Klien renovasi kantor
      </Label>

      {[
        { t: "Renovasi", d: "Rumah, kantor, dan ruko" },
        { t: "Konstruksi", d: "Gedung dan gudang" },
        { t: "Desain interior", d: "Ruang kerja dan hunian" },
      ].map((s, i) => {
        const x = 40 + i * 380;
        return (
          <g key={s.t}>
            <Panel p={p} x={x} y={610} w={360} h={150} />
            <rect x={x + 24} y="634" width="44" height="44" rx="12" fill={p.alt} fillOpacity="0.15" />
            <rect x={x + 38} y="648" width="16" height="16" rx="4" fill={p.alt} />
            <Label p={p} x={x + 84} y={663} size={19} color={p.ink} weight={600}>
              {s.t}
            </Label>
            <Label p={p} x={x + 24} y={712} size={15}>
              {s.d}
            </Label>
          </g>
        );
      })}
    </Screen>
  );
}

/* ---------------------------------- ERP ---------------------------------- */

const modules = ["Ringkasan", "Penjualan", "Pembelian", "Gudang", "Keuangan", "SDM", "Laporan"];

const erpKpis = [
  { label: "Penjualan bulan ini", value: "Rp 1,24 M", note: "+11% dari Mei", tone: "ok" as const },
  { label: "Nilai stok", value: "Rp 486 jt", note: "3 gudang", tone: "soft" as const },
  { label: "Hutang usaha", value: "Rp 312 jt", note: "8 faktur jatuh tempo", tone: "warn" as const },
  { label: "Karyawan aktif", value: "86", note: "4 divisi", tone: "soft" as const },
];

const flow = [
  { label: "Pesanan", state: "done", note: "Selesai" },
  { label: "Gudang", state: "done", note: "Selesai" },
  { label: "Pengiriman", state: "active", note: "Hari ini" },
  { label: "Faktur", state: "todo", note: "Menunggu" },
  { label: "Pembayaran", state: "todo", note: "Menunggu" },
];

function ErpScreen({ p }: { p: Palette }) {
  const nodeX = [340, 530, 720, 910, 1100];
  return (
    <Screen p={p}>
      <defs>
        <Grad id="ss-erp-brand" from={p.brand} to={p.deep} />
      </defs>
      <Chrome p={p} url="erp.perusahaananda.co.id" />

      <rect x="0" y="56" width="220" height="694" fill={p.side} />
      <line x1="220" y1="56" x2="220" y2="750" stroke={p.line} strokeWidth="2" />
      <rect x="28" y="80" width="36" height="36" rx="10" fill="url(#ss-erp-brand)" />
      <Label p={p} x={76} y={105} size={19} color={p.ink} weight={700} heading>
        ERP Pusat
      </Label>
      <rect x="16" y="142" width="188" height="44" rx="12" fill={p.brand} fillOpacity="0.15" />
      {modules.map((m, i) => {
        const y = 164 + i * 54;
        return (
          <g key={m}>
            <rect
              x="34"
              y={y - 9}
              width="18"
              height="18"
              rx="5"
              fill={i === 0 ? p.brand : "none"}
              stroke={i === 0 ? "none" : p.faint}
              strokeWidth="2.5"
            />
            <Label p={p} x={66} y={y + 6} size={17} color={i === 0 ? p.ink : p.muted} weight={i === 0 ? 600 : 400}>
              {m}
            </Label>
          </g>
        );
      })}

      <Label p={p} x={252} y={116} size={28} color={p.ink} weight={700} heading>
        Ringkasan perusahaan
      </Label>
      <Label p={p} x={252} y={142} size={16}>
        Semua divisi, data hari ini
      </Label>
      <Panel p={p} x={968} y={88} w={200} h={42} r={21} />
      <Label p={p} x={1058} y={115} size={15} color={p.ink} anchor="middle">
        Semua cabang
      </Label>
      <path d="M 1138 106 l 6 6 l 6 -6" stroke={p.muted} strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {erpKpis.map((k, i) => {
        const x = 252 + i * 232;
        return (
          <g key={k.label}>
            <Panel p={p} x={x} y={168} w={220} h={112} />
            <Label p={p} x={x + 20} y={202} size={15}>
              {k.label}
            </Label>
            <Label p={p} x={x + 20} y={244} size={28} color={p.ink} weight={700} heading>
              {k.value}
            </Label>
            <Label p={p} x={x + 20} y={268} size={13} color={p[k.tone]}>
              {k.note}
            </Label>
          </g>
        );
      })}

      <Panel p={p} x={252} y={304} w={916} h={200} r={20} />
      <Label p={p} x={284} y={348} size={20} color={p.ink} weight={600}>
        Alur pesanan #SO-2207
      </Label>
      <Pill p={p} x={1040} y={326} w={100} h={30} label="Berjalan" tone={p.brand} size={14} />
      {flow.map((f, i) => {
        const x = nodeX[i];
        return (
          <g key={f.label}>
            {i < flow.length - 1 ? (
              <line
                x1={x + 34}
                y1="420"
                x2={nodeX[i + 1] - 34}
                y2="420"
                stroke={f.state === "done" ? p.brand : p.line}
                strokeWidth="4"
                strokeDasharray={f.state === "done" ? undefined : "8 8"}
              />
            ) : null}
            {f.state === "active" ? <circle cx={x} cy="420" r="40" fill={p.brand} fillOpacity="0.12" /> : null}
            <rect
              x={x - 28}
              y="392"
              width="56"
              height="56"
              rx="16"
              fill={f.state === "done" ? p.brand : f.state === "active" ? p.bg : p.card}
              stroke={f.state === "done" ? "none" : f.state === "active" ? p.brand : p.line}
              strokeWidth="3"
            />
            {f.state === "done" ? (
              <path d={`M ${x - 11} 420 l 7 7 l 14 -15`} stroke={p.onBrand} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            ) : null}
            {f.state === "active" ? <circle cx={x} cy="420" r="8" fill={p.brand} /> : null}
            <Label p={p} x={x} y={472} size={16} color={f.state === "todo" ? p.muted : p.ink} weight={600} anchor="middle">
              {f.label}
            </Label>
            <Label p={p} x={x} y={492} size={13} color={f.state === "done" ? p.ok : f.state === "active" ? p.brand : p.faint} anchor="middle">
              {f.note}
            </Label>
          </g>
        );
      })}

      <Panel p={p} x={252} y={528} w={450} h={200} r={20} />
      <Label p={p} x={284} y={570} size={19} color={p.ink} weight={600}>
        Stok per gudang
      </Label>
      {[
        { l: "Jakarta", v: "9.640", p: 0.78, c: p.brand },
        { l: "Surabaya", v: "6.430", p: 0.52, c: p.soft },
        { l: "Medan", v: "2.350", p: 0.31, c: p.deep },
      ].map((g, i) => {
        const y = 612 + i * 38;
        return (
          <g key={g.l}>
            <Label p={p} x={284} y={y + 6} size={15}>
              {g.l}
            </Label>
            <rect x="390" y={y - 6} width="220" height="12" rx="6" fill={p.line} />
            <rect x="390" y={y - 6} width={220 * g.p} height="12" rx="6" fill={g.c} />
            <Label p={p} x={672} y={y + 6} size={15} color={p.ink} weight={600} anchor="end">
              {g.v}
            </Label>
          </g>
        );
      })}

      <Panel p={p} x={726} y={528} w={442} h={200} r={20} />
      <Label p={p} x={758} y={570} size={19} color={p.ink} weight={600}>
        Aktivitas terbaru
      </Label>
      {[
        { t: "PO-881 disetujui Purchasing", time: "09.12", c: p.ok },
        { t: "Gaji Juni diproses SDM", time: "08.40", c: p.brand },
        { t: "Faktur INV-5530 terkirim", time: "08.05", c: p.soft },
      ].map((a, i) => {
        const y = 614 + i * 38;
        return (
          <g key={a.t}>
            <circle cx="764" cy={y - 5} r="6" fill={a.c} />
            <Label p={p} x={782} y={y} size={15} color={p.ink}>
              {a.t}
            </Label>
            <Label p={p} x={1140} y={y} size={13} color={p.faint} anchor="end">
              {a.time}
            </Label>
          </g>
        );
      })}
    </Screen>
  );
}

/* ------------------------------ AI automation ------------------------------ */

const automation = [
  { t: "Pesan masuk", d: "WhatsApp dan web chat", solid: true },
  { t: "AI memahami maksud", d: "Cek pesanan, tanya stok, minta invoice", solid: false },
  { t: "Ambil data dari sistem", d: "Status pesanan dan dokumen", solid: false },
  { t: "Balas otomatis", d: "Atau teruskan ke tim bila perlu", solid: true },
];

function AiScreen({ p }: { p: Palette }) {
  return (
    <Screen p={p}>
      <defs>
        <Grad id="ss-ai-brand" from={p.brand} to={p.deep} />
      </defs>
      <Chrome p={p} url="ai.usahaanda.id/inbox" />

      {/* Chat */}
      <rect x="0" y="56" width="640" height="64" fill={p.side} />
      <line x1="0" y1="120" x2="640" y2="120" stroke={p.line} strokeWidth="2" />
      <circle cx="52" cy="88" r="20" fill={p.soft} fillOpacity="0.85" />
      <Label p={p} x={84} y={84} size={17} color={p.ink} weight={600}>
        Budi, pelanggan
      </Label>
      <Label p={p} x={84} y={106} size={13}>
        WhatsApp, online
      </Label>
      <rect x="496" y="72" width="114" height="32" rx="16" fill={p.ok} fillOpacity="0.14" />
      <circle cx="516" cy="88" r="5" fill={p.ok} />
      <Label p={p} x={562} y={93} size={14} color={p.ok} weight={600} anchor="middle">
        AI aktif
      </Label>

      <Panel p={p} x={32} y={148} w={380} h={64} />
      <Label p={p} x={52} y={178} size={16} color={p.ink}>
        Kak, pesanan #1042 sudah dikirim?
      </Label>
      <Label p={p} x={392} y={202} size={12} color={p.faint} anchor="end">
        09.41
      </Label>

      <rect x="188" y="232" width="420" height="108" rx="18" fill="url(#ss-ai-brand)" />
      <rect x="208" y="248" width="36" height="22" rx="11" fill="#fff" fillOpacity="0.25" />
      <Label p={p} x={226} y={264} size={12} color={p.onGrad} weight={700} anchor="middle">
        AI
      </Label>
      <Label p={p} x={254} y={265} size={16} color={p.onGrad}>
        Sudah, Kak. Dikirim hari ini
      </Label>
      <Label p={p} x={208} y={294} size={16} color={p.onGrad}>
        via JNE, resi JX1209384.
      </Label>
      <Label p={p} x={208} y={320} size={16} color={p.onGrad}>
        Estimasi tiba Kamis.
      </Label>

      <Panel p={p} x={32} y={360} w={300} h={56} />
      <Label p={p} x={52} y={394} size={16} color={p.ink}>
        Bisa minta invoicenya?
      </Label>

      <rect x="288" y="436" width="320" height="88" rx="18" fill="url(#ss-ai-brand)" />
      <rect x="308" y="456" width="40" height="48" rx="8" fill="#fff" fillOpacity="0.25" />
      <path d="M 318 472 h 20 M 318 482 h 20 M 318 492 h 12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <Label p={p} x={364} y={478} size={16} color={p.onGrad} weight={700}>
        Invoice-1042.pdf
      </Label>
      <Label p={p} x={364} y={502} size={13} color={p.onGrad}>
        Dikirim otomatis, 128 KB
      </Label>

      <Panel p={p} x={24} y={660} w={592} h={56} r={28} />
      <Label p={p} x={56} y={694} size={16} color={p.faint}>
        Tulis pesan
      </Label>
      <circle cx="584" cy="688" r="20" fill={p.brand} />
      <path d="M 577 688 h 13 m -5 -6 l 6 6 l -6 6" stroke={p.onBrand} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Automation flow */}
      <rect x="640" y="56" width="560" height="694" fill={p.side} />
      <line x1="640" y1="56" x2="640" y2="750" stroke={p.line} strokeWidth="2" />
      <Label p={p} x={672} y={104} size={22} color={p.ink} weight={700} heading>
        Alur otomatis
      </Label>
      <Label p={p} x={672} y={130} size={14}>
        Berjalan untuk setiap chat masuk
      </Label>
      {automation.map((n, i) => {
        const y = 160 + i * 106;
        return (
          <g key={n.t}>
            {i < automation.length - 1 ? (
              <>
                <line x1="920" y1={y + 72} x2="920" y2={y + 106} stroke={p.brand} strokeWidth="3" />
                <circle cx="920" cy={y + 89} r="4" fill={p.brand} />
              </>
            ) : null}
            <Panel p={p} x={672} y={y} w={496} h={72} r={16} />
            <rect x="692" y={y + 16} width="40" height="40" rx="11" fill={p.brand} fillOpacity={n.solid ? 1 : 0.15} />
            <rect x="704" y={y + 28} width="16" height="16" rx="4" fill={n.solid ? p.onBrand : p.brand} fillOpacity={n.solid ? 0.6 : 1} />
            <Label p={p} x={748} y={y + 32} size={17} color={p.ink} weight={600}>
              {n.t}
            </Label>
            <Label p={p} x={748} y={y + 54} size={13}>
              {n.d}
            </Label>
          </g>
        );
      })}
      {[
        { x: 672, v: "312", l: "Chat dibalas hari ini" },
        { x: 928, v: "86%", l: "Selesai tanpa admin" },
      ].map((s) => (
        <g key={s.l}>
          <Panel p={p} x={s.x} y={600} w={240} h={110} />
          <Label p={p} x={s.x + 24} y={652} size={34} color={p.ink} weight={700} heading>
            {s.v}
          </Label>
          <Label p={p} x={s.x + 24} y={682} size={14}>
            {s.l}
          </Label>
        </g>
      ))}
    </Screen>
  );
}
