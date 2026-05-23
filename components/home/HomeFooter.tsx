"use client";

import Link from "next/link";
import { useState } from "react";
import GHLModal from "@/components/GHLModal";

import {
  Sparkles,
  Wrench,
  ShieldCheck,
  Building2,
  Zap,
  BrushCleaning,
  ClipboardList,
  Phone,
  Mail,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function HomeFooter() {

  const [openModal, setOpenModal] =
    useState(false);

  const [selectedForm, setSelectedForm] =
    useState("");

  const openForm = (formUrl: string) => {
    setSelectedForm(formUrl);
    setOpenModal(true);
  };

  return (
    <footer className="tu-footer">

      <div className="tu-footer-main">

        {/* LEFT */}
        <div className="tu-footer-left">

          <div className="tu-footer-brand">

            <div className="footer-brand-clean">
              <img
                src="/images/branding/tanmiyat-logo.png"
                alt="Tanmiyat Al Ula"
                className="footer-brand-clean-logo"
              />
            </div>

            <div>
              <h2>Tanmiyat Al-Ula</h2>
              <p>PREMIUM PROPERTY CARE</p>
            </div>

          </div>

          <p className="tu-footer-description">
            Enterprise-grade maintenance operations for premium residential,
            hospitality, healthcare, and commercial properties across Saudi Arabia.
          </p>

          <div className="tu-ai-strip">

            <div className="tu-ai-icon">
              <Sparkles size={18} />
            </div>

            <div className="tu-ai-content">
              Ask about maintenance, inspections, or subscriptions
            </div>

            <button className="tu-ai-button"
            
   onClick={() => {

  const widget = document.querySelector(
    "chat-widget"
  ) as any;

  if (
    widget &&
    widget.shadowRoot
  ) {

    const launcher =
      widget.shadowRoot.querySelector(
        "button"
      );

    if (launcher) {
      launcher.click();
    }

  }

}}
            
            >
              Ask AI
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="tu-footer-right">

          {/* NAVIGATION */}
          <div className="tu-footer-column">

            <h4>Navigation</h4>

            <div className="tu-footer-links">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/plans">Plans</Link>
              <Link href="/calculator">Calculator</Link>
              <Link href="/contact">Contact</Link>
            </div>

          </div>

          {/* SERVICES */}
          <div className="tu-footer-column">

            <h4>Services</h4>

            <div className="tu-footer-services">

              <div className="tu-service-item">
                <Wrench size={16} />
                <span>MEP Maintenance</span>
              </div>

              <div className="tu-service-item">
                <ShieldCheck size={16} />
                <span>Preventive Inspections</span>
              </div>

              <div className="tu-service-item">
                <Building2 size={16} />
                <span>Facility Management</span>
              </div>

              <div className="tu-service-item">
                <Zap size={16} />
                <span>Emergency Response</span>
              </div>

              <div className="tu-service-item">
                <BrushCleaning size={16} />
                <span>Cleaning Operations</span>
              </div>

              <div className="tu-service-item">
                <ClipboardList size={16} />
                <span>Annual Contracts</span>
              </div>

            </div>

          </div>

          {/* SOCIALS */}
          <div className="tu-footer-column">

            <div className="tu-footer-column">

              <h4>Socials</h4>

              <div className="tu-footer-socials">

                <a
                  href="https://www.linkedin.com/company/tanmiyat-al-ula-for-operations-and-maintenance/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tu-social-item"
                >
                  <div className="tu-social-circle">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tu-social-item"
                >
                  <div className="tu-social-circle">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://x.com/SalesTanmiyat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tu-social-item"
                >
                  <div className="tu-social-circle">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </div>
                  <span>X / Twitter</span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61574882120660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tu-social-item"
                >
                  <div className="tu-social-circle">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </div>
                  <span>Facebook</span>
                </a>

                <a
                  href="https://wa.me/966561213606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tu-social-item"
                >
                  <div className="tu-social-circle">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <span>WhatsApp</span>
                </a>

              </div>

            </div>

          </div>

          {/* CONTACT */}
          <div className="tu-footer-column">

            <h4>Contact & Support</h4>

            <div className="tu-contact-stack">

              <div className="tu-contact-box">

                <div className="tu-contact-label">
                  24/7 Hotline
                </div>

                <div className="tu-contact-value">
                  <Phone size={16} />
                  <span>+966 56 121 3606</span>
                </div>

              </div>

              <div className="tu-contact-box">

                <div className="tu-contact-label">
                  Enterprise Support
                </div>

                <div className="tu-contact-value">
                  <Mail size={16} />
                  <span>sales@tanmiyat-ula.com.sa</span>
                </div>

              </div>

              <div
                className="tu-contact-box whatsapp"
                onClick={() =>
                  openForm(
                    "https://api.leadconnectorhq.com/widget/form/eu6wWqOpt1b0LJD0qYNm"
                  )
                }
                style={{ cursor: "pointer" }}
              >

                <div className="tu-contact-value">
                  <span>Get a Quote!</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="tu-footer-bottom">

        <p>
          © 2026 Tanmiyat Al-Ula. All rights reserved.
        </p>

        <div className="tu-footer-bottom-links">

          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <Link href="/terms-of-service">
            Terms of Service
          </Link>

        </div>

      </div>

      <GHLModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        formUrl={selectedForm}
      />

    </footer>
  );
}