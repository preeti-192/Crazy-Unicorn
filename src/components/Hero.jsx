import React from "react";
import { Container } from "react-bootstrap";
import cloud1 from "../assets/images/webp/cloud1.webp";
import cloud2 from "../assets/images/webp/cloud2.webp";
import cloud3 from "../assets/images/webp/cloud3.webp";
import cloud4 from "../assets/images/webp/cloud4.webp";
import cloud5 from "../assets/images/webp/cloud5.webp";
import cloud6 from "../assets/images/png/cloud6.png";
import cloud7 from "../assets/images/png/cloud7.png";
import cloud8 from "../assets/images/png/cloud8.png";
import clouds from "../assets/images/png/clouds.png";
import cloud9 from "../assets/images/png/cloud9.png";
import rainbow from "../assets/images/png/rainbow.png";
import unicorn1 from "../assets/images/png/unicorn1.png";
import unicorn2 from "../assets/images/png/unicorn2.png";
import header_stars from "../assets/images/png/header_stars.png";
import header_star2 from "../assets/images/png/header_star2.png";

const Hero = () => {
  return (
    <>
      <section className="position-realative " id="home">
          <div class="noot-1"> &#9833; &#9836;</div>
          <div class="noot-2">&#9833; &#9733;</div>
          <div class="noot-3">&#9835; &#9834;</div>
          <div class="noot-4">&#9835; &#9834; &#9836;</div>
          <div class="noot-5">&#9834; &#9733;</div>
        <img
          src={header_stars}
          alt="header_stars"
          className="position-absolute start-0 mw_500 w-100"
        />
        <img
          src={header_star2}
          alt="header_stars"
          className="position-absolute end-0 bottom-0 mw_500 w-100 d-none d-md-block z-1"
        />
        <Container className=" py-5">
          <div className="d-flex justify-content-center align-items-lg-center position-relative">
            <img
              src={rainbow}
              alt="rainbow"
              className=" w-100 position-relative z-2"
            />
            {/* <div className=" d-flex position-absolute top-50 z-3">
              <img
                src={unicorn1}
                alt="unicorn"
                className=" w-100 mw_200 unicorns"
              />
              <img
                src={unicorn2}
                alt="unicorn"
                className="mx_37 w-100 mw_200 unicorns"
              />
              <img
                src={unicorn2}
                alt="unicorn"
                className="mx_37 w-100 mw_200 unicorns"
              />
            </div> */}
          </div>
          <img
            src={clouds}
            alt="clouds"
            className="d-none d-sm-block position-absolute start-0 top-50 clouds w-100 cloud_animation2"
          />
          <img
            src={cloud1}
            alt="cloud1"
            className="d-none d-sm-block position-absolute start-0 top-95 clouds z-3 cloud_animation"
          />
          <img
            src={cloud2}
            alt="cloud1"
            className="d-none d-sm-block position-absolute start-20 top-95 clouds cloud_animation2"
          />
          <img
            src={cloud3}
            alt="cloud1"
            className="d-none d-sm-block position-absolute start-50 top-95 clouds cloud_animation"
          />
          <img
            src={cloud4}
            alt="cloud1"
            className=" position-absolute end-0 top-95 clouds cloud_animation2"
          />
          <img
            src={cloud5}
            alt="cloud1"
            className=" position-absolute start-0 top-95 clouds"
          />
          <img
            src={cloud6}
            alt="cloud1"
            className="d-none d-sm-block position-absolute start-20 top-95 clouds z-3"
          />
          <img
            src={cloud7}
            alt="cloud1"
            className=" position-absolute start-20 top-95 clouds z-3"
          />
          <img
            src={cloud8}
            alt="cloud1"
            className=" position-absolute end-0 top-95 clouds"
          />
          <img
            src={cloud9}
            alt="cloud1"
            className=" position-absolute start-0 top-95 clouds"
          />
        </Container>
      </section>
    </>
  );
};

export default Hero;
