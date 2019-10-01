import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="footer-widget mb-70">
                <a href="index.html" className="foo-logo d-block">
                  <img src="images/foo-logo.png" alt="" />
                </a>
                <p>
                  Fylmy9 is an online information related to films, television
                  programs, and streaming content online – including cast and
                  critical reviews, and ratings.
                </p>
                <div className="footer-nl-area">
                  <form action="#" method="post">
                    <input
                      type="email"
                      name="nl-email"
                      className="form-control"
                      id="nlEmail"
                      placeholder="Your email"
                    />
                    <button type="submit">
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="footer-widget mb-70">
                <h6 className="widget-title">Latest Twitter</h6>
                <div className="twitter-slides owl-carousel">
                  <div className="single--twitter-slide">
                    <div className="single-twit">
                      <p>
                        <i className="fa fa-twitter"></i> <span>@Prasad</span>{" "}
                        From Unstoppable to now Unbeatable!!! #SAAHO has set the
                        BO on fire!🔥 Collects 500Cr+ worldwide.
                      </p>
                    </div>
                    <div className="single-twit">
                      <p>
                        <i className="fa fa-twitter"></i> <span>@Vissu</span> I
                        have decided to review film #SyeRaa, because people are
                        showing lots of interest to watch this film.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="footer-widget mb-70">
                <h6 className="widget-title">Trailers</h6>

                <div className="single-blog-post d-flex">
                  <div className="post-thumbnail">
                    <img src="images/1.jpg" alt="" />
                  </div>
                  <div className="post-content">
                    <a
                      href="https://www.youtube.com/watch?v=lD0-ztCFydA"
                      className="post-title"
                      target="_blank"
                    >
                      Saaho
                    </a>
                    <div className="post-meta d-flex justify-content-between">
                      <a href="#">
                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                        55k
                      </a>
                      <a href="#">
                        <i className="fa fa-eye" aria-hidden="true"></i> 83.4M
                      </a>
                      <a href="#">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        1.1M
                      </a>
                    </div>
                  </div>
                </div>

                <div className="single-blog-post d-flex">
                  <div className="post-thumbnail">
                    <img src="images/2.jpg" alt="" />
                  </div>
                  <div className="post-content">
                    <a
                      href="https://www.youtube.com/watch?v=KyhrrdpA2YA&t=24s"
                      className="post-title"
                      target="_blank"
                    >
                      SyeRaa
                    </a>
                    <div className="post-meta d-flex justify-content-between">
                      <a href="#">
                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                        24K
                      </a>
                      <a href="#">
                        <i className="fa fa-eye" aria-hidden="true"></i> 13.8M
                      </a>
                      <a href="#">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        405K
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="footer-widget mb-70">
                <h6 className="widget-title">Our Address</h6>
                <div className="contact-address">
                  <p>
                    1-10, 42/2, Prakash Nagar, Begumpet,
                    <br />
                    Hyderabad, Telangana - 500016
                  </p>
                  <p>Phone: (+91) 998-5883-9029</p>
                  <p>Email: viswanath.vundi@gmail.com</p>
                </div>
                <div className="footer-social-area">
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copywrite-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-6">
                <p className="copywrite-text">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved by -<a href="#">Fylmy9</a>
                </p>
              </div>
              <div className="col-12 col-sm-6">
                <nav className="footer-nav">
                  <ul>
                    <li>
                      <a href="#">Advertise</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Disclaimer</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
