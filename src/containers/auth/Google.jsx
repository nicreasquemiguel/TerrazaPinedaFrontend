import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { googleAuthenticate } from '../../actions/auth'
import queryString from 'query-string';

const Facebook = ({ googleAuthenticate, children }) => {
  let location = useLocation()

  useEffect(() =>{
    const values = queryString.parse(location.search)
    const state = values.state ? values.state : null
    const code = values.code ? values.code : null

    console.log('State: '+ state)
    console.log('Code: '+ code)

    if(state && code){
      console.log('ins')
      googleAuthenticate(state, code)
    } 
  }, [location])

  return (
        <>


          { children }
        </>
  )      
}

export default connect(null, { googleAuthenticate })(Facebook);