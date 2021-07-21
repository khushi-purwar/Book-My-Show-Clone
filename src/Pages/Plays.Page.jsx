import React from 'react'


// components
import Poster from '../Components/Poster/poster.Component'
import PlaysFilter from '../Components/PlaysFilters/PlaysFilters.Component'

const Plays = () => {
    return (
        <>
            <div className="container mx-auto bg-gray-100 p-20">
                <div className="w-full lg:flex lg:flex-row-reverse gap-5">
                    {/* right part */}
                    <div className="lg:w-3/4">

                        <h2 className="font-bold text-2xl mb-4">Plays In Bangaluru</h2>
                        <div className="flex flex-wrap ">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">

                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telgu ₹400"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">

                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telgu ₹400"
                                />
                            </div>
                            <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">

                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telgu ₹400"
                                />
                            </div>
                            <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">

                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telgu ₹400"
                                />
                            </div>

                            <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">

                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telgu ₹400"
                                />
                            </div>
                            <div className="w-1/2  md:w-1/3 lg:w-3/12 my-3">

                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telgu ₹400"
                                />
                            </div>


                        </div>

                    </div>


                    {/* left part */}
                    <div className=" lg:w-3/12">
                        <h2 className="font-bold text-2xl mb-4">Filters</h2>
                        <div>
                            <PlaysFilter
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                            <PlaysFilter
                                title="Language"
                                tags={["Tamil", "Telgu", "English"]}
                            />
                            <PlaysFilter
                                title="Geners"
                                tags={["Drama", "Historical", "Comedy" ,"Adaption", "Online Streaming Plays"]}
                            />
                            <PlaysFilter
                                title="Price"
                                tags={["Free", "0-500", "501-2000" ,"Above 2000" ]}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Plays
