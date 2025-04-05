import { FaLocationDot } from "react-icons/fa6";

interface sellProps {
    image: string,
    title: string,
    price: string,
    location: string,
    onClick: () => void
}

function SellBox({image, title, price, onClick, location} : sellProps) {
    return (
        <>
            <div className="w-full h-auto flex justify-between items-start gap-3 py-3 px-3 rounded-md bg-zinc-900">
                <div className="w-[40%] h-36 rounded-md overflow-hidden">
                    <img src={image} className="w-full h-full object-cover" />
                </div>
                
                <div className="w-[60%] h-36 flex flex-col justify-start pr-2 items-start">
                    <h1 className="text-white text-xl">{title}</h1>
                    <span className="w-full text-start text-white text-[12px] md:text-sm font-light my-2 flex justify-start items-center gap-1"><FaLocationDot />  {location}</span>
                    <span className="w-full text-start text-white text-[12px] md:text-sm font-light flex justify-start items-center gap-1">₹  {price}</span>
                    <p className="px-4 py-1 lg:py-2 text-[10px] mt-3 hover:opacity-75 duration-200 ease-in-out active:scale-95 cursor-pointer rounded-full bg-white text-black" onClick={onClick}>Know more</p>
                </div>
            </div>
        </>
    )
}

export default SellBox
