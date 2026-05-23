"use client";
import { useEffect } from "react";

const services = [
  {
    id: "hvac",
    label: "HVAC",
    icon: "fa-fan",
  },
  {
    id: "electrical",
    label: "Electrical",
    icon: "fa-bolt",
  },
  {
    id: "plumbing",
    label: "Plumbing",
    icon: "fa-faucet-drip",
  },
  {
    id: "carpentry",
    label: "Civil & Carpentry",
    icon: "fa-hammer",
  },
  {
    id: "pest",
    label: "Pest Control",
    icon: "fa-bug",
  },
 {
  id: "smart-systems",
  label: "Smart Systems",
  icon: "fa-shield-halved",
},

];

export default function ServicesTabs() {

useEffect(() => {

  const hash =
    window.location.hash.replace("#", "");

  if (hash) {

    setTimeout(() => {

      const section =
        document.getElementById(hash);

      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 300);

  }

}, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="services-tabs">
      <div className="container">
        <div className="services-tabs-wrapper">
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`services-tab ${index === 0 ? "active" : ""}`}
              onClick={() => scrollToSection(service.id)}
            >
              <i className={`fa-solid ${service.icon}`}></i>

              <span>{service.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}