import { set } from 'date-fns';
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";


const NavAuth = () => {    

    const [selectAria, setSelectAria] = useState('false');
    const [visible, setVisible] = useState('hidden')
    
    const handleHover = () => {
        if(visible){
            setVisible('')
        }
        else {
            setVisible('hidden')
        }
        // setVisible(true)
    }

    return (
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" onMouseEnter={handleHover}  className="flex text-sm md:me-0" id="user-menu-button" aria-expanded='true' data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                {/* <img className="w-8 h-8 rounded-full" src="tpp.jpg" alt="user photo"/> */}
                <FaUser className="w-5 h-5 rounded-full"/>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div className={"z-50  my-4 text-base list-none bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 " + visible} id="user-dropdown">
            <ul  className="py-2" aria-labelledby="user-menu-button">
                <li>
                    <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Inicia Sesion</a>
                </li>
                <li>
                    <a href="/registrar"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black ">Registrar</a>
                </li>

            </ul>
            </div>

        </div>
    )
}

export default NavAuth