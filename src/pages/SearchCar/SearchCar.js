import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.css'
import HeroSection from '../../components/HeroSection/HeroSection'
import '../../components/HeroSection/herosection.css'
import Footer from '../../components/Footer/Footer'
import '../../components/Footer/footer.css'
import SearchCarBox from '../../components/SearchCarBox/SearchCarBox'
import '../style.css'
import React from 'react'

const SearchCar = () => {
  return (
    <div className="search-car">
      <HeroSection />
      <SearchCarBox />
      <Navbar />
      <div className="search-footer d-flex flex-column justify-content-end">
        <Footer />
      </div>
    </div>
  )
}

export default SearchCar
