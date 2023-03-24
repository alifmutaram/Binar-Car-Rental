import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/navbar.css";
import HeroSection from "./components/HeroSection/HeroSection";
import "./components/HeroSection/herosection.css";
import OurService from "./components/OurService/OurService";
import "./components/OurService/ourservice.css";
import WhyUs from "./components/WhyUs/WhyUs";
import "./components/WhyUs/whyus.css";
import CtaBanner from "./components/CTABanner/CtaBanner";
import "./components/CTABanner/ctabanner.css";
import FAQ from "./components/FAQ/Faq";
import "./components/FAQ/faq.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/footer.css";
const App = () => {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <OurService />
      <CtaBanner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
