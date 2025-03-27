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
    const [adminLogin, setAdminLogin] = useState(false);
    const[userEmail, setUserEmail] = useState('');
    const[userPassword, setUserPassword] = useState('');

    const loginUser = async () => {
        if(!userEmail || !userPassword){
           toast.error("Both email and password are required");
            return;
        }
    }

    return (
        <>
            <div className={`w-full h-screen flex flex-col justify-center items-center gap-5 relative`}>
                <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl fixed top-0 flex justify-center items-center`}>
                    <p className={`tracking-widest motion-preset-compress motion-duration-1500 text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium`}>OPENSPACE</p>
                </div>
                
                <Toaster position="top-center" richColors/>

                <Link href='/' className={`w-auto h-auto absolute top-20 left-5 p-3 text-white bg-black rounded-full active:scale-95 duration-200 ease-in-out cursor-pointer hover:opacity-70`}><IoArrowBackOutline /> </Link>

                <div className={`w-[90%] ${adminLogin ? "hidden" : "block"} md:w-[60%] lg:w-[40%] p-[2px] h-auto rounded-md bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-500 lg:rounded-lg flex justify-center items-center`}>
                    <div className={`w-full h-full rounded-md lg:rounded-lg bg-white px-5 py-5 flex flex-col justify-start items-start`}>
                        <p className="text-3xl text-black font-semibold">Login</p>
                        <p className="text-sm text-black opacity-60 mt-2">We are very hapy to see you back.</p>

                        <div className="w-full mt-5 h-auto flex flex-col justify-center items-start gap-2 relative">
                            <input type="email" className={`w-full py-2 px-3 rounded-md bg-gray-200 duration-200 ease-in-out outline-gray-500`} placeholder="Enter email address" />
                            <input type={passwordVisible ? "text" : "password"} className={`w-full py-2 px-3 pr-12 rounded-md bg-gray-200 duration-200 ease-in-out outline-gray-500`} placeholder="Enter password" />

                            <span className={`opacity-60 absolute right-5 top-[60px] cursor-pointer`} onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? <FaEye /> : <FaEyeSlash />}</span>

                            <p className="text-[12px] cursor-pointer text-blue-500">Forgot Password ?</p>
                            <p className={`w-full py-2 flex justify-center items-center gap-3 mt-3 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-400 text-white hover:opacity-80 duration-200 ease-in-out hover:gap-5 cursor-pointer rounded-md`} onClick={loginUser}>Enter <IoArrowBackOutline className="rotate-180" /></p>
                        </div>
                    </div>
                </div>

                <p className={`${adminLogin ? "hidden" : "block"} w-[90%] md:w-[60%] lg:w-[40%] py-2 rounded-md text-center text-white bg-black cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={() => { setAdminLogin(true); }}>Login As Admin</p>

                <div className={`w-[90%] ${adminLogin ? "block" : "hidden"} border-[2px] border-black rounded-md md:w-[60%] lg:w-[40%] h-auto flex flex-col justify-start items-start gap-2 px-5 py-5`}>
                    <p className="text-3xl text-black font-semibold">Admin Login</p>

                    <div className="w-full mt-5 h-auto flex flex-col justify-center items-start gap-2 relative">
                        <input type="email" className={`w-full py-2 px-3 rounded-md bg-gray-200 duration-200 ease-in-out outline-gray-500`} placeholder="Enter email address" />
                        <input type={passwordVisible ? "text" : "password"} className={`w-full py-2 px-3 pr-12 rounded-md bg-gray-200 duration-200 ease-in-out outline-gray-500`} placeholder="Enter password" />

                        <span className={`opacity-60 absolute right-5 top-[60px] cursor-pointer`} onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? <FaEye /> : <FaEyeSlash />}</span>

                        <p className="text-[12px] cursor-pointer text-blue-500">Forgot Password ?</p>
                        <p className={`w-full py-2 flex justify-center items-center gap-3 mt-3 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-400 text-white hover:opacity-80 duration-200 ease-in-out hover:gap-5 cursor-pointer rounded-md`}>Enter <IoArrowBackOutline className="rotate-180" /></p>
                    </div>
                </div>

                <p className={`${adminLogin ? "block" : "hidden"} w-[90%] md:w-[60%] lg:w-[40%] py-2 rounded-md text-center text-white bg-black cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={() => { setAdminLogin(false); }}>Login As User</p>
            </div>
        </>
    )
}

export default page
