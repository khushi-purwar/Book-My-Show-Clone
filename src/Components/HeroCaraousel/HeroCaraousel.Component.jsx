import React from 'react'
import HeroSlider from "react-slick";

// component
import {NextArrow, PrevArrow} from './Arrows.Component'

const HeroCaraousel = () => {

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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow : <NextArrow/>,
        prevArrow : <PrevArrow />
    };

    const images = [
       "https://in.bmscdn.com/promotions/cms/creatives/1625720005981_upgradgrouppagebanner_webshowcase_1280x500.jpg",
       "https://in.bmscdn.com/promotions/cms/creatives/1625559967524_bsm_1280x500_romcom.jpg",
       "https://in.bmscdn.com/promotions/cms/creatives/1625135512787_bas_1280x500.jpg",
       "https://in.bmscdn.com/promotions/cms/creatives/1626065541062_spanishbundle1280x500ios.jpg",
       "https://in.bmscdn.com/promotions/cms/creatives/1626117212416_deveshdixitlive_ongroundshow_webshowcase_1280x500.jpg"
    ]
    return (
        <>

            {/* only for small and medium devices */}
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img
                                src={image}
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
                                src={image}
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
