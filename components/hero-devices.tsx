import type { CSSProperties, ReactNode } from "react";

/**
 * Hero illustration: a laptop and a phone running an Ayrus-style dashboard.
 *
 * Both screens are inline SVG in the site palette rather than images, so the
 * hero costs no image request, stays crisp at any DPI, and scales as one piece
 * (every size below is a viewBox unit or a percentage). The figures are sample
 * data, which is why the whole block is one labelled image to assistive tech.
 */

export const C = {
  bg: "#0e0e13",
  side: "#121218",
  card: "#16161d",
  line: "#24242c",
  ink: "#f5f5f5",
  muted: "#a1a1aa",
  faint: "#6b6b78",
  brand: "#cb6ce6",
  deep: "#8e4fe0",
  soft: "#e9b8f5",
  ok: "#4ade80",
  warn: "#fbbf24",
};

export const sans: CSSProperties = { fontFamily: "var(--font-jakarta), ui-sans-serif, sans-serif" };
export const display: CSSProperties = { fontFamily: "var(--font-sora), ui-sans-serif, sans-serif" };

export function HeroDevices() {
  return (
    <div
      role="img"
      aria-label="Ilustrasi dashboard aplikasi bisnis di laptop dan ponsel"
      className="relative pb-[7%]"
    >
      {/* Laptop */}
      <div className="relative ml-[6%] w-[84%]">
        <div className="relative rounded-t-[1.1rem] border border-white/12 bg-[#0c0c10] p-[2.4%] pb-[3%] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span className="absolute top-[1.1%] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/25" />
          <div className="overflow-hidden rounded-[0.35rem]">
            <LaptopScreen />
          </div>
        </div>
        {/* Base: wider than the lid, with the opening notch. */}
        <div className="relative -mx-[7%] h-3 rounded-t-[0.2rem] rounded-b-[1.1rem] bg-gradient-to-b from-[#5a5a64] via-[#2c2c34] to-[#16161b] shadow-[0_30px_50px_-20px_rgba(0,0,0,0.9)] sm:h-4">
          <span className="absolute top-0 left-1/2 h-[45%] w-[15%] -translate-x-1/2 rounded-b-lg bg-[#1c1c22]" />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute right-0 bottom-0 z-10 w-[27%] rounded-[1.6rem] border border-white/15 bg-[#0a0a0d] p-[2.4%] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)] sm:rounded-[2.1rem]">
        <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.7rem]">
          <PhoneScreen />
          <span className="absolute top-[2.4%] left-1/2 h-[3%] w-[34%] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- laptop --------------------------------- */

const navItems = ["Penjualan", "Stok barang", "Pelanggan", "Laporan", "Pengaturan"];

const kpis = [
  { label: "Transaksi", value: "348", delta: "+12%", tone: C.ok },
  { label: "Pelanggan baru", value: "57", delta: "+5", tone: C.ok },
  { label: "Stok menipis", value: "6 item", delta: "Cek", tone: C.warn },
];

const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
const dayX = [332, 460, 587, 715, 843, 970, 1098];

const THIS_WEEK =
  "M 332,600 C 396,600 396,560 460,560 C 524,560 524,575 587,575 C 651,575 651,505 715,505 C 779,505 779,470 843,470 C 906,470 906,520 970,520 C 1034,520 1034,455 1098,455";
const LAST_WEEK =
  "M 332,620 C 396,620 396,600 460,600 C 524,600 524,612 587,612 C 651,612 651,572 715,572 C 779,572 779,560 843,560 C 906,560 906,588 970,588 C 1034,588 1034,548 1098,548";

const rows = [
  { no: "#INV-2481", item: "Kopi Susu Aren x2", time: "10.24", total: "Rp 56.000" },
  { no: "#INV-2480", item: "Paket Sarapan", time: "10.11", total: "Rp 42.000" },
];

function Card({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children?: ReactNode }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={20} fill={C.card} stroke={C.line} strokeWidth={2} />
      {children}
    </g>
  );
}

function LaptopScreen() {
  const ring = 2 * Math.PI * 90;
  return (
    <svg viewBox="0 0 1600 1000" className="block h-auto w-full" style={sans} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hd-brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.brand} />
          <stop offset="1" stopColor={C.deep} />
        </linearGradient>
        <clipPath id="hd-kpi-clip">
          <rect x="300" y="160" width="297" height="150" rx="20" />
        </clipPath>
        <linearGradient id="hd-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.brand} stopOpacity="0.38" />
          <stop offset="1" stopColor={C.brand} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1600" height="1000" fill={C.bg} />

      {/* Sidebar */}
      <rect width="260" height="1000" fill={C.side} />
      <line x1="260" y1="0" x2="260" y2="1000" stroke={C.line} strokeWidth={2} />
      <rect x="40" y="44" width="48" height="48" rx="13" fill="url(#hd-brand)" />
      <text x="104" y="79" fontSize="30" fontWeight="700" fill={C.ink} style={display}>
        Ayrus
      </text>
      <rect x="24" y="148" width="212" height="54" rx="14" fill={C.brand} fillOpacity="0.14" />
      <rect x="48" y="166" width="18" height="18" rx="5" fill={C.brand} />
      <text x="82" y="183" fontSize="23" fontWeight="600" fill={C.ink}>
        Dashboard
      </text>
      {navItems.map((n, i) => (
        <g key={n}>
          <rect x="48" y={232 + i * 64} width="18" height="18" rx="5" fill="none" stroke={C.faint} strokeWidth={2.5} />
          <text x="82" y={249 + i * 64} fontSize="22" fill={C.muted}>
            {n}
          </text>
        </g>
      ))}
      <circle cx="64" cy="930" r="24" fill="url(#hd-brand)" />
      <text x="100" y="924" fontSize="20" fontWeight="600" fill={C.ink}>
        Rina A.
      </text>
      <text x="100" y="950" fontSize="17" fill={C.muted}>
        Pemilik
      </text>

      {/* Header */}
      <text x="300" y="86" fontSize="40" fontWeight="700" fill={C.ink} style={display}>
        Dashboard
      </text>
      <text x="300" y="124" fontSize="21" fill={C.muted}>
        Ringkasan bisnis hari ini
      </text>
      <rect x="1060" y="52" width="340" height="56" rx="28" fill={C.card} stroke={C.line} strokeWidth={2} />
      <circle cx="1098" cy="80" r="10" fill="none" stroke={C.faint} strokeWidth={3} />
      <line x1="1106" y1="88" x2="1114" y2="96" stroke={C.faint} strokeWidth={3} strokeLinecap="round" />
      <text x="1128" y="87" fontSize="20" fill={C.faint}>
        Cari transaksi
      </text>
      <circle cx="1450" cy="80" r="28" fill={C.card} stroke={C.line} strokeWidth={2} />
      <circle cx="1462" cy="68" r="6" fill={C.brand} />
      <circle cx="1530" cy="80" r="28" fill="url(#hd-brand)" />

      {/* KPI cards: the lead card carries the brand gradient */}
      <rect x="300" y="160" width="297" height="150" rx="20" fill="url(#hd-brand)" />
      <circle cx="560" cy="180" r="90" fill="#ffffff" fillOpacity="0.08" clipPath="url(#hd-kpi-clip)" />
      <text x="328" y="206" fontSize="21" fill="#ffffff" fillOpacity="0.85">
        Omzet hari ini
      </text>
      <text x="328" y="264" fontSize="42" fontWeight="700" fill="#ffffff" style={display}>
        Rp 12,8 jt
      </text>
      <text x="328" y="292" fontSize="18" fill="#ffffff" fillOpacity="0.85">
        +8,4% dari kemarin
      </text>
      {kpis.map((k, i) => {
        const x = 621 + i * 321;
        return (
          <Card key={k.label} x={x} y={160} w={297} h={150}>
            <text x={x + 28} y={206} fontSize="21" fill={C.muted}>
              {k.label}
            </text>
            <text x={x + 28} y={268} fontSize="42" fontWeight="700" fill={C.ink} style={display}>
              {k.value}
            </text>
            <rect x={x + 205} y={182} width="68" height="32" rx="16" fill={k.tone} fillOpacity="0.14" />
            <text x={x + 239} y={204} fontSize="17" fontWeight="600" fill={k.tone} textAnchor="middle">
              {k.delta}
            </text>
          </Card>
        );
      })}

      {/* Sales chart */}
      <Card x={300} y={334} w={830} h={380}>
        <text x="332" y="382" fontSize="24" fontWeight="600" fill={C.ink}>
          Penjualan 7 hari terakhir
        </text>
        <circle cx="858" cy="375" r="7" fill={C.brand} />
        <text x="872" y="382" fontSize="18" fill={C.muted}>
          Minggu ini
        </text>
        <circle cx="990" cy="375" r="7" fill={C.faint} />
        <text x="1004" y="382" fontSize="18" fill={C.muted}>
          Lalu
        </text>
        {[430, 487, 545, 602, 660].map((y) => (
          <line key={y} x1="332" y1={y} x2="1098" y2={y} stroke={C.line} strokeWidth={2} strokeDasharray="6 8" />
        ))}
        <path d={`${THIS_WEEK} L 1098,660 L 332,660 Z`} fill="url(#hd-area)" />
        <path d={LAST_WEEK} fill="none" stroke={C.faint} strokeWidth={3} strokeDasharray="10 10" />
        <path d={THIS_WEEK} fill="none" stroke={C.brand} strokeWidth={5} strokeLinecap="round" />
        <line x1="843" y1="470" x2="843" y2="660" stroke={C.brand} strokeOpacity="0.5" strokeWidth={2} strokeDasharray="4 6" />
        <circle cx="843" cy="470" r="10" fill={C.brand} stroke={C.card} strokeWidth={5} />
        <rect x="778" y="404" width="130" height="46" rx="12" fill={C.ink} />
        <text x="843" y="434" fontSize="20" fontWeight="700" fill="#0a0a0a" textAnchor="middle">
          Rp 14,2 jt
        </text>
        {days.map((d, i) => (
          <text key={d} x={dayX[i]} y="694" fontSize="18" fill={C.muted} textAnchor="middle">
            {d}
          </text>
        ))}
      </Card>

      {/* Channel donut */}
      <Card x={1154} y={334} w={406} h={380}>
        <text x="1186" y="382" fontSize="24" fontWeight="600" fill={C.ink}>
          Kanal penjualan
        </text>
        <circle cx="1357" cy="530" r="90" fill="none" stroke={C.line} strokeWidth={30} />
        <circle
          cx="1357"
          cy="530"
          r="90"
          fill="none"
          stroke={C.brand}
          strokeWidth={30}
          strokeDasharray={`${ring * 0.62} ${ring}`}
          transform="rotate(-90 1357 530)"
        />
        <circle
          cx="1357"
          cy="530"
          r="90"
          fill="none"
          stroke={C.soft}
          strokeWidth={30}
          strokeDasharray={`${ring * 0.34} ${ring}`}
          strokeDashoffset={-ring * 0.64}
          transform="rotate(-90 1357 530)"
        />
        <text x="1357" y="540" fontSize="40" fontWeight="700" fill={C.ink} textAnchor="middle" style={display}>
          62%
        </text>
        <text x="1357" y="568" fontSize="17" fill={C.muted} textAnchor="middle">
          Outlet
        </text>
        <circle cx="1196" cy="670" r="7" fill={C.brand} />
        <text x="1212" y="677" fontSize="18" fill={C.muted}>
          Outlet 62%
        </text>
        <circle cx="1376" cy="670" r="7" fill={C.soft} />
        <text x="1392" y="677" fontSize="18" fill={C.muted}>
          Online 38%
        </text>
      </Card>

      {/* Recent transactions */}
      <Card x={300} y={738} w={1260} h={230}>
        <text x="332" y="786" fontSize="24" fontWeight="600" fill={C.ink}>
          Transaksi terbaru
        </text>
        <text x="1528" y="786" fontSize="19" fontWeight="600" fill={C.brand} textAnchor="end">
          Lihat semua
        </text>
        {["No. nota", "Produk", "Waktu", "Total", "Status"].map((h, i) => (
          <text key={h} x={[332, 560, 900, 1120, 1380][i]} y="830" fontSize="17" fill={C.faint}>
            {h}
          </text>
        ))}
        {rows.map((r, i) => {
          const y = 884 + i * 54;
          return (
            <g key={r.no}>
              <line x1="332" y1={y - 34} x2="1528" y2={y - 34} stroke={C.line} strokeWidth={2} />
              <text x="332" y={y} fontSize="19" fontWeight="600" fill={C.ink}>
                {r.no}
              </text>
              <text x="560" y={y} fontSize="19" fill={C.muted}>
                {r.item}
              </text>
              <text x="900" y={y} fontSize="19" fill={C.muted}>
                {r.time}
              </text>
              <text x="1120" y={y} fontSize="19" fontWeight="600" fill={C.ink}>
                {r.total}
              </text>
              <rect x="1380" y={y - 23} width="80" height="32" rx="16" fill={C.ok} fillOpacity="0.14" />
              <text x="1420" y={y - 1} fontSize="16" fontWeight="600" fill={C.ok} textAnchor="middle">
                Lunas
              </text>
            </g>
          );
        })}
      </Card>
    </svg>
  );
}

