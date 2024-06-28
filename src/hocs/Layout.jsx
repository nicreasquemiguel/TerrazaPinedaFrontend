import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Footer from '../containers/Footer';

const Layout = ({  children }) => {

  return (
        <>
          <Navbar/>
          <Outlet/>


          { children }

          <Footer/>
        </>
  )      
}

export default Layout