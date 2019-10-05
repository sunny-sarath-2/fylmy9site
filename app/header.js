import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="header-area">
        <div className="top-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5">
                <div className="breaking-news-area align-items-center">
                  <div className="top-social-info">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </div>
                  <div className="news-title">
                    <a href="#">Got a tip?</a>
                    <p>EMAIL OR CALL (+91) 998-5883-9029</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2">
                <NavLink className="main-logo" to="/">
                  <img src="images/logo.png" />
                </NavLink>
              </div>
              <div className="col-12 col-md-5">
                <div className="top-meta-data d-flex align-items-center justify-content-end">
                  <div className="top-search-area">
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                      }}
                    >
                      <input type="search" id="topSearch" />
                      <button type="submit" className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vizew-main-menu" id="sticker">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav
                className="classy-navbar justify-content-between"
                id="vizewNav"
              >
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>

                  <div className="classynav">
                    <div className="sticky-logo">
                      <NavLink className="main-logo" to="/">
                        <img src="images/logo.png" />
                      </NavLink>
                    </div>
                    <ul>
                      <li className="active">
                        <NavLink to="/">News</NavLink>
                      </li>
                      <li>
                        <NavLink to="/gossips">Gossips</NavLink>
                      </li>
                      <li>
                        <NavLink to="/gallery">Gallery</NavLink>
                      </li>
                      <li>
                        <NavLink to="/trailers">Trailers</NavLink>
                      </li>
                      <li>
                        <NavLink to="/reviews">Reviews</NavLink>
                      </li>
                      <li>
                        <NavLink to="/interviews">Interviews</NavLink>
                      </li>
                    </ul>
                    <div className="sticky-search">
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                        }}
                      >
                        <input type="search" name="top-search" id="topSearch" />
                        <button type="submit" className="btn">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
