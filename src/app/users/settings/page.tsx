"use client"

import Link from "next/link";
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { menuLinks } from "@/data/sidebarLinks";

function page() {

  return (
    <>
      <div className={`w-full duration-200 ease-in-out min-h-screen flex flex-col justify-start items-center gap-5 pb-10 relative`}>

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
          <h1 className={`text-2xl sm:text-3xl`}>Settings</h1>
        </div>

        <p className={`text-start w-[95%] md:w-[60%] lg:w-[40%] text-xl px-2 font-bold mt-5`}>General</p>
        
        <div className={`w-[95%] md:w-[60%] lg:w-[40%] px-5 py-5 bg-gray-200 rounded-md md:rounded-lg flex flex-col justify-center items-start gap-3`}>
          <input type="email" className={`w-full py-2 px-3 rounded-md bg-white`} placeholder="Update email"/>
          <input type="text" className={`w-full py-2 px-3 rounded-md bg-white`} placeholder="Update name"/>
          <input type="text" className={`w-full py-2 px-3 rounded-md bg-white`} placeholder="Update number"/>
          <p className={`w-full rounded-md bg-black text-white text-center py-2 cursor-pointer hover:opacity-70 duration-200 ease-in-out`}>Update</p>
        </div>

        <p className={`text-start w-[95%] md:w-[60%] lg:w-[40%] text-xl px-2 font-bold mt-5`}>Website</p>

        <div className={`w-[95%] md:w-[60%] lg:w-[40%] px-5 py-5 bg-gray-200 rounded-md md:rounded-lg flex flex-col justify-center items-start gap-3`}>
          <p className={`text-[12px] text-center sm:text-sm md:text-lg`}>Subscribe to our latest updates, newsletters and offers</p>
          <p className={`w-full rounded-md text-center bg-green-500 py-2 cursor-pointer hover:opacity-70 duration-200 ease-in-out`}>Subscribe</p>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default page
