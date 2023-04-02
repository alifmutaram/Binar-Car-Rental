import TextField from "../TextField/TextField";
import Select from "../Select/Select";
import "../SearchCarBox/searchcarbox.css";
import { catSelect, hargaSelect, statusSelect } from "../../constants";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../pages/style.css";

const apiCar = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";
const SearchCarBox = () => {
  const [valueNamaMobil, setNamaMobil] = useState("");
  const [valueKategori, setKategori] = useState("");
  const [valueHarga, setHarga] = useState("");
  const [valueStatus, setStatus] = useState("");
  const [displayHasilMobil, setDisplayHasilMobil] = useState([]);
  const { push } = useHistory();
  const handlePilihMobil = (params) => {
    push(`/detail-car/${params}`);
  };
  const handleOnClick = () => {
    fetch(
      apiCar +
        "?" +
        new URLSearchParams({
          name: valueNamaMobil,
          category: valueKategori,
          isRented: valueStatus,
          minPrice: valueHarga,
          page: 1,
          pageSize: 10,
        })
    )
      .then((res) => res.json())
      .then((respone) => {
        const carList = respone.cars;
        console.log(carList);
        setDisplayHasilMobil(carList);
      });
  };

  return (
    <>
      <div className="search-car-box d-flex flex-row align-items-center justify-content-center ">
        <div className="frame-car-box d-flex flex-row align-items-center justify-content-end">
          <TextField
            labelTextField={"Nama Mobil"}
            value={valueNamaMobil}
            onChange={setNamaMobil}
          />
          <Select
            labelSelect={"Kategori"}
            value={valueKategori}
            onChange={setKategori}
            items={catSelect}
          />
          <Select
            labelSelect={"Harga"}
            value={valueHarga}
            onChange={setHarga}
            items={hargaSelect}
          />
          <Select
            labelSelect={"Status"}
            value={valueStatus}
            onChange={setStatus}
            items={statusSelect}
          />

          <button
            className="d-flex flex-row justify-content-center align-items-center btn-search"
            onClick={handleOnClick}
          >
            Cari Mobil
          </button>
        </div>
      </div>

      <div className=" d-flex flex-row justify-content-center">
        {displayHasilMobil.map(({ id, image, name, price }) => {
          return (
            <div>
              <div className="d-flex flex-row align-items-start justify-content-between frame-result">
                <div class="card d-flex flex-column align-items-start card-result">
                  <div class="d-flex flex-column align-items-start card-body-result">
                    <img class="card-img-top" src={image} alt="" />
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text">{price}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <button
                    type="button"
                    class="d-flex flex-row align-items-center justify-content-center btn-pilih-mobil"
                    onClick={() => handlePilihMobil(id)}
                  >
                    Pilih Mobil
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchCarBox;
