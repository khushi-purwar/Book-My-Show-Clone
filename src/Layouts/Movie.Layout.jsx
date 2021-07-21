import React from "react";

// Components
import Navbar from "../Components/Navbar/navbar.Component";

const MovieLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default MovieLayout;