import React, { startTransition, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { checkAuthenticated, load_user, facebookAuthenticate } from '../../actions/auth'
import queryString from 'query-string';

const Facebook = ({ checkAuthenticated, load_user, facebookAuthenticate, children }) => {
  let location = useLocation()

  useEffect(() =>{
    const values = queryString.parse(location.search)
    const state = values.state ? values.state : null
    const code = values.code ? values.code : null

    console.log('State: '+ state)
    console.log('Code: '+ code)

    if(state && code){
      console.log('ins')
      facebookAuthenticate(state, code)
    } 
  }, [location])

  return (
        <>


          { children }
        </>
  )      
}

export default connect(null, { checkAuthenticated, load_user, facebookAuthenticate })(Facebook);