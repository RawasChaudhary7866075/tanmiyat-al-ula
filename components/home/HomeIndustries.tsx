export default function HomeIndustries() {
  return (
    <section className="home-industries">

      <div className="home-industries-container">

        {/* TOP */}

        <div className="home-industries-heading">

          <div className="section-label">
            Industries We Serve
          </div>

          <h2>
            Trusted across
            premium environments.
          </h2>

          <p>
            We provide operational maintenance solutions for
            high-value residential, commercial, and enterprise properties.
          </p>

        </div>

        {/* GRID */}

        <div className="industries-grid">

          <div className="industry-card large">

            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop"
              alt="Hospitality"
            />

            <div className="industry-overlay" />

            <div className="industry-content">

              <span>Hospitality</span>

              <h3>
                Hotels & Luxury
                Resorts
              </h3>

            </div>

          </div>

          <div className="industry-card">

            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="Commercial"
            />

            <div className="industry-overlay" />

            <div className="industry-content">

              <span>Commercial</span>

              <h3>
                Office Towers
              </h3>

            </div>

          </div>

          <div className="industry-card">

            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
              alt="Residential"
            />

            <div className="industry-overlay" />

            <div className="industry-content">

              <span>Residential</span>

              <h3>
                Luxury Compounds
              </h3>

            </div>

          </div>

          <div className="industry-card">

            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop"
              alt="Healthcare"
            />

            <div className="industry-overlay" />

            <div className="industry-content">

              <span>Healthcare</span>

              <h3>
                Medical Facilities
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}