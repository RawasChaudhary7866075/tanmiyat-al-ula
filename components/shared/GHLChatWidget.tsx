"use client";

import Script from "next/script";
import { useEffect } from "react";

function isCloseBtn(btn: HTMLElement): boolean {
  const cls = (btn.className || "").toLowerCase();
  const label = (btn.getAttribute("aria-label") || "").toLowerCase();
  const txt = (btn.textContent || "").trim();
  return (
    cls.includes("close") ||
    cls.includes("dismiss") ||
    label.includes("close") ||
    label.includes("dismiss") ||
    txt === "×" || txt === "✕" || txt === "✖" || txt === "x" || txt === "X"
  );
}

function dismissGreeting() {
  try {
    const chatEl = document.querySelector("chat-widget") as any;
    if (!chatEl) return;

    // 1 — buttons directly in shadow root
    if (chatEl.shadowRoot) {
      const btns = chatEl.shadowRoot.querySelectorAll("button") as NodeListOf<HTMLElement>;
      for (const btn of btns) {
        if (isCloseBtn(btn)) { btn.click(); return; }
      }

      // 2 — buttons inside iframes within the shadow root
      const iframes = chatEl.shadowRoot.querySelectorAll("iframe") as NodeListOf<HTMLIFrameElement>;
      for (const iframe of iframes) {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          if (!doc) continue;
          const iframeBtns = doc.querySelectorAll("button") as NodeListOf<HTMLElement>;
          for (const btn of iframeBtns) {
            if (isCloseBtn(btn)) { btn.click(); return; }
          }
        } catch {}
      }

      // 3 — CSS injection fallback: hide common GHL greeting popup containers
      if (!chatEl.shadowRoot.getElementById("tu-hide-greeting")) {
        const style = document.createElement("style");
        style.id = "tu-hide-greeting";
        style.textContent = `
          [class*="greeting"],[class*="welcome"],[class*="preview"],
          [class*="bubble-message"],[class*="notification"],[class*="start-chat"],
          [class*="chat-preview"],[class*="prompt-message"] {
            display: none !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        `;
        chatEl.shadowRoot.appendChild(style);
      }
    }
  } catch {}
}

export default function GHLChatWidget() {
  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      const ghlWidget = document.getElementById("chat-widget-container") as HTMLElement;
      if (ghlWidget) {
        ghlWidget.style.position = "fixed";
        ghlWidget.style.top = "50%";
        ghlWidget.style.marginTop = "5px";
        ghlWidget.style.bottom = "auto";
        ghlWidget.style.right = "18px";
        ghlWidget.style.zIndex = "99998";
        clearInterval(interval);

        // Try at 2 s, 3.5 s, and 6 s — covers slow loaders and async renders
        t1 = setTimeout(dismissGreeting, 2000);
        t2 = setTimeout(dismissGreeting, 3500);
        t3 = setTimeout(dismissGreeting, 6000);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
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
