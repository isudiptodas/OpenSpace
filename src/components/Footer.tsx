import Link from "next/link"

function Footer() {
    return (

        <>
            <footer className="w-full h-72 z-30 lg:h-80 xl:h-96 bg-black relative flex flex-col justify-start overflow-hidden items-center py-5 sm:gap-10">
                <p className="w-auto py-1 px-5 rounded-full border-[1px] border-white mt-2 text-center text-white text-[12px] sm:text-lg xl:text-xl tracking-widest">OPENSPACE</p>

                <div className="py-2 px-2 h-full mt-5 w-full grid grid-cols-3 justify-items-center">

                    <div className="h-full w-full flex flex-col justify-start items-center gap-2">
                        <p className="text-white text-[12px] lg:text-lg font-bold mb-3">General</p>
                        <Link href='/about' className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">About Us</Link>
                        <Link href='/contact' className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Contact Us</Link>
                    </div>
                    <div className="h-full w-full flex flex-col justify-start items-center gap-2">
                        <p className="text-white text-[12px] lg:text-lg font-bold mb-3">Services</p>
                        <Link href='/users/marketplace' className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Marketplace</Link>
                        <Link href='/users/services' className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Home Service</Link>
                        <Link href='/users/crowdfunding' className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Crowdfunding</Link>
                        <Link href='/users/events' className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Events</Link>
                    </div>
                    <div className="h-full w-full flex flex-col justify-start items-center gap-2">
                        <p className="text-white text-[12px] lg:text-lg font-bold mb-3">Website</p>
                        <p className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Terms of Use</p>
                        <p className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Privacy Policy</p>
                        <p className="text-white text-[10px] cursor-pointer lg:mb-1 lg:text-sm ">Join as Partner</p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
