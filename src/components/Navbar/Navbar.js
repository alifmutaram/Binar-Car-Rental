import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
const Navbar = () => {
  const [displaySideBar, setSideBar] = useState(false); // => hooks state
  const { push } = useHistory();

  const clickToHome = () => {
    push("/home");
  };

  const handleButtonOnClick = () => {
    const callbackState = (previousState) => {
      console.log({ previousState });
      return !previousState;
    };

    setSideBar(callbackState);
  };

  return (
    <>
      <nav className="d-flex justify-content-between col-9 m-auto mt-5 position-absolute top-0 start-50 translate-middle nav-custom">
        <a className="logo" href="#" onClick={clickToHome}></a>
        <div className="menu-togle">
          <input type="checkbox" onClick={handleButtonOnClick} />
          <span></span>
          <span></span>
          <span></span>
        </div>
        {displaySideBar && <SideBar />}
        <ul className="nav list-nav">
          <li className="nav-item">
            <Link
              to="our-service"
              className="nav-link text-decoration-none color"
            >
              Our Services
            </Link>
            {/* <a className="nav-link color" href="#our-service">
              Our Services
            </a> */}
          </li>
          <li className="nav-item">
            <Link to="/#why-us" className="nav-link text-decoration-none color">
              Why Us
            </Link>
            {/* <a className="nav-link color" href="#why-us">
              Why Us
            </a> */}
          </li>
          <li className="nav-item">
            <Link
              to="/#testimonial"
              className="nav-link text-decoration-none color"
            >
              Testimonial
            </Link>
            {/* <a className="nav-link color" href="#testimonial">
              Testimonial
            </a> */}
          </li>
          <li className="nav-item">
            <Link to="/#faq" className="nav-link text-decoration-none color">
              FAQ
            </Link>
            {/* <a className="nav-link color" href="#faq">
              FAQ
            </a> */}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
