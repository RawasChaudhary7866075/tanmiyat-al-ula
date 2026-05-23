import Link from "next/link";

export default function HomeServices() {
  return (
    <section className="home-services">

      <div className="home-services-container">

        {/* LEFT CONTENT */}

        <div className="home-services-left">

          <div className="home-services-left-inner">

            <div className="section-label">
              Our Services
            </div>

          <h2>
            Complete care for every system in your property.
          </h2>

            <p>
              From essential maintenance to specialized systems,
              our expert teams ensure your property runs smoothly,
              efficiently, and safely every single day.
            </p>

            <Link
              href="/services"
              className="services-btn"
            >
              Explore All Services
            </Link>

          </div>

        </div>

        {/* RIGHT GRID */}

        <div className="home-services-grid">

          {/* HVAC */}

          <Link
            href="/services#hvac"
            className="service-tile-link"
          >
            <div className="service-tile">

              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop"
                alt="HVAC"
              />

              <div className="service-tile-overlay" />

              <div className="service-tile-content">

                <h3>HVAC Systems</h3>

                <p>
                  Cooling, heating & ventilation maintenance.
                </p>

              </div>

            </div>
          </Link>

          {/* ELECTRICAL */}

          <Link
            href="/services#electrical"
            className="service-tile-link"
          >
            <div className="service-tile">

              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                alt="Electrical"
              />

              <div className="service-tile-overlay" />

              <div className="service-tile-content">

                <h3>Electrical Maintenance</h3>

                <p>
                  Power systems, lighting & operational safety.
                </p>

              </div>

            </div>
          </Link>

          {/* PLUMBING */}

          <Link
            href="/services#plumbing"
            className="service-tile-link"
          >
            <div className="service-tile">

              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1200&auto=format&fit=crop"
                alt="Plumbing"
              />

              <div className="service-tile-overlay" />

              <div className="service-tile-content">

                <h3>Plumbing Systems</h3>

                <p>
                  Water systems, leak prevention & maintenance.
                </p>

              </div>

            </div>
          </Link>

          {/* SMART SYSTEMS */}

          <Link
            href="/services#smart-systems"
            className="service-tile-link"
          >
            <div className="service-tile">

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                alt="Smart Systems"
              />

              <div className="service-tile-overlay" />

              <div className="service-tile-content">

                <h3>Smart Systems</h3>

                <p>
                  CCTV, access control & smart integrations.
                </p>

              </div>

            </div>
          </Link>

        </div>

      </div>

    </section>
  );
}