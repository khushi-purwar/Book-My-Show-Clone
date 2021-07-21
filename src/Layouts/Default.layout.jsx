import React from "react";

// Components
import Navbar from "../Components/Navbar/navbar.Component";
import HeroCaraousel from "../Components/HeroCaraousel/HeroCaraousel.Component";


const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCaraousel />
      {props.children}
    </>
  );
};

export default DefaultLayout;
