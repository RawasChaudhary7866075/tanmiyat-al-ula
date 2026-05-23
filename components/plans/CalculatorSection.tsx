"use client";

import { useState } from "react";

export default function CalculatorSection() {

  const [sqm, setSqm] = useState("");

  const [result, setResult] = useState<null | {
    plan: string;
    monthly: number;
    annual: number;
    visits: string;
    response: string;
  }>(null);

  const calculatePlan = () => {

    const value = Number(sqm);

    if (!value) return;

    if (value <= 200) {

      setResult({
        plan: "Bronze Plan",
        monthly: 350,
        annual: 4200,
        visits: "2 visits",
        response: "24 hours",
      });

    } else if (value <= 800) {

      setResult({
        plan: "Silver Plan",
        monthly: 700,
        annual: 8400,
        visits: "4 visits",
        response: "12 hours",
      });

    } else if (value <= 2000) {

      setResult({
        plan: "Gold Plan",
        monthly: 1500,
        annual: 18000,
        visits: "4 visits",
        response: "4 hours",
      });

    } else {

      setResult({
        plan: "Platinum Plan",
        monthly: 5000,
        annual: 60000,
        visits: "6 visits",
        response: "2 hours",
      });

    }
  };

  return (
    <section className="calculator-section">

      <div className="calculator-wrap">

        <div className="calculator-top">

          <h2 className="calculator-heading">
            Find your plan instantly
          </h2>

          <p className="calculator-subtext">
            Enter your property area and get your
            recommended plan instantly.
          </p>

        </div>

        <div className="calculator-body">

          <div className="calculator-row">

            <div className="calculator-field">

              <label>
                Total area (sqm)
              </label>

              <input
                type="number"
                placeholder="e.g. 650"
                value={sqm}
                onChange={(e) =>
                  setSqm(e.target.value)
                }
              />

            </div>

            <div className="calculator-field">

              <label>
                Property type
              </label>

              <select>

                <option>
                  Villa / residential
                </option>

                <option>
                  Apartment
                </option>

                <option>
                  Commercial
                </option>

                <option>
                  Multi-unit portfolio
                </option>

              </select>

            </div>

          </div>

          <button
            className="calculator-btn"
            onClick={calculatePlan}
          >
            Calculate my plan →
          </button>

        </div>

        {result && (

          <div className="calculator-result">

            <p className="result-label">
              Your recommended plan
            </p>

            <h3 className="result-price">
              SAR {result.monthly}
            </h3>

            <p className="result-plan">
              {result.plan} · per month
            </p>

            <div className="result-grid">

              <div className="result-item">

                <p className="result-item-label">
                  Annual (ex-VAT)
                </p>

                <p className="result-item-value">
                  SAR {result.annual}
                </p>

              </div>

              <div className="result-item">

                <p className="result-item-label">
                  Annual with VAT
                </p>

                <p className="result-item-value">
                  SAR {Math.round(result.annual * 1.15)}
                </p>

              </div>

              <div className="result-item">

                <p className="result-item-label">
                  PPM visits / year
                </p>

                <p className="result-item-value">
                  {result.visits}
                </p>

              </div>

              <div className="result-item">

                <p className="result-item-label">
                  Emergency response
                </p>

                <p className="result-item-value">
                  {result.response}
                </p>

              </div>

            </div>

            <a
              href="https://wa.me/966561213606"
              className="calculator-cta"
            >
              Subscribe via WhatsApp →
            </a>

          </div>

        )}

      </div>

    </section>
  );
}