import Link from "next/link";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header(){
    return(
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <div className="flex">
                <MenuItems title={"HOME"} address={"/"} icon={<AiFillHome className="text-2xl mx-4 sm:hidden"/>}/>
                <MenuItems title={"ABOUT"} address={"/about"} icon={<BsFillInfoCircleFill className="text-2xl mx-4 sm:hidden"/>}/>
            </div>
            <div>
                <Link href={"/"}>
                    <h2 className="text-2xl"><span className="font-bold bg-amber-600 py-1 px-2 rounded-lg mr-1">IMDb</span>
                    <span className="text-xl hidden sm:inline">Clone</span></h2>
                </Link>
            </div>
        </div>
    )
}