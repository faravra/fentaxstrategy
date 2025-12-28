import Navbar from "@/components/Navbar";
import HeroAbout from "@/components/HeroAbout";
import AboutIntro from "@/components/AboutIntro";
import StatsSection from "@/components/StatsSection";
import WorkflowSection from "@/components/WorkflowSection";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroAbout />
      <AboutIntro />
      <StatsSection />
      <WorkflowSection />
      {/* <TeamSection /> */}
      <ValuesSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default About;
