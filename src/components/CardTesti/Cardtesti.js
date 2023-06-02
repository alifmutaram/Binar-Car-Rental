import React from 'react'

const CardTesti = ({ testiImg, testiText, nameTesti }) => {
  return (
    <>
      <div className="card-testi d-flex flex-row justify-content-around align-items-center">
        <img src={testiImg} />
        <div className="box-text d-flex flex-column align-items-start">
          <img src="/assets/Rate.png" className="rate" />
          <p>{testiText}</p>
          <span>{nameTesti}</span>
        </div>
      </div>
    </>
  )
}

export default CardTesti
