"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, navSections, site, waLink, waMessages } from "@/lib/site";
import { ButtonLink } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-white/8 bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-lg py-2"
          aria-label={`${site.name} — beranda`}
        >
          <Logo />
          <span className="font-display text-[17px] font-bold tracking-tight">
            Ayrus<span className="text-brand">.</span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-flex min-h-11 items-center rounded-full px-4 text-[15px] transition-colors duration-200 ${
                      active
                        ? "font-semibold text-ink"
                        : "font-medium text-ink-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    {/* Underline so the active item is not signalled by
                        brightness alone. */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand transition-opacity duration-200 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={waLink(waMessages.general)} external className="px-5">
            Konsultasi Gratis
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-ink transition-colors duration-200 hover:bg-white/8 lg:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-white/8 bg-bg/95 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Navigasi utama (mobile)" className="container-page py-4">
          <ul className="flex flex-col">
            {nav.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-12 items-center gap-2.5 border-b border-white/6 text-[15px] transition-colors duration-200 ${
                      active ? "font-semibold text-ink" : "font-medium text-ink-muted hover:text-ink"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-4 w-0.5 rounded-full bg-brand transition-opacity duration-200 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonLink
            href={waLink(waMessages.general)}
            external
            className="mt-5 w-full"
            onClick={() => setOpen(false)}
          >
            Konsultasi Gratis
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
      className="h-9 w-9 shrink-0 object-contain"
    />
  );
}
