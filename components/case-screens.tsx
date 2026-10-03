import type { ReactNode } from "react";
import { Chrome, Grad, Label, Panel, Pill, Screen, type Palette } from "./service-screens";

/**
 * One app screen per case study, drawn as SVG. Palettes are deliberately
 * unrelated to the site theme: each reads as that client's own product.
 * Same rendering contract as ServiceScreen (full width, bottom crops first).
 * Figures and names are illustrative; callers hide the SVG from assistive tech.
 */

export function CaseScreen({ slug }: { slug: string }) {
  switch (slug) {
    case "laundry-bersih-wangi":
      return <LaundryScreen p={palettes.laundry} />;
    case "kopi-ruang-tengah":
      return <KopiScreen p={palettes.kopi} />;
    case "maju-jaya":
      return <MajuJayaScreen p={palettes.majuJaya} />;
    case "apotek-sehat":
      return <ApotekScreen p={palettes.apotek} />;
    case "bengkel-karya":
      return <BengkelScreen p={palettes.bengkel} />;
    case "dapur-nusantara":
      return <DapurScreen p={palettes.dapur} />;
    default:
      return null;
  }
}

const RED = "#dc2626";

const palettes = {
  // Putih cyan
  laundry: {
    bg: "#f3f9fb", side: "#ffffff", sunken: "#eaf4f7", card: "#ffffff", line: "#dbe8ee",
    ink: "#0c2530", muted: "#557380", faint: "#93aab4",
    brand: "#0891b2", deep: "#0e7490", soft: "#a5f3fc", alt: "#22d3ee",
    onBrand: "#ffffff", onGrad: "#ffffff", ok: "#16a34a", warn: "#ea580c",
    chrome: "#e6f0f4", url: "#ffffff", dot: "#c5d6dd",
  },
  // Hitam amber
  kopi: {
    bg: "#14110f", side: "#1a1613", sunken: "#110e0c", card: "#1f1a16", line: "#2e2620",
    ink: "#f5efe8", muted: "#b3a596", faint: "#7a6b5d",
    brand: "#f59e0b", deep: "#b45309", soft: "#fcd34d", alt: "#fb923c",
    onBrand: "#1a1209", onGrad: "#1a1209", ok: "#4ade80", warn: "#f87171",
    chrome: "#1a1613", url: "#251f1a", dot: "#3a3029",
  },
  // Putih merah
  majuJaya: {
    bg: "#ffffff", side: "#ffffff", sunken: "#f7f5f4", card: "#ffffff", line: "#ece7e4",
    ink: "#1c1412", muted: "#6b5d58", faint: "#aa9e99",
    brand: "#dc2626", deep: "#991b1b", soft: "#fecaca", alt: "#16a34a",
    onBrand: "#ffffff", onGrad: "#ffffff", ok: "#16a34a", warn: "#d97706",
    chrome: "#f3efed", url: "#ffffff", dot: "#ddd5d1",
  },
  // Putih teal
  apotek: {
    bg: "#f5faf9", side: "#ffffff", sunken: "#ecf5f3", card: "#ffffff", line: "#dceae7",
    ink: "#0b2421", muted: "#557a74", faint: "#93aea9",
    brand: "#0d9488", deep: "#0f766e", soft: "#99f6e4", alt: "#2dd4bf",
    onBrand: "#ffffff", onGrad: "#ffffff", ok: "#16a34a", warn: "#d97706",
    chrome: "#e8f2f0", url: "#ffffff", dot: "#c8dad6",
  },
  // Hitam oranye
  bengkel: {
    bg: "#0e0f11", side: "#141518", sunken: "#101114", card: "#17191c", line: "#262a2f",
    ink: "#f3f4f6", muted: "#9ca3af", faint: "#6b7280",
    brand: "#f97316", deep: "#c2410c", soft: "#fdba74", alt: "#38bdf8",
    onBrand: "#1a0d05", onGrad: "#ffffff", ok: "#22c55e", warn: "#facc15",
    chrome: "#141518", url: "#1d2024", dot: "#30343a",
  },
  // Putih indigo
  dapur: {
    bg: "#f6f7fb", side: "#ffffff", sunken: "#eef0f7", card: "#ffffff", line: "#e2e5f0",
    ink: "#121528", muted: "#5f6680", faint: "#9aa0b8",
    brand: "#4f46e5", deep: "#3730a3", soft: "#c7d2fe", alt: "#f43f5e",
    onBrand: "#ffffff", onGrad: "#ffffff", ok: "#16a34a", warn: "#e11d48",
    chrome: "#eceef6", url: "#ffffff", dot: "#d0d4e4",
  },
} satisfies Record<string, Palette>;

