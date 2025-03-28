"use client"

import { useRouter } from "next/navigation"
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Toaster, toast } from 'sonner'

function page() {

    const router = useRouter();

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [containNumber, setContainNumber] = useState(false);
    const [containSpecial, setContainSpecial] = useState(false);
    const [containUpper, setContainUpper] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const register = async () => {
        if (!userEmail || !userPassword) {
            toast.error("Both email and passwords are required");
            return;
        }

        if(!containNumber && !containSpecial && !containUpper && !(userPassword.length < 7)){
            toast.error("Password should match all the below validations.");
            return;
        }
    }

    useEffect(() => {
        setContainUpper(/[A-Z]/.test(userPassword));
        setContainNumber(/\d/.test(userPassword));
        setContainSpecial(/[!@#$%^&*()_+\-={}\[\]:;"'<>,.?/~`]/.test(userPassword));
    }, [userPassword]);

    return (
        <>
            <div className={`w-full h-screen flex flex-col justify-center items-center relative`}>
                <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl fixed top-0 flex justify-center items-center`}>
                    <p className={`tracking-widest motion-preset-compress motion-duration-1500 text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium`}>OPENSPACE</p>
                </div>

                <Toaster position="top-center" richColors />

                <Link href='/' className={`w-auto h-auto absolute top-20 left-5 p-3 text-white bg-black rounded-full active:scale-95 duration-200 ease-in-out cursor-pointer hover:opacity-70`}><IoArrowBackOutline /> </Link>

                <div className={`w-[90%] md:w-[60%] lg:w-[40%] p-[2px] h-auto rounded-md bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-500 lg:rounded-lg flex justify-center items-center`}>
                    <div className={`w-full h-full rounded-md lg:rounded-lg bg-white px-5 py-5 flex flex-col justify-start items-start`}>
                        <p className="text-3xl text-black font-semibold">Register</p>
                        <p className="text-sm text-black opacity-60 mt-2">Join with us and make your everyday life a step more easier.</p>

                        <div className="w-full mt-5 h-auto flex flex-col justify-center items-start gap-2 relative">
                            <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className={`w-full py-2 px-3 rounded-md bg-gray-200 duration-200 ease-in-out outline-gray-500`} placeholder="Enter email address" />
                            <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type={passwordVisible ? "text" : "password"} className={`w-full py-2 px-3 pr-12 rounded-md bg-gray-200 duration-200 ease-in-out outline-gray-500`} placeholder="Enter password" />

                            <span className={`opacity-60 absolute right-5 top-[60px] cursor-pointer`} onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? <FaEye /> : <FaEyeSlash />}</span>

                            <p className="text-[12px] lg:text-sm text-black">Already have an account ? <Link href='/auth/login' className="text-blue-500 text-[12px] lg:text-sm">Login</Link></p>

                            <div className="w-full rounded-md py-2 px-3 border-[1px] border-black flex flex-col justify-center items-start gap-2">
                                <p className={`text-[10px] w-full lg:text-[12px] flex justify-start items-center gap-2 ${userPassword.length > 7 ? "text-green-500" : "text-black"}`}>Password has more than 7 characters <span className={`${userPassword.length > 7 ? "block text-green-500" : "hidden"}`}>✓</span></p>
                                <p className={`text-[10px] w-full lg:text-[12px] flex justify-start items-center gap-2 ${containNumber ? "text-green-500" : "text-black"}`}>Password contains numbers <span className={`${containNumber ? "block text-green-500" : "hidden"}`}>✓</span></p>
                                <p className={`text-[10px] w-full lg:text-[12px] flex justify-start items-center gap-2 ${containUpper ? "text-green-500" : "text-black"}`}>Password contains capital letters <span className={`${containUpper ? "block text-green-500" : "hidden"}`}>✓</span></p>
                                <p className={`text-[10px] w-full lg:text-[12px] flex justify-start items-center gap-2 ${containSpecial ? "text-green-500" : "text-black"}`}>Password contains special characters <span className={`${containSpecial ? "block text-green-500" : "hidden"}`}>✓</span></p>
                            </div>

                            <p className={`w-full py-2 flex justify-center items-center gap-3 mt-3 bg-black text-white hover:opacity-80 duration-200 ease-in-out hover:gap-5 cursor-pointer rounded-md`} onClick={register}>Create Account <IoArrowBackOutline className="rotate-180" /></p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page
