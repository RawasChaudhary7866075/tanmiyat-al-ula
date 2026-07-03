"use client";

import Script from "next/script";
import { useEffect } from "react";

function tryClickClose(root: Document | ShadowRoot): boolean {
  const btns = Array.from(root.querySelectorAll("button")) as HTMLElement[];

  // Pass 1 — explicit close markers (class / aria-label / text)
  for (const btn of btns) {
    const cls = (btn.className || "").toLowerCase();
    const label = (btn.getAttribute("aria-label") || "").toLowerCase();
    const txt = (btn.textContent || "").replace(/\s/g, "");
    if (
      cls.includes("close") || cls.includes("dismiss") ||
      label.includes("close") || label.includes("dismiss") ||
      ["×", "✕", "✖", "✗", "x", "X"].includes(txt)
    ) {
      btn.click();
      return true;
    }
  }

  // Pass 2 — any small visible button (SVG-icon close buttons have no text)
  // The main launcher is large (~55 px); close buttons are small (< 44 px).
  for (const btn of btns) {
    const rect = btn.getBoundingClientRect();
    if (rect.width > 4 && rect.width < 44 && rect.height > 4 && rect.height < 44) {
      btn.click();
      return true;
    }
  }

  return false;
}

function dismissGreeting(): boolean {
  try {
    const chatEl = document.querySelector("chat-widget") as any;
    if (!chatEl?.shadowRoot) return false;

    // 1 — shadow root directly
    if (tryClickClose(chatEl.shadowRoot)) return true;

    // 2 — iframes inside shadow root (same-origin only; cross-origin throws, caught below)
    const iframes = chatEl.shadowRoot.querySelectorAll("iframe") as NodeListOf<HTMLIFrameElement>;
    for (const iframe of iframes) {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc && tryClickClose(doc)) return true;
      } catch {
        // cross-origin iframe — skip silently
      }
    }
  } catch {}
  return false;
}

export default function GHLChatWidget() {
  useEffect(() => {
    let observer: MutationObserver | null = null;
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    let t4: ReturnType<typeof setTimeout>;
    let observerStop: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      const ghlWidget = document.getElementById("chat-widget-container") as HTMLElement;
      if (!ghlWidget) return;

      // Position the launcher
      ghlWidget.style.position = "fixed";
      ghlWidget.style.top = "50%";
      ghlWidget.style.marginTop = "5px";
      ghlWidget.style.bottom = "auto";
      ghlWidget.style.right = "18px";
      ghlWidget.style.zIndex = "99998";
      clearInterval(interval);

      // MutationObserver: dismiss popup as soon as it appears in the shadow DOM
      const chatEl = document.querySelector("chat-widget") as any;
      if (chatEl?.shadowRoot) {
        observer = new MutationObserver(() => {
          dismissGreeting();
        });
        observer.observe(chatEl.shadowRoot, { childList: true, subtree: true });

        // Stop observing after 30 s — popup window won't show after that
        observerStop = setTimeout(() => observer?.disconnect(), 30000);
      }

      // Timed fallback attempts in case the observer fires before the button renders
      t1 = setTimeout(dismissGreeting, 2000);
      t2 = setTimeout(dismissGreeting, 3500);
      t3 = setTimeout(dismissGreeting, 5500);
      t4 = setTimeout(dismissGreeting, 8000);
    }, 500);

    return () => {
      clearInterval(interval);
      observer?.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(observerStop);
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
