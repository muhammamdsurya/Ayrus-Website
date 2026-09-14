"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scanReveal, startReveal } from "@/lib/reveal-observer";

/**
 * Drives every <Reveal> on the page from one place.
 *
 * Mounted once in the root layout. <Reveal> is server-rendered, so nothing
 * registers itself; this scans the document instead. React commits the whole
 * tree to the DOM before any effect runs, so the scan always sees the current
 * page's markup regardless of where this sits in the tree.
 *
 * Renders nothing.
 */
export function RevealController() {
  const pathname = usePathname();

  useEffect(() => startReveal(), []);

  // A client-side navigation swaps in markup the initial scan never saw.
  useEffect(() => {
    scanReveal();
  }, [pathname]);

  return null;
}
