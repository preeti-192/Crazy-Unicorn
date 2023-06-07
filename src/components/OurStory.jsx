import React from "react";
import { Container } from "react-bootstrap";

const OurStory = () => {
  return (
    <>
      <section className="py-5 my-xl-5 position-relative" id="story">
        <div class="noot-1"> &#9833; &#9836;</div>
        <div class="noot-2">&#9833; &#9733;</div>
        <div class="noot-3">&#9835; &#9834;</div>
        <div class="noot-4">&#9835; &#9834; &#9836;</div>
        <div class="noot-5">&#9834; &#9733;</div>
        <Container className=" position-relative z-3">
          <h2 className=" text-center ff_PinkyUnicorn color_black fs_3xl">
            Our
            <span className=" unicorn_img"> Story</span>
          </h2>
          <p className=" text-center ff_ComicNeue fs_xl color_black mx-auto fw-normal mt-3">
            Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi, sit.
            Sagittis, ac velit gravida a nullam lobortis in malesuada. Cras
            pellentesque convallis semper dolor at velit diam odio. Nullam quam
            sollicitudin urna eget. In gravida maecenas amet tincidunt feugiat
            tellus, pulvinar nulla. Ultricies eu lectus consequat et imperdiet
            eget elementum. Euismod placerat amet nisl sagittis arcu, et,
            sodales velit. Pretium elit volutpat orci accumsan, a ac id rutrum
            enim. Tellus luctus eget elit vitae eget nisl ante.
          </p>
          <p className=" text-center ff_ComicNeue fs_xl color_black mx-auto fw-normal">
            Sed lectus ut elit id lectus diam massa nisl pretium. Vel amet,
            sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed
            varius lobortis. Morbi sit sit magna lorem arcu facilisi ipsum sed
            amet. At bibendum egestas in maecenas.
          </p>
        </Container>
      </section>
    </>
  );
};

export default OurStory;
