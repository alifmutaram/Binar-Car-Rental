import React from 'react'

// eslint-disable-next-line react/prop-types
const WhyUs = ({ children }) => {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-between why-us"
        id="why-us"
      >
        <div className="text-decs-why">
          <p>why us</p>
        </div>
        <div className="text-decs-why-2">
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="list-items">{children}</div>
      </div>
    </>
  )
}

export default WhyUs
