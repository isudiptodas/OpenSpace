"use client"

import Link from "next/link";
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { menuLinks } from "@/data/sidebarLinks";
import { NavBar } from "@/components/NavBar";
import { FileUpload } from "@/components/ui/file-upload";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import SellBox from "@/components/SellBox";
import RentBox from "@/components/RentBox";

function page() {

    const tabs = ['buy', 'sell', 'rent']
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [files, setFiles] = useState<File[]>([]);
    const [condition, setCondition] = useState('');

    const handleFileUpload = (file: File[]) => {
        setFiles(file);
        console.log(file);
    };

    const history = [
        {
            img: '/images/event3.jpg',
            itemName: "Apple iPhone",
            description: "A very big but small description of a product of apple which is an aple iphone.",
            condition: "new",
            usageTime: "6",
            sellerName: "Sudipto Das",
            sellerContact: "84937483493",
            sellerEmail: "abcd@gmail.com123",
            sellerLocation: "Kolkata",
            price: "434343"
        },
        {
            img: '/images/event3.jpg',
            itemName: "Apple iPhone",
            description: "A very big but small description of a product of apple which is an aple iphone.",
            condition: "new",
            usageTime: "6",
            sellerName: "Sudipto Das",
            sellerContact: "84937483493",
            sellerEmail: "abcd@gmail.com123",
            sellerLocation: "Kolkata",
            price: "434343"
        },
        {
            img: '/images/event3.jpg',
            itemName: "Apple iPhone",
            description: "A very big but small description of a product of apple which is an aple iphone.",
            condition: "new",
            usageTime: "6",
            sellerName: "Sudipto Das",
            sellerContact: "84937483493",
            sellerEmail: "abcd@gmail.com123",
            sellerLocation: "Kolkata",
            price: "434343"
        },
        {
            img: '/images/event3.jpg',
            itemName: "Apple iPhone",
            description: "A very big but small description of a product of apple which is an aple iphone.",
            condition: "new",
            usageTime: "6",
            sellerName: "Sudipto Das",
            sellerContact: "84937483493",
            sellerEmail: "abcd@gmail.com123",
            sellerLocation: "Kolkata",
            price: "434343"
        },
        {
            img: '/images/event3.jpg',
            itemName: "Apple iPhone",
            description: "A very big but small description of a product of apple which is an aple iphone.",
            condition: "new",
            usageTime: "6",
            sellerName: "Sudipto Das",
            sellerContact: "84937483493",
            sellerEmail: "abcd@gmail.com123",
            sellerLocation: "Kolkata",
            price: "434343"
        },
        {
            img: '/images/event3.jpg',
            itemName: "Apple iPhone",
            description: "A very big but small description of a product of apple which is an aple iphone.",
            condition: "new",
            usageTime: "6",
            sellerName: "Sudipto Das",
            sellerContact: "84937483493",
            sellerEmail: "abcd@gmail.com123",
            sellerLocation: "Kolkata",
            price: "434343"
        },
        {
            img: '/images/event3.jpg',
            itemName: "Apple iPhone",
            description: "A very big but small description of a product of apple which is an aple iphone.",
            condition: "new",
            usageTime: "6",
            sellerName: "Sudipto Das",
            sellerContact: "84937483493",
            sellerEmail: "abcd@gmail.com123",
            sellerLocation: "Kolkata",
            price: "434343"
        },
        {
            img: '/images/event3.jpg',
            itemName: "Apple iPhone",
            description: "A very big but small description of a product of apple which is an aple iphone.",
            condition: "new",
            usageTime: "6",
            sellerName: "Sudipto Das",
            sellerContact: "84937483493",
            sellerEmail: "abcd@gmail.com123",
            sellerLocation: "Kolkata",
            price: "434343"
        },
    ];

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

                {/* drawer box */}
                <Drawer>
                    <DrawerTrigger></DrawerTrigger>
                    <DrawerContent className="h-[60vh] px-4 md:px-10 py-4 md:py-8 w-full flex justify-center items-center">
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2">
                            <div className="w-full h-full md:h-full rounded-md p-5 lg:rounded-lg overflow-hidden">
                                <img src='' className="h-full w-full object-cover rounded-md lg:rounded-lg" />
                            </div>

                            <div className="w-full h-full md:h-full bg-red-400 flex flex-col justify-start items-start  px-2 py-3 overflow-hidden">
                                <h1 className="text-3xl lg:text-5xl font-bold w-full text-start"></h1>
                                <p className="text-[12px] lg:text-sm w-full text-start"></p>
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>

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

                        <input type="number" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter usage time in days (if any)" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter seller name" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter seller contact" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter seller email (if any)" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter seller location" />

                        <div className="w-full rounded-md bg-gray-200 flex justify-start items-start">
                            <span className=" bg-gray-400 px-3 py-2 text-black rounded-l-md md:rounded-l-lg">₹</span>
                            <input type="text" className="w-full h-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter selling price" min={0} />
                        </div>

                        <p className=" w-full rounded-md mt-2 lg:rounded-lg bg-black text-white text-center py-2 cursor-pointer hover:opacity-65 duration-200 ease-in-out active:scale-95">Submit for review</p>

                        <p className="w-full px-5 py-3 text-center text-[10px] text-gray-500">After submitting your product to sell we will verify it from our side and after approval it will be listed on the main page. The verification process usually takes around 24 hours.</p>

                    </div>

                    {/* past history */}
                    <div className="w-full hide-scroll md:border-[1px] md:border-black md:rounded-lg h-auto md:h-[80vh] flex flex-col justify-start items-center md:overflow-y-auto px-4 py-4 gap-3">
                        <h1 className="w-full text-center my-2 text-3xl text-black font-semibold">Past History</h1>

                        {history.map((hist, index) => {
                            return <SellBox key={index} image={hist.img} title={hist.itemName} onClick={() => {
                                const triggerButton = document.querySelector("[data-slot='drawer-trigger']") as HTMLButtonElement | null;
                                triggerButton?.click();
                            }} price={hist.price} location={hist.sellerLocation} />
                        })}
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

                        <input type="number" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter usage time in days (if any)" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter lessor name" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter lessor contact" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter lessor email (if any)" />
                        <input type="text" className="w-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter location" />

                        <div className="w-full rounded-md bg-gray-200 flex justify-start items-start">
                            <span className=" bg-gray-400 px-3 py-2 text-black rounded-l-md md:rounded-l-lg">₹</span>
                            <input type="text" className="w-full h-full rounded-md bg-gray-200 py-2 px-4" placeholder="Enter rent price per hour" min={0} />
                        </div>

                        <p className=" w-full rounded-md mt-2 lg:rounded-lg bg-black text-white text-center py-2 cursor-pointer hover:opacity-65 duration-200 ease-in-out active:scale-95">Submit for review</p>

                        <p className="w-full px-5 py-3 text-center text-[10px] text-gray-500">After submitting your product to rent out we will verify it from our side and after approval it will be listed on the main page. The verification process usually takes around 24 hours.</p>

                    </div>

                    {/* past history */}
                    <div className="w-full hide-scroll md:border-[1px] md:border-black md:rounded-lg h-auto md:h-[80vh] flex flex-col justify-start items-center md:overflow-y-auto px-4 py-4 gap-3">
                        <h1 className="w-full text-center my-2 text-3xl text-black font-semibold">Past History</h1>

                        {history.map((hist, index) => {
                            return <RentBox key={index} image={hist.img} title={hist.itemName} onClick={() => {
                                const triggerButton = document.querySelector("[data-slot='drawer-trigger']") as HTMLButtonElement | null;
                                triggerButton?.click();
                            }} rent={hist.price} location={hist.sellerLocation} />
                        })}
                    </div>
                </div>



            </div>

            <Footer />
        </>
    )
}

export default page
