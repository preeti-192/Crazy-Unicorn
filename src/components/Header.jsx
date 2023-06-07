import React from "react";
import MyNav from "./MyNav";
import Hero from "./Hero";

const Header = () => {
  return (
    <>
      <div className="vh_100 d-flex flex-column position-relative">
        <MyNav />
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Header;
