import React from 'react'

// components
import MovieHero from '../Components/MovieHero/MovieHero.Component';
import Cast from '../Components/Cast/Cast.Component';
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";

// config
import StreamingPosters from '../config/StreamingPoster.config';

// icons
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa'

const Movie = () => {

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

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-8 lg:w-2/3 lg:ml-20">
        {/* about section */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
          <p>Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
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
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h2>
          <div className="flex flex-wrap gap-4">
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
              castName="Ben Affleck"
              role="Batman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
              castName="Gal Gadot"
              role="Wonder Woman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ezra-miller-34889-24-03-2017-16-04-22.jpg"
              castName="Ezra Miller"
              role="Barry Allen"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
              castName="Ben Affleck"
              role="Batman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
              castName="Gal Gadot"
              role="Wonder Woman"
            />

          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* poster scetion */}

        <div className="my-8">
          <PosterSlider
            config={settings}
            images={StreamingPosters}
            title="You Might Also Like"
          />
        </div>

        <div className="my-8">
          <hr />
        </div>


        <div className="my-8">
          <PosterSlider
            config={settings}
            images={StreamingPosters}
            title="BMS XCLUSIVE"
          />
        </div>

      </div>
    </>
  )
}

export default Movie
