import Navbar from "../../components/Navbar/Navbar";
import "../../components/Navbar/navbar.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import "../../components/HeroSection/herosection.css";
import Footer from "../../components/Footer/Footer";
import "../../components/Footer/footer.css";
import "../SearchCar/style.css";

const SearchCar = () => {
  return (
    <div className="search-car">
      <HeroSection />
      <Navbar />
      <Footer />
    </div>
  );
};

export default SearchCar;
