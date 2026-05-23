export default function HomeWhy() {
  return (
    <section className="home-why">

      <div className="home-why-container">

        {/* LEFT */}

        <div className="home-why-left">

          <div className="section-label">
            Why Premium Properties Choose Us
          </div>

          <h2>
            Complete care for
            <br />
            every system in
            <br />
            your property.
          </h2>

          <p>
            From preventive maintenance to specialist operational
            support, our teams ensure your property runs smoothly,
            efficiently, and professionally every single day.
          </p>

          <button className="why-btn">
            Explore All Services
          </button>

        </div>

        {/* RIGHT */}

        <div className="home-why-grid">

          <div className="why-card">

            <div className="why-card-image">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop"
                alt="HVAC"
              />
            </div>

            <div className="why-card-content">
              <h3>HVAC Systems</h3>
              <p>
                Cooling, ventilation & performance maintenance.
              </p>
            </div>

          </div>

          <div className="why-card">

            <div className="why-card-image">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                alt="Electrical"
              />
            </div>

            <div className="why-card-content">
              <h3>Electrical Maintenance</h3>
              <p>
                Power systems, lighting & operational safety.
              </p>
            </div>

          </div>

          <div className="why-card">

            <div className="why-card-image">
              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1200&auto=format&fit=crop"
                alt="Plumbing"
              />
            </div>

            <div className="why-card-content">
              <h3>Plumbing Systems</h3>
              <p>
                Water systems, leak prevention & maintenance.
              </p>
            </div>

          </div>

          <div className="why-card">

            <div className="why-card-image">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                alt="Smart Systems"
              />
            </div>

            <div className="why-card-content">
              <h3>Smart Systems</h3>
              <p>
                CCTV, access control & integrated smart operations.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}