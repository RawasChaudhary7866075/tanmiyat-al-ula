"use client";

import { useEffect, useState } from "react";

export default function GHLChatbot() {

  const [showMessage, setShowMessage] =
    useState(true);

  useEffect(() => {

    const script = document.createElement("script");

    

    script.async = true;

    document.body.appendChild(script);

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
    };

  }, []);

  return (
    <>

      {/* WELCOME MESSAGE */}

      {showMessage && (

        <div className="ghl-chatbot-message">

          👋 Welcome to Tanmiyat Al-Ula.
          <br />
          Need help with maintenance,
          pricing, or property support?

        <div className="ghl-chatbot-message-tail"></div>

        </div>

      )}

      {/* CHATBOT CONTAINER */}

      <div id="ghl-chatbot-wrapper"></div>

    </>
  );
}