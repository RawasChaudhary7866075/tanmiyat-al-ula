"use client";

import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {

  useEffect(() => {

    const handleScrollRestore = () => {

      const scrollY =
        sessionStorage.getItem("modalScrollY");

      if (scrollY) {

        window.scrollTo({
          top: parseInt(scrollY),
          behavior: "instant" as ScrollBehavior,
        });

      }

    };

    window.addEventListener(
      "focus",
      handleScrollRestore
    );

    return () => {

      window.removeEventListener(
        "focus",
        handleScrollRestore
      );

    };

  }, []);

  return (
    <section className="contact-form-section">

      <div className="contact-form-container">

        <div className="contact-form-content">

          <span>
            REQUEST A CONSULTATION
          </span>

          <h2>
            We’re here to help.
          </h2>

          <p>
            Whether you need preventive maintenance,
            emergency support, or a tailored property
            care plan, our team is ready to assist.
          </p>

          <ul>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              Fast emergency response
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              Preventive-first maintenance
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              All trades under one team
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              Digital reporting & updates
            </li>

          </ul>

        </div>

        <div className="contact-form-card">

          <iframe
            src="https://api.leadconnectorhq.com/widget/form/eu6wWqOpt1b0LJD0qYNm"
            style={{
              width: "100%",
              height: "760px",
              border: "none",
              borderRadius: "24px",
              background: "transparent",
            }}
            id="inline-request-demo-form"
          />

        </div>

      </div>

    </section>
  );
}