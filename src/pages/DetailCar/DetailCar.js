import Navbar from "../../components/Navbar/Navbar";
import "../../components/Navbar/navbar.css";
import Footer from "../../components/Footer/Footer";
import "../../components/Footer/footer.css";
import "../style.css";
import SearchCarBox from "../../components/SearchCarBox/SearchCarBox";

const DetailCar = () => {
  return (
    <div className="detail-car">
      <div className="detail-head">
        <Navbar />
      </div>
      <SearchCarBox />
      <div className="d-flex flex-column justify-content-start detail-paket">
        <h4>Tentang Paket</h4>
        <div className="list-detail-car">
          <h5>Include</h5>
          <ul class="list">
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
        </div>

        <div className="list-detail-car">
          <h5>Exclude</h5>
          <ul class="list">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>

        <div className="list-detail-car">
          <h5>Refund, Reschedule, Overtime</h5>
          <ul class="list">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              ika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>idak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
      </div>
      <div className="detail-paket-side"></div>
      <div className="detail-footer">
        <Footer />
      </div>
    </div>
  );
};

export default DetailCar;
