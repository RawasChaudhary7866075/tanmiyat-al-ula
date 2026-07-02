"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function GHLChatWidget() {

  useEffect(() => {

    const interval = setInterval(() => {

      const ghlWidget = document.getElementById(
        "chat-widget-container"
      ) as HTMLElement;

      if (ghlWidget) {

        ghlWidget.style.position = "fixed";
        ghlWidget.style.top = "50%";
        ghlWidget.style.marginTop = "5px";
        ghlWidget.style.bottom = "auto";
        ghlWidget.style.right = "18px";
        ghlWidget.style.zIndex = "99998";

        clearInterval(interval);

        // Auto-dismiss the greeting popup after 3 seconds
        setTimeout(() => {
          try {
            const chatEl = document.querySelector("chat-widget") as any;
            if (chatEl?.shadowRoot) {
              const buttons = chatEl.shadowRoot.querySelectorAll(
                "button"
              ) as NodeListOf<HTMLElement>;

              for (const btn of buttons) {
                const cls = (btn.className || "").toLowerCase();
                const label = (btn.getAttribute("aria-label") || "").toLowerCase();
                const text = (btn.textContent || "").trim();

                if (
                  cls.includes("close") ||
                  cls.includes("dismiss") ||
                  label.includes("close") ||
                  text === "×" ||
                  text === "✕" ||
                  text === "✖" ||
                  text === "x" ||
                  text === "X"
                ) {
                  btn.click();
                  break;
                }
              }
            }
          } catch {}
        }, 3000);

      }

    }, 1000);

    return () => clearInterval(interval);

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
