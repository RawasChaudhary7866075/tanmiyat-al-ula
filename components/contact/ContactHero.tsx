"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactHero() {
  return (
    <section className="contact-hero">

      <div className="contact-hero-overlay"></div>

      <div className="contact-hero-container">

        <div className="contact-hero-content">

          <span className="contact-label">
            CONTACT TANMIYAT
          </span>

          <h1>
            Let’s take care <br />
            of your property.
          </h1>

          <p>
            Premium preventive maintenance and emergency
            support across Riyadh.
          </p>

          <div className="contact-hero-buttons">

            <a
              href="https://wa.me/966561213606"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+966561213606"
              className="glass-btn"
            >
              Call Our Team
            </a>

          </div>

        </div>

        <div className="contact-hero-card">

          <a
            href="https://maps.google.com/?q=Riyadh Saudi Arabia"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-contact-item"
          >
            <div className="hero-contact-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <div>
              <span>Location</span>
              <h4>Riyadh, Saudi Arabia</h4>
            </div>
          </a>

          <a
            href="tel:+966561213606"
            className="hero-contact-item"
          >
            <div className="hero-contact-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>

            <div>
              <span>Phone</span>
              <h4>+966 56 121 3606</h4>
            </div>
          </a>

          <a
            href="mailto:sales@tanmiyat-ula.com.sa"
            className="hero-contact-item"
          >
            <div className="hero-contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div>
              <span>Email</span>
              <h4>sales@tanmiyat-ula.com.sa</h4>
            </div>
          </a>

          <div className="hero-contact-item">
            <div className="hero-contact-icon">
              <FontAwesomeIcon icon={faClock} />
            </div>

            <div>
              <span>Availability</span>
              <h4>24/7 Emergency Support</h4>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}