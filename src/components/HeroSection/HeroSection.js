import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="text-wrap">
          <div className="text-1">
            <p>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
          </div>
          <div className="text-2">
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
        </div>
        <button>
          <Link to="/search-car" className="text-decoration-none">
            Mulai Sewa Mobil
          </Link>
          {/* <a href="#" className="text-decoration-none">
            {" "}
            Mulai Sewa Mobil
          </a> */}
        </button>
        <div className="position-absolute bottom-0 end-0 float-end img-banner">
          <img
            src="/assets/car-banner.png"
            className="position-absolute bottom-0 end-0 float-end car-banner"
            alt="car-banner"
          />
        </div>
      </div>
    </>
  );
};
export default HeroSection;
