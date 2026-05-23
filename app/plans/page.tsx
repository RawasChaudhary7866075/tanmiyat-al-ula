import HomeNavbar from "@/components/home/HomeNavbar";
import Hero from "@/components/plans/Hero";
import PlansGrid from "@/components/plans/PlansGrid";
import HowItWorks from "@/components/plans/HowItWorks";
import CalloutExplainer from "@/components/plans/CalloutExplainer";
import RatesSection from "@/components/plans/RatesSection";
import ComparisonSection from "@/components/plans/ComparisonSection";
import CalculatorSection from "@/components/plans/CalculatorSection";
import FAQSection from "@/components/plans/FAQSection";
import CTASection from "@/components/plans/CTASection";
import HomeFooter from "@/components/home/HomeFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function PlansPage() {
  return (

    <div className="plans-page">
    <main>
      <HomeNavbar />
      <Hero />
      <PlansGrid />
      <HowItWorks />
      <CalloutExplainer />
      <RatesSection />
      <ComparisonSection />
      <CalculatorSection />
      <FAQSection />
      <CTASection />
      <HomeFooter />
      <WhatsAppFloat />
    </main>

    </div>
  );
}