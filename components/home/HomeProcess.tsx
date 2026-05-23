"use client";

import { useState } from "react";
import GHLModal from "@/components/GHLModal";

export default function HomeProcess() {

  const [openModal, setOpenModal] =
    useState(false);

  const [selectedForm, setSelectedForm] =
    useState("");

  const openForm = (formUrl: string) => {
    setSelectedForm(formUrl);
    setOpenModal(true);
  };

  return (
    <section className="home-process">

      <div className="home-process-container">

        {/* LEFT */}

        <div className="home-process-left">

          <div className="home-process-left-inner">

            <div className="section-label">
              How It Works
            </div>

            <h2>
              Simple process.
              <br />
              Seamless care.
            </h2>

            <p>
              We handle everything, so your property stays operational,
              protected, and professionally maintained.
            </p>

            <button
              className="process-btn"
              onClick={() =>
                openForm(
                  "https://api.leadconnectorhq.com/widget/form/FgPLgsAP1INEQ8EcJ1OE"
                )
              }
            >
              Get Started
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="home-process-steps">

          <div className="process-step">

            <div className="process-icon">
              01
            </div>

            <h3>Property Assessment</h3>

            <p>
              We assess your systems, operational needs,
              and maintenance priorities.
            </p>

          </div>

          <div className="process-step">

            <div className="process-icon">
              02
            </div>

            <h3>Custom Planning</h3>

            <p>
              Our team builds a preventive maintenance
              strategy tailored to your property.
            </p>

          </div>

          <div className="process-step">

            <div className="process-icon">
              03
            </div>

            <h3>Scheduled Maintenance</h3>

            <p>
              Regular inspections and servicing keep
              operations running smoothly.
            </p>

          </div>

          <div className="process-step">

            <div className="process-icon">
              04
            </div>

            <h3>Rapid Response Support</h3>

            <p>
              Emergency response teams are always
              available when urgent situations arise.
            </p>

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