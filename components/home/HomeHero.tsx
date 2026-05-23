import Link from "next/link";

import {
  Clock3,
  Users,
  ClipboardList,
  Star,
} from "lucide-react";

export default function HomeHero() {
  return (
    <section className="home-hero">

      <div className="home-hero-overlay" />

      <div className="home-hero-container">

        {/* LEFT */}

        <div className="home-hero-left">

          <div className="home-hero-eyebrow">
            Preventive. Reliable. Premium.
          </div>

          <h1>
            Your property.
            <br />
            Professionally
            <br />
            <span>maintained.</span>
          </h1>

          <p>
            Premium preventive maintenance and emergency response
            for villas, residential compounds, hospitality spaces,
            and modern properties across Saudi Arabia.
          </p>

          <div className="home-hero-actions">

            <Link href="/services" className="home-primary-btn">
              Explore Services
            </Link>

            <Link href="/plans" className="home-secondary-btn">
              View Plans
            </Link>

          </div>

          <div className="home-trusted">
            Trusted by premium property owners
          </div>

        </div>

        {/* CENTER IMAGE */}

        <div className="home-hero-image-wrap">

          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop"
            alt="Luxury Property"
            className="home-hero-image"
          />

        </div>

        {/* RIGHT FLOATING CARDS */}

        <div className="home-hero-right">

          <div className="hero-info-card">

            <div className="hero-info-icon">
              <Clock3 size={22} strokeWidth={1.8} />
            </div>

            <div>
              <h3>4hr</h3>
              <p>Emergency Response</p>
            </div>

          </div>

          <div className="hero-info-card">

            <div className="hero-info-icon">
              <Users size={22} strokeWidth={1.8} />
            </div>

            <div>
              <h3>7+</h3>
              <p>Specialist Trades</p>
            </div>

          </div>

          <div className="hero-info-card">

            <div className="hero-info-icon">
              <ClipboardList size={22} strokeWidth={1.8} />
            </div>

            <div>
              <h3>Quarterly</h3>
              <p>Preventive Inspections</p>
            </div>

          </div>

          <div className="hero-info-card">

            <div className="hero-info-icon">
              <Star size={22} strokeWidth={1.8} />
            </div>

            <div>
              <h3>Dedicated</h3>
              <p>Property Support</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}