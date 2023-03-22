const Navbar = () => {
  return (
    <>
      <nav class="d-flex justify-content-between col-9 m-auto mt-3">
        <a class="navbar-brand logo" href="#"></a>
        <div class="menu-togle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav side-bar">
          <div class="top-side-bar">
            <span>bcr</span>
          </div>
          <li class="nav-item">
            <a class="nav-link color" href="#">
              Our Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link color" href="#">
              Why Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link color" href="#">
              Testimonial
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link color" href="#">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
