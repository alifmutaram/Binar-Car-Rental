import Navbar from "../../components/Navbar/Navbar";
import "../../components/Navbar/navbar.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import "../../components/HeroSection/herosection.css";
import OurService from "../../components/OurService/OurService";
import "../../components/OurService/ourservice.css";
import WhyUs from "../../components/WhyUs/WhyUs";
import "../../components/WhyUs/whyus.css";
import Testimonial from "../../components/Testimonial/Testimonial";
import "../../components/Testimonial/testimonial.css";
import CtaBanner from "../../components/CTABanner/CtaBanner";
import "../../components/CTABanner/ctabanner.css";
import FAQ from "../../components/FAQ/Faq";
import "../../components/FAQ/faq.css";
import Footer from "../../components/Footer/Footer";
import "../../components/Footer/footer.css";
import Card from "../../components/CardWhy/CardWhy";
import CardTesti from "../../components/CardTesti/Cardtesti";
import "../style.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Navbar />
      <OurService />
      <WhyUs>
        <Card
          cardImg="/assets/icon_complete.png"
          cardTitle="Mobil Lengkap"
          cardText="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
        />
        <Card
          cardImg="/assets/icon_price.png"
          cardTitle="Harga Murah"
          cardText="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
        />
        <Card
          cardImg="/assets/icon_24hrs.png"
          cardTitle="Layanan 24 Jam"
          cardText="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
        />
        <Card
          cardImg="/assets/icon_professional.png"
          cardTitle="Sopir Profesional"
          cardText="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
        />
      </WhyUs>
      <Testimonial>
        <CardTesti
          testiImg="/assets/img_testi-3.png"
          testiText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”"
          nameTesti="John Dee 32, Bromo"
        />
        <CardTesti
          testiImg="/assets/img_testi-2.png"
          testiText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”"
          nameTesti="John Dee 32, Bromo"
        />
        <CardTesti
          testiImg="/assets/img_testi-3.png"
          testiText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”"
          nameTesti="John Dee 32, Bromo"
        />
      </Testimonial>
      <CtaBanner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
