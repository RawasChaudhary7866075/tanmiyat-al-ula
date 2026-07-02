"use client";

import Link from "next/link";
import { useState } from "react";
import GHLModal from "@/components/GHLModal";

export default function HomeNavbar() {

    const [openModal, setOpenModal] =
        useState(false);

      const [selectedForm, setSelectedForm] =
        useState("");

      const openForm = (formUrl: string) => {
        setSelectedForm(formUrl);
        setOpenModal(true);
      };

      

  return (
    <nav className="home-navbar">
      <div className="home-navbar-inner">

        {/* LEFT - LOGO */}
        <Link href="/" className="home-brand">
          <img
            src="/images/branding/tanmiyat-logo.png"
            alt="Tanmiyat Al Ula"
            className="home-brand-logo"
          />
        </Link>

        {/* CENTER - NAVIGATION */}
        <div className="home-navbar-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/plans">Plans</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* RIGHT - CTA */}
        <div className="home-navbar-cta">
          <button
                className="book-consultation-btn"
                onClick={() =>
                  openForm(
                    "https://api.leadconnectorhq.com/widget/form/FgPLgsAP1INEQ8EcJ1OE"
                  )
                }
              >
                Book Consultation
              </button>
        </div>

       
      </div>

       <GHLModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          formUrl={selectedForm}
        />

    </nav>
  );
}