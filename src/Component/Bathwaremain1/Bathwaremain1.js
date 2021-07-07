import React from "react";
import "./Bathwaremain1.css";
import { Button } from "react-bootstrap";

import bathwareimg1 from "../../image/bathwareimg1.jpg";
import bathwareimg2 from "../../image/bathwareimg2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
})


function Bathwaremain1() {
  return (
    <div className="bathwaremain1">
      <div className="container">
        <div className="row row-margin1">
          <div className="col-md-5 col-12" data-aos="fade-right">
            <img className="bathwareimg1" src={bathwareimg1} alt=""></img>
          </div>
          <div className="col-md-7 col-12" data-aos="fade-up">
            <h2 className="sanitaryware">SANITARYWARE</h2>
            <p className="quotes">
              Sanitaryware range from Somany offers comprehensive and classy
              washroom solutions. Each product in this range is crafted to cater
              to those who appreciate the finer things in life. Designed to
              soothe and stimulate the urbane and sophisticated, the styles
              range from contemporary to neo classical; some products are
              crafted by leading designers from Italy.
              <br/>
              <Button className=" btn btn-light know_more">KNOW MORE</Button>
            </p>
          </div>
        </div>
        <div className="row row-margin2">
            <div className="col-md-7 col-12" data-aos="fade-right">
            <h2 className="sanitaryware">BATH FITTINGS</h2>
            <p className="quotes">
              Sanitaryware range from Somany offers comprehensive and classy
              washroom solutions. Each product in this range is crafted to cater
              to those who appreciate the finer things in life. Designed to
              soothe and stimulate the urbane and sophisticated, the styles
              range from contemporary to neo classical; some products are
              crafted by leading designers from Italy.
              <br/>
              <Button className=" btn btn-light know_more">KNOW MORE</Button>
            </p>
            </div>
            <div className="col-md-5 col-12" data-aos="fade-up">
            <img className="bathwareimg2" src={bathwareimg2} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bathwaremain1;
