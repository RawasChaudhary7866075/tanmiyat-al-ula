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

        ghlWidget.style.bottom = "95px";
        ghlWidget.style.right = "24px";
        ghlWidget.style.zIndex = "9999";

        clearInterval(interval);

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