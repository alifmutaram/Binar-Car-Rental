const Footer = () => {
  return (
    <>
      <footer className="footer-cari-mobil">
        <div className="addres">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="d-flex flex-column align-items-start nav-foot">
          <a href="#our-service">Our services</a>
          <a href="#why-us">Why Us</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="container-footer"></div>
        <div className="sosmed">
          <p>Connect with us</p>
          <div className="d-flex flex-row align-items-start list-sosmed">
            <a href="">
              <img src="/assets/icon_facebook.png" alt="facebook" />
            </a>
            <a href="">
              <img src="/assets/icon_instagram.png" alt="instagram" />
            </a>
            <a href="">
              <img src="/assets/icon_twitter.png" alt="twitter" />
            </a>
            <a href="">
              <img src="/assets/icon_mail.png" alt="mail" />
            </a>
            <a href="">
              <img src="/assets/icon_twitch.png" alt="twitch" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright Binar 2022</p>
          <div className="rectacle-foot"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