/** A short right-aligned money row: label left, value right. */
function Row({ p, y, l, v, x1 = 650, x2 = 1130, strong = false }: {
  p: Palette; y: number; l: ReactNode; v: ReactNode; x1?: number; x2?: number; strong?: boolean;
}) {
  return (
    <g>
      <Label p={p} x={x1} y={y} size={strong ? 20 : 17} color={strong ? p.ink : p.muted} weight={strong ? 700 : 400}>
        {l}
      </Label>
      <Label p={p} x={x2} y={y} size={strong ? 26 : 17} color={p.ink} weight={strong ? 700 : 600} anchor="end" heading={strong}>
        {v}
      </Label>
    </g>
  );
}

/* --------------------------------- laundry --------------------------------- */

const laundryItems = [
  { name: "Kemeja", n: 4, kind: "tee" },
  { name: "Celana", n: 3, kind: "tee" },
  { name: "Jaket", n: 1, kind: "tee" },
  { name: "Bed cover", n: 1, kind: "sheet" },
  { name: "Selimut", n: 0, kind: "sheet" },
  { name: "Sepatu", n: 0, kind: "shoe" },
];

const laundrySteps = ["Diterima", "Dicuci", "Dikeringkan", "Disetrika", "Siap diambil"];

function LaundryScreen({ p }: { p: Palette }) {
  return (
    <Screen p={p}>
      <Chrome p={p} url="laundry.bersihwangi.id/order" />
      <Label p={p} x={40} y={112} size={30} color={p.ink} weight={700} heading>
        Order baru
      </Label>
      <Label p={p} x={40} y={142} size={17}>
        Pelanggan: Ibu Ratna (langganan)
      </Label>
      <Panel p={p} x={930} y={86} w={230} h={44} r={22} />
      <circle cx="958" cy="108" r="6" fill={p.ok} />
      <Label p={p} x={976} y={114} size={16} color={p.ink} weight={600}>
        Cabang Kemang
      </Label>

      <Label p={p} x={40} y={196} size={18} color={p.ink} weight={600}>
        Jenis cucian
      </Label>
      {laundryItems.map((it, i) => {
        const x = 40 + (i % 3) * 190;
        const y = 214 + Math.floor(i / 3) * 136;
        const cx = x + 85;
        const cy = y + 48;
        const on = it.n > 0;
        return (
          <g key={it.name}>
            <rect x={x} y={y} width="170" height="120" rx="16" fill={p.card} stroke={on ? p.brand : p.line} strokeWidth={on ? 2.5 : 2} />
            <circle cx={cx} cy={cy} r="26" fill={p.brand} fillOpacity={on ? 0.14 : 0.06} />
            {it.kind === "tee" ? (
              <path
                d={`M ${cx - 16} ${cy - 6} l 9 -9 h 14 l 9 9 l -6 7 l -3 -3 v 17 h -14 v -17 l -3 3 z`}
                fill={on ? p.brand : p.faint}
              />
            ) : null}
            {it.kind === "sheet" ? <rect x={cx - 15} y={cy - 11} width="30" height="22" rx="4" fill={on ? p.brand : p.faint} /> : null}
            {it.kind === "shoe" ? <path d={`M ${cx - 16} ${cy + 8} v -14 l 10 4 q 12 2 22 10 z`} fill={on ? p.brand : p.faint} /> : null}
            <Label p={p} x={cx} y={y + 100} size={16} color={on ? p.ink : p.muted} weight={600} anchor="middle">
              {it.name}
            </Label>
            {on ? <Pill p={p} x={x + 120} y={y + 10} w={40} h={26} label={`x${it.n}`} solid size={13} /> : null}
          </g>
        );
      })}

      <Panel p={p} x={40} y={500} w={550} h={96} />
      <Label p={p} x={64} y={538} size={15}>
        Berat timbangan
      </Label>
      <Label p={p} x={64} y={578} size={32} color={p.ink} weight={700} heading>
        3,5 kg
      </Label>
      <Pill p={p} x={300} y={530} w={92} h={36} label="Reguler" solid size={14} />
      <Pill p={p} x={402} y={530} w={86} h={36} label="Ekspres" tone={p.muted} size={14} />
      <Pill p={p} x={498} y={530} w={74} h={36} label="Satuan" tone={p.muted} size={14} />

      <Panel p={p} x={40} y={620} w={550} h={110} />
      {laundrySteps.map((s, i) => {
        const x = 90 + i * 112;
        return (
          <g key={s}>
            {i < laundrySteps.length - 1 ? (
              <line x1={x + 12} y1="662" x2={x + 100} y2="662" stroke={i === 0 ? p.brand : p.line} strokeWidth="3" />
            ) : null}
            <circle cx={x} cy="662" r={i === 0 ? 11 : 9} fill={i === 0 ? p.brand : p.card} stroke={i === 0 ? "none" : p.faint} strokeWidth="2" />
            <Label p={p} x={x} y={700} size={13} color={i === 0 ? p.ink : p.muted} weight={i === 0 ? 600 : 400} anchor="middle">
              {s}
            </Label>
          </g>
        );
      })}

      <Panel p={p} x={620} y={196} w={540} h={534} r={20} />
      <Label p={p} x={650} y={240} size={22} color={p.ink} weight={700} heading>
        Nota #LB-2207
      </Label>
      <Label p={p} x={650} y={266} size={14}>
        Estimasi selesai: Kamis, 16.00
      </Label>
      <Row p={p} y={316} l="Kiloan reguler 3,5 kg" v="Rp 24.500" />
      <Row p={p} y={352} l="Bed cover x1" v="Rp 35.000" />
      <Row p={p} y={388} l="Jaket x1" v="Rp 15.000" />
      <line x1="650" y1="414" x2="1130" y2="414" stroke={p.line} strokeWidth="2" strokeDasharray="6 8" />
      <Row p={p} y={456} l="Total" v="Rp 74.500" strong />
      <rect x="650" y="484" width="480" height="52" rx="14" fill={p.sunken} />
      <Label p={p} x={670} y={516} size={16} color={p.ink}>
        Pakai saldo deposit
      </Label>
      <rect x="1060" y="496" width="52" height="28" rx="14" fill={p.brand} />
      <circle cx="1098" cy="510" r="10" fill="#fff" />
      <rect x="650" y="552" width="480" height="64" rx="14" fill={p.ok} fillOpacity="0.1" />
      <circle cx="676" cy="584" r="7" fill={p.ok} />
      <Label p={p} x={694} y={580} size={15} color={p.ink} weight={600}>
        Nota dikirim ke WhatsApp pelanggan
      </Label>
      <Label p={p} x={694} y={600} size={13}>
        Pengingat otomatis bila belum diambil 3 hari
      </Label>
      <Pill p={p} x={650} y={644} w={480} h={58} label="Simpan & cetak nota" solid size={18} />
    </Screen>
  );
}

