"use client"

import Link from "next/link";
import Footer from '@/components/Footer';

function page() {
    return (
        <>
            <div className={`w-full min-h-screen flex flex-col justify-center items-center gap-5 relative`}>
                <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl fixed top-0 flex justify-center items-center`}>
                    <p className={`tracking-widest motion-preset-compress motion-duration-1500 text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium`}>OPENSPACE</p>
                </div>

                
            </div>

            <Footer />
        </>
    )
}

export default page
