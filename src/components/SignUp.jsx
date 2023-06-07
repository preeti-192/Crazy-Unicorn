import React from "react";
import { Container } from "react-bootstrap";
import email_icon from "../assets/images/svg/email_icon.svg";

const SignUp = () => {
  return (
    <>
      <section className=" py-5 my-5 position-relative">
        <div class="noot-1">&#9835; &#9833; &#9733;</div>
        <div class="noot-2">&#9833; &#9733;</div>
        <div class="noot-3">&#9835; &#9834;</div>
        <div class="noot-4"> &#9733;&#9834;</div>
        <Container
          className=" my-lg-5 py-lg-5"
          data-aos="zoom-out-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <h2 className=" text-center ff_PinkyUnicorn fs_3xl color_black">
            Sign up for the latest news
          </h2>
          <p className=" text-center ff_ComicNeue fs_xl color_black mw_659 mx-auto">
            Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed
            aenean egestas ut sit.
          </p>
          <div className="d-flex justify-content-center">
            <div className=" position-relative d-inline-block">
              <input
                type="text"
                placeholder="Your email"
                className="email_box ff_ComicNeue color_black fs_sm"
              />
              <img
                src={email_icon}
                alt="email"
                className=" position-absolute email_icon"
              />
              <button className="mint_btn position-absolute subscribe_btn ff_PinkyUnicorn fs_3x5l">
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SignUp;
