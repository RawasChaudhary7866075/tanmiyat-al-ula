"use client";

import Link from "next/link";
import { useState } from "react";
import GHLModal from "@/components/GHLModal";

export default function ServicesBottomCTA() {

  const [openModal, setOpenModal] =
    useState(false);

  const [selectedForm, setSelectedForm] =
    useState("");

  const openForm = (formUrl: string) => {
    setSelectedForm(formUrl);
    setOpenModal(true);
  };

  return (
    <section className="services-bottom-cta">
      <div className="container">
        <div className="services-bottom-cta-inner">

          <div className="services-bottom-cta-left">

            <div className="services-bottom-support-icon">
              <i className="fa-solid fa-headset"></i>
            </div>

            <div className="services-bottom-cta-content">
              <span>Not sure what you need?</span>

              <p>
                Our experts will assess your property and recommend
                the right services for your building, compound,
                hospitality space, or commercial facility.
              </p>
            </div>

          </div>

          <div className="services-bottom-actions">

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openForm(
                  "https://api.leadconnectorhq.com/widget/form/FgPLgsAP1INEQ8EcJ1OE"
                );
              }}
            >
              Talk To Our Expert
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            <Link href="/plans">
              View Membership Plans
              <i className="fa-solid fa-arrow-right"></i>
            </Link>

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