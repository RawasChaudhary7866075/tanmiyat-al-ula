export default function Hero() {
  return (
    <section className="plans-hero">
      <div className="plans-hero-glow"></div>

      <div className="plans-hero-content">
        <div className="plans-chip">
          <div className="plans-chip-dot">
            <i></i>
          </div>

          <span>Riyadh&apos;s premium home maintenance</span>
        </div>

        <h1>
          Your home, always
          <br />
          <em>taken care of.</em>
        </h1>

        <p>
          Quarterly inspections. Instant emergency response.
          Every trade under one contract, no surprise bills,
          no chasing multiple companies.
        </p>

        <div className="plans-trust">
            <div className="plans-trust-item">

                <span className="trust-tick">
                  ✓
                </span>

                <span>
                  All 7 trades in one team
                </span>

              </div>

          <div className="plans-trust-item">
              <span className="trust-tick">
                    ✓
                  </span>

             Emergency response from 4 hrs
          </div>

          <div className="plans-trust-item">
            <span className="trust-tick">
                    ✓
                  </span>
             Photo report every visit
          </div>

          <div className="plans-trust-item">
            <span className="trust-tick">
                    ✓
                  </span>
             First callout hour free
          </div>
        </div>
      </div>
    </section>
  );
}