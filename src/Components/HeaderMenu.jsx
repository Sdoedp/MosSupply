import { LuUser2, LuUsers2 } from "react-icons/lu";
import {
    BiChevronsLeft,
    BiHighlight,
    BiPhone,
    BiKnife,
    BiSolidEyedropper,
    BiPencil,
    BiPen,
    BiShieldPlus,
    BiCubeAlt
} from "react-icons/bi";
import { PiShoppingCartSimple } from "react-icons/pi";

export const HeaderMenu = (props) => {
    const { show, showMenu } = props

    return (

        <div className={`${show ? 'left-0 shadow-r-total' : 'left-[-100%]'} fixed transition-all bg-white top-0 w-[83%] h-full flex flex-col`}>
            <img className="w-40 mt-4 mx-auto" src="./src/assets/msLong.svg" alt="logo" />
            <BiChevronsLeft type="button" onClick={showMenu} className="absolute w-8 h-8 text-gray-400 right-4 top-7" />

            {/* Menu */}
            <div className="flex items-center justify-center mx-auto bg-primary rounded-full w-8/12 p-2 text-white">
                <LuUser2 type='button' className="h-8 w-8" />
                <div>
                    <h4 className="leading-3 font-semibold my-1">Inicia Sesion</h4>
                    <p className="leading-3 text-sm font-light">o registrate</p>
                </div>
            </div>

            <div>
                <ul className="p-6">
                    <li><a className="text-xl text-primary-dark flex gap-1 items-center border-t-2 py-2" href="#"><LuUser2 />Cuenta</a></li>
                    <li><a className="text-xl text-primary-dark flex gap-1 items-center py-2 pb-6" href="#"><PiShoppingCartSimple />Carrito de Compras</a></li>
                    <li><a className="text-xl flex gap-1 items-center border-t-2 py-2" href="#"><BiHighlight />Pigmentos</a></li>
                    <li><a className="text-xl flex gap-1 items-center border-t-2 py-2" href="#"><BiSolidEyedropper />Cartuchos</a></li>
                    <li><a className="text-xl flex gap-1 items-center  py-2" href="#"><BiKnife />Agujas Convencionales</a></li>
                    <li><a className="text-xl flex gap-1 items-center  py-2" href="#"><BiPencil />Tips</a></li>
                    <li><a className="text-xl flex gap-1 items-center  py-2" href="#"><BiPen />Grips</a></li>
                    <li><a className="text-xl flex gap-1 items-center border-t-2 py-2" href="#"><BiShieldPlus />Asepcia</a></li>
                    <li><a className="text-xl flex gap-1 items-center border-t-2 py-2" href="#"><BiCubeAlt />Descartables</a></li>
                    <li><a className="text-xl flex gap-1 items-center border-t-2 py-2" href="#"><LuUsers2 />Nosotros</a></li>
                    <li><a className="text-xl flex gap-1 items-center  py-2" href="#"><BiPhone />Contacto</a></li>

                </ul>
            </div>
        </div >

    )
}
