import React from "react";

const Header = props => {
  return (
    <section className="article-header">
      <h2>{props.title}</h2>
      <h5 className="article-social">
        <ul>
          <li>
            <a className="fb" href="#">
              <i className="fa fa-facebook"></i>
              <span>2</span>
            </a>
          </li>
          <li>
            <a className="fb twitter" href="#">
              <i className="fa fa-twitter"></i>
              <span></span>
            </a>
          </li>
          <li>
            <a className="fb comment" href="#">
              <i className="fa fa-comment"></i>
              <span>2</span>
            </a>
          </li>
        </ul>
      </h5>
      <h4>{props.date}</h4>
    </section>
  );
};

export default Header;
