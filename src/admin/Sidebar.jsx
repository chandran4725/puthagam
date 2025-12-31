import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleContext } from "./ToggleProvider";
import icon from "../assets/icon.png"
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {

    const { toggle, toggleMenu } = useContext(ToggleContext);

    return (
        <>
            <div className="h-screen w-64 bg-slate-900 text-white p-6 border-r-2 border-amber-600 max-md:hidden">
                <h1 className="text-2xl font-bold mt-2 mb-4">Admin Panel</h1>
                <hr />
                <nav className="space-y-4 mt-4">
                    <Link to="/admin/dashboard" className="block py-2 px-4 rounded-md hover:bg-amber-600">
                        Dashboard
                    </Link>
                    <Link to="/admin" className="block py-2 px-4 rounded-md hover:bg-amber-600">
                        Add Book
                    </Link>
                    <Link to="/admin/allbooks" className="block py-2 px-4 rounded-md hover:bg-amber-600">
                        All Books
                    </Link>
                </nav>
            </div>

            <div className={`lg:hidden ${toggle == true ? 'block' : 'hidden' } fixed z-50 top-0 w-full p-0  m-0 h-screen bg-slate-900 text-white transition-all duration-300 ease-in-out ${open ? "block" : "hidden"}`}>
                <div className='px-3 md:px-8 py-4 flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <img src={icon} alt="icon" width={"50px"} height={"50px"} className='rounded-lg max-sm:w-10 max-sm:h-10' />
                        <h1 className='max-sm:text-xl text-2xl font-bold'>Puthagam</h1>
                    </div>

                    <i className='text-xl font-bold mt-1 md:text-2xl' onClick={toggleMenu}><IoMdClose /></i>
                </div>

                <hr className='mx-2 md:mx-6' />

                <ul className='my-2 px-4 md:px-6 space-y-1 text-md font-bold text-center'>
                    <Link to={"/admin/dashboard"} onClick={toggleMenu}>
                        <li className='hover:bg-amber-600  py-2'>Dashboard</li>
                    </Link>
                    <Link to={"/admin"} onClick={toggleMenu}>
                        <li className='hover:bg-amber-600  py-2'>Add Book</li>
                    </Link>

                    <li onClick={toggleMenu} className='hover:bg-amber-600 hover:text-white py-2'>All Books</li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
