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
                    <h1 className="text-3xl font-bold py-3 w-auto px-5 border-b-2 border-black text-black mt-24">Privacy Policy</h1>

                    <div className="w-[90%] py-5 px-5 rounded-md lg:rounded-lg flex flex-col justify-center items-start border-[1px] border-black mt-5">
                        <p className="text-black text-[12px] lg:text-sm">Welcome to OpenSpace, We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, including our Services, Events, Crowdfunding, and Marketplace features.</p>
                        <p className="text-black text-sm lg:text-lg font-semibold mt-4">Information We Collect :</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">1. Personal Information : </span> Name, email address, phone number, address, profile information, etc.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">2. Content You Provide : </span> Event details, service listings, crowdfunding campaigns, marketplace listings, messages.</p>
                        
                        <p className="text-black text-sm lg:text-lg font-semibold mt-4">How We Use Your Information We use the collected information to :</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> Deliver and manage the services you request.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> Host and manage events and crowdfunding campaigns. </p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> Facilitate buying, selling, and renting in the marketplace. </p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> Communicate with you, including promotional messages. </p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> Improve our services and user experience. </p>
                    
                        <p className="text-black text-sm lg:text-lg font-semibold mt-4"> How We Share Your Information We may share your information:</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> With service providers who perform services on our behalf.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> With other users (e.g., when you list an item, host an event, or start a campaign). </p>
                        
                        <p className="text-black text-sm lg:text-lg font-semibold mt-4"> Your Choices and Rights:</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> You can update or delete your profile information. </p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> You can opt-out of marketing emails. </p>
                    
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default page
