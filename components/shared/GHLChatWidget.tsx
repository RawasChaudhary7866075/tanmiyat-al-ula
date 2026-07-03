"use client";

import Script from "next/script";
import { useEffect } from "react";

function tryDismiss() {
  try {
    const chatEl = document.querySelector("chat-widget") as any;
    if (!chatEl?.shadowRoot) return;
    const btns = Array.from(
      chatEl.shadowRoot.querySelectorAll("button")
    ) as HTMLElement[];

    for (const btn of btns) {
      const cls = (btn.className || "").toLowerCase();
      const lbl = (btn.getAttribute("aria-label") || "").toLowerCase();
      const txt = (btn.textContent || "").replace(/\s/g, "");
      if (
        cls.includes("close") ||
        cls.includes("dismiss") ||
        lbl.includes("close") ||
        lbl.includes("dismiss") ||
        ["×", "✕", "✖", "✗", "x", "X"].includes(txt)
      ) {
        btn.click();
        return;
      }
    }

    // Fallback: click any small button (SVG-icon close buttons have no text)
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
    let tReveal: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      const w = document.getElementById("chat-widget-container") as HTMLElement;
      if (!w) return;
      clearInterval(interval);

      // Clip the widget to show only the bottom 80px (the launcher button area).
      // The greeting popup extends upward above the launcher, so it gets hidden.
      // We do NOT override position/top/bottom — let GHL's own CSS keep the
      // widget anchored to the bottom-right corner of the screen.
      w.style.clipPath = "inset(calc(100% - 80px) 0 0 0)";

      // Try to click the popup's close button while it's hidden
      t1 = setTimeout(tryDismiss, 2000);
      t2 = setTimeout(tryDismiss, 4000);

      // After 5s the popup should be gone — fade the clip away
      tReveal = setTimeout(() => {
        w.style.transition = "clip-path 0.4s ease";
        w.style.clipPath = "none";
      }, 5000);
    }, 300);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
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
