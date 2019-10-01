import React from "react";

const FooterSocial = props => {
  return (
    <div className="bottom-social-icons">
      <ul>
        <li>
          <a className="fb" href="#">
            <i className="fa fa-facebook"></i>
            <span>Share on facebook</span>
          </a>
        </li>
        <li>
          <a className="fb twitter" href="#">
            <i className="fa fa-twitter"></i>
            <span>Tweet This</span>
          </a>
        </li>
        <li>
          <a className="fb comment" href="#">
            <i className="fa fa-comment"></i>
            <span>Comments</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
