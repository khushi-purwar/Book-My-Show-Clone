import React, {useEffect, useContext} from "react";
import axios from 'axios'
import {useParams} from "react-router-dom";

// Components
import MovieNavbar from "../Components/Navbar/movieNavbar.Component";

// context
import { MovieContext } from "../context/Movie.context";

const MovieLayout = (props) => {

  const {id} = useParams();
  const {movie, setMovie} = useContext(MovieContext);

  useEffect(() => {
     const requestMovie = async()=>{
       const getMovieData = await axios.get(`/movie/${id}`)
       setMovie(getMovieData.data);
     }
     requestMovie();
  }, [id])

  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;