"use client";

import { useState } from "react";

const faqs = [
  {
    question:
      "What is a PPM visit and what does it cover?",

    answer:
      "A Planned Preventive Maintenance visit is a scheduled inspection where our technician checks all key systems including AC filters, electrical panels, plumbing, and all covered trades. Each visit includes a detailed photo report and recommendations.",
  },

  {
    question:
      "What happens when something breaks between visits?",

    answer:
      "You submit a reactive callout via WhatsApp or your portal. We dispatch a technician within your plan’s response time. Your first hour on-site is free. Additional hours are billed at published hourly rates.",
  },

  {
    question:
      "Are materials and spare parts included?",

    answer:
      "PPM visits include consumables and minor parts up to your plan’s cap. Reactive callouts include smaller emergency parts up to a lower cap. Major repairs are always quoted before ordering.",
  },

  {
    question:
      "Can I cancel or upgrade my plan?",

    answer:
      "Monthly plans can be cancelled with notice. Annual plans can be upgraded at any time with prorated pricing adjustments.",
  },

  {
    question:
      "How do I submit requests or track jobs?",

    answer:
      "You can submit requests through WhatsApp or through your MaintainX client portal. Every service visit includes status updates and service history.",
  },

  {
    question:
      "Are prices inclusive of VAT?",

    answer:
      "All listed prices exclude Saudi VAT (15%). The calculator displays both ex-VAT and VAT-inclusive totals.",
  },
];

export default function FAQSection() {

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <section className="faq-section">

      <div className="faq-inner">

        <div className="faq-header">

          <span className="faq-eyebrow">
            Questions
          </span>

          <h2 className="faq-heading">
            Frequently asked
          </h2>

        </div>

        {faqs.map((faq, index) => {

          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={
                isOpen
                  ? "faq-item open"
                  : "faq-item"
              }
            >

              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(
                    isOpen ? null : index
                  )
                }
              >

                <span>
                  {faq.question}
                </span>

                <div className="faq-icon">
                  +
                </div>

              </button>

              <div className="faq-answer">

                <p>
                  {faq.answer}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}