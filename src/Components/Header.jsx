import { IoMenu } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { LuUser2, LuUsers2 } from "react-icons/lu";

import { useState } from "react";

import { HeaderMenu } from "./HeaderMenu";


export const Header = () => {


    const [show, setShow] = useState(false);

    const showMenu = () => {
        setShow(!show);
    }



    return (
        <div className="bg-primary">
            <div className=" h-20 text-white flex justify-between items-center px-4 md:container lg:h-24">

                <IoMenu type="button" onClick={showMenu} className="h-12 w-12 md:h-3/4 md:w-1/4" />
                <img className='w-10 h-10 md:hidden' src='./src/assets/ms.svg' alt="shortLogo"></img>
                <img className='h-full hidden md:block' src='./src/assets/msLongWhite.svg' alt="BigLogo"></img>

                <form className="relative w-full m-2">
                    <input id='search' type="text" className="text-black px-3 rounded-full h-8 outline-none max-w-full lg:h-12" />
                    <IoIosSearch className="text-black w-6 h-6 absolute top-1 right-2  lg:h-11 lg:w-11" />
                </form>
                <div className="flex items-center gap-3 justify-between">
                    <IoMdHeartEmpty className="hidden w-12 h-12 md:block" />
                    <div className=" hidden items-center gap-3 justify-between md:flex">
                        <LuUser2 className="w-12 h-12" />
                        <a href="#">Iniciar<br /><span className="font-bold">Sesión</span></a>
                    </div>
                    <div className="relative">
                        <PiShoppingCartSimple className="h-10 w-10" />
                        <p>105k</p>
                        <div className="h-6 w-6 rounded-full absolute top-0 left-6 text-center bg-[#18c0a6]">4</div>
                    </div>

                </div>
            </div>
            <HeaderMenu show={show} showMenu={showMenu} />

        </div >

    )
}
