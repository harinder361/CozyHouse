import './Footer.css'

const Footer = () => {
  return (
      <div class="footer-clean">
        <footer>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Book Appointment</a>
                  </li>
                  <li>
                    <a href="#">Adopt</a>
                  </li>
                  <li>
                    <a href="#">Treat</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Legacy</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                  <li>
                    <a href="#">Employee success</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 item social">
                <a href="https://www.facebook.com/">
                  <i class="icon fa-brands fa-square-facebook"></i>
                </a>
                <a href="https://twitter.com/?lang=en">
                  <i class="icon fa-brands fa-square-x-twitter"></i>
                </a>
                <a href="https://in.pinterest.com/">
                  <i class="icon fa-brands fa-square-pinterest"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i class="icon fa-brands fa-square-instagram"></i>
                </a>
                <p class="copyright">CozyHouse © 2024</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default Footer;
