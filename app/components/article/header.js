import React from "react";
import moment from "moment";

const Header = props => {
  return (
    <section className="article-header">
      <a href="#">
        <h2
          onClick={() => {
            props.history.push(`/${props.news._id}`);
          }}
        >
          {props.title}
        </h2>
      </a>
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
      <h4>{moment(props.date).format("MMMM Do YYYY h:mm a")}</h4>
    </section>
  );
};

export default Header;
