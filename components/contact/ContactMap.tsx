"use client";

export default function ContactMap() {
  return (
    <section className="contact-map-section">

      <div className="contact-map-container">

        <div className="map-content">

          <span>OUR LOCATION</span>

          <h2>
            Serving properties
            across Riyadh.
          </h2>

          <p>
            Residential villas, compounds, commercial
            facilities, and multi-property portfolios.
          </p>

          <div className="map-line"></div>

        </div>

        <div className="map-embed-wrapper">

       <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d861.1430761575708!2d46.6484839!3d24.7310406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d9358c71479%3A0xab46b9236b3aad85!2sRegus%20-%20Riyadh%2C%20The%20Zone!5e1!3m2!1sen!2s!4v1779575228006!5m2!1sen!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          

        </div>

      </div>

    </section>
  );
}