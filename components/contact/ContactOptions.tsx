"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactOptions() {
  return (
    <section className="contact-options-section">

      <div className="section-heading">

        <span>CONTACT OPTIONS</span>

        <h2>
          Choose the fastest way to reach us.
        </h2>

      </div>

      <div className="contact-options-grid">

        <div className="contact-option-card">

          <div className="contact-option-icon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>

          <h3>WhatsApp Support</h3>

          <p>
            Fastest way to contact our maintenance
            team for emergency requests and property support.
          </p>

          <a
            href="https://wa.me/966561213606"
            target="_blank"
            rel="noopener noreferrer"
            className="option-link"
          >
            Start Chat →
          </a>

        </div>

        <div className="contact-option-card">

          <div className="contact-option-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>

          <h3>Call Our Team</h3>

          <p>
            Speak directly with our property
            operations specialists.
          </p>

          <a
            href="tel:+966561213606"
            className="option-link"
          >
            Call Now →
          </a>

        </div>

        <div className="contact-option-card">

          <div className="contact-option-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>

          <h3>Commercial Inquiries</h3>

          <p>
            For partnerships, quotations,
            and multi-property support.
          </p>

          <a
            href="mailto:sales@tanmiyat-ula.com.sa"
            className="option-link"
          >
            Send Email →
          </a>

        </div>

      </div>

    </section>
  );
}