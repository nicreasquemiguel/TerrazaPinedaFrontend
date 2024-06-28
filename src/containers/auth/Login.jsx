import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
// import { login, REACT_APP_API_URL } from '../actions/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthForm from '../../components/AuthForm';
import Heading from '../../components/Heading';

import { useAuthStore } from '../../store/auth';
import { login  } from '../../utils/auth';


const Login = () => {
  const [formData, setFormData] = useState({
      email: '',
      password: '' 
  })
  const { email, password } = formData;

  const [isLoading, setIsLoading] = useState(false)
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn) 
  const navigate = useNavigate()

  useEffect(() => {
      if(isLoggedIn()){
        navigate('/')
      }
  }, [])

  const resetForm = () =>{
    setFormData({
      email: '',
      password: '' 
    })
  }

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
      e.preventDefault();
      setIsLoading(true)
      const {data, error} = await login(email, password)
      
      if (data){          
        navigate('/')
        resetForm()
      }
      setIsLoading(false)
  }

  const continueWithGoogle = async () => {
    try{
      const res = axios.get(`${REACT_APP_API_URL}/auth/o/google-oauth2?redirect_uri=http://localhost:5173/google` )
      url = res.data.activation_url

      window.location.replace(res.data.authorization_url)
    }catch(err){

    }
  } 
  
  const continueWithFacebook = async () => {
    try{
      const res = axios.get(`${REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=http://localhost:5173/facebook` )
      url = res.data.activation_url

      window.location.replace(res.data.authorization_url)
    }catch(err){

    }
  } 

  return (
      <AuthForm className='place-self-center p-10'>

        
      <Heading title={'Inicia Sesion'} sentence={'Ingresa tu cuenta'} sentence2={''} logo={false}/>

      <form className='w-full place-self-center	  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700' method='POST' onSubmit={e => onSubmit(e)}>
          <div className=''>      
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
            <input 
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              placeholder='Email'
              id= 'email'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
              autoComplete='on' 
            />
        </div>


        <div className='my-5'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            type='password'
            placeholder='**********'
            id='password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            required
            minLength='4'
            autoComplete='on' 
            />
        </div>
        
        <div className="flex items-center justify-between">
        <button type="submit" className="text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">LOG  IN</button>          

          
        </div>

        <p className='mt-3 containe text-center'>
          Olvidaste tu contraseña? <br/><Link className='text-blue-500 font-bold  hover:underline' to='/reset-password'>Reset Password</Link>
        </p>
        <p className='mt-3 containe text-center'>
          ?Aún no tienes cuenta? <Link className='text-blue-500 font-bold  hover:underline' to='/registrar'>Registrate</Link>
        </p>

      </form>

    </AuthForm>
  )
}

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// })

// export default connect(mapStateToProps, { login })(Login)
export default Login