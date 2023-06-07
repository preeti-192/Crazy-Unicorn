import "./App.css";
import Faq from "./components/Faq";
import Header from "./components/Header";
import MyNav from "./components/MyNav";
import OurStory from "./components/OurStory";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LoaderHome from "./components/LoaderHome";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div className="overflow-hidden page_bg">
        <LoaderHome />
        <BackToTop />
        <Header />
        <OurStory />
        <About />
        <Roadmap />
        <Team />
        <Faq />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}

export default App;
