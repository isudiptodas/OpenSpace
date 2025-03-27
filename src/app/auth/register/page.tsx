"use client"

import { useRouter } from "next/navigation"
import Link from "next/link";
import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Toaster, toast } from 'sonner'

function page() {

    const router = useRouter();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const[userEmail, setUserEmail] = useState('');
    const[userPassword, setUserPassword] = useState('');

    return (
        <>
            <div className={`w-full h-screen flex flex-col justify-center items-center relative`}>
                <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl fixed top-0 flex justify-center items-center`}>
                    <p className={`tracking-widest motion-preset-compress motion-duration-1500 text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium`}>OPENSPACE</p>
                </div>

                <Toaster position="top-center" richColors/>

                <Link href='/' className={`w-auto h-auto absolute top-20 left-5 p-3 text-white bg-black rounded-full active:scale-95 duration-200 ease-in-out cursor-pointer hover:opacity-70`}><IoArrowBackOutline /> </Link>

                <div className={`w-[90%] md:w-[60%] lg:w-[40%] p-[2px] h-auto rounded-md bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-500 lg:rounded-lg flex justify-center items-center`}>
                    <div className={`w-full h-full rounded-md lg:rounded-lg bg-white px-5 py-5 flex flex-col justify-start items-start`}>
                        <p className="text-3xl text-black font-semibold">Register</p>
                        <p className="text-sm text-black opacity-60 mt-2">Join with us and make your everyday life a step more easier.</p>

                        <div className="w-full mt-5 h-auto flex flex-col justify-center items-start gap-2 relative">
                            <input type="email" className={`w-full py-2 px-3 rounded-md bg-gray-200 duration-200 ease-in-out outline-gray-500`} placeholder="Enter email address" />
                            <input type={passwordVisible ? "text" : "password"} className={`w-full py-2 px-3 pr-12 rounded-md bg-gray-200 duration-200 ease-in-out outline-gray-500`} placeholder="Enter password" />

                            <span className={`opacity-60 absolute right-5 top-[60px] cursor-pointer`} onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? <FaEye /> : <FaEyeSlash />}</span>

                            <p className="text-[12px] text-black">Already have an account ? <Link href='/auth/login' className="text-blue-500 text-[12px]">Login</Link></p>
                            <p className={`w-full py-2 flex justify-center items-center gap-3 mt-3 bg-black text-white hover:opacity-80 duration-200 ease-in-out hover:gap-5 cursor-pointer rounded-md`}>Create Account <IoArrowBackOutline className="rotate-180" /></p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page