/* ---------------------------------- kopi ---------------------------------- */

const tickets = [
  {
    id: "#A-118", where: "Meja 4", time: "01:42", late: false, start: false,
    items: [
      { name: "Es Kopi Susu Aren", qty: "x2", mods: ["Large", "Less sugar"] },
      { name: "Americano", qty: "x1", mods: ["Hot", "Double shot"] },
    ],
  },
  {
    id: "#A-119", where: "Bawa pulang", time: "02:30", late: false, start: false,
    items: [
      { name: "Matcha Latte", qty: "x1", mods: ["Oat milk", "Less ice"] },
      { name: "Croissant", qty: "x1", mods: ["Hangatkan"] },
    ],
  },
  {
    id: "#A-120", where: "Meja 9", time: "04:15", late: true, start: false,
    items: [
      { name: "Kopi Tubruk", qty: "x3", mods: ["Tanpa gula"] },
      { name: "Teh Leci", qty: "x2", mods: ["Large"] },
    ],
  },
  {
    id: "#A-121", where: "Ojek online", time: "00:20", late: false, start: true,
    items: [{ name: "Es Kopi Susu Aren", qty: "x4", mods: ["Regular", "Normal sugar"] }],
  },
];

function KopiScreen({ p }: { p: Palette }) {
  return (
    <Screen p={p}>
      <Chrome p={p} url="bar.kopiruangtengah.id" />
      <Label p={p} x={40} y={112} size={30} color={p.ink} weight={700} heading>
        Antrean bar
      </Label>
      <Label p={p} x={40} y={140} size={16}>
        4 pesanan aktif, rata-rata 3 menit per pesanan
      </Label>
      <Pill p={p} x={984} y={90} w={84} h={40} label="Bar" solid size={16} />
      <Pill p={p} x={1076} y={90} w={84} h={40} label="Dapur" tone={p.muted} size={16} />

      {tickets.map((t, ti) => {
        const x = 40 + ti * 284;
        let y = 250;
        return (
          <g key={t.id}>
            <Panel p={p} x={x} y={164} w={268} h={566} />
            <rect x={x} y={164} width="268" height="6" rx="3" fill={t.late ? p.warn : p.brand} />
            <Label p={p} x={x + 20} y={208} size={22} color={p.ink} weight={700} heading>
              {t.id}
            </Label>
            <Label p={p} x={x + 20} y={232} size={14}>
              {t.where}
            </Label>
            <Pill p={p} x={x + 180} y={188} w={70} h={30} label={t.time} tone={t.late ? p.warn : p.ok} size={14} />
            <line x1={x + 20} y1="250" x2={x + 248} y2="250" stroke={p.line} strokeWidth="2" />
            {t.items.map((it) => {
              y += 40;
              const top = y;
              y += it.mods.length * 26 + 12;
              return (
                <g key={it.name}>
                  <Label p={p} x={x + 20} y={top} size={18} color={p.ink} weight={600}>
                    {it.name}
                  </Label>
                  <Label p={p} x={x + 248} y={top} size={17} color={p.brand} weight={700} anchor="end">
                    {it.qty}
                  </Label>
                  {it.mods.map((m, mi) => (
                    <g key={m}>
                      <circle cx={x + 26} cy={top + 22 + mi * 26} r="3.5" fill={p.brand} />
                      <Label p={p} x={x + 38} y={top + 27 + mi * 26} size={15}>
                        {m}
                      </Label>
                    </g>
                  ))}
                </g>
              );
            })}
            {t.start ? (
              <>
                <rect x={x + 20} y="652" width="228" height="54" rx="27" fill="none" stroke={p.brand} strokeWidth="2" />
                <Label p={p} x={x + 134} y={685} size={17} color={p.brand} weight={700} anchor="middle">
                  Mulai buat
                </Label>
              </>
            ) : (
              <Pill p={p} x={x + 20} y={652} w={228} h={54} label="Selesai" solid size={17} />
            )}
          </g>
        );
      })}
    </Screen>
  );
}

