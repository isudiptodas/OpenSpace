"use client"

import Link from "next/link";
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { menuLinks } from "@/data/sidebarLinks";
import { Toaster, toast } from 'sonner';
import axios from 'axios';


function page() {

    const[loaded, setLoaded] = useState(false);

    useEffect(()=> {
        setTimeout(()=> {
            setLoaded(true);
        }, 3000);
    }, []);


    return (
        <>
            <div className={`w-full ${loaded ? "hidden" : "block"} min-h-screen py-5 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-7`}>
                <div className={`w-full h-auto flex px-4 flex-col justify-start items-start gap-2`}>
                    <div className="w-full h-44 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                </div>
                <div className={`w-full h-auto flex px-4 flex-col justify-start items-start gap-2`}>
                    <div className="w-full h-44 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                </div>
                <div className={`w-full h-auto flex px-4 flex-col justify-start items-start gap-2`}>
                    <div className="w-full h-44 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                </div>
                <div className={`w-full h-auto flex px-4 flex-col justify-start items-start gap-2`}>
                    <div className="w-full h-44 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                </div>
                <div className={`w-full h-auto flex px-4 flex-col justify-start items-start gap-2`}>
                    <div className="w-full h-44 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                </div>
                <div className={`w-full h-auto flex px-4 flex-col justify-start items-start gap-2`}>
                    <div className="w-full h-44 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                    <div className="w-full h-12 rounded-md lg:rounded-lg bg-gray-200"></div>
                </div>
            </div>

            <div className={`w-full ${loaded ? "block" : "hidden"} duration-200 ease-in-out min-h-screen flex flex-col justify-start items-center gap-5 pb-10 relative`}>

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
                    <h1 className={`text-2xl sm:text-3xl`}>Past Campaigns</h1>
                </div>


               

            </div>

            <Footer />
        </>
    )
}

export default page
