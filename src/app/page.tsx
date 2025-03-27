"use client"

import { IoHomeOutline } from "react-icons/io5";
import { FaScissors } from "react-icons/fa6";
import { FaPaintRoller } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { LuCookingPot } from "react-icons/lu";
import { MdPets } from "react-icons/md";
import Marquee from 'react-fast-marquee'
import { RiPsychotherapyFill } from "react-icons/ri";
import { RiPlantLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { Accordion, Content, Tab, Trigger } from '@/components/ui/accordian'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { faq } from "@/data/landingPageFAQ";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Notification } from "@/components/Notification";
import { notifications } from "@/data/notification";

let newNotifications = notifications;
newNotifications = Array.from({ length: 10 }, () => newNotifications).flat();


export default function Home() {
  return (
    <>
      <div className={`w-full h-auto flex flex-col justify-start items-center relative`}>

        <div className={`w-full h-auto z-50 py-4 sm:py-5 backdrop-blur-3xl bg-white/25 fixed top-0 flex justify-center items-center`}>
          <p className={`tracking-widest motion-preset-compress motion-duration-1500 text-sm font-light sm:text-[16px] lg:text-lg lg:font-medium`}>OPENSPACE</p>
        </div>

        <header className={`w-full h-96 sm:h-[415px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex px-2 sm:px-4 justify-center items-end pb-2 relative`}>

          <Link href='/auth/register' className={`motion-preset-slide-right motion-duration-1000 px-5 py-1 text-[12px] font-normal md:text-sm tracking-widest cursor-pointer active:scale-95 duration-200 ease-in-out left-5 sm:left-10 md:top-28 rounded-full absolute z-40 w-auto h-auto hover:opacity-80 text-black bg-white top-24 lg:font-semibold`}>Try</Link>

          <div className={`w-full h-auto z-40 py-2 absolute pb-5 bottom-16 md:bottom-24 lg:bottom-20 xl:bottom-24 flex flex-wrap justify-center items-center gap-2`}>
            <p className={`text-2xl lg:text-4xl xl:text-6xl text-white font-bold motion-preset-slide-right motion-duration-1000`}>JOIN •</p>
            <p className={`text-2xl lg:text-4xl xl:text-6xl text-white font-bold motion-preset-slide-right motion-duration-1500`}>CONNECT •</p>
            <p className={`text-2xl lg:text-4xl xl:text-6xl text-white font-bold motion-preset-slide-right motion-duration-2000`}>EXPLORE</p>
          </div>

          <div className={`w-full h-[80%] lg:h-[85%] overflow-hidden rounded-md lg:rounded-4xl`}>
            <img src="/images/intro.jpeg" alt="Women looking at phone" className={`h-full motion-preset-blur-right motion-duration-1500 w-full object-cover overflow-hidden`} />
          </div>

          <p className={`absolute w-[70%] backdrop-blur-3xl bg-white/25 px-5 py-2 rounded-md text-white bottom-7 text-[10px] sm:text-sm md:text-[18px] lg:text-xl text-center motion-preset-focus motion-duration-1500 lg:rounded-full`}>Join a thriving community where services, events, and opportunities come together.</p>
        </header>

        <hr className="w-[95%] h-[1px] bg-gray-200 my-4" />

        <div className={`w-[95%] motion-preset-shrink motion-duration-1000 h-auto py-2 mb-2 flex justify-center items-center gap-3`}>
          <div className={`w-auto border-[2px] border-black pr-2 pl-5 py-2 h-auto rounded-full flex justify-between items-center gap-3 lg:gap-7`}>
            <Link href='/auth/login' className={`text-[14px] lg:text-lg cursor-pointer active:scale-95 duration-200 ease-in-out`}>Login</Link>
            <Link href='/auth/register' className={`text-[14px] lg:text-lg bg-black rounded-full cursor-pointer active:scale-95 duration-200 ease-in-out hover:opacity-70 text-white px-4 py-1`}>Sign Up</Link>
          </div>
        </div>

        <main className={`w-[95%] h-auto py-3 flex justify-center items-center gap-3 `}>
          <Marquee
            pauseOnHover={true}
            direction="left"
            speed={100}
            className="overflow-hidden motion-preset-shrink motion-duration-1500"
          >
            <p className={`font-bold text-3xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent lg:text-5xl px-3`}>MARKETPLACE </p>
            <p className={`font-bold text-3xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent lg:text-5xl px-3`}> • </p>
            <p className={`font-bold text-3xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent lg:text-5xl px-3`}> FUNDING </p>
            <p className={`font-bold text-3xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent lg:text-5xl px-3`}> • </p>
            <p className={`font-bold text-3xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent lg:text-5xl px-3`}> COMMUNITY</p>
            <p className={`font-bold text-3xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent lg:text-5xl px-3`}> • </p>
            <p className={`font-bold text-3xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent lg:text-5xl px-3`}> EVENTS</p>
            <p className={`font-bold text-3xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent lg:text-5xl px-3`}> • </p>
          </Marquee>
        </main>


        <section className={`w-[95%] h-auto py-5 mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-5`}>
          <div className={`w-full cursor-pointer hover:shadow-lg duration-200 ease-in-out rounded-md h-auto py-5 px-3 lg:rounded-lg flex flex-col justify-center items-center gap-3 border-2 border-black`}>
            <IoHomeOutline className="font-bold text-3xl" />
            <p className={`text-sm font-semibold`}>Home Cleaning</p>
          </div>
          <div className={`w-full cursor-pointer hover:shadow-lg duration-200 ease-in-out rounded-md h-auto py-3 px-3 lg:rounded-lg flex flex-col justify-center items-center gap-3 border-2 border-black`}>
            <FaScissors className="font-bold text-3xl" />
            <p className={`text-sm font-semibold`}>Hair Cutting</p>
          </div>
          <div className={`w-full cursor-pointer hover:shadow-lg duration-200 ease-in-out rounded-md h-auto py-3 px-3 lg:rounded-lg flex flex-col justify-center items-center gap-3 border-2 border-black`}>
            <FaPaintRoller className="font-bold text-3xl" />
            <p className={`text-sm font-semibold`}>Room Painting</p>
          </div>
          <div className={`w-full cursor-pointer hover:shadow-lg duration-200 ease-in-out rounded-md h-auto py-3 px-3 lg:rounded-lg flex flex-col justify-center items-center gap-3 border-2 border-black`}>
            <TbAirConditioning className="font-bold text-3xl" />
            <p className={`text-sm font-semibold`}>AC Repair</p>
          </div>
          <div className={`w-full cursor-pointer hover:shadow-lg duration-200 ease-in-out rounded-md h-auto py-3 px-3 lg:rounded-lg flex flex-col justify-center items-center gap-3 border-2 border-black`}>
            <LuCookingPot className="font-bold text-3xl" />
            <p className={`text-sm font-semibold`}>Food Cooking</p>
          </div>
          <div className={`w-full cursor-pointer hover:shadow-lg duration-200 ease-in-out rounded-md h-auto py-3 px-3 lg:rounded-lg flex flex-col justify-center items-center gap-3 border-2 border-black`}>
            <RiPlantLine className="font-bold text-3xl" />
            <p className={`text-sm font-semibold`}>Gardening</p>
          </div>
          <div className={`w-full cursor-pointer hover:shadow-lg duration-200 ease-in-out rounded-md h-auto py-3 px-3 lg:rounded-lg flex flex-col justify-center items-center gap-3 border-2 border-black`}>
            <MdPets className="font-bold text-3xl" />
            <p className={`text-sm font-semibold`}>Pet Grooming</p>
          </div>
          <div className={`w-full cursor-pointer hover:shadow-lg duration-200 ease-in-out rounded-md h-auto py-3 px-3 lg:rounded-lg flex flex-col justify-center items-center gap-3 border-2 border-black`}>
            <RiPsychotherapyFill className="font-bold text-3xl" />
            <p className={`text-sm font-semibold`}>Therapy</p>
          </div>
        </section>

        <section className={`w-[95%] h-auto py-4 px-4 flex flex-col justify-start items-center gap-4 sm:gap-7`}>
          <p className={`text-2xl sm:text-3xl mb-2 lg:text-5xl font-semibold lg:font-bold`}>Avail Services Near You</p>

          <Carousel className={`h-auto w-[70%] md:w-[50%] rounded-md md:rounded-lg`}>
            <CarouselContent className=" h-[400px] lg:h-[550px] w-full">
              <CarouselItem className={` h-auto w-full relative`}>
                <div className="w-full h-full bg-amber-500 rounded-md lg:rounded-lg relative flex flex-col justify-between items-start pb-3">
                  <img src="/images/men.jpg" className={`h-[70%] z-30 w-full object-cover rounded-md md:rounded-lg xl:rounded-xl`} />
                  <p className=" text-4xl text-white mx-2 my-1">Mens</p>
                  <p className=" text-[10px] lg:text-[15px] text-white mx-2">Avail a wide variety of mens dressing, grooming and more services.</p>
                  <p className={`text-[8px] bg-white rounded-full text-black flex justify-center items-center px-4 py-1 mx-2 cursor-pointer active:scale-95 duration-200 ease-in-out hover:bg-black hover:text-white md:text-sm lg:px-6 lg:py-2 gap-3`}>Book Now <MdArrowOutward /></p>
                </div>
              </CarouselItem>
              <CarouselItem className={` h-auto w-full relative`}>
                <div className="w-full h-full bg-gray-500 rounded-md lg:rounded-lg relative flex flex-col justify-between items-start pb-3">
                  <img src="/images/women.jpg" className={`h-[70%] z-30 w-full object-cover rounded-md md:rounded-lg xl:rounded-xl`} />
                  <p className=" text-4xl text-white mx-2 my-1">Women</p>
                  <p className=" text-[10px] lg:text-[15px] text-white mx-2">Get home salon, make up and a lot more on the go.</p>
                  <p className={`text-[8px] bg-white rounded-full text-black flex justify-center items-center px-4 py-1 mx-2 cursor-pointer active:scale-95 duration-200 ease-in-out hover:bg-black hover:text-white md:text-sm lg:px-6 lg:py-2 gap-3`}>Book Now <MdArrowOutward /></p>
                </div>
              </CarouselItem>
              <CarouselItem className={` h-auto w-full relative`}>
                <div className="w-full h-full bg-black rounded-md lg:rounded-lg relative flex flex-col justify-between items-start pb-3">
                  <img src="/images/pet.jpg" className={`h-[70%] z-30 w-full object-cover rounded-md md:rounded-lg xl:rounded-xl`} />
                  <p className=" text-4xl text-white mx-2 my-1">Pet</p>
                  <p className=" text-[10px] lg:text-[15px] text-white mx-2">Book pet grooming at lowest prices near you.</p>
                  <p className={`text-[8px] bg-white rounded-full text-black flex justify-center items-center px-4 py-1 mx-2 cursor-pointer active:scale-95 duration-200 ease-in-out hover:bg-black hover:text-white md:text-sm lg:px-6 lg:py-2 gap-3`}>Book Now <MdArrowOutward /></p>
                </div>
              </CarouselItem>
              <CarouselItem className={` h-auto w-full relative`}>
                <div className="w-full h-full bg-[#d9b99b] rounded-md lg:rounded-lg relative flex flex-col justify-between items-start pb-3">
                  <img src="/images/interior.jpg" className={`h-[70%] z-30 w-full object-cover rounded-md md:rounded-lg xl:rounded-xl`} />
                  <p className=" text-4xl text-white mx-2 my-1">Interior</p>
                  <p className=" text-[10px] lg:text-[15px] text-white mx-2">Best in class interior decoration at your doorsteps.</p>
                  <p className={`text-[8px] bg-white rounded-full text-black flex justify-center items-center px-4 py-1 mx-2 cursor-pointer active:scale-95 duration-200 ease-in-out hover:bg-black hover:text-white md:text-sm lg:px-6 lg:py-2 gap-3`}>Book Now <MdArrowOutward /></p>
                </div>
              </CarouselItem>
              <CarouselItem className={` h-auto w-full relative`}>
                <div className="w-full h-full bg-orange-400 rounded-md lg:rounded-lg relative flex flex-col justify-between items-start pb-3">
                  <img src="/images/kitchen.jpg" className={`h-[70%] z-30 w-full object-cover rounded-md md:rounded-lg xl:rounded-xl`} />
                  <p className=" text-4xl text-white mx-2 my-1">Dining</p>
                  <p className=" text-[10px] lg:text-[15px] text-white mx-2">Enjoy luxury dining services only at your home.</p>
                  <p className={`text-[8px] bg-white rounded-full text-black flex justify-center items-center px-4 py-1 mx-2 cursor-pointer active:scale-95 duration-200 ease-in-out hover:bg-black hover:text-white md:text-sm lg:px-6 lg:py-2 gap-3`}>Book Now <MdArrowOutward /></p>
                </div>
              </CarouselItem>
              <CarouselItem className={` h-auto w-full relative`}>
                <div className="w-full h-full bg-[#988558] rounded-md lg:rounded-lg relative flex flex-col justify-between items-start pb-3">
                  <img src="/images/washroom.jpg" className={`h-[70%] z-30 w-full object-cover rounded-md md:rounded-lg xl:rounded-xl`} />
                  <p className=" text-4xl text-white mx-2 my-1">Washroom</p>
                  <p className=" text-[10px] lg:text-[15px] text-white mx-2">Washroom fixing and maintenance available.</p>
                  <p className={`text-[8px] bg-white rounded-full text-black flex justify-center items-center px-4 py-1 mx-2 cursor-pointer active:scale-95 duration-200 ease-in-out hover:bg-black hover:text-white md:text-sm lg:px-6 lg:py-2 gap-3`}>Book Now <MdArrowOutward /></p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer active:scale-95 duration-200 ease-in-out" />
            <CarouselNext className="cursor-pointer active:scale-95 duration-200 ease-in-out" />
          </Carousel>
        </section>



        <section className={`w-[95%] sm:w-[70%] md:w-[60%] lg:w-[90%] border-2 border-black h-auto overflow-hidden py-0 lg:py-5 flex rounded-lg flex-col lg:flex-row justify-center items-center sm:mt-3 md:mt-7 mb-2 sm:mb-7`}>

          <div className={`w-full lg:w-1/2 h-auto lg:h-full py-5 lg:py-10 mb-10 lg:mb-0 mt-2 lg:mt-0 flex flex-col justify-start items-center gap-2`}>
            <p className={`text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-semibold lg:font-bold text-center`}>Access Crowdfunding</p>
            <p className={`text-[12px] font-semibold md:text-sm lg:text-lg`}>Raise funds in 3 easy steps :</p>
            <ul className={`text-[10px] lg:mt-5 md:text-sm lg:text-lg border-2 border-black px-3 py-3 rounded-md lg:rounded-lg`}>
              <li className="text-start text-[10px] md:text-[12px] lg:text-sm">• Fill out funding details</li>
              <li className="text-start text-[10px] md:text-[12px] lg:text-sm">• Wait for approval</li>
              <li className="text-start text-[10px] md:text-[12px] lg:text-sm">• After approval, start accepting donations</li>
            </ul>
          </div>

          <div className="w-full h-[40vh] lg:w-1/2 overflow-hidden flex justify-center items-center">
            <AnimatedList>
              {newNotifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>

        </section>

        <p className={`text-2xl mt-5 mb-5 sm:text-3xl lg:text-5xl font-semibold lg:font-bold text-center`}>Events Corner</p>

        <section className={`h-auto py-4 px-4 w-[95%] grid grid-cols-1 justify-items-start gap-4 lg:grid-cols-3`}>
          
          <div className={`w-full h-44 lg:h-52 rounded-md lg:rounded-lg bg-teal-300 overflow-hidden relative`}>
            <div className="w-full h-1/3 bg-gradient-to-t from-black to-transparent absolute bottom-0 flex flex-col justify-center items-start px-4 py-4">
              <p className="text-white font-semibold text-xl lg:text-2xl">Hackathons</p>
              <p className="text-white mb-2 lg:mb-4 text-[10px] font-light lg:text-sm">From idea to prototype—turn your vision into reality by participating in hackathons near you.</p>
            </div>
              <img src="/images/event1.jpg" className={`h-full w-full object-cover`} />
          </div>

          <div className={`w-full h-44 lg:h-52 rounded-md lg:rounded-lg bg-teal-300 overflow-hidden relative`}>
            <div className="w-full h-1/3 bg-gradient-to-t from-black to-transparent absolute bottom-0 flex flex-col justify-center items-start px-4 py-4">
              <p className="text-white font-semibold text-xl lg:text-2xl">Book Fest</p>
              <p className="text-white mb-2 lg:mb-4 text-[10px] font-light lg:text-sm">A paradise for book lovers—discover, discuss, and dive into the book fests.</p>
            </div>
              <img src="/images/event2.jpg" className={`h-full w-full object-cover`} />
          </div>

          <div className={`w-full h-44 lg:h-52 rounded-md lg:rounded-lg bg-teal-300 overflow-hidden relative`}>
            <div className="w-full h-1/3 bg-gradient-to-t from-black to-transparent absolute bottom-0 flex flex-col justify-center items-start px-4 py-4">
              <p className="text-white font-semibold text-xl lg:text-2xl">Public Event</p>
              <p className="text-white mb-2 lg:mb-4 text-[10px] font-light lg:text-sm">Bring people together for inspiration, fun, and unforgettable experiences.</p>
            </div>
              <img src="/images/event3.jpg" className={`h-full w-full object-cover`} />
          </div>
        </section>

        <section className={`w-[95%] sm:w-[70%] md:w-[50%] h-auto py-5 flex flex-col justify-center items-center`}>

          <p className={`text-2xl sm:text-3xl mb-10 lg:text-5xl font-semibold lg:font-bold`}>Common Queries</p>

          <Accordion className="">
            {faq.map((e, i) => {
              return (
                <Tab key={i} className="-mt-7">
                  <Trigger className=" text-sm lg:text-lg font-semibold cursor-pointer">{e.question}</Trigger>
                  <Content className="text-[10px] text-black lg:text-[14px]">{e.answer}</Content>
                </Tab>
              )
            })}
          </Accordion>
        </section>


      </div>
    </>
  );
}
