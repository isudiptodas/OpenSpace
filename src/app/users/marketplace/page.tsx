"use client"

import Link from "next/link";
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { menuLinks } from "@/data/sidebarLinks";
import { NavBar } from "@/components/NavBar";
import { FileUpload } from "@/components/ui/file-upload";

function page() {

    const tabs = ['buy', 'sell', 'rent']
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [files, setFiles] = useState<File[]>([]);
    const [condition, setCondition] = useState('');

    const handleFileUpload = (file: File[]) => {
        setFiles(file);
        console.log(file);
    };

    return (
        <>
            <div className={`w-full overflow-hidden duration-200 ease-in-out min-h-screen py-5 md:py-10 flex flex-col justify-start items-center gap-5 relative`}>

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
                    <h1 className={`text-2xl sm:text-3xl`}>Marketplace</h1>
                </div>

                <NavBar className="w-auto py-2 px-3 cursor-pointer" tabs={tabs} selectedTab={selectedTab} onTabChange={setSelectedTab} />

                {/* sell tab */}
                <div className={`w-[95%] ${selectedTab === 'sell' ? "block" : "hidden"} md:w-[90%] h-auto py-3 px-2 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2 md:gap-7`}>

                    {/* new sell box */}
                    <div className="w-full hide-scroll bg-white  md:border-[1px] md:rounded-lg md:border-black  h-[60vh] md:h-[80vh] flex flex-col justify-start items-center gap-3 overflow-y-auto pb-5 lg:px-4">
                        <h1 className="w-full text-center my-2 text-3xl text-black font-semibold">Start selling</h1>

                        <div className="w-full border-4 border-dashed rounded-md md:rounded-lg h-auto">
                            <FileUpload onChange={handleFileUpload} />
                        </div>

                        <p className="w-full text-center text-[12px] md:text-sm">Upload a picture of your item</p>

                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter product title" />
                        <textarea className="w-full rounded-md min-h-60 bg-gray-200 py-2 px-4" placeholder="Enter product description" />

                        <p className="w-full text-start text-[12px] md:text-sm">Select condition :</p>
                        <div className="w-full flex justify-start items-start gap-3">
                            <span className={`w-auto px-3 py-2 rounded-md cursor-pointer duration-200 ease-in-out ${condition === 'new' ? "bg-gradient-to-r from-indigo-300 to-blue-600 text-white" : "border-[1px] border-black"} active:scale-95`} onClick={() => setCondition('new')}>New</span>
                            <span className={`w-auto px-3 py-2 rounded-md cursor-pointer duration-200 ease-in-out ${condition === 'used' ? "bg-gradient-to-r from-indigo-300 to-blue-600 text-white" : "border-[1px] border-black"} active:scale-95`} onClick={() => setCondition('used')}>Used</span>
                        </div>

                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter usage time in months (if any)" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter seller name" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter seller contact" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter seller email (if any)" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter seller location" />

                        <div className="w-full rounded-md bg-gray-200 flex justify-start items-start">
                            <span className=" bg-gray-400 px-3 py-2 text-black rounded-l-md md:rounded-l-lg">₹</span>
                            <input type="number" className="w-full h-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter selling price" min={0} />
                        </div>

                        <p className=" w-full rounded-md mt-2 lg:rounded-lg bg-black text-white text-center py-2 cursor-pointer hover:opacity-65 duration-200 ease-in-out active:scale-95">Submit for review</p>

                        <p className="w-full px-5 py-3 text-center text-[10px] text-gray-500">After submitting your product to sell we will verify it from our side and after approval it will be listed on the main page. The verification process usually takes around 24 hours.</p>

                    </div>

                    {/* past history */}
                    <div className="w-full hide-scroll md:border-[1px] md:border-black md:rounded-lg h-auto md:h-[80vh] flex flex-col justify-start items-center md:overflow-y-auto gap-3">
                        <h1 className="w-full text-center my-2 text-3xl text-black font-semibold">Past History</h1>
                    </div>
                </div>

                {/* rent tab */}
                <div className={`w-[95%] ${selectedTab === 'rent' ? "block" : "hidden"} md:w-[90%] h-auto py-3 px-2 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2 md:gap-7`}>

                    {/* new rent box */}
                    <div className="w-full hide-scroll bg-white  md:border-[1px] md:rounded-lg md:border-black  h-[60vh] md:h-[80vh] flex flex-col justify-start items-center gap-3 overflow-y-auto pb-5 lg:px-4">
                        <h1 className="w-full text-center my-2 text-3xl text-black font-semibold">Start renting service</h1>

                        <div className="w-full border-4 border-dashed rounded-md md:rounded-lg h-auto">
                            <FileUpload onChange={handleFileUpload} />
                        </div>

                        <p className="w-full text-center text-[12px] md:text-sm">Upload a picture of your item</p>

                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter product name" />
                        <textarea className="w-full rounded-md min-h-60 bg-gray-200 py-2 px-4" placeholder="Enter product description" />

                        <p className="w-full text-start text-[12px] md:text-sm">Select condition :</p>
                        <div className="w-full flex justify-start items-start gap-3">
                            <span className={`w-auto px-3 py-2 rounded-md cursor-pointer duration-200 ease-in-out ${condition === 'new' ? "bg-gradient-to-r from-indigo-300 to-blue-600 text-white" : "border-[1px] border-black"} active:scale-95`} onClick={() => setCondition('new')}>New</span>
                            <span className={`w-auto px-3 py-2 rounded-md cursor-pointer duration-200 ease-in-out ${condition === 'used' ? "bg-gradient-to-r from-indigo-300 to-blue-600 text-white" : "border-[1px] border-black"} active:scale-95`} onClick={() => setCondition('used')}>Used</span>
                        </div>

                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter usage time in months (if any)" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter lessor name" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter lessor contact" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter lessor email (if any)" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter location" />

                        <div className="w-full rounded-md bg-gray-200 flex justify-start items-start">
                            <span className=" bg-gray-400 px-3 py-2 text-black rounded-l-md md:rounded-l-lg">₹</span>
                            <input type="number" className="w-full h-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter selling price" min={0} />
                        </div>

                        <p className=" w-full rounded-md mt-2 lg:rounded-lg bg-black text-white text-center py-2 cursor-pointer hover:opacity-65 duration-200 ease-in-out active:scale-95">Submit for review</p>

                        <p className="w-full px-5 py-3 text-center text-[10px] text-gray-500">After submitting your product to rent out we will verify it from our side and after approval it will be listed on the main page. The verification process usually takes around 24 hours.</p>

                    </div>

                    {/* past history */}
                    <div className="w-full hide-scroll md:border-[1px] md:border-black md:rounded-lg h-auto md:h-[80vh] flex flex-col justify-start items-center md:overflow-y-auto gap-3">
                        <h1 className="w-full text-center my-2 text-3xl text-black font-semibold">Past History</h1>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default page
