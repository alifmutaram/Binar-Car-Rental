import { Link } from "react-scroll";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
const Navbar = () => {
  const [displaySideBar, setSideBar] = useState(false);
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
              <a className="nav-link color" href="">
                Our Services
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="why-us" className="nav-link text-decoration-none color">
              <a className="nav-link color" href="">
                Why Us
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="testimonial"
              className="nav-link text-decoration-none color"
            >
              <a className="nav-link color" href="">
                Testimonial
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="faq" className="nav-link text-decoration-none color">
              <a className="nav-link color" href="">
                FAQ
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
