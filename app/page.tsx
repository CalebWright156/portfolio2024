import React from 'react';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import ContactForm from "@/components/ContactForm";


const Page: React.FC = () => {
  return (
      <main>
        <HeroSection />
          <AboutSection />
          <SkillsSection />
          <WorkSection />
          <ContactForm />
      </main>
  );
};

export default Page
