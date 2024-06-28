import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
// import { useNavigate } from 'react-router-dom';
import {  useMatch, useParams } from 'react-router-dom'
import { reset_password_confirm } from '../../utils/auth';
import Heading from '../../components/Heading';
import AuthForm from '../../components/AuthForm';

// let match = useMatch('/password/reset/confirm/:uid/:token');

const ResetPasswordConfirm = () => {
    const [requestSent, setRequestSet] = useState(false)
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ""
    });
    const navigate = useNavigate()
    const routeParams = useParams()
    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });



    const onSubmit = e => {
        e.preventDefault();
        const uid = routeParams.uid
        const token = routeParams.token

        reset_password_confirm(uid, token, new_password, re_new_password)
        setRequestSet(true)
    };
  

  // Is autheiticated
  // redirect home page
  if(requestSent){
    navigate('/login')
  }

  return (
    <AuthForm className='container mt-5 w-full max-w-xs justify-self-center bg-black'>
      <Heading title={'Resetea contraseña'} sentence={'Te llegara un correo de confirmación'} sentence2={''} logo={false} />
      <form className='w-full place-self-center	  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'  method='POST' onSubmit={e => onSubmit(e)}>
          <div className='f'>      
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Elije contraseña nueva:
            </label>
            <input 
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              placeholder='Escribe contraseña...'
              id='new_password'
              name='new_password'
              value={new_password}
              onChange={e => onChange(e)}
              required
              minLength='4'
              autoComplete='on' 
              />
            
            <input 
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              placeholder='Confirma la contraseña...'
              id='re_new_password'
              name='re_new_password'
              value={re_new_password}
              onChange={e => onChange(e)}
              required
              minLength='4'
              autoComplete='on' 
              />
        </div>

        
        <div className="flex items-center justify-between">
        <button type="submit" className="text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">RESET PASSWORD</button>          

          
        </div>

        <a type="button" href='/' className="text-white w-full bg-gray-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">CANCEL</a>

      </form>
    </AuthForm>
  )
}


// export default connect(null, { reset_password_confirm })(ResetPasswordConfirm)
export default ResetPasswordConfirm