/* -------------------------------- maju jaya -------------------------------- */

const materials = [
  { name: "Semen PCC 50 kg", price: "Rp 62.000", unit: "/ sak", kind: "sack" },
  { name: "Besi beton 10 mm", price: "Rp 78.000", unit: "/ batang", kind: "rebar" },
  { name: "Cat tembok 5 kg", price: "Rp 145.000", unit: "/ pail", kind: "can" },
  { name: "Keramik 40x40", price: "Rp 58.000", unit: "/ dus", kind: "tile" },
];

function MajuJayaScreen({ p }: { p: Palette }) {
  return (
    <Screen p={p}>
      <defs>
        <Grad id="cs-mj-banner" from={p.brand} to={p.deep} />
      </defs>
      <Chrome p={p} url="www.majujaya-bangunan.id" />
      <rect x="40" y="76" width="40" height="40" rx="10" fill={p.brand} />
      <path d="M 50 104 l 10 -14 l 10 14 z" fill="#fff" />
      <Label p={p} x={92} y={96} size={20} color={p.ink} weight={700} heading>
        Maju Jaya
      </Label>
      <Label p={p} x={92} y={116} size={13}>
        Toko Bangunan
      </Label>
      <Panel p={p} x={380} y={76} w={440} h={44} r={22} fill={p.sunken} />
      <circle cx="408" cy="97" r="8" fill="none" stroke={p.faint} strokeWidth="3" />
      <Label p={p} x={428} y={104} size={16} color={p.faint}>
        Cari semen, besi, cat
      </Label>
      <Pill p={p} x={1010} y={76} w={150} h={44} label="Hubungi" solid size={16} />

      <rect x="40" y="148" width="1120" height="150" rx="20" fill="url(#cs-mj-banner)" />
      <circle cx="1080" cy="160" r="120" fill="#fff" fillOpacity="0.08" />
      <circle cx="980" cy="300" r="90" fill="#fff" fillOpacity="0.06" />
      <Label p={p} x={76} y={212} size={30} color="#fff" weight={700} heading>
        Harga material terbaru, diperbarui setiap hari
      </Label>
      <Label p={p} x={76} y={248} size={17} color="#fff">
        Pesan lewat WhatsApp, kami kirim ke lokasi proyek.
      </Label>

      {["Semua", "Semen", "Besi", "Cat", "Keramik", "Pipa"].map((c, i) => (
        <Pill
          key={c}
          p={p}
          x={40 + i * 112}
          y={324}
          w={100}
          h={38}
          label={c}
          solid={i === 0}
          tone={p.muted}
          size={15}
        />
      ))}

      {materials.map((m, i) => {
        const x = 40 + i * 286;
        const cx = x + 131;
        return (
          <g key={m.name}>
            <Panel p={p} x={x} y={386} w={268} h={330} />
            <rect x={x + 12} y="398" width="244" height="130" rx="12" fill={p.sunken} />
            {m.kind === "sack" ? (
              <>
                <rect x={cx - 34} y="420" width="68" height="88" rx="14" fill={p.faint} fillOpacity="0.55" />
                <rect x={cx - 34} y="452" width="68" height="18" fill={p.brand} />
              </>
            ) : null}
            {m.kind === "rebar" ? (
              [0, 1, 2, 3].map((k) => (
                <rect key={k} x={cx - 60} y={428 + k * 20} width="120" height="8" rx="4" fill={p.muted} fillOpacity="0.7" />
              ))
            ) : null}
            {m.kind === "can" ? (
              <>
                <rect x={cx - 30} y="428" width="60" height="76" rx="8" fill={p.brand} />
                <rect x={cx - 30} y="448" width="60" height="26" fill="#fff" fillOpacity="0.85" />
                <path d={`M ${cx - 20} 428 q 20 -18 40 0`} stroke={p.muted} strokeWidth="3" fill="none" />
              </>
            ) : null}
            {m.kind === "tile" ? (
              [0, 1].flatMap((r) =>
                [0, 1].map((c) => (
                  <rect
                    key={`${r}-${c}`}
                    x={cx - 42 + c * 44}
                    y={420 + r * 44}
                    width="40"
                    height="40"
                    rx="4"
                    fill={(r + c) % 2 ? p.soft : p.faint}
                    fillOpacity="0.8"
                  />
                )),
              )
            ) : null}
            <Label p={p} x={x + 20} y={562} size={18} color={p.ink} weight={600}>
              {m.name}
            </Label>
            <Label p={p} x={x + 20} y={594} size={20} color={p.brand} weight={700} heading>
              {m.price}
            </Label>
            <Label p={p} x={x + 20 + m.price.length * 11.5} y={594} size={14}>
              {m.unit}
            </Label>
            <Label p={p} x={x + 20} y={618} size={13} color={p.ok}>
              Stok tersedia
            </Label>
            <rect x={x + 20} y="638" width="228" height="48" rx="24" fill={p.alt} />
            <Label p={p} x={x + 134} y={668} size={15} color="#fff" weight={700} anchor="middle">
              Pesan via WhatsApp
            </Label>
          </g>
        );
      })}
    </Screen>
  );
}

