import HomeNavbar from "@/components/home/HomeNavbar";
import HomeHero from "@/components/home/HomeHero";
import HomeStats from "@/components/home/HomeStats";
import HomeServices from "@/components/home/HomeServices";
import HomeMetrics from "@/components/home/HomeMetrics";
import HomeProcess from "@/components/home/HomeProcess";
import HomeIndustries from "@/components/home/HomeIndustries";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeCTA from "@/components/home/HomeCTA";
import HomeFooter from "@/components/home/HomeFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function HomePage() {
  return (
    <main className="home-page">

      <HomeNavbar />

      <HomeHero />

      <HomeStats />

      <HomeServices />

      <HomeMetrics />

      <HomeProcess />

      <HomeIndustries />

      <HomeTestimonials />

      <HomeCTA />

      <HomeFooter />

      <WhatsAppFloat />

    </main>
  );
}