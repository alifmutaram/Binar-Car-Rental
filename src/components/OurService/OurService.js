const OurService = () => {
  return (
    <>
      <div className="our-service">
        <div className="img-service">
          <img src="/assets/img-service.png" />
        </div>
        <div className="desc frame d-flex flex-column align-items-start p-0 gap-3">
          <p>Best Car Rental for any kind of trip in (Lokasimu)!</p>
          <div className="frame d-flex flex-column align-items-start p-0 gap-3">
            <p className="text-frame">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div class="frame-service-inside d-flex flex-column align-items-start p-0 gap-3">
              <div className="group-frame">
                <img src="assets/cek.png" alt="cek" />
                <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
              </div>
              <div className="group-frame">
                <img src="assets/cek.png" alt="cek" />
                <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
              </div>
              <div className="group-frame">
                <img src="assets/cek.png" alt="cek" />
                <span>Sewa Mobil Jangka Panjang Bulanan</span>
              </div>
              <div className="group-frame">
                <img src="assets/cek.png" alt="cek" />
                <span>Gratis Antar - Jemput Mobil di Bandara</span>
              </div>
              <div className="group-frame">
                <img src="assets/cek.png" alt="cek" />
                <span>Layanan Airport Transfer / Drop In Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
