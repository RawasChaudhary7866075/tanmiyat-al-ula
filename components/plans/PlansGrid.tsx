"use client";

import { useState } from "react";
import { plans } from "@/data/plans";
import GHLModal from "@/components/GHLModal";

export default function PlansGrid() {

  const [yearly, setYearly] = useState(false);

  const [openModal, setOpenModal] =
    useState(false);

  const [selectedForm, setSelectedForm] =
    useState("");

  const openForm = (formUrl: string) => {
    setSelectedForm(formUrl);
    setOpenModal(true);
  };

  return (
    <>
      <section className="billing-toggle">

        <span
          className={!yearly ? "toggle-label active" : "toggle-label"}
        >
          Monthly
        </span>

        <button
          type="button"
          className={yearly ? "toggle-track active" : "toggle-track"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setYearly((v) => !v);
          }}
          aria-label="Toggle billing period"
        >
          <div className="toggle-thumb"></div>
        </button>

        <span
          className={yearly ? "toggle-label active" : "toggle-label"}
        >
          Annual
        </span>

        <div className="save-badge">
          Save 15%
        </div>

      </section>

      <section className="plans-grid-section">

        <div className="plans-grid">

          {plans.map((plan) => {

            const price = yearly
              ? plan.yearlyPrice
              : plan.price;

            return (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? "plan-card featured-card"
                    : "plan-card"
                }
              >

                <div
                  className={`plan-stripe ${plan.badge}`}
                ></div>

                <div className="plan-header">

                  <span
                    className={`plan-badge ${plan.badge}-badge`}
                  >
                    {plan.name}
                  </span>

                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>

                </div>

                <div
                  className={
                    plan.featured
                      ? "plan-price featured-price"
                      : "plan-price"
                  }
                >

                  {plan.custom ? (

                    <div className="custom-price">
                      Custom
                    </div>

                  ) : (

                    <>
                      <div className="currency">
                        SAR
                      </div>

                      <div className="amount">
                        {price}
                      </div>

                      <div className="duration">
                        /MO
                      </div>
                    </>

                  )}

                </div>

                <div className="sqm-text">
                  {plan.sqm}
                </div>

                <div className="plan-features">

                  {plan.features.map((feature) => (

                    <div
                      className="feature"
                      key={feature}
                    >

                      <span className="feature-tick">
                        ✓
                      </span>

                      <span>
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <button
                  type="button"
                  className={
                    plan.featured
                      ? "plan-btn filled-btn"
                      : "plan-btn outline-btn"
                  }
                  onClick={(e) => {

                    e.preventDefault();
                    e.stopPropagation();

                    const buttonText =
                      plan.button
                        .trim()
                        .toLowerCase();

                    /* GET STARTED */

                    if (
                      buttonText.includes("get started")
                    ) {

                      openForm(
                        "https://api.leadconnectorhq.com/widget/form/FgPLgsAP1INEQ8EcJ1OE"
                      );

                    }

                    /* DEMO / QUOTE */

                    if (
                      buttonText.includes("demo") ||
                      buttonText.includes("quote")
                    ) {

                      openForm(
                        "https://api.leadconnectorhq.com/widget/form/eu6wWqOpt1b0LJD0qYNm"
                      );

                    }

                  }}
                >
                  {plan.button}
                </button>

              </div>
            );
          })}

        </div>

      </section>

      <GHLModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        formUrl={selectedForm}
      />
    </>
  );
}