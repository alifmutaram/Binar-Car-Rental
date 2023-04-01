const CardResult = ({ resultImg, resultTitle, resultPrice, resultText }) => {
  return (
    <div>
      <div class="card d-flex flex-column align-items-start card-result">
        <div class="card-body-result">
          <img class="card-img-top" src={resultImg} alt="" />
          <h4 class="card-title">{resultTitle}</h4>
          <h2>{resultPrice}</h2>
          <p class="card-text">{resultText}</p>
        </div>
        <button type="button" class="btn-pilih-mobil">
          Pilih Mobil
        </button>
      </div>
    </div>
  );
};
export default CardResult;
