import React from "react";

const RelatedArticles = props => {
  return (
    <section className="related-articles">
      <h5>RELATED ARTICLES</h5>
      <div className="col-12 main-related">
        <a href="#">
          <div className="col-sm-6 related-left">
            <div className="col-sm-6 related-left-sub">
              <img src="images/puri_bala21569557914.jpg" />
            </div>
            <div className="col-sm-6 related-left-sub right-cont">
              Puri to Announce Balayya's Film?
            </div>
          </div>
        </a>
        <a href="#">
          <div className="col-sm-6 related-left">
            <div className="col-sm-6 related-left-sub">
              <img src="images/riteish-genelia11569564258.jpg" />
            </div>
            <div className="col-sm-6 related-left-sub right-cont">
              Good or bad, Riteish will always have Genelia's heart
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default RelatedArticles;
