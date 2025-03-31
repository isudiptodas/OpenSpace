import Link from "next/link"

function Footer() {
    return (

        <>
            <footer className="w-full h-72 z-30 xl:h-80 bg-black relative flex flex-col justify-start overflow-hidden items-center py-5 sm:gap-10">
                <p className="w-auto py-1 px-5 rounded-full border-[1px] border-white mt-2 text-center text-white text-[12px] sm:text-lg xl:text-xl tracking-widest">OPENSPACE</p>

                <div className="py-2 px-2 h-full mt-5 w-full grid grid-cols-3 justify-items-center">

                    <div className="h-full w-full flex flex-col justify-start items-center gap-2">
                        <p className="text-white text-[12px] lg:text-lg font-bold mb-3">General</p>
                        <Link href='/about' className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">About Us</Link>
                        <p className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Why Us ?</p>
                        <Link href='/contact' className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Contact Us</Link>
                    </div>
                    <div className="h-full w-full flex flex-col justify-start items-center gap-2">
                        <p className="text-white text-[12px] lg:text-lg font-bold mb-3">Services</p>
                        <p className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Marketplace</p>
                        <p className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Home Service</p>
                        <p className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Crowdfunding</p>
                        <p className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Events</p>
                    </div>
                    <div className="h-full w-full flex flex-col justify-start items-center gap-2">
                        <p className="text-white text-[12px] lg:text-lg font-bold mb-3">Website</p>
                        <p className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Terms of Use</p>
                        <p className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Privacy Policy</p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
