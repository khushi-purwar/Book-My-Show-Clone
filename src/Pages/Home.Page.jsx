import React , {useState, useEffect} from "react";

//components
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.Component";
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";

// config
// import PremierePosters from '../config/PremierePosters.config';
// import StreamingPosters from '../config/StreamingPoster.config';
// import OutdoorPosters from "../config/Outdoor.config";
import axios from "axios";


const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState( [] );
    const [topRatedMovies, setTopRatedMovies] = useState( [] );
    const [upcomingMovies, setUpcomingMovies] = useState( [] );

    useEffect (()=>{
        const requestPopularMovies = async()=>{
            const getPopularMovies = await axios.get("/movie/popular")
            setPopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    },[])

    useEffect (()=>{
        const requestTopRatedMovies = async()=>{
            const getTopRatedMovies = await axios.get("/movie/top_rated")
            setTopRatedMovies(getTopRatedMovies.data.results);
        }
        requestTopRatedMovies();
    },[])

    useEffect (()=>{
        const requestUpcomingMovies = async()=>{
            const getUpcomingMovies = await axios.get("/movie/upcoming")
            setUpcomingMovies(getUpcomingMovies.data.results);
        }
        requestUpcomingMovies();
    },[])


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
                            images={popularMovies}
                            title="Premieres"
                            subtitle="Brand new releases every Friday"
                            isDark
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-10 py-2">
                <PosterSlider
                    images={topRatedMovies}
                    title="Online Streaming Events"
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-10 py-2">
                <PosterSlider
                    images={upcomingMovies}
                    title="Outdoor Events"
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-10 py-2">
                <PosterSlider
                    images={popularMovies}
                    title="Laughter Therapy"
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-10 py-2">
                <PosterSlider
                    images={topRatedMovies}
                    title="Popular Events"
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-10 py-2">
                <PosterSlider
                    images={upcomingMovies}
                    title="The Latest Plays"
                    isDark={false}
                />
            </div>

        </>
    )
};

export default HomePage;