"use client"

import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import Footer from '@/components/Footer';

function page() {
    return (

        <>
            <div className={`w-full min-h-screen flex flex-col justify-start items-center gap-5 relative`}>
                <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl fixed top-0 flex justify-center items-center`}>
                    <p className={`tracking-widest motion-preset-compress motion-duration-1500 text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium`}>OPENSPACE</p>
                </div>

                <Link href='/' className={`w-auto h-auto absolute top-20 left-5 p-3 text-white bg-black rounded-full active:scale-95 duration-200 ease-in-out cursor-pointer hover:opacity-70`}><IoArrowBackOutline /> </Link>

                <div className={`w-full h-full flex flex-col justify-start items-center pb-10`}>
                    <h1 className="text-3xl font-bold py-3 w-auto px-5 border-b-2 border-black text-black mt-24">Contact</h1>

                    <div className="w-[90%] py-5 px-5 rounded-md lg:rounded-lg flex flex-col justify-center items-start border-[1px] border-black mt-5">
                        <p className="text-black text-[12px] lg:text-sm">We’d love to hear from you! Whether you have questions, need assistance, or want to share feedback, our team is here to help. Reach out to us anytime, and we’ll make sure to assist you as quickly as possible.</p>
                        <p className="text-black text-sm lg:text-lg font-semibold mt-4">Drop Us a Message</p>
                        <p className="text-black text-[12px] lg:text-sm">In case you want to connect with us or have any query kindly mail us at mail</p>                        

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default page
