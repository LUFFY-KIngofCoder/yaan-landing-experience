import { useState, useEffect } from "react";
import LandingAnimation from "@/components/LandingAnimation";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import TrustedBySection from "@/components/TrustedBySection";
import ContactSection from "@/components/ContactSection";

const HomePage = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Check if animation has been shown before in this session
    const animationShown = sessionStorage.getItem("animationShown");
    if (animationShown) {
      setShowAnimation(false);
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem("animationShown", "true");
    setShowAnimation(false);
  };

  return (
    <>
      {showAnimation && <LandingAnimation onComplete={handleAnimationComplete} />}
      <div className={showAnimation ? "invisible" : "visible"}>
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
      </div>
    </>
  );
};

export default HomePage;
