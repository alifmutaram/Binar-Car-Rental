import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/navbar.css";
import HeroSection from "./components/HeroSection/HeroSection";
import "./components/HeroSection/herosection.css";
import OurService from "./components/OurService/OurService";
import "./components/OurService/ourservice.css";
import TextField from "./components/TextField";
const App = () => {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <OurService />
      {/* <TextField labelName={"Nama"} />
      <TextField labelName={"Alamat"} />
      <TextField labelName={"usia"} />
      <TextField labelName={"hobi"} /> */}
    </div>
  );
};

export default App;
