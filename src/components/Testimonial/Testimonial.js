import React from 'react'

// eslint-disable-next-line react/prop-types
const Testimonial = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column testimonial" id="testimonial">
        <h3>Testimonial</h3>
        <h5>Berbagai review positif dari para pelanggan kami</h5>
        <div className="d-flex flex-row justify-content-between list-testi">
          {children}
        </div>
        <div className="d-flex flex-row justify-content-between button-carousel">
          <button
            type="button"
            className="btn btn-light d-flex justify-content-center align-items-center btn-caro left"
          >
            &lt;
          </button>
          <button
            type="button"
            className="btn btn-success d-flex justify-content-center align-items-center btn-caro right"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  )
}

export default Testimonial
