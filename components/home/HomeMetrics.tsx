"use client";

import Link from "next/link";

export default function HomeMetrics() {

  return (
    <section className="home-metrics">

      <div className="home-metrics-container">

        {/* LEFT */}

        <div className="home-metrics-left">

          <div className="section-label">
            Why Prevention Matters
          </div>

          <h2>
            Small today.
            <br />
            Expensive tomorrow.
          </h2>

          <p>
            Preventive maintenance protects your property,
            your comfort, and your long-term operational costs.
          </p>

          <Link href="/services">
            <button className="metrics-btn">
              See How We Help You Save
            </button>
          </Link>

        </div>

        {/* RIGHT */}

        <div className="home-metrics-grid">

          <div className="metric-card">

            <div className="metric-icon">
              ❄
            </div>

            <h3>SAR 40</h3>

            <span>
              Filter replacement can prevent
            </span>

            <h4>SAR 4,000</h4>

            <p>Compressor damage</p>

          </div>

          <div className="metric-card">

            <div className="metric-icon">
              💧
            </div>

            <h3>SAR 150</h3>

            <span>
              Pipe repair can prevent
            </span>

            <h4>SAR 7,000</h4>

            <p>Water damage</p>

          </div>

          <div className="metric-card">

            <div className="metric-icon">
              ⚡
            </div>

            <h3>SAR 200</h3>

            <span>
              Electrical checks can prevent
            </span>

            <h4>SAR 6,000+</h4>

            <p>Electrical hazards</p>

          </div>

        </div>

      </div>

    </section>
  );
}