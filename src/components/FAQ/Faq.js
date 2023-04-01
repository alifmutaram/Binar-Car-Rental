const FAQ = () => {
  return (
    <>
      <div className="d-flex justify-content-between faq" id="faq">
        <div className="text-faq">
          <p className="text-faq-1">Frequently Asked Question</p>
          <p className="text-faq-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="d-flex flex-column align-items-start list-faq">
          <button
            class="btn dropdown-toggle btn-faq"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <p>Apa saja syarat yang dibutuhkan?</p>
          </button>
          <button
            class="btn dropdown-toggle btn-faq"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <p>Berapa hari minimal sewa mobil lepas kunci?</p>
          </button>
          <button
            class="btn dropdown-toggle btn-faq"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
          </button>
          <button
            class="btn dropdown-toggle btn-faq"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <p>Apakah Ada biaya antar-jemput?</p>
          </button>
          <button
            class="btn dropdown-toggle btn-faq"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <p>Bagaimana jika terjadi kecelakaan</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default FAQ;
