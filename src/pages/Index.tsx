import Navbar from "@/components/Navbar";
import HeroHome from "@/components/HeroHome";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import AboutHomeSection from "@/components/AboutHomeSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ConsultationCTASection from "@/components/ConsultationCTASection";
import ValuesHomeSection from "@/components/ValuesHomeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroHome />
      <WhatWeDoSection />
      <AboutHomeSection />
      <VisionMissionSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <ConsultationCTASection />
      <ValuesHomeSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
