"use client"

import Link from "next/link";
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { menuLinks } from "@/data/sidebarLinks";
import { IoSearchSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { FaEuroSign } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
} from '@/components/ui/animated-modal';
import { FileUpload } from "@/components/ui/file-upload";
import { toast, Toaster } from 'sonner';
import { useRouter } from "next/navigation";
import FundingBox from "@/components/FundingBox";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"

function page() {

    const [filterVisible, setFilterVisible] = useState(false);
    const [filter, setFilter] = useState('Filter');
    const [files, setFiles] = useState<File[]>([]);
    const [category, setCategory] = useState('');
    const router = useRouter();

    const handleFileUpload = (file: File[]) => {
        setFiles(file);
        console.log(file);
    };

    const submitReview = async () => {
        toast.success("Your funding is under review");
    }

    const redirect = () => {
        router.push('/users/crowdfunding/past-funding');
    }

    const fund = [
        {
            id: 1,
            fund: "personal"
        },
        {
            id: 2,
            fund: "personal"
        },
        {
            id: 3,
            fund: "personal"
        },
        {
            id: 4,
            fund: "personal"
        },
        {
            id: 5,
            fund: "personal"
        },
        {
            id: 6,
            fund: "personal"
        },
        {
            id: 7,
            fund: "personal"
        },
    ]

    return (
        <>
            <div className={`w-full duration-200 ease-in-out min-h-screen flex flex-col justify-start items-center gap-5 relative`}>
                <Toaster richColors position="top-center" />
                {/* navbar */}
                <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl fixed top-0 flex justify-center items-center`}>
                    <p className={`tracking-widest text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium duration-200 ease-in-out`}>OPENSPACE</p>
                </div>

                {/* floating menu dock */}
                <div className="w-full z-30 flex justify-end md:justify-center items-center fixed bottom-7 px-5">
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
                    <span className="w-full md:w-auto md:px-7 rounded-full py-2 bg-black text-white cursor-pointer hover:opacity-65 ease-in-out duration-200 active:scale-95 flex justify-center items-center gap-2 capitalize" onClick={() => setFilterVisible(!filterVisible)}>{filter} <FaFilter /> </span>

                    <div className={`w-[95%] md:w-[30%] lg:w-[20%] md:right-0 bg-gray-200 absolute -bottom-24 lg:-bottom-28 rounded-md z-30 lg:rounded-lg flex flex-col h-auto px-2 p-3 justify-start items-center gap-2 ${filterVisible ? "block" : "hidden"}`}>
                        <span className="w-full py-2 rounded-md text-center hover:bg-white cursor-pointer text-[12px] md:text-sm duration-200 ease-in-out" onClick={() => { setFilter('newest'); setFilterVisible(!filterVisible) }}>Newest First</span>
                        <span className="w-full py-2 rounded-md text-center hover:bg-white cursor-pointer text-[12px] md:text-sm duration-200 ease-in-out" onClick={() => { setFilter('oldest'); setFilterVisible(!filterVisible) }}>Oldest First</span>
                    </div>
                </div>

                <div className="w-[95%] md:w-[90%] h-auto grid grid-cols-1 md:grid-cols-3 justify-self-center gap-2">
                    <Modal>
                        <ModalTrigger className="w-full md:w-[90%] px-0 py-0 my-0">
                            <div className="w-full z-20 pb-3 px-4 h-40 rounded-md cursor-pointer active:scale-95 duration-200 ease-in-out lg:rounded-lg group bg-gradient-to-r from-fuchsia-400 to-purple-700 flex flex-col justify-end items-start gap-2 md:gap-1 relative">
                                <h1 className="text-white font-bold text-xl">Start a new Campaign</h1>
                                <p className="w-full text-start text-white text-[10px] md:text-[12px]">Fill out basic details and submit review</p>

                                <span className="absolute w-auto duration-200 ease-in-out text-white opacity-40 top-2 text-2xl right-5 rotate-[19deg] group-hover:right-8"><FaEuroSign /></span>
                                <span className="absolute w-auto duration-200 ease-in-out text-white opacity-40 top-7 text-lg left-10 rotate-[24deg] group-hover:top-10"><MdOutlineRateReview /></span>
                                <span className="absolute w-auto duration-200 ease-in-out text-white opacity-40 bottom-3 text-3xl right-2 rotate-[56deg] group-hover:bottom-7 group-hover:right-7"><FaRupeeSign /></span>
                                <span className="absolute w-auto duration-200 ease-in-out text-white opacity-40 top-5 text-4xl left-20 rotate-45 group-hover:left-44 "><FaDollarSign /></span>
                            </div>
                        </ModalTrigger>
                        <ModalBody>
                            <ModalContent className="h-auto py-5 px-3 flex flex-col justify-start items-center gap-2 overflow-y-auto">
                                <div className="w-full border-4 mt-10 mb-3 border-dashed rounded-md md:rounded-lg h-auto">
                                    <FileUpload onChange={handleFileUpload} />
                                </div>

                                <p className="w-full px-5 py-5 text-center text-[10px] text-gray-500">Please upload all the necessary documents for your funding campaign. It will help up to verify your campaign. Make a pdf of all the documents and upload or drag and drop here.</p>

                                <input type="text" className="w-full rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Enter Funding Title *" />
                                <textarea className="w-full min-h-52 rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Enter Funding description *" />
                                <input type="text" className="w-full rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Contact Person Name *" />
                                <input type="text" className="w-full rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Contact Person Number *" />

                                <div className="w-full h-auto py-3 grid grid-cols-2 justify-items-center gap-2">
                                    <input type="text" className="w-full rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Person 2 Name" />
                                    <input type="text" className="w-full rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Person 2 Number" />
                                    <input type="text" className="w-full rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Person 3 Name" />
                                    <input type="text" className="w-full rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Person 3 Number" />
                                </div>

                                <input type="text" className="w-full rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Enter location" />
                                <input type="text" className="w-full rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Enter full address" />

                                <textarea className="w-full min-h-52 rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Enter payment details *" />

                                <h1 className="text-xl text-black w-full text-start my-3">Select a category *</h1>

                                <div className="w-full flex flex-wrap justify-start items-start gap-2 py-3">
                                    <span className={`ext-[12px] text-black px-4 py-2 rounded-md cursor-pointer active:scale-95 duration-200 ease-in-out ${category === 'education' ? "bg-gradient-to-r from-purple-400 to-purple-600 text-white" : "text-black border-[2px] border-black"}`} onClick={() => setCategory('education')}>Education</span>
                                    <span className={`ext-[12px] text-black px-4 py-2 rounded-md cursor-pointer active:scale-95 duration-200 ease-in-out ${category === 'medical' ? "bg-gradient-to-r from-purple-400 to-purple-600 text-white" : "text-black border-[2px] border-black"}`} onClick={() => setCategory('medical')}>Medical</span>
                                    <span className={`ext-[12px] text-black px-4 py-2 rounded-md cursor-pointer active:scale-95 duration-200 ease-in-out ${category === 'event' ? "bg-gradient-to-r from-purple-400 to-purple-600 text-white" : "text-black border-[2px] border-black"}`} onClick={() => setCategory('event')}>Event</span>
                                    <span className={`ext-[12px] text-black px-4 py-2 rounded-md cursor-pointer active:scale-95 duration-200 ease-in-out ${category === 'startup' ? "bg-gradient-to-r from-purple-400 to-purple-600 text-white" : "text-black border-[2px] border-black"}`} onClick={() => setCategory('startup')}>Startup</span>
                                    <span className={`ext-[12px] text-black px-4 py-2 rounded-md cursor-pointer active:scale-95 duration-200 ease-in-out ${category === 'animal' ? "bg-gradient-to-r from-purple-400 to-purple-600 text-white" : "text-black border-[2px] border-black"}`} onClick={() => setCategory('animal')}>Animal Welfare</span>
                                </div>

                                <p className=" w-full rounded-md lg:rounded-lg bg-black text-white text-center py-2 cursor-pointer hover:opacity-65 duration-200 ease-in-out active:scale-95" onClick={submitReview}>Submit for review</p>

                                <p className="w-full px-5 py-5 text-center text-[10px] text-gray-500">After submitting your campaign we will verify it from our side and after approval it will be listed on the main page. The verification process usually takes around 24 hours.</p>

                            </ModalContent>
                        </ModalBody>
                    </Modal>

                    <div className="w-full z-20 pb-3 px-4 h-40 rounded-md cursor-pointer active:scale-95 duration-200 ease-in-out lg:rounded-lg group bg-gradient-to-r from-pink-300 to-pink-700 flex flex-col justify-end items-start gap-2 md:gap-1 relative" onClick={redirect}>
                        <h1 className="text-white font-bold text-xl">Your Fund Campaigns</h1>
                        <p className="w-full text-start text-white text-[10px] md:text-[12px]">View all your ongoing and past campaigns</p>

                        <span className="absolute w-auto duration-200 ease-in-out text-white opacity-40 top-2 text-2xl right-5 rotate-[19deg] group-hover:right-8"><FaEuroSign /></span>
                        <span className="absolute w-auto duration-200 ease-in-out text-white opacity-40 top-7 text-lg left-10 rotate-[24deg] group-hover:top-10"><MdOutlineRateReview /></span>
                        <span className="absolute w-auto duration-200 ease-in-out text-white opacity-40 bottom-3 text-3xl right-2 rotate-[56deg] group-hover:bottom-7 group-hover:right-7"><FaRupeeSign /></span>
                        <span className="absolute w-auto duration-200 ease-in-out text-white opacity-40 top-5 text-4xl left-20 rotate-45 group-hover:left-44 "><FaDollarSign /></span>
                        <span className="absolute w-auto duration-200 ease-in-out text-white opacity-40 top-5 text-4xl left-44 rotate-90 group-hover:left-32 "><LuAlarmClock /></span>
                    </div>

                    {/* drawer box */}
                    <Drawer>
                        <DrawerTrigger></DrawerTrigger>
                        <DrawerContent className="h-[70vh] px-4 md:px-10 py-4 md:py-8 w-full flex justify-center items-center">

                        </DrawerContent>
                    </Drawer>

                </div>

                <hr className="w-[95%] md:w-[90%] h-[1px] my-2 bg-zinc-800" />

                <h1 className={`w-full text-2xl lg:text-5xl lg:mt-3 font-bold text-center`}>Ongoing Campaigns</h1>

                <div className="w-[95%] md:w-[90%] relative z-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-3">
                    {fund.map((fund, index) => {
                        return <FundingBox key={index} onClick={() => {
                            const triggerButton = document.querySelector("[data-slot='drawer-trigger']") as HTMLButtonElement | null;
                            triggerButton?.click();
                        }} />
                    })}
                </div>

            </div>

            <Footer />
        </>
    )
}

export default page
