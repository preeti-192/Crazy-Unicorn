import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import unicorn from "../assets/images/png/unicorn2.png";

const Team = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    cssEase: "linear",
    touchMove: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <>
      <section className=" py-5 position-relative" id="team">
        <div class="noot-1"> &#9833; &#9836;</div>
        <div class="noot-2">&#9833; &#9733;</div>
        <div class="noot-3">&#9835; &#9834;</div>
        <div class="noot-4">&#9835; &#9834; &#9836;</div>
        <div class="noot-5">&#9834; &#9733;</div>
        <Container>
          <h2 className=" text-center ff_PinkyUnicorn color_black fs_3xl">
            <span className=" unicorn_img"> Team</span>
          </h2>

          <Slider {...settings} className="team_slider py-5">
            <div
              className="px-3"
              data-aos="flip-down"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              data-aos-offset="500"
            >
              <div class="slider_box d-flex flex-column justify-content-center align-items-center">
                <img
                  src={unicorn}
                  alt="unicorn"
                  className="transform_unicorn"
                />
                <h3 class=" ff_PinkyUnicorn fs_2xl color_black text-center">
                  Jerome Bell
                </h3>
                <p class=" ff_SpacegroteskReg fs_sm mb-3 color_black">(CEO)</p>
              </div>
            </div>
            <div
              className="px-3"
              data-aos="flip-down"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              data-aos-offset="500"
            >
              <div class="slider_box d-flex flex-column justify-content-center align-items-center">
                <img
                  src={unicorn}
                  alt="unicorn"
                  className="transform_unicorn"
                />
                <h3 class=" ff_PinkyUnicorn fs_2xl color_black text-center">
                  Jenny Wilson
                </h3>
                <p class=" ff_SpacegroteskReg fs_sm mb-3 color_black">
                  (Founder)
                </p>
              </div>
            </div>
            <div
              className="px-3"
              data-aos="flip-down"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              data-aos-offset="500"
            >
              <div class="slider_box d-flex flex-column justify-content-center align-items-center">
                <img
                  src={unicorn}
                  alt="unicorn"
                  className="transform_unicorn"
                />
                <h3 class=" ff_PinkyUnicorn fs_2xl color_black text-center">
                  Ralph Edwards
                </h3>
                <p class=" ff_SpacegroteskReg fs_sm mb-3 color_black">
                  (Team Member)
                </p>
              </div>
            </div>
            <div
              className="px-3"
              data-aos="flip-down"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              data-aos-offset="500"
            >
              <div class="slider_box d-flex flex-column justify-content-center align-items-center">
                <img
                  src={unicorn}
                  alt="unicorn"
                  className="transform_unicorn"
                />
                <h3 class=" ff_PinkyUnicorn fs_2xl color_black text-center">
                  Jenny Wilson
                </h3>
                <p class=" ff_SpacegroteskReg fs_sm mb-3 color_black">
                  (Founder)
                </p>
              </div>
            </div>
            <div
              className="px-3"
              data-aos="flip-down"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              data-aos-offset="500"
            >
              <div class="slider_box d-flex flex-column justify-content-center align-items-center">
                <img
                  src={unicorn}
                  alt="unicorn"
                  className="transform_unicorn"
                />
                <h3 class=" ff_PinkyUnicorn fs_2xl color_black text-center">
                  Ralph Edwards
                </h3>
                <p class=" ff_SpacegroteskReg fs_sm mb-3 color_black">
                  (Team Member)
                </p>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Team;
