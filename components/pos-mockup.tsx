/**
 * NectarPOS dashboard mockup.
 * Pure markup instead of a raster screenshot: crisp at any DPI, themeable,
 * and it costs no image bytes on the LCP path. Decorative — hidden from AT,
 * with the meaning carried by the surrounding copy.
 */
export function PosMockup({ className = "" }: { className?: string }) {
  const rows = [
    { id: "#TRX-2481", item: "Cuci Kering 3kg", time: "10:24", amount: "Rp 21.000", ok: true },
    { id: "#TRX-2480", item: "Setrika 5kg", time: "10:11", amount: "Rp 35.000", ok: true },
    { id: "#TRX-2479", item: "Cuci Komplit 4kg", time: "09:52", amount: "Rp 48.000", ok: false },
  ];

  const bars = [38, 52, 44, 68, 59, 82, 71];
  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Browser chrome — reinforces the "cukup dari browser" value prop */}
      <div className="glass overflow-hidden rounded-2xl shadow-[0_40px_120px_-40px_rgba(203,108,230,0.5)]">
        <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.035] px-4 py-3">
          <span className="flex gap-1.5">
            <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </span>
          <span className="ml-2 flex-1 truncate rounded-md bg-black/40 px-3 py-1.5 text-[11px] text-ink-muted">
            app.nectarpos.id/dashboard
          </span>
        </div>

        <div className="bg-[#0d0d12] p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] tracking-wide text-ink-muted uppercase">Penjualan hari ini</p>
              <p className="font-display text-2xl font-bold sm:text-[28px]">Rp 4.280.000</p>
            </div>
            <span className="rounded-full bg-[#4ade80]/15 px-2.5 py-1 text-[11px] font-semibold text-[#4ade80]">
              +18,2%
            </span>
          </div>

          {/* Sales bars.
              The bars are direct children of a fixed-height row: a percentage
              height only resolves against a parent with a definite height, so
              wrapping each bar in an auto-height column would collapse it to 0. */}
          <div className="mt-5">
            <div className="flex h-20 items-end gap-1.5 sm:gap-2">
              {bars.map((h, i) => (
                <div
                  key={days[i]}
                  className="flex-1 rounded-t-[3px]"
                  style={{
                    height: `${h}%`,
                    background:
                      i === bars.length - 2
                        ? "linear-gradient(180deg,#cb6ce6,#8e4fe0)"
                        : "rgba(255,255,255,0.13)",
                  }}
                />
              ))}
            </div>
            <div className="mt-1.5 flex gap-1.5 sm:gap-2">
              {days.map((d) => (
                <span key={d} className="flex-1 text-center text-[9px] text-ink-muted">
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Stat chips */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { k: "Transaksi", v: "128" },
              { k: "Outlet", v: "3" },
              { k: "Rata-rata", v: "Rp 33rb" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-2">
                <p className="text-[10px] text-ink-muted">{s.k}</p>
                <p className="font-display text-sm font-bold">{s.v}</p>
              </div>
            ))}
          </div>

          {/* Transaction list */}
          <ul className="mt-4 space-y-1.5">
            {rows.map((r) => (
              <li
                key={r.id}
                className="flex items-center gap-3 rounded-lg border border-white/6 bg-white/[0.02] px-3 py-2.5"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: r.ok ? "#4ade80" : "#fbbf24" }}
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[12px] font-medium">{r.item}</span>
                  <span className="block text-[10px] text-ink-muted">
                    {r.id} · {r.time}
                  </span>
                </span>
                <span className="shrink-0 text-[12px] font-semibold">{r.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating phone — multi-device story from PRD §5.4 */}
      {/* Only shown from lg up: below that the card is too narrow for the
          phone to overlap it without covering a transaction row. */}
      <div className="absolute -bottom-14 -left-12 hidden w-[140px] rotate-[-7deg] lg:block">
        <div className="glass rounded-[20px] p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
          <div className="rounded-[14px] bg-[#0d0d12] p-2.5">
            <p className="text-[8px] tracking-wide text-ink-muted uppercase">Kasir</p>
            <p className="font-display text-[15px] font-bold">Rp 21.000</p>
            <div className="mt-2 space-y-1">
              {["Cuci Kering 3kg", "Parfum Premium"].map((t) => (
                <div key={t} className="flex items-center justify-between rounded bg-white/[0.05] px-1.5 py-1">
                  <span className="truncate text-[7px] text-ink-muted">{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 rounded-md bg-brand py-1.5 text-center text-[8px] font-bold text-brand-ink">
              Bayar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
