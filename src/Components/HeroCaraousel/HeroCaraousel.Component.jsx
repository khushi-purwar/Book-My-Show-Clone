import React , {useState, useEffect} from 'react'
import HeroSlider from "react-slick";
import axios from 'axios';

// component
import {NextArrow, PrevArrow} from './Arrows.Component'

const HeroCaraousel = () => {

    const [images, setImages] = useState( [] );

    useEffect( ()=>{   
        const requestNowPlayingMovie = async()=>{
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovie();
    } ,[])    // make api call once

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow : <NextArrow/>,
        prevArrow : <PrevArrow />
    }

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow : <NextArrow/>,
        prevArrow : <PrevArrow />
    };

   
    return (
        <>

            {/* only for small and medium devices */}
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="images"
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            {/* only for large screen */}
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="images"
                                className="w-full h-full rounded-md"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    )
}

export default HeroCaraousel
