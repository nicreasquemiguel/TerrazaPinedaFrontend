import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import Heading from '../../components/Heading';
import { reset_password } from '../../utils/auth';

const ResetPassword = () => {
    const [requestSent, setRequestSet] = useState(false)
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email)
        setRequestSet(true)
    };
  

  // Is autheiticated
  // redirect home page
  if(requestSent){
    return <Navigate to='/' />
  }

  return (
    <AuthForm className='place-self-center p-10'>
      <Heading title={'Resetea contraseña'} sentence={'Te llegara un correo de confirmación'} sentence2={''} logo={false} />

      <form className='w-full place-self-center	  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700' onSubmit={e => onSubmit(e)}>
          <div className='f'>      
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
        <button type="submit" className="text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">SOLICITA RESETEO</button>          

          
        </div>

        <a type="button" href='/' className="text-white w-full bg-gray-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancelar</a>

      </form>
    </AuthForm>
  )
}


// export default connect(null, { reset_password })(ResetPassword)
export default ResetPassword