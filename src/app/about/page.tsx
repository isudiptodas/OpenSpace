"use client"

import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import Footer from '@/components/Footer';

function page() {
    return (

        <>
            <div className={`w-full min-h-screen flex flex-col justify-center items-center gap-5 relative`}>
                <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl fixed top-0 flex justify-center items-center`}>
                    <p className={`tracking-widest motion-preset-compress motion-duration-1500 text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium`}>OPENSPACE</p>
                </div>

                <Link href='/' className={`w-auto h-auto absolute top-20 left-5 p-3 text-white bg-black rounded-full active:scale-95 duration-200 ease-in-out cursor-pointer hover:opacity-70`}><IoArrowBackOutline /> </Link>

                <div className={`w-full h-full flex flex-col justify-start items-center pb-10`}>
                    <h1 className="text-3xl font-bold py-3 w-auto px-5 border-b-2 border-black text-black mt-24">About Us</h1>

                    <div className="w-[90%] py-5 px-5 rounded-md lg:rounded-lg flex flex-col justify-center items-start border-[1px] border-black mt-5">
                        <p className="text-black text-[12px] lg:text-sm">Welcome to OpenSpace, your all-in-one platform designed to make life easier! Whether you need a home repair, a professional stylist, pet care, or event planning—we’ve got you covered. <br/> Our mission is to bring convenience, trust, and efficiency into your life by connecting you with skilled professionals, trusted sellers, and a supportive community.</p>
                        <p className="text-black text-sm lg:text-lg font-semibold mt-4">What We Offer ?</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">1. Home Services : </span> Managing household tasks can be overwhelming, and finding reliable professionals is often a hassle. Our platform connects you with verified experts who specialize in a variety of home services. Whether you need a plumber to fix a leak, an electrician to repair faulty wiring, a carpenter for custom furniture work, or a painter to refresh your walls, we’ve got you covered. You can also book deep cleaning services for your home, pest control to keep your space hygienic, appliance repair for malfunctioning devices, or even professional cooks to prepare meals tailored to your preferences. We ensure quality, safety, and convenience, allowing you to maintain your home effortlessly.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">1. Grooming & Wellness: </span> Self-care should be accessible and stress-free. With our personal care services, you can book haircuts, hairstyling, facials, massages, manicures, pedicures, and even full-body spa treatments—all from the comfort of your home. Our expert beauticians, stylists, and wellness professionals provide top-tier services tailored to your needs. Whether you're preparing for an important event, looking for relaxation, or simply maintaining a routine, we bring the salon and spa experience to you.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">1. Pet Care : </span> Your pets deserve the best care, and we help you provide just that. Our platform offers grooming services, including bathing, fur trimming, nail clipping, and ear cleaning, ensuring your pet looks and feels great. If you're traveling or need assistance, you can book pet sitting services to keep your furry friend safe and happy while you're away. Need professional training for better pet behavior? We connect you with certified trainers who can teach discipline, commands, and social skills. If your pet requires medical attention, you can also schedule vet consultations, vaccinations, and emergency care with ease.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">1. Event Hosting & Discovery : </span> Planning an event can be time-consuming, but we make it easier by offering a dedicated space where you can organize and manage events effortlessly. Whether it’s a birthday party, corporate gathering, wedding, social meetup, or even a local community event, our platform allows you to create an event, invite guests, manage RSVPs, and keep everything organized. Not just that, you can also discover ongoing and upcoming events in your area, ensuring you never miss out on exciting experiences. Whether you want to host or attend, our event feature keeps you connected with people and opportunities.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">1. Marketplace : </span> Why let unused items collect dust when you can sell, rent, or buy what you need effortlessly? Our marketplace allows you to sell old gadgets, second-hand furniture, appliances, books, clothes, and other items you no longer need. Looking for a budget-friendly alternative? You can browse and purchase pre-owned items in good condition at lower prices. Additionally, our rental feature allows you to rent out or borrow items like electronics, vehicles, home appliances, or event essentials for temporary use, saving both money and storage space. Our platform ensures safe and secure transactions with trusted buyers and sellers.</p>
                        <p className="text-black text-[12px] lg:text-sm mb-4"><span className="font-semibold">1. Crowdfunding & Support : </span> If you're in need of financial assistance or want to support meaningful causes, our crowdfunding feature enables you to create fundraising campaigns for medical emergencies, education, business startups, personal needs, or charitable initiatives. Users can donate, share, and support each other in times of need, building a strong community-driven financial support system. Whether it's raising money for a loved one’s treatment, launching a dream project, or supporting disaster relief efforts, our platform helps connect those who need help with those who are willing to contribute.</p>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default page
