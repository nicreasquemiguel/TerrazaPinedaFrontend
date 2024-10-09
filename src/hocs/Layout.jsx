import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Footer from '../containers/Footer';
// import UseProfileData from '../views/plugin/UseProfileData'
import UseProfileData from '../views/plugin/UserProfileData';
const Layout = ({  children }) => {


  // const [data, setData] = useState(UseProfileData())

  console.log(UseProfileData())
  
  


  return (
        <div className='w-full h-full flex justify-center'>


          <div className =" flex flex-col max-w-7xl w-full min-w-80 md:min-w-[750px]">
            
            <Navbar/>
            <Outlet/>


            { children }

            <Footer/>
          </div>
        </div>
  )      
}

export default Layout