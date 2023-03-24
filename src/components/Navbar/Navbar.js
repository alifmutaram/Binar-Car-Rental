const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-between col-9 m-auto mt-5 position-absolute top-0 start-50 translate-middle nav-custom">
        <a className="logo" href="#"></a>
        <div className="menu-togle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav side-bar">
          <div className="top-side-bar">
            <span>bcr</span>
          </div>
          <li className="nav-item">
            <a className="nav-link color" href="#">
              Our Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link color" href="#">
              Why Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link color" href="#">
              Testimonial
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link color" href="#">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
