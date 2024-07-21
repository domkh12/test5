import React from "react";
import NavBarComponent from "../../components/developercomponent/Navbar";
import HeroSection from "../../components/developercomponent/HeroSection";
import AboutMeSectionDev from "../../components/developercomponent/AboutMeSectionDev";
import MyResumeSection from "../../components/developercomponent/MyResumeSection";
import MySkillSection from "../../components/developercomponent/MySkillSection";
import MyProject from "../../components/developercomponent/MyProject";
import BlogSection from "../../components/developercomponent/BlogSection";
import ContactSection from "../../components/developercomponent/ContactSection";
import FooterSection from "../../components/developercomponent/FooterSection";
import { useSelector } from "react-redux";

const DeveloperTemplate = () => {
  const { templateData, status, error } = useSelector(
    (state) => state.templates
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return (
      <p className="text-red-500">
        {typeof error === "object" && error.detail ? error.detail : error}
      </p>
    );
  }

  if (status === "succeeded" && templateData) {
    return (
      <div className="w-full h-auto">
        <NavBarComponent />
        <HeroSection
          heroImage={templateData.hero_image}
          introduction="INTRODUCTION"
          name={templateData.name || "Elon Musk"} // Replace with dynamic data if available
          profession={templateData.profession || "Developer"} // Replace with dynamic data if available
          bio={templateData.biography || "Bio not available."}
          socialMediaLinks={[
            {
              type: "facebook",
              url: templateData.social_media_link_json
                ? templateData.social_media_link_json[0]
                : "https://facebook.com",
            }, // Replace with dynamic data if available
            { type: "github", url: "https://github.com" }, // Replace with dynamic data if available
          ]}
        />
        <AboutMeSectionDev
          avatar={templateData.section_image}
          firstName={templateData.title} // Assuming title contains the first name
          lastName="Musk" // Replace with dynamic data if available
          birthDate="24 April 1993" // Replace with dynamic data if available
          nationality="Khmer" // Replace with dynamic data if available
          experience="7 years" // Replace with dynamic data if available
          address="Phnom Penh" // Replace with dynamic data if available
          freelance="Available" // Replace with dynamic data if available
          language="Khmer, English" // Replace with dynamic data if available
          phone="+855 977 34 54 71" // Replace with dynamic data if available
          email="example@gmail.com" // Replace with dynamic data if available
        />
        <MyResumeSection />
        <MySkillSection />
        <MyProject />
        <BlogSection />
        <ContactSection
          address="39, anywhere in the world" // Replace with dynamic data if available
          email="showcase@gmail.com" // Replace with dynamic data if available
          phone="+12345678" // Replace with dynamic data if available
        />
        <FooterSection />
      </div>
    );
  }

  return null;
};

export default DeveloperTemplate;
