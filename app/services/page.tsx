import ServicesHero from "@/components/services/ServicesHero";
import ServicesTabs from "@/components/services/ServicesTabs";
import ServiceDarkSection from "@/components/services/ServiceDarkSection";
import ServiceLightSection from "@/components/services/ServiceLightSection";
import ServicesBottomCTA from "@/components/services/ServicesBottomCTA";
import HomeFooter from "@/components/home/HomeFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function ServicesPage() {
  return (
    <>
      <main className="services-page">
        <ServicesHero />

        <ServicesTabs />

        <ServiceDarkSection
  id="hvac"
  title="HVAC & Cooling Systems"
  subtitle="Preventive & Reactive"
  description="Complete air conditioning care including servicing, diagnostics, airflow optimization, and emergency cooling solutions designed for Riyadh’s climate."
  image="/images/services/hvac.jpg"
  buttonText="Schedule HVAC Support"
  features={[
    "AC Servicing & Cleaning",
    "Filter Replacement",
    "Thermostat Diagnostics",
    "Cooling Efficiency Checks",
    "Refrigerant Inspection",
    "Emergency Repairs",
  ]}
/>

<ServiceLightSection
  id="electrical"
  title="Electrical Systems"
  subtitle="Preventive & Reactive"
  description="Safe, reliable, and code compliant electrical maintenance for residential and commercial properties."
  image="/images/services/electrical.jpg"
  buttonText="Schedule Electrical Support"
  features={[
    "Wiring Inspection",
    "Panel Checks",
    "Lighting Maintenance",
    "Power Backup Testing",
    "Safety & Fault Detection",
    "Emergency Electrical",
  ]}
/>

<ServiceDarkSection
  id="plumbing"
  title="Plumbing & Water Systems"
  subtitle="Preventive & Reactive"
  description="Leak detection, water pressure management, drainage care, and complete plumbing solutions to protect your property."
  image="/images/services/plumbing.jpg"
  buttonText="Schedule Plumbing Support"
  features={[
    "Leak Detection & Repair",
    "Pipe Maintenance",
    "Drainage Cleaning",
    "Water Pressure Checks",
    "Tank Inspection",
    "Emergency Plumbing",
  ]}
/>

<ServiceLightSection
  id="carpentry"
  title="Civil & Carpentry Works"
  subtitle="Preventive & Reactive"
  description="From structural repairs to fine carpentry, we keep your property strong, functional, and beautiful."
  image="/images/services/carpentry.jpg"
  buttonText="Schedule Civil Support"
  features={[
    "Wall & Ceiling Repairs",
    "Door & Window Maintenance",
    "Painting & Finishing",
    "Carpentry Works",
    "Tiling & Flooring Repairs",
    "General Maintenance",
  ]}
/>

<ServiceDarkSection
  id="pest"
  title="Pest Control Services"
  subtitle="Preventive & Reactive"
  description="Effective and safe pest control solutions to keep your property healthy, clean, and protected year round."
  image="/images/services/pest.jpg"
  buttonText="Schedule Pest Support"
  features={[
    "General Pest Control",
    "Termite Treatment",
    "Rodent Control",
    "Insect Control",
    "Mosquito Control",
    "Preventive Treatments",
  ]}
/>

<ServiceLightSection
  id="smart-systems"
  title="Smart Systems & Security"
  subtitle="Preventive & Reactive"
  description="Smart technology and security system maintenance for a safer, smarter property."
  image="/images/services/security.jpg"
  buttonText="Schedule Smart Systems Support"
  features={[
    "CCTV Maintenance",
    "Access Control Systems",
    "Smart Home Integration",
    "Intercom Maintenance",
    "Network & WiFi Optimization",
    "Security Diagnostics",
  ]}
/>

        <ServicesBottomCTA />

        <HomeFooter />

        <WhatsAppFloat />
      </main>
    </>
  );
}