/* --------------------------------- apotek --------------------------------- */

const meds = [
  { name: "Amoxicillin 500 mg", batch: "AMX-2304", stock: "120 strip", exp: "12 Jul 2026", status: "28 hari lagi", tone: "warn" },
  { name: "Paracetamol 500 mg", batch: "PCT-2311", stock: "45 strip", exp: "03 Feb 2027", status: "Aman", tone: "ok" },
  { name: "Vitamin C 1000 mg", batch: "VTC-2402", stock: "18 botol", exp: "20 Jun 2026", status: "6 hari lagi", tone: "danger" },
  { name: "Antasida Doen", batch: "ANT-2309", stock: "60 strip", exp: "15 Agu 2026", status: "Pantau", tone: "brand" },
  { name: "Salep Gentamicin", batch: "GEN-2401", stock: "9 tube", exp: "30 Nov 2026", status: "Stok menipis", tone: "brand" },
] as const;

function ApotekScreen({ p }: { p: Palette }) {
  const tone = (t: (typeof meds)[number]["tone"]) => (t === "danger" ? RED : p[t]);
  return (
    <Screen p={p}>
      <Chrome p={p} url="stok.apoteksehat.id" />
      <Label p={p} x={40} y={112} size={30} color={p.ink} weight={700} heading>
        Stok &amp; kedaluwarsa
      </Label>
      <Label p={p} x={40} y={140} size={16}>
        Dipantau per batch, diurutkan dari yang paling dekat kedaluwarsa
      </Label>

      {[
        { x: 40, l: "Hampir kedaluwarsa", v: "12 batch", c: p.warn },
        { x: 420, l: "Stok menipis", v: "8 item", c: p.brand },
        { x: 800, l: "Kerugian stok bulan ini", v: "Rp 1,2 jt", c: p.ok, note: "-75%" },
      ].map((k) => (
        <g key={k.l}>
          <Panel p={p} x={k.x} y={164} w={360} h={112} />
          <rect x={k.x} y={164} width="6" height="112" rx="3" fill={k.c} />
          <Label p={p} x={k.x + 28} y={202} size={15}>
            {k.l}
          </Label>
          <Label p={p} x={k.x + 28} y={248} size={32} color={p.ink} weight={700} heading>
            {k.v}
          </Label>
          {k.note ? <Pill p={p} x={k.x + 260} y={182} w={74} h={30} label={k.note} tone={p.ok} size={14} /> : null}
        </g>
      ))}

      <rect x="40" y="298" width="1120" height="54" rx="14" fill={p.warn} fillOpacity="0.1" stroke={p.warn} strokeOpacity="0.35" strokeWidth="2" />
      <path d="M 68 336 l 12 -22 l 12 22 z" fill={p.warn} />
      <Label p={p} x={104} y={331} size={16} color={p.ink}>
        3 batch kedaluwarsa dalam 30 hari. Prioritaskan penjualan atau retur ke distributor.
      </Label>

      <Panel p={p} x={40} y={372} w={1120} h={360} r={20} />
      {["Nama obat", "Batch", "Stok", "Kedaluwarsa", "Status"].map((h, i) => (
        <Label key={h} p={p} x={[70, 420, 610, 790, 980][i]} y={414} size={14} color={p.faint} weight={600}>
          {h}
        </Label>
      ))}
      {meds.map((m, i) => {
        const y = 466 + i * 54;
        return (
          <g key={m.batch}>
            <line x1="70" y1={y - 32} x2="1130" y2={y - 32} stroke={p.line} strokeWidth="2" />
            <Label p={p} x={70} y={y} size={17} color={p.ink} weight={600}>
              {m.name}
            </Label>
            <Label p={p} x={420} y={y} size={16}>
              {m.batch}
            </Label>
            <Label p={p} x={610} y={y} size={16} color={p.ink}>
              {m.stock}
            </Label>
            <Label p={p} x={790} y={y} size={16}>
              {m.exp}
            </Label>
            <Pill p={p} x={980} y={y - 22} w={138} h={30} label={m.status} tone={tone(m.tone)} size={14} />
          </g>
        );
      })}
    </Screen>
  );
}

