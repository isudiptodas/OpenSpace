"use client"

import Link from "next/link";
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { menuLinks } from "@/data/sidebarLinks";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import EventBox from "@/components/EventBox";
import { FaSearch } from "react-icons/fa";
import { Toaster, toast } from 'sonner';
import { FaLocationDot } from "react-icons/fa6";
import axios from 'axios';
import { LuAlarmClock } from "react-icons/lu";
import { IoAddOutline } from "react-icons/io5";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"

function page() {

    const eventsInfo = [
        {
            title: "Argha weds IIT Baba",
            shortDesc: 'Nothing just casually setting up.',
            location: "Techno Main Salt Lake"
        },
        {
            title: "Argha weds IIT Baba",
            shortDesc: 'Nothing just casually setting up.',
            location: "Techno Main Salt Lake"
        },
        {
            title: "Argha weds IIT Baba",
            shortDesc: 'Nothing just casually setting up.',
            location: "Techno Main Salt Lake"
        },
        {
            title: "Argha weds IIT Baba",
            shortDesc: 'Nothing just casually setting up.',
            location: "Techno Main Salt Lake"
        },
        {
            title: "Argha weds IIT Baba",
            shortDesc: 'Nothing just casually setting up.',
            location: "Techno Main Salt Lake"
        },
        {
            title: "Argha weds IIT Baba",
            shortDesc: 'Nothing just casually setting up.',
            location: "Techno Main Salt Lake"
        },
        {
            title: "Argha weds IIT Baba",
            shortDesc: 'Nothing just casually setting up.',
            location: "Techno Main Salt Lake"
        },
        {
            title: "Argha weds IIT Baba",
            shortDesc: 'Nothing just casually setting up.',
            location: "Techno Main Salt Lake"
        },
    ]

    const [lat, setLat] = useState<number>();
    const [long, setLong] = useState<number>();
    const [location, setLocation] = useState('');
    const [eventTitle, setEventTitle] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventPhoto, setEventPhoto] = useState('');
    const [locationVisible, setLocationVisible] = useState(false);

    const handleLocationVisible = () => {
        setLocationVisible(!locationVisible);
    }

    const submitLocation = () => {
        if (location === '') {
            toast.error("Please enter a location");
            return;
        }

        console.log(location);
        setLocationVisible(!locationVisible);
    }

    const locationSearch = async () => {

        navigator.geolocation.getCurrentPosition(async (pos) => {
            setLat(pos.coords.latitude);
            setLong(pos.coords.longitude);

            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;

            const api = process.env.NEXT_PUBLIC_OPENCAGE_API;

            const openCageUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${api}`;

            try {
                const res = await axios.get(openCageUrl);

                //console.log(res.data.results[0].components.city || res.data.results[0].components.suburb);
                setLocation(res.data.results[0].components.city || res.data.results[0].components.suburb);

                setLocationVisible(!locationVisible);
            }
            catch (err: unknown) {
                console.log(err);
            }
        });
    }

    return (
        <>
            <div className={`w-full duration-200 ease-in-out min-h-screen flex flex-col justify-start items-center gap-5 pb-10 relative`}>

                <Toaster position="top-center" richColors />

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

                    <div className={`w-full relative group h-36 rounded-md lg:rounded-lg overflow-hidden active:scale-95 duration-200 ease-in-out bg-gradient-to-r from-yellow-300 via-orange-400 to-fuchsia-500 flex flex-col justify-end items-start px-5 pb-3 cursor-pointer`}>
                        <IoAddOutline className="text-white absolute text-7xl rotate-6 opacity-55 top-8 font-bold right-2 duration-200 ease-in-out group-hover:top-10" />
                        <IoAddOutline className="text-white absolute text-4xl rotate-90 opacity-55 top-2 font-bold right-8 group-hover:right-10 duration-200 ease-in-out" />
                        <IoAddOutline className="text-white absolute text-6xl rotate-90 opacity-30 top-2 font-bold left-8 group-hover:top-5 duration-200 ease-in-out" />
                        <h1 className={`text-2xl font-bold text-white`}>Host new event</h1>
                        <p className={`flex justify-center items-center gap-2 text-start text-sm text-white`}>Start by uploading more details <MdKeyboardDoubleArrowRight className="text-2xl opacity-0 group-hover:opacity-100 duration-500 ease-in-out transition-opacity" />  </p>
                    </div>

                    <div className={`w-full relative group h-36 rounded-md lg:rounded-lg overflow-hidden active:scale-95 duration-200 ease-in-out bg-gradient-to-r from-teal-300 via-cyan-400 to-indigo-500 flex flex-col justify-end items-start px-5 pb-3 cursor-pointer`}>
                        <LuAlarmClock className="text-white absolute text-7xl rotate-12 opacity-55 top-2 font-bold right-2 group-hover:right-5 duration-200 ease-in-out" />
                        <LuAlarmClock className="text-white absolute text-3xl rotate-[26deg] opacity-50 bottom-5 font-bold right-2 group-hover:right-10 duration-200 ease-in-out" />
                        <LuAlarmClock className="text-white absolute text-5xl rotate-[42deg] opacity-30 top-5 font-bold left-2 group-hover:top-2 duration-200 ease-in-out" />
                        <h1 className={`text-2xl font-bold text-white`}>Past Events</h1>
                        <p className={`flex justify-center items-center gap-2 text-start text-sm text-white`}>View your all attended events <MdKeyboardDoubleArrowRight className="text-2xl opacity-0 group-hover:opacity-100 duration-500 ease-in-out transition-opacity" />  </p>
                    </div>
                </div>

                <div className="w-[95%] md:w-[90%] py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-3 relative">
                    <div className="w-full md:w-[20%] flex flex-col h-auto py-2 justify-center relative items-center gap-2">
                        <p className="bg-black text-white text-start py-2 px-4 lg:py-3 rounded-full w-full flex justify-start items-center gap-2 hover:opacity-75 duration-200 ease-in-out cursor-pointer" onClick={handleLocationVisible}><FaLocationDot />{location || "Location"}</p>

                        <div className={`w-full ${locationVisible ? "block" : "hidden"} absolute top-0 rounded-md lg:rounded-lg flex flex-col justify-start items-center bg-gray-200 gap-3 py-2 px-3`}>
                            <input type="text" className="bg-white py-2 px-3 w-full rounded-full" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
                            <p className="bg-black text-white text-center py-2 rounded-full w-full cursor-pointer hover:opacity-75 duration-200 ease-in-out active:scale-95" onClick={submitLocation}>Submit</p>
                            <p className="bg-black text-white text-center py-2 rounded-full w-full cursor-pointer hover:opacity-75 duration-200 ease-in-out active:scale-95" onClick={locationSearch}>Auto Search</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[80%] flex justify-between items-center">
                        <input type="text" className="w-[85%] sm:w-[90%] md:w-[95%] rounded-full py-2 lg:py-3 text-sm px-4 bg-gray-200" placeholder="Enter search term" />
                        <span className="p-2 lg:p-3 bg-black text-white cursor-pointer rounded-full hover:opacity-75 duration-200 ease-in-out active:scale-95"><FaSearch className="font-semibold lg:font-bold" /></span>
                    </div>
                </div>


                {/* drawer box */}
                <Drawer>
                    <DrawerTrigger></DrawerTrigger>
                    <DrawerContent className="h-[60vh] px-4 md:px-10 py-4 md:py-8 w-full flex justify-center items-center">
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2">
                            <div className="w-full h-full md:h-full rounded-md p-5 lg:rounded-lg overflow-hidden">
                                <img src={eventPhoto} className="h-full w-full object-cover rounded-md lg:rounded-lg" />
                            </div>

                            <div className="w-full h-full md:h-full bg-red-400 flex flex-col justify-start items-start  px-2 py-3 overflow-hidden">
                                <h1 className="text-3xl lg:text-5xl font-bold w-full text-start">{eventTitle}</h1>
                                <p className="text-[12px] lg:text-sm w-full text-start">{eventTitle}</p>
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>


                <h1 className={`w-full text-2xl lg:text-5xl lg:mt-3 font-bold text-center mb-5`}>Explore Events</h1>

                <div className={`w-[95%] md:w-[90%] h-auto px-3 py-3 rounded-md md:rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gray-200 lg:bg-transparent gap-5`}>
                    {eventsInfo.map((event, index) => {
                        return <EventBox key={index} photo="/images/event1.jpg" title={event.title} shortDesc={event.shortDesc} location={event.location} onClick={() => {
                            const triggerButton = document.querySelector("[data-slot='drawer-trigger']") as HTMLButtonElement | null;
                            triggerButton?.click(); setEventDesc(event.shortDesc); setEventTitle(event.title); setEventPhoto('/images/event1.jpg');
                        }} />
                    })}
                </div>

            </div>

            <Footer />
        </>
    )
}

export default page
