"use client"

import Link from "next/link";
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { menuLinks } from "@/data/sidebarLinks";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import EventBox from "@/components/EventBox";
import { CiSearch } from "react-icons/ci";
import { Toaster, toast } from 'sonner';
import { FaLocationDot } from "react-icons/fa6";

function page() {

    const[lat, setLat] = useState('');
    const[long, setLong] = useState('');
    const[location, setLocation] = useState('');
    const[locationVisible, setLocationVisible] = useState(false);

    const handleLocationVisible = () => {
        setLocationVisible(!locationVisible);
    }

    const submitLocation = () => {
        if(location === ''){
            toast.error("Please enter a location");
            return;
        }

        console.log(location);
        setLocationVisible(!locationVisible);
    }

    return (
        <>
            <div className={`w-full duration-200 ease-in-out min-h-screen flex flex-col justify-start items-center gap-5 pb-10 relative`}>

                <Toaster position="top-center" richColors/>

                {/* navbar */}
                <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl fixed top-0 flex justify-center items-center`}>
                    <p className={`tracking-widest text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium duration-200 ease-in-out`}>OPENSPACE</p>
                </div>

                {/* floating menu dock */}
                <div className="w-full flex justify-end md:justify-center z-50 lg:z-10 items-center fixed bottom-7 px-5">
                    <div className=" w-auto ">
                        <FloatingDock
                            items={menuLinks}
                        />
                    </div>
                </div>

                {/* content section */}
                <div className={`w-[95%] md:w-[90%] md:mt-20 mt-14 border-b-[1px] border-black shadow-2xl h-auto py-3 px-4 sm:px-5 sm:py-5 rounded-md lg:rounded-lg`}>
                    <h1 className={`text-2xl sm:text-3xl`}>Events</h1>
                </div>

                <div className={`w-[95%] md:w-[90%] py-5 md:py-7  px-4 h-auto grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-3`}>

                    <div className={`w-full group h-36 rounded-md lg:rounded-lg overflow-hidden bg-gradient-to-r from-yellow-300 via-orange-400 to-fuchsia-500 flex flex-col justify-end items-start px-5 pb-3 cursor-pointer`}>
                        <h1 className={`text-2xl font-bold text-white`}>Host new event</h1>
                        <p className={`flex justify-center items-center gap-2 text-start text-sm text-white`}>Start by uploading more details <MdKeyboardDoubleArrowRight className="text-2xl opacity-0 group-hover:opacity-100 duration-500 ease-in-out transition-opacity" />  </p>
                    </div>

                    <div className={`w-full group h-36 rounded-md lg:rounded-lg overflow-hidden bg-gradient-to-r from-teal-300 via-cyan-400 to-indigo-500 flex flex-col justify-end items-start px-5 pb-3 cursor-pointer`}>
                        <h1 className={`text-2xl font-bold text-white`}>Past Events</h1>
                        <p className={`flex justify-center items-center gap-2 text-start text-sm text-white`}>View your all attended events <MdKeyboardDoubleArrowRight className="text-2xl opacity-0 group-hover:opacity-100 duration-500 ease-in-out transition-opacity" />  </p>
                    </div>
                </div>

                <div className="w-[95%] md:w-[90%] py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-3 relative">
                    <div className="w-full md:w-[20%] flex flex-col h-auto py-2 justify-center relative items-center gap-2">
                        <p className="bg-black text-white text-start py-2 px-4 lg:py-3 rounded-full w-full flex justify-start items-center gap-2 hover:opacity-75 duration-200 ease-in-out cursor-pointer" onClick={handleLocationVisible}><FaLocationDot />{location || "Location"}</p>

                        <div className={`w-full ${locationVisible ? "block" : "hidden"} absolute top-0 rounded-md lg:rounded-lg flex flex-col justify-start items-center bg-gray-200 gap-3 py-2 px-3`}>
                            <input type="text" className="bg-white py-2 px-3 w-full rounded-full" placeholder="Enter location" onChange={(e) => setLocation(e.target.value)} />
                            <p className="bg-black text-white text-center py-2 rounded-full w-full cursor-pointer hover:opacity-75 duration-200 ease-in-out active:scale-95" onClick={submitLocation}>Submit</p>
                            <p className="bg-black text-white text-center py-2 rounded-full w-full cursor-pointer hover:opacity-75 duration-200 ease-in-out active:scale-95">Auto Search</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[80%] flex justify-between items-center">
                        <input type="text" className="w-[85%] sm:w-[90%] md:w-[95%] rounded-full py-2 lg:py-3 text-sm px-4 bg-gray-200" placeholder="Enter search term" />
                        <span className="p-2 lg:p-3 bg-black text-white cursor-pointer rounded-full hover:opacity-75 duration-200 ease-in-out active:scale-95"><CiSearch className="font-semibold lg:font-bold" /></span>
                    </div>
                </div>

                <h1 className={`w-full text-2xl lg:text-5xl lg:mt-3 font-bold text-center mb-5`}>Explore Events</h1>

                <div className={`w-[95%] md:w-[90%] h-auto px-3 py-3 rounded-md md:rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gray-200 lg:bg-transparent gap-5`}>
                    <EventBox />
                    <EventBox />
                    <EventBox />
                    <EventBox />
                    <EventBox />
                    <EventBox />
                    <EventBox />
                </div>

            </div>

            <Footer />
        </>
    )
}

export default page
