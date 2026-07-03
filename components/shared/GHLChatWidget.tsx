"use client";

import Script from "next/script";
import { useEffect } from "react";

// Try to programmatically click the greeting popup's close button.
// Works even while the container is visually clipped (clip-path doesn't
// block JS .click() calls on shadow-DOM elements).
function tryDismiss() {
  try {
    const chatEl = document.querySelector("chat-widget") as any;
    if (!chatEl?.shadowRoot) return;

    const btns = Array.from(
      chatEl.shadowRoot.querySelectorAll("button")
    ) as HTMLElement[];

    // Pass 1 — explicit close markers via class / aria-label / text
    for (const btn of btns) {
      const cls = (btn.className || "").toLowerCase();
      const lbl = (btn.getAttribute("aria-label") || "").toLowerCase();
      const txt = (btn.textContent || "").replace(/\s/g, "");
      if (
        cls.includes("close") || cls.includes("dismiss") ||
        lbl.includes("close") || lbl.includes("dismiss") ||
        ["×", "✕", "✖", "✗", "x", "X"].includes(txt)
      ) {
        btn.click();
        return;
      }
    }

    // Pass 2 — any small visible button (SVG-icon close buttons carry no text)
    // Launcher is ~55 px; greeting close button is typically < 40 px.
    for (const btn of btns) {
      const r = btn.getBoundingClientRect();
      if (r.width > 4 && r.width < 44 && r.height > 4 && r.height < 44) {
        btn.click();
        return;
      }
    }
  } catch {}
}

export default function GHLChatWidget() {
  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    let tReveal: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      const w = document.getElementById("chat-widget-container") as HTMLElement;
      if (!w) return;
      clearInterval(interval);

      // ── Position ──────────────────────────────────────────────────────────
      w.style.position = "fixed";
      w.style.top = "50%";
      w.style.marginTop = "5px";
      w.style.bottom = "auto";
      w.style.right = "18px";
      w.style.zIndex = "99998";

      // ── Clip-path trick ────────────────────────────────────────────────────
      // The launcher button sits at the BOTTOM of the widget container (~65 px).
      // The greeting popup floats ABOVE it. Clipping to the bottom 80 px keeps
      // the launcher visible and interactive while hiding the popup entirely.
      w.style.clipPath = "inset(calc(100% - 80px) 0 0 0)";

      // ── Programmatic dismiss attempts (work even while clipped) ────────────
      t1 = setTimeout(tryDismiss, 2000);
      t2 = setTimeout(tryDismiss, 4000);
      t3 = setTimeout(tryDismiss, 6000);

      // ── Reveal at 7 s ─────────────────────────────────────────────────────
      // By now the popup has either auto-dismissed or been clicked away.
      // Fade the clip off smoothly so the full launcher area appears.
      tReveal = setTimeout(() => {
        w.style.transition = "clip-path 0.4s ease";
        w.style.clipPath = "";
      }, 7000);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tReveal);
    };
  }, []);

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="693743a410bf46022dbcedbe"
      strategy="afterInteractive"
    />
  );
}
