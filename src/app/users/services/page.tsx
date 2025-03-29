"use client"

import Link from "next/link";
import Footer from '@/components/Footer';
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/data/sidebarLinks";
import { FiSidebar } from "react-icons/fi";

function page() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`w-full min-h-screen flex flex-col justify-start items-center gap-5 relative`}>
                <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl fixed top-0 flex justify-center items-center`}>
                    <p className={`tracking-widest text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium`}>OPENSPACE</p>
                </div>

                <div className={`w-full min-h-screen flex justify-between items-start relative`}>
                   
                    <div className="w-auto z-50 h-full absolute top-2 md:my-4 md:ml-3 md:rounded-lg md:static left-0">
                        <Sidebar open={open} setOpen={setOpen} animate={true}>
                            <SidebarBody className="justify-between gap-10 h-screen ">
                                <div className="flex flex-col overflow-x-hidden overflow-y-auto">
                                    {open ? <span className="flex justify-center items-center gap-2"><FiSidebar/> OPENSPACE</span> : <span className="flex justify-center items-center gap-2"><FiSidebar/> <span className={`${open ? "block" : "hidden"}`}>OPENSPACE</span></span>}
                                    <div className="mt-8 flex flex-col">
                                        {sidebarLinks.map((link, idx) => (
                                            <SidebarLink key={idx} link={link} />
                                        ))}
                                    </div>
                                </div>
                            </SidebarBody>
                        </Sidebar>
                    </div>

                    <div className="w-full md:w-full h-auto py-4 px-5 mt-16 flex justify-center items-start">
                        <p className="w-full border-b-[1px] border-black py-3 text-start tracking-widest lg:tracking-normal text-xl sm:text-3xl lg:text-4xl font-semibold">Services</p>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default page
