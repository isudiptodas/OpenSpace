import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDescription } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface eventProps {
  title: String,
  shortDesc: String,
  location: String,
  onClick?: () => void,
  photo: string
}

function EventBox({title, shortDesc, location, onClick, photo} : eventProps) {
  return (
    
    <>
      <div className={`w-full h-36 rounded-md lg:rounded-lg cursor-pointer relative`}>
        <div className="h-full rounded-md lg:rounded-lg bottom-0 w-full bg-gradient-to-t from-black to-transparent absolute"></div>
        <img src={photo} className="h-full w-full object-cover rounded-md lg:rounded-lg" />

        <div className="absolute h-full w-full flex flex-col justify-end items-start px-3 pb-3 top-0 rounded-md lg:rounded-lg">
            <h1 className="text-white font-bold text-2xl">{title}</h1>
            <p className="text-start text-[10px] text-white flex justify-center items-center gap-2"> <MdOutlineDescription/>{shortDesc}</p>
            <p className="text-start text-[10px] text-white flex justify-center items-center gap-2"><FaLocationDot /> {location} </p>
            <p className="flex justify-center items-center gap-2 w-auto px-3 py-1 text-[10px] rounded-full cursor-pointer mt-2 active:scale-95 duration-200 ease-in-out hover:opacity-60 bg-white text-black" onClick={onClick}>Know more <MdKeyboardDoubleArrowRight/></p>
        </div>
      </div>
    </>
  )
}

export default EventBox
