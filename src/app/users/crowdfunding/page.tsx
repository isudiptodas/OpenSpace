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
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from '@/components/ui/animated-modal';
import { FileUpload } from "@/components/ui/file-upload";


function page() {

    const [filterVisible, setFilterVisible] = useState(false);
    const [filter, setFilter] = useState('Filter');
    const [files, setFiles] = useState<File[]>([]);

    const handleFileUpload = (file: File[]) => {
        setFiles(file);
        console.log(file);
    };

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
                    <span className="w-full md:w-auto md:px-7 rounded-full py-2 bg-black text-white cursor-pointer hover:opacity-65 ease-in-out duration-200 active:scale-95 flex justify-center items-center gap-2 capitalize" onClick={() => setFilterVisible(!filterVisible)}>{filter} <FaFilter /> </span>

                    <div className={`w-[95%] md:w-[30%] lg:w-[20%] md:right-0 bg-gray-200 absolute -bottom-24 lg:-bottom-28 rounded-md lg:rounded-lg flex flex-col h-auto px-2 p-3 justify-start items-center gap-2 ${filterVisible ? "block" : "hidden"}`}>
                        <span className="w-full py-2 rounded-md text-center hover:bg-white cursor-pointer text-[12px] md:text-sm duration-200 ease-in-out" onClick={() => { setFilter('newest'); setFilterVisible(!filterVisible) }}>Newest First</span>
                        <span className="w-full py-2 rounded-md text-center hover:bg-white cursor-pointer text-[12px] md:text-sm duration-200 ease-in-out" onClick={() => { setFilter('oldest'); setFilterVisible(!filterVisible) }}>Oldest First</span>
                    </div>
                </div>

                <div className="w-[95%] md:w-[90%] h-auto grid grid-cols-1 md:grid-cols-3 justify-self-center gap-2">
                    <Modal>
                        <ModalTrigger>
                            <div className="w-full pb-3 px-4 h-40 rounded-md cursor-pointer active:scale-95 duration-200 ease-in-out lg:rounded-lg group bg-gradient-to-r from-fuchsia-400 to-purple-700 flex flex-col justify-end items-start gap-2 md:gap-1 relative">
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

                                <input type="text" className="w-full rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Enter Funding Title" />
                                <textarea className="w-full min-h-52 rounded-md lg:rounded-lg bg-gray-200 px-4 py-2" placeholder="Enter Funding description" />
                            </ModalContent>
                        </ModalBody>
                    </Modal>

                </div>

                <hr className="w-[95%] md:w-[90%] h-[1px] my-2 bg-zinc-800" />

            </div>

            <Footer />
        </>
    )
}

export default page
