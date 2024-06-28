import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, REACT_APP_API_URL } from '../../actions/auth';
import { register } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import Heading from '../../components/Heading';
import AuthForm from '../../components/AuthForm';

import { useAuthStore } from '../../store/auth';


  const Signup = () => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, phone, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn) 

    const onSubmit = async e => {
        e.preventDefault();

        // Set isLoading to true when the form is submitted
        setIsLoading(true);

        const { error } = await register(first_name, last_name, email, phone, password, re_password);
        if (error) {
            // alert(JSON.stringify(error));
     
        } else {
            navigate('/');
            resetForm();
        }

                // Reset isLoading to false when the operation is complete
                setIsLoading(false);
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
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=localhost:5173/facebook`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    useEffect(() => {
      if (isLoggedIn()) {
          navigate('/');
      }
    }, []);

  
  const resetForm = () =>{
    setFormData({
     email: '',
      password: '' 
    })
  }



  return (
      <AuthForm>
        <Heading title={'Registrate'} sentence={'Crea tu cuenta'} sentence2={''} logo={false}/>

        <form className='w-full place-self-center	  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700' method='POST' onSubmit={e => onSubmit(e)}>
          
            <div className='my-5'>      
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Nombre(s)
              </label>
                <input 
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  placeholder='Introduce tu nombre..'
                  id= 'first_name'
                  name='first_name'
                  value={first_name}
                  onChange={e => onChange(e)}
                  required
                  autoComplete='on' 
                />
          </div>

          <div className='my-5'>      
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Apellido(s)
            </label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Introduce tus apellidos...'
                id= 'last_name'
                name='last_name'
                value={last_name}
                onChange={e => onChange(e)}
                required
                autoComplete='on' 
              />
          </div>
          
          <div className='my-5'>      
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Telefono
            </label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Introduce numero de celular...'
                id= 'phone'
                name='phone'
                value={phone}
                onChange={e => onChange(e)}
                required
                autoComplete='on' 
              />
          </div>
          

          <div className='my-5'>      
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo electronico
            </label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='email'
                placeholder='Introduce tu correo electronico...'
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
              Contraseña
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
              minLength='6'
              autoComplete='on' 
              />
          </div>
          

          <div className='my-5'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Confirma la contraseña
            </label>
            <input 
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              placeholder='**********'
              id='re_password'
              name='re_password'
              value={re_password}
              onChange={e => onChange(e)}
              required
              minLength='6'
              autoComplete='on' 
              />
          </div>
          
          <div className="flex items-center justify-between">
          <button type="submit" className="text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">REGISTRATE</button>          
          
          </div>

          <p className='mt-3 container'>
            Ya tienes cuenta? <Link to='/login' className='text-blue-500 font-bold  hover:underline'>Inicia Sesion</Link>
          </p>
        </form>
      
        {/* <button onClick={continueWithGoogle} className="text-white w-full bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">CONTINUA CON GOOGLE</button>          
        <button  onClick={continueWithFacebook} className="text-white w-full bg-gradient-to-r from-blue-500 to-blue-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">CONTINUA CON FACEBOOK</button>           */}

        </AuthForm>
        
    
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

// export default connect(mapStateToProps, { signup })(Signup)
export default Signup