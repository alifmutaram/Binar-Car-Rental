const CtaBanner = () => {
  return (
    <>
      <div className="ct-banner">
        <div className="ct-bg d-flex flex-column justify-content-center align-items-center">
          <span className="ct-text-1">Sewa Mobil di (Lokasimu) Sekarang</span>
          <span className="ct-text-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </span>
          <button className="d-flex flex-row justify-content-center align-items-center">
            <a href="#" className="text-decoration-none">
              {" "}
              Mulai Sewa Mobil
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default CtaBanner;
