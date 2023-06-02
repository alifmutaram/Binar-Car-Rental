import React from 'react'

const CardResult = ({ resultImg, resultTitle, resultPrice, resultText }) => {
  return (
    <div>
      <div className="card d-flex flex-column align-items-start card-result">
        <div className="card-body-result">
          <img className="card-img-top" src={resultImg} alt="" />
          <h4 className="card-title">{resultTitle}</h4>
          <h2>{resultPrice}</h2>
          <p className="card-text">{resultText}</p>
        </div>
        <button type="button" className="btn-pilih-mobil">
          Pilih Mobil
        </button>
      </div>
    </div>
  )
}
export default CardResult
