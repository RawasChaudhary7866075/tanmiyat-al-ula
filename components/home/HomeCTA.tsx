"use client";

import { useState } from "react";
import GHLModal from "@/components/GHLModal";

export default function HomeCTA() {

  const [openModal, setOpenModal] =
    useState(false);

  const [selectedForm, setSelectedForm] =
    useState("");

  const openForm = (formUrl: string) => {
    setSelectedForm(formUrl);
    setOpenModal(true);
  };

  return (
    <section className="home-cta">

      <div className="home-cta-overlay" />

      <div className="home-cta-container">

        <div className="home-cta-content">

          <div className="section-label">
            Premium Property Protection
          </div>

          <h2>
            Protect your property
            before problems become
            expensive.
          </h2>

          <p>
            From preventive inspections to rapid emergency response,
            Tanmiyat delivers enterprise-grade maintenance operations
            designed for modern Saudi properties.
          </p>

          <div className="home-cta-actions">

            <a href="/plans" className="home-primary-btn">
              Explore Plans
            </a>

            <button
              type="button"
              className="home-secondary-btn"
              style={{ cursor: "pointer" }}
              onClick={() =>
                openForm(
                  "https://api.leadconnectorhq.com/widget/form/FgPLgsAP1INEQ8EcJ1OE"
                )
              }
            >
              Speak With Experts
            </button>

          </div>

        </div>

      </div>

      <GHLModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        formUrl={selectedForm}
      />

    </section>
  );
}