/* --------------------------------- bengkel --------------------------------- */

const cars = [
  { plate: "B 1234 KJA", car: "Toyota Avanza 2019", job: "Ganti oli + tune up", mech: "DO", status: "Dikerjakan", progress: 0.6, eta: "Selesai 14.30" },
  { plate: "B 2718 TRS", car: "Honda Brio 2021", job: "Servis berkala 20.000 km", mech: "RU", status: "Dikerjakan", progress: 0.35, eta: "Selesai 15.10" },
  { plate: "D 1503 AB", car: "Suzuki Ertiga 2018", job: "Rem depan + spooring", mech: "AG", status: "Menunggu", progress: 0, eta: "Mulai 15.45" },
  { plate: "B 9921 PQ", car: "Daihatsu Xenia 2020", job: "Ganti aki", mech: "DO", status: "Selesai", progress: 1, eta: "Siap diambil" },
  { plate: "B 4410 ZX", car: "Mitsubishi Xpander 2022", job: "AC kurang dingin", mech: "RU", status: "Menunggu", progress: 0, eta: "Mulai 16.20" },
];

function BengkelScreen({ p }: { p: Palette }) {
  const tone = (s: string) => (s === "Selesai" ? p.ok : s === "Menunggu" ? p.warn : p.brand);
  return (
    <Screen p={p}>
      <Chrome p={p} url="servis.bengkelkarya.id" />
      <Label p={p} x={40} y={112} size={30} color={p.ink} weight={700} heading>
        Antrean servis hari ini
      </Label>
      <Label p={p} x={40} y={140} size={16}>
        14 kendaraan, 3 mekanik bertugas
      </Label>
      {[
        { l: "Menunggu 4", c: p.warn },
        { l: "Dikerjakan 6", c: p.brand },
        { l: "Selesai 4", c: p.ok },
      ].map((s, i) => (
        <Pill key={s.l} p={p} x={760 + i * 136} y={92} w={126} h={38} label={s.l} tone={s.c} size={15} />
      ))}

      {cars.map((c, i) => {
        const y = 168 + i * 112;
        return (
          <g key={c.plate}>
            <Panel p={p} x={40} y={y} w={720} h={96} />
            <rect x="60" y={y + 24} width="140" height="48" rx="8" fill="#f3f4f6" />
            <rect x="64" y={y + 28} width="132" height="40" rx="6" fill="none" stroke="#111" strokeWidth="2" />
            <Label p={p} x={130} y={y + 55} size={18} color="#111" weight={700} anchor="middle" heading>
              {c.plate}
            </Label>
            <Label p={p} x={224} y={y + 42} size={18} color={p.ink} weight={600}>
              {c.car}
            </Label>
            <Label p={p} x={224} y={y + 68} size={15}>
              {c.job}
            </Label>
            <circle cx="532" cy={y + 48} r="18" fill={p.brand} fillOpacity="0.16" />
            <Label p={p} x={532} y={y + 53} size={13} color={p.brand} weight={700} anchor="middle">
              {c.mech}
            </Label>
            <Pill p={p} x={566} y={y + 18} w={128} h={30} label={c.status} tone={tone(c.status)} size={14} />
            {c.status === "Dikerjakan" ? (
              <>
                <rect x="566" y={y + 60} width="128" height="6" rx="3" fill={p.line} />
                <rect x="566" y={y + 60} width={128 * c.progress} height="6" rx="3" fill={p.brand} />
              </>
            ) : (
              <Label p={p} x={566} y={y + 72} size={13}>
                {c.eta}
              </Label>
            )}
            {c.status === "Dikerjakan" ? (
              <Label p={p} x={740} y={y + 54} size={13} anchor="end">
                {c.eta.replace("Selesai ", "")}
              </Label>
            ) : null}
          </g>
        );
      })}

      <Panel p={p} x={784} y={168} w={376} h={564} r={20} />
      <Label p={p} x={812} y={210} size={20} color={p.ink} weight={600}>
        Notifikasi pelanggan
      </Label>
      <Label p={p} x={812} y={234} size={14}>
        Terkirim otomatis lewat WhatsApp
      </Label>
      {[
        { t: "Xenia B 9921 PQ sudah selesai dan siap diambil.", time: "13.52" },
        { t: "Estimasi Avanza B 1234 KJA selesai pukul 14.30.", time: "13.10" },
        { t: "Ertiga D 1503 AB masuk antrean, mulai 15.45.", time: "12.48" },
      ].map((m, i) => {
        const y = 262 + i * 112;
        const words = m.t.split(" ");
        const half = Math.ceil(words.length / 2);
        return (
          <g key={m.time}>
            <rect x="812" y={y} width="320" height="92" rx="16" fill={p.ok} fillOpacity="0.1" />
            <circle cx="836" cy={y + 26} r="6" fill={p.ok} />
            <Label p={p} x={852} y={y + 31} size={13} color={p.ok} weight={600}>
              Terkirim
            </Label>
            <Label p={p} x={1112} y={y + 31} size={13} color={p.faint} anchor="end">
              {m.time}
            </Label>
            <Label p={p} x={832} y={y + 58} size={15} color={p.ink}>
              {words.slice(0, half).join(" ")}
            </Label>
            <Label p={p} x={832} y={y + 80} size={15} color={p.ink}>
              {words.slice(half).join(" ")}
            </Label>
          </g>
        );
      })}
      <rect x="812" y="604" width="320" height="104" rx="16" fill={p.sunken} stroke={p.line} strokeWidth="2" />
      <Label p={p} x={836} y={654} size={36} color={p.brand} weight={700} heading>
        23
      </Label>
      <Label p={p} x={836} y={684} size={14}>
        Pesan otomatis hari ini
      </Label>
    </Screen>
  );
}

