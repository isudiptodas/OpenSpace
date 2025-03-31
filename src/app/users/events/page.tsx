"use client"

import Link from "next/link";
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { menuLinks } from "@/data/sidebarLinks";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import EventBox from "@/components/EventBox";

function page() {


    return (
        <>
            <div className={`w-full duration-200 ease-in-out min-h-screen flex flex-col justify-start items-center gap-5 pb-10 relative`}>

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

                <h1 className={`w-full text-2xl font-bold text-center mb-5`}>Explore Events</h1>

                <div className={`w-[95%] md:w-[90%] h-auto px-3 py-3 rounded-md md:rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gray-200 gap-5`}>
                    <EventBox/>
                    <EventBox/>
                    <EventBox/>
                    <EventBox/>
                    <EventBox/>
                    <EventBox/>
                    <EventBox/>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default page
