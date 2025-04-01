"use client"

import Link from "next/link";
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { menuLinks } from "@/data/sidebarLinks";
import { IoSearchSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

function page() {

    const[filterVisible, setFilterVisible] = useState(false);
    const[filter, setFilter] = useState('Filter');

    return (
        <>
            <div className={`w-full duration-200 ease-in-out min-h-screen flex flex-col justify-start items-center gap-5 relative`}>
                
                {/* navbar */}
                <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl fixed top-0 flex justify-center items-center`}>
                    <p className={`tracking-widest text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium duration-200 ease-in-out`}>OPENSPACE</p>
                </div>

                {/* floating menu dock */}
                <div className="w-full flex justify-end md:justify-center items-center fixed bottom-7 px-5">
                    <div className=" w-auto ">
                        <FloatingDock
                            items={menuLinks}
                        />
                    </div>
                </div>

                {/* content section */}
                <div className={`w-[95%] md:w-[90%] md:mt-20 mt-14 border-b-[1px] border-black shadow-2xl h-auto py-3 px-4 sm:px-5 sm:py-5 rounded-md lg:rounded-lg`}>
                    <h1 className={`text-2xl sm:text-3xl`}>Crowdfunding</h1>
                </div>

                <div className="w-[95%] px-2 py-3 md:w-[90%] h-auto grid grid-cols-1 md:grid-cols-3 justify-items-center md:flex md:justify-between gap-2 relative">
                    <input type="text" className="w-full rounded-full bg-gray-200 px-3 py-2 " placeholder="Enter search term" />
                    <span className="w-full rounded-full py-2 bg-black text-white cursor-pointer hover:opacity-65 ease-in-out duration-200 active:scale-95 flex justify-center items-center md:hidden gap-2">Search <IoSearchSharp /> </span>
                    <span className="w-full md:w-auto md:p-3 rounded-full py-2 bg-black text-white cursor-pointer hover:opacity-65 ease-in-out duration-200 active:scale-95 md:flex justify-center items-center gap-2 hidden"> <IoSearchSharp /> </span>
                    <span className="w-full md:w-auto md:px-7 rounded-full py-2 bg-black text-white cursor-pointer hover:opacity-65 ease-in-out duration-200 active:scale-95 flex justify-center items-center gap-2 capitalize" onClick={() => setFilterVisible(!filterVisible)}>{filter} <FaFilter  /> </span>
                    
                    <div className={`w-[95%] md:w-[30%] md:right-0 bg-gray-200 absolute -bottom-24 lg:-bottom-28 rounded-md lg:rounded-lg flex flex-col h-auto px-2 p-3 justify-start items-center gap-2 ${filterVisible ? "block" : "hidden"}`}>
                        <span className="w-full py-2 rounded-md text-center hover:bg-white cursor-pointer text-[12px] md:text-sm duration-200 ease-in-out" onClick={() => {setFilter('newest'); setFilterVisible(!filterVisible)}}>Newest First</span>
                        <span className="w-full py-2 rounded-md text-center hover:bg-white cursor-pointer text-[12px] md:text-sm duration-200 ease-in-out" onClick={() => {setFilter('oldest'); setFilterVisible(!filterVisible)}}>Oldest First</span>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default page
