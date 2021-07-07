import React from "react";
import "./Footer.css";
import whitelogo from "../../image/somanywhite-logo.png";
import recog1 from "../../image/recog1.jpg";
import recog2 from "../../image/recog2.jpg";
import recog3 from "../../image/recog3.jpg";
import recog4 from "../../image/recog4.jpg";
import recog5 from "../../image/recog5.jpg";
import recog6 from "../../image/recog6.jpg";
import recog7 from "../../image/recog7.jpg";
import recog8 from "../../image/recog8.jpg";
import recog9 from "../../image/recog9.jpg";
import recog10 from "../../image/recog10.jpg";
import { InputGroup, FormControl, Button } from "react-bootstrap";
function Footer() {
  return (
    <footer className="bg-dark footer1">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-8">
            <img className="whitelogo mt-3" src={whitelogo} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12">
            <p className="paras">
              With 49 years of redefining the Indian interior décor and tiles
              industry, Somany Ceramics is your ideal destination for an
              extensive range of products including ceramic tile, floor tiles,
              polished vitrified tiles, digital tiles, wall tiles, wall
              claddings, sanitary ware, bathroom fittings, and state-of-the-art
              tile laying solutions. We are a complete décor solutions provider
              and understand the evolving needs of customers and the dynamic
              trends in the market. Our high quality craftsmanship,
              ground-breaking style and focus on innovation remains unparalleled
              in the industry. This is testified by our expertise in everything
              encompassing the domain of floor tiles design, bathroom tiles
              design, wall tiles design, kitchen tiles design, marble tiles,
              wooden floor tiles design, and bathroom fittings. We also offer
              world class tile laying solutions with our Tile Master training
              program, waterproof and chemical-resistant Ezy Grout, and Ezy Fix
              adhesive which makes us a one-stop shop for all your tiling needs.
              Build your dream spaces and experience limitless décor
              possibilities, only with Somany Ceramics.
              <span>&nbsp;Know More</span>
            </p>
            {/* <hr className="second-line"></hr> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-12">
            <InputGroup className="mb-3">
              <FormControl
                className="formcontrol"
                placeholder="Enter your email address and subscribe to our newsletter"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" className="buttn1">
                  SUBSCRIBE
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <hr></hr>
          </div>
        </div>
        <div className="row pb-5">
          <h5 className="our-recognition">Our Recognition</h5>
          <div className="col-md-1 col-5 m-2">
            <img className="recog1" src={recog1} alt="" />
          </div>
          <div className="col-md-1 col-5 m-2 ">
            <img className="recog2" src={recog2} alt="" />
          </div>
          <div className="col-md-1 col-5 m-2 ">
            <img className="recog3" src={recog3} alt="" />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog4" src={recog4} alt="" />
          </div>
          <div className="col-md-1 col-5 m-2 ">
            <img className="recog5" src={recog5} alt="" />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog6" src={recog6} alt="" />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog7" src={recog7} alt="" />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog8" src={recog8} alt="" />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog9" src={recog9} alt="" />
          </div>
          <div className="col-md-1 col-5 m-2">
            <img className="recog10" src={recog10} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
