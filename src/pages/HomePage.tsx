import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import TrustedBySection from "@/components/TrustedBySection";
import ContactSection from "@/components/ContactSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div id="team">
          <TeamSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <TrustedBySection />
        <ContactSection />
      </main>
    </>
  );
};

export default HomePage;
