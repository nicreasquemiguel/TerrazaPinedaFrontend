import React, { Fragment, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { logout } from '../utils/auth'
import { connect, useSelector } from 'react-redux'
import ProfileMenu from './ProfileMenu'
import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router-dom'
import UserData from '../views/plugin/UserData'
import UseProfileData from '../views/plugin/UserProfileData'
import NavAuth from './NavAuth'

const Navbar = () => {
  const [letters, setLetters] = useState('TP')
  const [navbar, setNavbar] = useState(false)
  const [user, setUser] = useState(null)
  const [data, setData] = useState(UseProfileData())

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn) 

  // if(isLoggedIn){
  //   setData(UseProfileData()
  // }



  const navigate = useNavigate('/')

  useEffect(() => {

    if (isLoggedIn){
      setUser(data.user)
    }
    
  }, [])

 const logoutHandler = () => {

    logout()
    document.getElementById("close-button").click()
 }



  const publicLinks = () => (
    <Fragment>
      <li>
        <Link to="/login"  onClick={()=>{document.getElementById("close-button").click()}} className="block hover:text-sky-400 hover:font-bold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
      </li>
      <li>
        <Link to="/registrar"  onClick={()=>{document.getElementById("close-button").click()}} className="block hover:text-sky-400 hover:font-bold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Registrate</Link>
      </li>
    </Fragment>
  )

  const authLinks = () => (
    <li>
      
      <Link   onClick={logoutHandler} className="block hover:text-sky-400 hover:font-bold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Logout</Link>
    </li>
  )

  const authProfile = () => (
    <ProfileMenu />
  )
 

  const expand = (e) => {
    // console.log(e.target.innerHTML)
    setLetters('Terraza Pineda')
  }


  const compress = (e) => {
    // console.log(e.target.innerHTML)
    setLetters('TP')
  }

  const [visible, setVisible] = useState(false);

  const handleHover = () => {
    setVisible((prevVisible) => (prevVisible = !prevVisible));
  };

  return (
    <>


<nav className="bg-white sticky   border-gray-200 dark:bg-gray-900">

  <div className="max-w-screen-xl flex justify-between flex-wrap  items-center  mx-auto p-4">
    <a href="/" className="flex      items-center space-x-3 rtl:space-x-reverse">
        {/* <img src="tp.svg" className="h-6 pl-3" alt="Flowbite Logo" /> */}
        <span onMouseOver={e => { expand(e) }} onMouseOut={e => { compress(e) }} className="self-center transition-all animate-pulse uppercase text-center font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  whitespace-nowrap dark:text-black">{letters}</span>
    </a>
    <div className='grid grid-cols-2 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
    {isLoggedIn() ? <ProfileMenu  isLoggedIn={isLoggedIn}  /> : <NavAuth/> }
    <button id='close_button' onMouseOver={handleHover}  data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded='true'>
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    </div>
    <div data-toggle="dropdown"  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
      <ul  data-toggle="dropdown" className="flex flex-col   font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li >
          <Link onClick={()=>{document.getElementById("close-button").click()}} to="/" className="block py-2 px-3 text-black  hover:text-sky-400 hover:font-bold rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Inicio</Link>
        </li>
        <li>
          <Link to="/precios" onClick={()=>{document.getElementById("close-button").click()}} className="block py-2 px-3 text-black hover:text-sky-400 hover:font-bold rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Precios</Link>
        </li>
        <li>
          <Link to="/reglamento" onClick={()=>{document.getElementById("close-button").click()}} className="block py-2 px-3 text-black hover:text-sky-400 hover:font-bold  rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Reglamento</Link>
        </li>
        <li>
          <Link to="/fotos" onClick={()=>{document.getElementById("close-button").click()}} className="block py-2 px-3 text-black rounded hover:text-sky-400 hover:font-bold md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Fotos</Link>
        </li>
        <li>
          <Link to="/ubicacion" onClick={()=>{document.getElementById("close-button").click()}} className="block py-2 px-3 rounded hover:text-sky-400 hover:font-bold md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Ubicación</Link>
        </li>
        {/* {isLoggedIn() ? authLinks() : publicLinks()} */}
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar