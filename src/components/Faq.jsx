import React from "react";
import { Accordion, Container } from "react-bootstrap";
// import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <>
      <section className=" py-5 mt-5 position-relative" id="faq">
        <div class="noot-1"> &#9833; &#9836;</div>
        <div class="noot-2">&#9833; &#9733;</div>
        <div class="noot-3">&#9835; &#9834;</div>
        <div class="noot-4">&#9835; &#9834; &#9836;</div>
        <div class="noot-5">&#9834; &#9733;</div>
        <Container
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <h2 className=" text-center ff_PinkyUnicorn color_black fs_3xl mb-5 pb-lg-4">
            <span className=" unicorn_img"> FAQs</span>
          </h2>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Q.1 Eu faucibus lorem nulla cras ?
              </Accordion.Header>
              <Accordion.Body>
                Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                Vestibulum etiam egestas dictum tristique. Eu quis in eu nunc,
                aliquet in non elit. Dis tincidunt.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Q.2 Eu adipiscing ac felis mauris ?
              </Accordion.Header>
              <Accordion.Body>
                Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                Vestibulum etiam egestas dictum tristique. Eu quis in eu nunc,
                aliquet in non elit. Dis tincidunt.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Q.3 Ridiculus amet gravida accumsan dis ?
              </Accordion.Header>
              <Accordion.Body>
                Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                Vestibulum etiam egestas dictum tristique. Eu quis in eu nunc,
                aliquet in non elit. Dis tincidunt.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Q.4 Magna eu diam nec quis turpis tortor pulvinar ?
              </Accordion.Header>
              <Accordion.Body>
                Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                Vestibulum etiam egestas dictum tristique. Eu quis in eu nunc,
                aliquet in non elit. Dis tincidunt.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Q.5 Morbi at cursus ut in augue ?
              </Accordion.Header>
              <Accordion.Body>
                Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                Vestibulum etiam egestas dictum tristique. Eu quis in eu nunc,
                aliquet in non elit. Dis tincidunt.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Q.6 Cras pellentesque convallis semper dolor at vel ?
              </Accordion.Header>
              <Accordion.Body>
                Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                Vestibulum etiam egestas dictum tristique. Eu quis in eu nunc,
                aliquet in non elit. Dis tincidunt.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Q.7 gravida maecenas amet tincidunt feugiat ?
              </Accordion.Header>
              <Accordion.Body>
                Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                Vestibulum etiam egestas dictum tristique. Eu quis in eu nunc,
                aliquet in non elit. Dis tincidunt.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default Faq;
