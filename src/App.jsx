import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import ScrollToTop from "react-scroll-to-top";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/seo/SEO";
function App() {
  return (
    <HelmetProvider>
      <SEO
        title="Showcase - Your Portfolio Builder"
        description="Build and customize your portfolio with ease using our portfolio builder."
        keywords="portfolio, builder, templates, showcase"
        url="https://test5-beta-drab.vercel.app/" // Replace with your actual URL
        image="https://i.pinimg.com/originals/00/d6/c0/00d6c0a40815e725827ef2c03b38fd10.jpg" // Replace with your actual image URL
      />
    
      <NavBarComponent />
      <HeroSection />
      <TemplatesSection />
      <FeatureSection />
      <OurTeamSection />
      <ContactSection />
      <FooterSection />
    </HelmetProvider>
  );
}

export default App;
