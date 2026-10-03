"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { nav, navSections, site, waLink, waMessages } from "@/lib/site";
import { ButtonLink, NavLink } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* Scroll-spy for the homepage anchor items. Only runs on "/" — on any other
     route the active item comes from the pathname instead. If the observer
     never fires, nothing is marked active, which degrades to the plain nav. */
  useEffect(() => {
    if (pathname !== "/") {
      setSection(null);
      return;
    }

    const els = navSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        // Topmost visible section wins, so the highlight follows reading order.
        const top = [...visible.entries()].sort((a, b) => a[1] - b[1])[0];
        setSection(top ? top[0] : null);
      },
      // Band across the middle of the viewport: a section counts as "current"
      // only once it actually occupies the reading area.
      { rootMargin: "-45% 0px -45% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Close on Escape and return focus to the toggle — no keyboard trap.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the mobile panel whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (item: (typeof nav)[number]) => {
    const match = "match" in item ? item.match : undefined;
    if (match && (pathname === match || pathname.startsWith(`${match}/`))) return true;
    const sec = "section" in item ? item.section : undefined;
    return Boolean(sec && pathname === "/" && section === sec);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      {/* Floating glass pill, detached from the top edge. */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-bg/70 pr-2 pl-4 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:pl-5">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-full py-2"
          aria-label={`${site.name}, beranda`}
        >
          <Logo />
          <span className="font-display text-[17px] font-bold tracking-tight">
            Ayrus<span className="text-brand">.</span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.href}>
                  {/* Active item gets a filled chip and heavier weight, so it is
                      not signalled by brightness alone. */}
                  <NavLink
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-10 items-center rounded-full px-4 text-[15px] transition-[background-color,color] duration-300 ease-spring ${
                      active
                        ? "bg-white/[0.08] font-semibold text-ink"
                        : "font-medium text-ink-muted hover:bg-white/[0.04] hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={waLink(waMessages.general)} external className="min-h-11 px-5">
            Hubungi Kami
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="relative grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white/[0.06] text-ink transition-colors duration-300 hover:bg-white/[0.1] lg:hidden"
        >
          {/* Two bars that rotate into an X rather than swapping icons. */}
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={`absolute top-1/2 left-0 -mt-px h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-spring ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 -mt-px h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-spring ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </span>
        </button>
      </div>

      <div id="menu-mobile" hidden={!open} className="mx-auto mt-2 max-w-6xl lg:hidden">
        <nav
          aria-label="Navigasi utama (mobile)"
          className="rounded-[var(--radius-shell)] border border-white/10 bg-bg/95 p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl"
        >
          <ul className="flex flex-col">
            {nav.map((item, i) => {
              const active = isActive(item);
              return (
                // .rise replays each time the panel is un-hidden, so links
                // cascade in one after another.
                <li key={item.href} className="rise" style={{ "--rise-delay": `${i * 45}ms` } as CSSProperties}>
                  <NavLink
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-13 items-center rounded-2xl px-4 font-display text-xl transition-colors duration-200 ${
                      active ? "bg-white/[0.07] font-semibold text-ink" : "font-medium text-ink-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ButtonLink
            href={waLink(waMessages.general)}
            external
            arrow
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            Hubungi Kami
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}

/**
 * Brand mark, cut from the supplied logo lockup (public/images/logo.png).
 * Decorative: the surrounding link already carries the accessible name, so an
 * empty alt keeps screen readers from announcing the company twice.
 */
function Logo() {
  return (
    <Image
      src="/images/logo-mark.png"
      alt=""
      aria-hidden="true"
      width={36}
      height={36}
      priority
      /* This mark is the LCP element on mobile. `priority` alone emits the
         preload but no priority hint, so the request still competes with the
         rest of the head; fetchPriority lifts it explicitly. */
      fetchPriority="high"
      className="h-9 w-9 shrink-0 object-contain"
    />
  );
}
