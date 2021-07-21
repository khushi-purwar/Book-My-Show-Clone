import React from 'react'
import Slider from 'react-slick';

// component
import Poster from '../Poster/poster.Component';

// config
import PosterCaraouselSettings from '../../config/PosterCaraousel.config';

const PosterSlider = (props) => {

    const SliderConfig = props.config ? props.config : PosterCaraouselSettings
    return (
        <>
        <div className="flex flex-col items-start px-4 py-4">
            <h3 className={`text-2xl font-bold ${
            props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
            <p className={`text-sm ${
            props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
        </div>
        <Slider { ...SliderConfig  } >
            {props.images.map((image) => (
            <Poster {...image} isDark={props.isDark} />
            ) 
            )}
        </Slider>            
        </>
    )
}

export default PosterSlider;
