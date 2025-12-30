import React, { useContext, useState } from 'react'
import icon from "../assets/icon.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from './ThemeProvider';


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext)



    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
        <div style={{ backgroundColor: theme == "light" ? "white" : "bg-black/40 backdrop-blur-lg border-b border-white/10", color: theme == "light" ? "black" : "white" }} className={`${theme == "dark:" ? "shadow-2xl" : ""}`}>
            <nav className={`${theme === "dark"
                ? "bg-black/40 backdrop-blur-xl border-b border-white"
                : "bg-white shadow-md"} max-sm:py-3 fixed top-0 z-40  w-full shadow-md ${open ? "max-lg:px-0" : "max-sm:px-4"}  py-4 px-8   rounded-bl-2xl rounded-br-2xl flex justify-between items-center `}>
                <div className={`flex gap-2 items-center ${open ? "hidden" : "block"}`}>
                    <img src={icon} alt="icon" width={"50px"} height={"50px"} className='rounded-lg max-sm:w-10 max-sm:h-10' />
                    <h1 className='max-sm:text-xl text-2xl font-bold'>Puthagam</h1>
                </div>
                <div className='max-lg:hidden'>
                    <ul className='flex gap-8 text-lg font-semibold mt-1'>
                        <li className='hover:cursor-pointer hover:text-green-500'>Home</li>
                        <Link to={"/books"}>
                            <li className='hover:cursor-pointer hover:text-green-500'>All Books</li>
                        </Link>
                        <li className='hover:cursor-pointer hover:text-green-500'>About</li>
                        <li className='hover:cursor-pointer hover:text-green-500'>Contact</li>
                    </ul>
                </div>

                <div className={`flex items-center gap-8 mt-2 ${open ? "hidden" : "block"}`}>
                    <i className='max-sm:text-xl text-2xl hover:cursor-pointer hover:text-green-500'><FaShoppingCart /></i>
                    <i className='max-sm:text-2xl text-3xl hover:cursor-pointer hover:text-green-500'><IoPersonCircle /></i>
                    {
                        theme == "light" ? (
                            <i className='max-sm:text-2xl text-3xl hover:cursor-pointer hover:text-green-500' onClick={toggleTheme}><MdDarkMode /></i>
                        ) :
                            (
                                <i className='max-sm:text-2xl text-3xl hover:cursor-pointer hover:text-green-500' onClick={toggleTheme}><MdLightMode /></i>
                            )
                    }
                </div>

                <div className={`flex items-center gap-4 lg:hidden mt-2 ${open ? "hidden" : "block"}`}>
                    {open == false ? <i className='text-xl md:text-2xl' onClick={toggleMenu}><IoMdMenu /></i> : <i className='text-xl' onClick={toggleMenu}><IoMdClose /></i>}
                </div>

                <div className={`lg:hidden fixed z-50 top-0 w-full p-0  m-0 h-screen ${theme == "dark" ? "bg-black" : "bg-white"} transition-all duration-300 ease-in-out ${open ? "block" : "hidden"}`}>
                    <div className='px-3 md:px-8 py-4 flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <img src={icon} alt="icon" width={"50px"} height={"50px"} className='rounded-lg max-sm:w-10 max-sm:h-10' />
                            <h1 className='max-sm:text-xl text-2xl font-bold'>Puthagam</h1>
                        </div>

                        <i className='text-xl font-bold mt-1 md:text-2xl' onClick={toggleMenu}><IoMdClose /></i>
                    </div>

                    <hr className='mx-2 md:mx-6' />

                    <ul className='my-2 px-4 md:px-6 space-y-1 text-md font-bold text-center'>
                        <li className='hover:bg-green-500 hover:text-white py-2'>Home</li>
                        <li className='hover:bg-green-500 hover:text-white py-2'>All Books</li>
                        <li className='hover:bg-green-500 hover:text-white py-2'>About</li>
                        <li className='hover:bg-green-500 hover:text-white py-2'>Contact</li>
                    </ul>
                </div>
            </nav>
            <hr className='mx-2' />

        </div>
    )
}

export default Navbar