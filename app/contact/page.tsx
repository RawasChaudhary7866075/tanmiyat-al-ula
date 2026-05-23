import HomeNavbar from "../../components/home/HomeNavbar";
import HomeFooter from "../../components/home/HomeFooter";

import ContactHero from "@/components/contact/ContactHero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";


export default function ContactPage() {
  return (
    <>
      <HomeNavbar />

      <main className="contact-page">
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <ContactMap />
        <WhatsAppFloat />
      </main>

      <HomeFooter />
    </>
  );
}