import React from "react";


// Components
import MovieNavbar from "../Components/Navbar/movieNavbar.Component";

const MovieLayout = (props) => {
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;