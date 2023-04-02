import Navbar from "../../components/Navbar/Navbar";
import "../../components/Navbar/navbar.css";
import Footer from "../../components/Footer/Footer";
import "../../components/Footer/footer.css";
import "../style.css";
import SearchCarBox from "../../components/SearchCarBox/SearchCarBox";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiDetailCar = "https://bootcamp-rent-cars.herokuapp.com/customer/car";

const DetailCar = () => {
  const { carId } = useParams();
  const [detailCar, setDetailCar] = useState({});
  console.log(detailCar);

  useEffect(() => {
    fetch(`${apiDetailCar}/${carId}`)
      .then((result) => result.json())
      .then((respone) => {
        setDetailCar(respone);
      });
  }, [carId]);

  return (
    <div className="detail-car">
      <div className="detail-head">
        <Navbar />
      </div>
      <SearchCarBox />
      <div className="d-flex flex-column justify-content-start detail-paket">
        <h4 style={{ padding: "15px" }}>Tentang Paket</h4>
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
      <div class="card d-flex flex-column detail-paket-side">
        <img
          class="card-img-top"
          src={detailCar.image}
          alt=""
          className="img-detail-car"
        />
        <div
          class="card-body d-flex flex-column align-items-baseline"
          style={{ padding: "0" }}
        >
          <h4 class="card-title">{detailCar.name}</h4>
          <p
            class="card-text"
            style={{ color: "#8A8A8A", textTransform: "uppercase" }}
          >
            {detailCar.category}
          </p>
        </div>
        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ width: "22em" }}
        >
          <h4>Total :</h4>
          <h4>Rp.{detailCar.price}</h4>
        </div>
      </div>
      <div className="detail-footer">
        <Footer />
      </div>
    </div>
  );
};

export default DetailCar;