/* ---------------------------------- dapur ---------------------------------- */

const menus = [
  { name: "Nasi Box Ayam Bakar", hpp: "Rp 18.400", price: "Rp 30.000", m: 0.39 },
  { name: "Nasi Box Rendang", hpp: "Rp 24.900", price: "Rp 35.000", m: 0.29 },
  { name: "Tumpeng Mini", hpp: "Rp 41.200", price: "Rp 50.000", m: 0.18 },
  { name: "Snack Box Isi 4", hpp: "Rp 7.300", price: "Rp 15.000", m: 0.51 },
  { name: "Prasmanan per pax", hpp: "Rp 32.600", price: "Rp 45.000", m: 0.28 },
  { name: "Es Buah", hpp: "Rp 4.100", price: "Rp 10.000", m: 0.59 },
];

function DapurScreen({ p }: { p: Palette }) {
  const ring = 2 * Math.PI * 64;
  return (
    <Screen p={p}>
      <Chrome p={p} url="keuangan.dapurnusantara.id" />
      <Label p={p} x={40} y={112} size={30} color={p.ink} weight={700} heading>
        Harga pokok per menu
      </Label>
      <Label p={p} x={40} y={140} size={16}>
        Dihitung ulang otomatis saat harga bahan berubah
      </Label>
      <Panel p={p} x={1000} y={88} w={160} h={44} r={22} />
      <Label p={p} x={1080} y={116} size={16} color={p.ink} anchor="middle">
        Juni 2026
      </Label>

      <Panel p={p} x={40} y={164} w={740} h={568} r={20} />
      {["Menu", "HPP", "Harga jual", "Margin"].map((h, i) => (
        <Label key={h} p={p} x={[70, 360, 500, 640][i]} y={206} size={14} color={p.faint} weight={600}>
          {h}
        </Label>
      ))}
      {menus.map((r, i) => {
        const y = 262 + i * 76;
        const low = r.m < 0.25;
        return (
          <g key={r.name}>
            {low ? <rect x="52" y={y - 38} width="716" height="70" rx="12" fill={p.alt} fillOpacity="0.08" /> : null}
            <line x1="70" y1={y - 40} x2="750" y2={y - 40} stroke={p.line} strokeWidth="2" />
            <Label p={p} x={70} y={y} size={17} color={p.ink} weight={600}>
              {r.name}
            </Label>
            {low ? (
              <Label p={p} x={70} y={y + 22} size={13} color={p.alt}>
                Di bawah target margin 25%
              </Label>
            ) : null}
            <Label p={p} x={360} y={y} size={16}>
              {r.hpp}
            </Label>
            <Label p={p} x={500} y={y} size={16} color={p.ink}>
              {r.price}
            </Label>
            <rect x="640" y={y - 10} width="70" height="8" rx="4" fill={p.line} />
            <rect x="640" y={y - 10} width={70 * Math.min(r.m / 0.6, 1)} height="8" rx="4" fill={low ? p.alt : p.brand} />
            <Label p={p} x={750} y={y} size={15} color={low ? p.alt : p.ink} weight={700} anchor="end">
              {Math.round(r.m * 100)}%
            </Label>
          </g>
        );
      })}

      <Panel p={p} x={804} y={164} w={356} h={300} r={20} />
      <Label p={p} x={832} y={206} size={19} color={p.ink} weight={600}>
        Komposisi biaya
      </Label>
      <circle cx="920" cy="330" r="64" fill="none" stroke={p.line} strokeWidth="24" />
      <circle cx="920" cy="330" r="64" fill="none" stroke={p.brand} strokeWidth="24" strokeDasharray={`${ring * 0.62} ${ring}`} transform="rotate(-90 920 330)" />
      <circle
        cx="920"
        cy="330"
        r="64"
        fill="none"
        stroke={p.soft}
        strokeWidth="24"
        strokeDasharray={`${ring * 0.24} ${ring}`}
        strokeDashoffset={-ring * 0.62}
        transform="rotate(-90 920 330)"
      />
      {[
        { l: "Bahan baku", v: "62%", c: p.brand },
        { l: "Tenaga kerja", v: "24%", c: p.soft },
        { l: "Overhead", v: "14%", c: p.line },
      ].map((d, i) => (
        <g key={d.l}>
          <circle cx="1016" cy={296 + i * 34} r="7" fill={d.c} />
          <Label p={p} x={1030} y={302 + i * 34} size={14}>
            {d.l}
          </Label>
          <Label p={p} x={1140} y={302 + i * 34} size={14} color={p.ink} weight={700} anchor="end">
            {d.v}
          </Label>
        </g>
      ))}

      <Panel p={p} x={804} y={488} w={356} h={244} r={20} />
      <Label p={p} x={832} y={530} size={19} color={p.ink} weight={600}>
        Harga bahan naik
      </Label>
      {[
        { l: "Daging sapi", v: "+8%" },
        { l: "Cabai merah", v: "+15%" },
        { l: "Minyak goreng", v: "+3%" },
      ].map((b, i) => (
        <g key={b.l}>
          <Label p={p} x={832} y={572 + i * 34} size={15} color={p.ink}>
            {b.l}
          </Label>
          <path d={`M ${1080} ${566 + i * 34} l 6 -8 l 6 8`} stroke={p.alt} strokeWidth="2.5" fill="none" />
          <Label p={p} x={1132} y={572 + i * 34} size={15} color={p.alt} weight={700} anchor="end">
            {b.v}
          </Label>
        </g>
      ))}
      <rect x="832" y="676" width="300" height="40" rx="20" fill="none" stroke={p.brand} strokeWidth="2" />
      <Label p={p} x={982} y={702} size={15} color={p.brand} weight={600} anchor="middle">
        Hitung ulang harga jual
      </Label>
    </Screen>
  );
}
