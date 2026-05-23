"use client";

import Link from "next/link";
import HomeNavbar from "../home/HomeNavbar";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <HomeNavbar />

      <div className="services-hero-overlay" />

      <div className="container">
        <div className="services-hero-content">

          <div className="services-hero-left">

            <span className="services-eyebrow">
              OUR SERVICES
            </span>

            <h1>
              Every system in
              <br />
              your property.
              <br />
              <span>Handled by one expert team.</span>
            </h1>

            <p>
              From preventive maintenance to emergency response, Tanmiyat
              Al-Ula delivers complete property care across Riyadh with
              precision, reliability, and professionalism.
            </p>

            <div className="services-hero-icons">

              <div className="services-hero-icon-item">
                <div className="services-hero-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>

                <span>
                  Licensed &<br />Certified Experts
                </span>
              </div>

              <div className="services-hero-icon-item">
                <div className="services-hero-icon">
                  <i className="fas fa-bolt"></i>
                </div>

                <span>
                  Fast & Reliable<br />Response
                </span>
              </div>

              <div className="services-hero-icon-item">
                <div className="services-hero-icon">
                  <i className="fas fa-tools"></i>
                </div>

                <span>
                  Advanced Tools<br />& Technology
                </span>
              </div>

              <div className="services-hero-icon-item">
                <div className="services-hero-icon">
                  <i className="fas fa-clipboard-list"></i>
                </div>

                <span>
                  Transparent<br />Reporting
                </span>
              </div>

            </div>

          </div>

          <div className="services-emergency-card">

            <div className="services-emergency-top">

              <div className="services-emergency-icon">
                <i className="fas fa-clock"></i>
              </div>

              <div className="services-emergency-content">

                <h3>
                  Need Immediate Assistance?
                </h3>

                <p>
                  Our team is ready to help with any urgent issue.
                </p>

              </div>

            </div>

            <a
              href="https://app.getmaintainx.com/request-portal/09eddadb-48ae-451b-b87b-9788072c6fe8"
              target="_blank"
              rel="noopener noreferrer"
              className="services-emergency-btn"
            >
              Request Emergency Service
              <i className="fas fa-arrow-right"></i>
            </a>

            <span className="services-emergency-availability">
              Available 24/7 across Riyadh
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}