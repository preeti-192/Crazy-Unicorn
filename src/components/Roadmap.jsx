import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Roadmap = () => {
  return (
    <>
      <section className="position-relative py-sm-5" id="roadmap">
        <div class="noot-1"> &#9833; &#9836;</div>
        <div class="noot-2">&#9833; &#9733;</div>
        <div class="noot-3">&#9835; &#9834;</div>
        <div class="noot-4">&#9835; &#9834; &#9836;</div>
        <div class="noot-5">&#9834; &#9733;</div>
        <Container className=" py-lg-5 my-md-5">
          <h2 className=" text-center ff_PinkyUnicorn color_black fs_3xl">
            Roa
            <span className=" unicorn_img">dMap</span>
          </h2>
          <div class="timeline-container py-sm-5">
            <div
              class="timeline-block timeline-block-left"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <div class="timeline-content">
                <h3 className=" ff_PinkyUnicorn fs_2xl color_black mb-3">
                  Phase 1
                </h3>
                <p className=" ff_ComicNeue fw-normal fs_md color_black">
                  Sed lectus ut elit id lectus diam massa nisl pretium.
                  Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus
                  netus sed varius loborti orbi sit sit magna lorem arcu.
                </p>
              </div>
            </div>
            <div
              class="timeline-block timeline-block-right"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <div class="timeline-content">
                <h3 className=" ff_PinkyUnicorn fs_2xl color_black mb-3">
                  Phase 2
                </h3>
                <p className=" ff_ComicNeue fw-normal fs_md color_black">
                  Sed lectus ut elit id lectus diam massa nisl pretium.
                  Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus
                  netus sed varius loborti orbi sit sit magna lorem arcu.
                </p>
              </div>
            </div>
            <div>
              <div class="timeline-block timeline-block-left translate70">
                <div class="timeline-content pe-lg-5">
                  <h3
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    className=" ff_PinkyUnicorn fs_2xl color_black mb-3"
                  >
                    Phase 3
                  </h3>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    className=" ff_ComicNeue fw-normal fs_md color_black"
                  >
                    Sed lectus ut elit id lectus diam massa nisl pretium.
                    Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus
                    netus sed varius loborti orbi sit sit magna lorem arcu.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <div class="timeline-block timeline-block-right translateXY">
                <div class="timeline-content">
                  <h3
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    className=" ff_PinkyUnicorn fs_2xl color_black mb-3"
                  >
                    Phase 4
                  </h3>
                  <p
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    className=" ff_ComicNeue fw-normal fs_md color_black"
                  >
                    Sed lectus ut elit id lectus diam massa nisl pretium.
                    Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus
                    netus sed varius loborti orbi sit sit magna lorem arcu.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <div class="timeline-block timeline-block-left translate125">
                <div class="timeline-content pe-lg-5">
                  <h3
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    className=" ff_PinkyUnicorn fs_2xl color_black mb-3"
                  >
                    Phase 5
                  </h3>
                  <p
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    className=" ff_ComicNeue fw-normal fs_md color_black pe-lg-5"
                  >
                    Sed lectus ut elit id lectus diam massa nisl pretium.
                    Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus
                    netus sed varius loborti orbi sit sit magna lorem arcu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Roadmap;
