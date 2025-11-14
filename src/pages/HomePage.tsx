import Header from "@/components/Header";
import CloudSplitSection from "@/components/CloudSplitSection";
import AboutSectionNew from "@/components/AboutSectionNew";
import TeamSectionNew from "@/components/TeamSectionNew";
import PartnersSection from "@/components/PartnersSection";
import ContactSectionNew from "@/components/ContactSectionNew";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Split Cloud Sections */}
        <CloudSplitSection />

        {/* Section 2: About, Team, Partners, Contact */}
        <AboutSectionNew />
        <TeamSectionNew />
        <PartnersSection />
        <ContactSectionNew />
      </main>
    </>
  );
};

export default HomePage;
