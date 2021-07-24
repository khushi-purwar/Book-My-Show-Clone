import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

// components
import MovieHero from '../Components/MovieHero/MovieHero.Component';
import Cast from '../Components/Cast/Cast.Component';
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";

// config
// import StreamingPosters from '../config/StreamingPoster.config';

// icons
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa'

// context
import { MovieContext } from '../context/Movie.context';


const Movie = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState();
  const [similarMovie, setSimilarMovie] = useState();
  const [recommended , setRecommended] = useState();

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`)

      setCast(getCast.data.cast);

    }
    requestCast();
  }, [id])

  useEffect (()=>{
    const requestSimilarMovie = async()=>{
        const getSimilarMovies = await axios.get(`/movie/${id}/similar`)
        setSimilarMovie(getSimilarMovies.data.results);
    }
    requestSimilarMovie();
},[id])

useEffect (()=>{
  const requestRecommendedMovies = async()=>{
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`)
      setRecommended(getRecommendedMovies.data.results);
  }
  requestRecommendedMovies();
},[id])

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container lg:w-2/3 lg:ml-12">
        {/* about section */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
          <p> {movie.overview}
          </p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Applicable offers section */}

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl my-8">Applicable Offers</h2>
          <div className=" flex flex-col gap-3 md:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-400 border-dashed rounded">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start ">
                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offers</h3>
                <p className="text-gray-600">Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.</p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-400 border-dashed rounded">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start ">
                <h3 className="text-gray-700 text-xl font-bold">Apple Pay Offers</h3>
                <p className="text-gray-600">Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* cast and crew section */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast</h2>
          
          <Slider {...settingsCast}>
            {cast.map((castdata) => (
              <Cast
                image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                castName={castdata.original_name}
                role={castdata.character}
              />
            ))}
          </Slider>
         
        </div>

      

        <div className="my-8">
          <hr />
        </div>

        {/* poster scetion */}

        <div className="my-8">
          <PosterSlider
            config={settings}
            images={similarMovie}
            title="You Might Also Like"
          />
        </div>

        <div className="my-8">
          <hr />
        </div>


        <div className="my-8">
          <PosterSlider
            config={settings}
            images={recommended}
            title="BMS XCLUSIVE"
          />
        </div>

      </div>
    </>
  )
}

export default Movie;
