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
          <select className="btn-faq">
            <option>Apa saja syarat yang dibutuhkan?</option>
          </select>
          <select className="btn-faq">
            <option>Berapa hari minimal sewa mobil lepas kunci?</option>
          </select>
          <select className="btn-faq">
            <option>
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </option>
          </select>
          <select className="btn-faq">
            <option>Apakah Ada biaya antar-jemput?</option>
          </select>
          <select className="btn-faq">
            <option>
              <p>Bagaimana jika terjadi kecelakaan</p>
            </option>
          </select>
        </div>
      </div>
    </>
  );
};
export default FAQ;
