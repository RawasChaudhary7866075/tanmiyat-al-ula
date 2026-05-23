"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function FloatingWhatsapp() {

  return (

    <a
      href="https://wa.me/966561213606?text=Hello%20Tanmiyat%20Al-Ula,%20I’m%20interested%20in%20your%20premium%20property%20maintenance%20services.%20I%20would%20like%20to%20speak%20with%20your%20team."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="WhatsApp"
    >

      <FontAwesomeIcon
        icon={faWhatsapp}
        className="floating-whatsapp-icon"
      />

    </a>

  );

}