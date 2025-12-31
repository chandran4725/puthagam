import React, { useContext, useState } from 'react'
import icon from '../assets/icon.png'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { ToggleContext } from './ToggleProvider';

const AdminNav = () => {

    const { toggle, toggleMenu } = useContext(ToggleContext);

    return (
        <div>
            <nav className='flex justify-between items-center pr-2'>
                <div className={`flex gap-2 items-center`}>
                    <img src={icon} alt="icon" width={"50px"} height={"50px"} className='rounded-lg max-sm:w-10 max-sm:h-10' />
                    <h1 className='max-sm:text-xl text-white text-2xl font-bold'>Puthagam</h1>
                </div>

                <div className='lg:hidden'>

                    <i className='text-white text-2xl  cursor-pointer ' onClick={toggleMenu}><IoMdMenu /></i>

                </div>
            </nav>
            <hr className='mt-2 mb-8 text-white' />
        </div>
    )
}

export default AdminNav