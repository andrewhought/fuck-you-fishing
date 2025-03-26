import { Menubar } from "radix-ui";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";

export const MenuBar = () => {
    return (
        <Menubar.Root className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between bg-black px-4 py-3">
            <img
                className="ml-3 flex h-auto w-32 items-center"
                src={logo}
                alt="Logo"
            />
            <div className="mx-3 flex items-center space-x-10">
                <Menubar.Menu>
                    <Menubar.Trigger className="flex text-2xl font-extrabold text-white transition-transform duration-300 hover:translate-y-[-3px]">
                        Shop
                    </Menubar.Trigger>

                    <Menubar.Trigger className="flex items-center text-2xl font-extrabold text-white transition-transform duration-300 hover:translate-y-[-3px]">
                        Gallery
                    </Menubar.Trigger>

                    <Menubar.Trigger className="flex text-2xl font-extrabold text-white transition-transform duration-300 hover:translate-y-[-3px]">
                        About Us
                    </Menubar.Trigger>
                    <div className="flex h-9 w-auto items-center">
                        <FaShoppingCart className="ml-6 h-6 w-auto pb-1 text-white transition-transform duration-300 hover:translate-y-[-3px] cursor-pointer" />
                    </div>
                </Menubar.Menu>
            </div>
        </Menubar.Root>
    );
};
