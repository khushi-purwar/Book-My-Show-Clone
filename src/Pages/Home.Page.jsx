import React from "react";

//components
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.Component";
// import Premier from "../Components/Premier/Premier.Component";
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";

// config
import PremierePosters from '../config/PremierePosters.config';
import StreamingPosters from '../config/StreamingPoster.config';
import OutdoorPosters from "../config/Outdoor.config";


const HomePage = () => {
    return (
        <>
            <div className="">
                <div className="conatiner mx-auto px-10 py-10">
                    <h1 className="text-2xl font-bold text-gray-800 my-3">The Best Of Entertainment</h1>
                    <EntertainmentCardSlider />

                </div>

                <div className="bg-bms-800 py-12 px-10 ">
                    <div className="container mx-auto flex flex-col gap-3">
                        <div className="hidden md:flex">
                            <img
                                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="Premier"
                                className="w-full h-full"
                            />
                        </div>
                        <PosterSlider
                            images={PremierePosters}
                            title="Premieres"
                            subtitle="Brand new releases every Friday"
                            isDark
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-10 py-8">
                <PosterSlider
                    images={StreamingPosters}
                    title="Online Streaming Events"
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-10 py-8">
                <PosterSlider
                    images={OutdoorPosters}
                    title="Outdoor Events"
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-10 py-8">
                <PosterSlider
                    images={StreamingPosters}
                    title="Laughter Therapy"
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-10 py-8">
                <PosterSlider
                    images={OutdoorPosters}
                    title="Popular Events"
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-10 py-8">
                <PosterSlider
                    images={OutdoorPosters}
                    title="The Latest Plays"
                    isDark={false}
                />
            </div>

        </>
    )
};

export default HomePage;