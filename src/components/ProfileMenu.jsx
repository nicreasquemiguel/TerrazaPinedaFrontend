import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { logout } from '../actions/auth'
import UserData from '../views/plugin/UserData'
import UseProfileData from '../views/plugin/UserProfileData'
import { logout } from '../utils/auth'
import { FaUserCheck } from "react-icons/fa";


const ProfileMenu = ({isLoggedIn}) => {
  const [selectAria, setSelectAria] = useState('false');
  // const [user, setUser] = useState(UseProfileData?.user)

  const data = UseProfileData()
  const user = data?.user

  useEffect(() => {


    

  }, [])


  // console.log(user?.email)


  return (
    <>
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button   type="button"  className="flex text-sm md:me-0 " id="user-menu-button" aria-expanded={selectAria} data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        {/* <img className="w-8 h-8 rounded-full" src="tpp.jpg" alt="user photo"/> */}
        <FaUserCheck className="w-5 h-5 rounded-full"/>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">

          <span className="block text-sm text-gray-900 dark:text-white truncate">      {user?.first_name + " " + user?.last_name}</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
        </div>
        <ul  className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a  href="/mis-eventos"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black ">Mis Eventos</a>
          </li>

          <li>
            <a href='/'  onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Cerrar sesion</a>
          </li>
        </ul>
      </div>

    </div>
   
    </>
  )
}



export default ProfileMenu