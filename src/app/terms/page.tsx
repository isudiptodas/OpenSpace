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
                    <h1 className="text-3xl font-bold py-3 w-auto px-5 border-b-2 border-black text-black mt-24">Terms Of Use</h1>

                    <div className="w-[90%] py-5 px-5 rounded-md lg:rounded-lg flex flex-col justify-center items-start border-[1px] border-black mt-5">
                        <p className="text-black text-[12px] lg:text-sm">Welcome to OpenSpace. Please read these Terms of Use carefully before using our platform, which includes services booking, event hosting, crowdfunding, and marketplace activities. By accessing or using our platform, you agree to be bound by these Terms.</p>
                        <p className="text-black text-sm lg:text-lg font-semibold mt-4">What We Offer ?</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">1. Eligibility : </span> You must be at least 18 years old and capable of forming a binding contract to use our platform.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">2. User Accounts : </span> You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">3. Services  : </span> You can book home services or offer services through our platform. We are not responsible for the quality, safety, or legality of services provided by users.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">4. Events  : </span> Users can create, host, or participate in events. Event hosts are solely responsible for the organization and outcome of the events.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">5. Marketplace : </span> Users can list items for sale or rent, and buy or rent items from others. We are not responsible for listed items' condition, legality, or delivery.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">6. Crowdfunding : </span> Users can propose crowdfunding campaigns. Campaigns must be approved by our team before becoming live. We do not guarantee the success of campaigns or the fulfillment of campaign promises.</p>
                        
                        <p className="text-black text-sm lg:text-lg font-semibold mt-4">Prohibited Activities You agree not to :</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4 mt-2"> Post false, misleading, or inappropriate content. </p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> Engage in fraud, harassment, or spamming. </p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> Infringe upon our intellectual property rights or the rights of others. </p>

                        <p className="text-black text-[12px] lg:text-sm mb-4"> We may suspend or terminate your account if you violate these Terms or engage in harmful behavior.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> You retain ownership of the content you submit but grant us a worldwide, royalty-free license to use, display, and distribute it on the platform. </p>

                        <p className="text-red-500 text-sm lg:text-lg font-semibold mt-4">[IMPORTANT]</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4 mt-2"> We may suspend or terminate your account if you violate these Terms or engage in harmful behavior.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"> You retain ownership of the content you submit but grant us a worldwide, royalty-free license to use, display, and distribute it on the platform. </p>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default page
