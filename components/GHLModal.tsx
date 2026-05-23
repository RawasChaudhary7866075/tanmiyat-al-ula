"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface GHLModalProps {
  isOpen: boolean;
  onClose: () => void;
  formUrl: string;
}

export default function GHLModal({
  isOpen,
  onClose,
  formUrl,
}: GHLModalProps) {

  const [submitted, setSubmitted] =
    useState(false);

  const iframeLoadCount =
    useRef(0);

  const scrollPosition =
    useRef(0);

  /* ─────────────────────────────
     LOCK BODY SCROLL
  ───────────────────────────── */

  useEffect(() => {

    if (isOpen) {

      scrollPosition.current =
        window.scrollY;

      document.body.style.overflow =
        "hidden";

    } else {

      document.body.style.overflow =
        "";

      window.scrollTo({
        top: scrollPosition.current,
        behavior: "instant" as ScrollBehavior,
      });

    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [isOpen]);

  /* ─────────────────────────────
     RESET MODAL STATE
  ───────────────────────────── */

  useEffect(() => {

    if (isOpen) {

      setSubmitted(false);

      iframeLoadCount.current = 0;

    }

  }, [isOpen]);

  /* ─────────────────────────────
     ESC KEY SUPPORT
  ───────────────────────────── */

  useEffect(() => {

    const handleKey = (
      e: KeyboardEvent
    ) => {

      if (!isOpen) return;

      if (e.key === "Escape") {
        handleClose();
      }

    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );

  }, [isOpen]);

  /* ─────────────────────────────
     FORM SUBMIT DETECTION
  ───────────────────────────── */

  useEffect(() => {

    const handle = (
      e: MessageEvent
    ) => {

      try {

        const raw = e.data;

        const obj =
          typeof raw === "string"
            ? safeParse(raw)
            : raw;

        if (matchesSubmit(obj)) {
          setSubmitted(true);
        }

      } catch {}

    };

    window.addEventListener(
      "message",
      handle
    );

    return () =>
      window.removeEventListener(
        "message",
        handle
      );

  }, []);

  /* ─────────────────────────────
     IFRAME LOAD FALLBACK
  ───────────────────────────── */

  const handleIframeLoad = () => {

    iframeLoadCount.current += 1;

    if (
      iframeLoadCount.current > 1
    ) {
      setSubmitted(true);
    }

  };

  /* ─────────────────────────────
     CLEAN CLOSE
  ───────────────────────────── */

  const handleClose = () => {

    document.body.style.overflow =
      "";

    window.scrollTo({
      top: scrollPosition.current,
      behavior: "instant" as ScrollBehavior,
    });

    onClose();

  };

  if (!isOpen) return null;

  return (

    <div
      className="ghl-modal-overlay"
      onClick={(e) => {

        if (
          e.target === e.currentTarget
        ) {
          handleClose();
        }

      }}
    >

      {submitted ? (

        /* ═══════════════════════
           THANK YOU CARD
        ═══════════════════════ */

        <div className="ghl-thankyou-card">

          <div className="ghl-thankyou-icon">
            <CheckCircle2
              size={44}
              strokeWidth={1.3}
            />
          </div>

          <p className="ghl-thankyou-eyebrow">
            Consultation Request
          </p>

          <h2 className="ghl-thankyou-title">
            You're all set.
          </h2>

          <p className="ghl-thankyou-message">
            Your request has been
            received. A member of the
            Tanmiyat Al-Ula team will
            contact you shortly.
          </p>

          <button
            className="ghl-thankyou-btn"
            onClick={handleClose}
          >
            Close
          </button>

        </div>

      ) : (

        /* ═══════════════════════
           FORM
        ═══════════════════════ */

        <div className="ghl-modal-container">

          <button
            className="ghl-close-btn"
            onClick={handleClose}
          >
            ×
          </button>

          <iframe
            src={`${formUrl}?v=${Date.now()}`}
            className="ghl-iframe"
            allow="camera; microphone; autoplay; encrypted-media;"
            onLoad={handleIframeLoad}
          />

        </div>

      )}

    </div>

  );

}

/* ─────────────────────────────
   HELPERS
───────────────────────────── */

function safeParse(s: string): unknown {

  try {
    return JSON.parse(s);
  } catch {
    return {};
  }

}

function matchesSubmit(
  d: unknown
): boolean {

  if (
    !d ||
    typeof d !== "object"
  ) return false;

  const o =
    d as Record<string, unknown>;

  return (
    o.event === "form-submitted" ||
    o.event === "submit" ||
    o.type === "form-submit" ||
    o.type === "form-submitted" ||
    o.type === "FORM_SUBMITTED" ||
    o.type === "GTM_FORM_SUBMIT" ||
    o.type === "lc-widget-form" ||
    o.message === "form-submitted"
  );

}