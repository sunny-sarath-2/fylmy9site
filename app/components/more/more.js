import React from "react";

const More = props => {
  return (
    <section className="related-articles">
      <h5>MORE FROM - fylmy9</h5>

      <div className="col-12 main-related">
        <a href="#">
          <div className="col-sm-12 related-left inner">
            <div className="col-sm-6 related-left-sub">
              <img src="images/allu11570194449.jpg" />
            </div>
            <div className="col-sm-6 related-left-sub right-cont inner-heading">
              Allu's Well: Bunny's Private Talk with Charan
              <h4>4/10/2019 18:37 IST</h4>
            </div>
          </div>
        </a>
      </div>
      <div className="col-12 main-related">
        <a href="#">
          <div className="col-sm-12 related-left inner">
            <div className="col-sm-6 related-left-sub">
              <img src="images/syeraa81570166628.jpg" />
            </div>
            <div className="col-sm-6 related-left-sub right-cont inner-heading">
              Sye Raa Needs a Jump This Weekend
              <h4>4/10/2019 10:53 IST</h4>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default More;