/* --------------------------------- phone --------------------------------- */

const actions = ["Kasir", "Stok", "Laporan", "Pelanggan"];
const actionX = [63, 151, 239, 327];

const activity = [
  { title: "Kopi Susu Aren", sub: "2 item, 10.24", amount: "Rp 56.000" },
  { title: "Paket Sarapan", sub: "1 item, 10.11", amount: "Rp 42.000" },
  { title: "Restock gula aren", sub: "Stok masuk", amount: "5 kg" },
];

const SPARK =
  "M 200,292 C 212,292 212,280 224,280 C 236,280 236,286 248,286 C 260,286 260,266 272,266 C 284,266 284,270 296,270 C 308,270 308,252 320,252 C 333,252 333,246 346,246";

function PhoneScreen() {
  return (
    <svg viewBox="0 0 390 845" className="block h-auto w-full" style={sans} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hd-phone-brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.brand} />
          <stop offset="1" stopColor={C.deep} />
        </linearGradient>
        <clipPath id="hd-phone-card-clip">
          <rect x="20" y="148" width="350" height="172" rx="24" />
        </clipPath>
      </defs>

      <rect width="390" height="845" fill={C.bg} />

      {/* Status bar */}
      <text x="34" y="36" fontSize="15" fontWeight="600" fill={C.ink}>
        9:41
      </text>
      <rect x="318" y="25" width="22" height="11" rx="3" fill="none" stroke={C.ink} strokeWidth={1.5} />
      <rect x="320" y="27" width="15" height="7" rx="1.5" fill={C.ink} />

      {/* Greeting */}
      <text x="24" y="100" fontSize="23" fontWeight="700" fill={C.ink} style={display}>
        Halo, Rina
      </text>
      <text x="24" y="124" fontSize="13" fill={C.muted}>
        Kamis, 12 Juni
      </text>
      <circle cx="346" cy="104" r="21" fill="url(#hd-phone-brand)" />

      {/* Revenue card */}
      <rect x="20" y="148" width="350" height="172" rx="24" fill="url(#hd-phone-brand)" />
      <circle cx="350" cy="160" r="80" fill="#ffffff" fillOpacity="0.08" clipPath="url(#hd-phone-card-clip)" />
      <text x="44" y="186" fontSize="14" fill="#ffffff" fillOpacity="0.85">
        Omzet bulan ini
      </text>
      <text x="44" y="230" fontSize="31" fontWeight="700" fill="#ffffff" style={display}>
        Rp 284,6 jt
      </text>
      <rect x="44" y="250" width="78" height="26" rx="13" fill="#ffffff" fillOpacity="0.2" />
      <text x="83" y="268" fontSize="13" fontWeight="600" fill="#ffffff" textAnchor="middle">
        +12,4%
      </text>
      <path d={SPARK} fill="none" stroke="#ffffff" strokeWidth={3} strokeLinecap="round" strokeOpacity="0.9" />

      {/* Quick actions */}
      {actions.map((a, i) => (
        <g key={a}>
          <circle cx={actionX[i]} cy="376" r="27" fill={C.card} stroke={C.line} strokeWidth={1.5} />
          <rect x={actionX[i] - 8} y="368" width="16" height="16" rx="4" fill={C.brand} fillOpacity={i === 0 ? 1 : 0.55} />
          <text x={actionX[i]} y="426" fontSize="12" fill={C.muted} textAnchor="middle">
            {a}
          </text>
        </g>
      ))}

      {/* Activity */}
      <text x="24" y="476" fontSize="16" fontWeight="700" fill={C.ink}>
        Aktivitas terbaru
      </text>
      <text x="366" y="476" fontSize="13" fontWeight="600" fill={C.brand} textAnchor="end">
        Semua
      </text>
      {activity.map((r, i) => {
        const y = 494 + i * 74;
        return (
          <g key={r.title}>
            <rect x="20" y={y} width="350" height="62" rx="16" fill={C.card} stroke={C.line} strokeWidth={1.5} />
            <circle cx="54" cy={y + 31} r="18" fill={C.brand} fillOpacity="0.15" />
            <circle cx="54" cy={y + 31} r="6" fill={C.brand} />
            <text x="84" y={y + 28} fontSize="14" fontWeight="600" fill={C.ink}>
              {r.title}
            </text>
            <text x="84" y={y + 46} fontSize="12" fill={C.muted}>
              {r.sub}
            </text>
            <text x="354" y={y + 37} fontSize="14" fontWeight="700" fill={C.ink} textAnchor="end">
              {r.amount}
            </text>
          </g>
        );
      })}

      {/* Tab bar */}
      <rect x="0" y="752" width="390" height="93" fill={C.side} />
      <line x1="0" y1="752" x2="390" y2="752" stroke={C.line} strokeWidth={1.5} />
      <rect x="35" y="772" width="56" height="32" rx="16" fill={C.brand} fillOpacity="0.16" />
      {actionX.map((x, i) => (
        <rect
          key={x}
          x={x - 9}
          y="779"
          width="18"
          height="18"
          rx="5"
          fill={i === 0 ? C.brand : "none"}
          stroke={i === 0 ? "none" : C.faint}
          strokeWidth={2}
        />
      ))}
      <rect x="130" y="826" width="130" height="5" rx="2.5" fill={C.ink} fillOpacity="0.5" />
    </svg>
  );
}
