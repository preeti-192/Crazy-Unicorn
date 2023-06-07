import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import unicorn from "../assets/images/png/unicorn2.png";

const About = () => {
  return (
    <>
      <section className=" py-5 position-relative" id="about">
        <div class="noot-1"> &#9833; &#9836;</div>
        <div class="noot-2">&#9833; &#9733; 🎶</div>
        <div class="noot-3">&#9835; 🎶 &#9834;</div>
        <div class="noot-4">&#9835; &#9834; &#9836;</div>
        <div class="noot-5">&#9834; &#9733;</div>
        <Container>
          <Row className=" align-items-center justify-content-lg-between ">
            <Col lg={6}>
              <Row>
                <Col md={8}>
                  <div className="about_cards">
                    <img
                      src={unicorn}
                      alt="unicorn"
                      className=" w-100 mw_386 AboutCard_unicorn"
                    />
                  </div>
                </Col>
                <Col md={4} className=" d-md-block d-none">
                  <div
                    className="aboutSmallCards mt-2"
                    data-aos="flip-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  >
                    <img
                      src={unicorn}
                      alt="unicorn"
                      className=" w-100 mw_386 transform_unicorn mh_229"
                    />
                  </div>
                  <div
                    className="aboutSmallCards mt-5"
                    data-aos="flip-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                  >
                    <img
                      src={unicorn}
                      alt="unicorn"
                      className=" w-100 mw_386 transform_unicorn mh_229"
                    />
                  </div>
                </Col>
              </Row>
              <div className="d-flex justify-content-between mt-5 gap-3">
                <div
                  className="aboutSmallCards"
                  data-aos="flip-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <img
                    src={unicorn}
                    alt="unicorn"
                    className=" w-100 mw_386 transform_unicorn mh_229"
                  />
                </div>
                <div
                  className="aboutSmallCards"
                  data-aos="flip-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <img
                    src={unicorn}
                    alt="unicorn"
                    className=" w-100 mw_386 transform_unicorn mh_229"
                  />
                </div>
                <div
                  className="aboutSmallCards"
                  data-aos="flip-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <img
                    src={unicorn}
                    alt="unicorn"
                    className=" w-100 mw_386 transform_unicorn mh_229"
                  />
                </div>
              </div>
            </Col>
            <Col
              lg={5}
              className=" mt-lg-0 mt-5 pt-5 pt-lg-0"
              data-aos="zoom-in-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <h2 className=" ff_PinkyUnicorn color_black fs_3xl">
                {" "}
                Abo
                <span className=" unicorn_img">ut Us</span>
              </h2>

              <p className="ff_ComicNeue fs_xl color_black mt-4">
                Tortor suscipit non habitant natoque elementum, lectus turpis.
                Maecenas viverra habitasse ut sit eleifend aenean. Egestas
                platea bibendum tempor non tempus egestas. Rhoncus sit est risus
                tellus lorem convallis. Amet pellentesque viverra euismod eget
                dignissim ullamcorper. In et ac amet, habitant erat fermentum
                eget aliquet lectus. Condimentum congue nibh nisl sed quis
                justo, senectus egestas.{" "}
              </p>
              <p className="ff_ComicNeue fs_xl color_black">
                In in ut scelerisque quam purus, quam. Porttitor aenean elit
                blandit gravida potenti sed. Mauris.
              </p>
              <button className="mint_btn ff_PinkyUnicorn fs_3x5l mt-5">
                <span>Mint Now</span>{" "}
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
