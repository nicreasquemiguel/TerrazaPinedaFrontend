import React, { useRef, useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import apiInstance from '../utils/axiosAPI'
import { API_BASE_URL } from '../utils/constants.jsx'
import UserData from '../views/plugin/UserData.jsx'
import UseProfileData from '../views/plugin/UserProfileData.jsx'

const Checkout = () => {
  const navigate = useNavigate()
  const {state} = useLocation()
  const [event, setEvent] = useState('')
  const [coupon, setCoupon] = useState('')
  const [order, setOrder] = useState('')
  const [paymentLoading, setPaymentLoading] = useState(false)
  const event_id = state.event 
  const couponInput = useRef(null)


  const data = UseProfileData()
  const user = data?.user
  const userData = UserData()

  const formData = new FormData();

  const  payWithStripe =  async (e) => {
    e.preventDefault();
    setPaymentLoading(true)
    createCartOrder()
    console.log(order)
    const res = apiInstance.post(`${API_BASE_URL}stripe-checkout/`, formData)
    // e.target.form.submit()  
    setPaymentLoading(false)
  }

  const getEvent = async () => {
    await apiInstance.get('eventos/' + event_id).then(res => {
      console.log(res.data)
      setEvent(res.data)

    })
  }

  const getExtrasTotal = () => {
    
    return parseInt(event.extras.reduce((acc, obj) => { return acc + obj.price}, 0))
  }

  const getSubtotal = () => {
    const packagePrice = event.package.price
    const extrasPrice = getExtrasTotal()
    
    return packagePrice + extrasPrice 
  }
  

const getTotal = () => {
  const packagePrice = event.package.price
  const extrasPrice = getExtrasTotal()
  
  return (getSubtotal() - (coupon ? coupon.discount : 0)) * 1.16
}



const getTaxes = () => {
  return getSubtotal() * 0.16
}

const handleCoupon = (e) =>{
  e.preventDefault();
  if (couponInput.current.value){

  apiInstance.get('/coupons/' + couponInput.current.value).then(res => {
    // console.log(res.data)

      setCoupon(res.data)

  })
}else{
  setCoupon('')
  couponInput.current.value = ''
}
}

  console.log(event_id);

  useEffect(()=> {
    getEvent()
    
  },[event_id])
  console.log(event)

  

  useEffect(()=> {
    console.log('hello');
    // createCartOrder()
  },[event])
  console.log(event)
  // useEffect(()=> {
  //   // payWithStripe()
  // },[event])


  const createCartOrder =  () => {

    // if (!fullName || !email || !mobile || !address || !city || !state || !country) {
    //     // If any required field is missing, show an error message or take appropriate action
    //     console.log("Please fill in all required fields");
    //     Swal.fire({
    //         icon: 'warning',
    //         title: 'Missing Fields!',
    //         text: "All fields are required before checkout",
    //     })
    //     return;
    // }
    console.log(user)
    try {


        formData.append('full_name', user?.first_name + ' ' + user?.last_name);
        formData.append('email', user.email);
        formData.append('phone', user?.phone);
        // formData.append('address', address);
        // console.log(event)
        formData.append('event_id', event?.eid)
        // formData.append('city', city);
        // formData.append('state', state);
        // formData.append('country', country);
        formData.append('user_id', userData?.user_id);
        // const response = await apiInstance.post('create-order/', formData)
        // const response = await axios.post('create-order/', formData)
        // console.log(response.data.order_oid)
        // setOrder(response.data.order_oid)

        // navigate('/invoice')

    } catch (error) {
        console.log('hola');
    }
}

const onSubmitStripe = () => {
  // createCartOrder()

  // const response = apiInstance.post(API_BASE_URL + `stripe-checkout/${order_oid}/`)
}



if (!event) { return null} 
  return (
    <div className='grid grid-cols-1 md:px-5 text-center'>
        {console.log(event)}
        <Heading title={'Checkout'} logo={false} sentence={'DE TU PROXIMO EVENTO'} sentence2={''}/>
          <div className="grid items-center justify-center py-4  ">
            <div className='px-10 w-screen'>
                <h3 className='text-start font-black text-2xl'>Detalle de tu resserva </h3>
                <ul className='mt-3 text-xl'>
                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>Fecha</span>
                    <span className='font-black	'>{new Date(event.date).toLocaleDateString('es-MX' ,{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}</span>
                  </li>
                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>Paquete</span>
                    <span className='font-black	'>{event.package.title}</span>
                  </li>
                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>Cantidad</span>
                    <span className='font-black	'>{event.package.n_people} personas</span>
                  </li>
                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>Extras</span>
                    <span className='font-black	'><div className='text-end'>{event.extras ? event.extras.map(extra => (
                      <h1 key={extra.id}>{extra.title}</h1>
                    )) : ''} </div></span>
                  </li>


                </ul>
            </div>
            <div className='px-10 w-screen'>
              <h3 className='text-start mt-4 font-black text-2xl'>Acepta reglamento y condiciones </h3>
                <ul className='mt-3 text-xl'>
                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>Yo acepto terminos y condiciones</span>
                    <span className='font-black	'>o</span>
                  </li>
                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>Reglamento</span>
                    <span className='font-black	'>{event.package.title}</span>
                  </li>


                </ul>
            </div>
            <div className='px-10 w-screen'>
              <h3 className='text-start mt-4 font-black text-2xl'>Resumen de pago </h3>
                <ul className='mt-3 text-xl'>
                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>Paquete</span>
                    <span className='font-black	'>${event.package.price}.00+</span>
                  </li>
                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>Extras </span>
                    <span className='font-black	'>${getExtrasTotal()}.00+</span>
                  </li>


                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>Coupon</span>
                    <span className='font-black  	text-end'>${coupon ? coupon.discount : 0}.00-</span>


                  </li>
                  <li className='flex justify-between'>

                     <form className='flex justify-between items-center  w-full' onSubmit={handleCoupon}>
                      <input className='rounded-xl h-[50px] font-black font-3xl w-full' ref={couponInput} type='search'/>
                    </form>
                  </li>  
                  <li className='flex justify-between'>



                      <button className='mt-3 px-5 text-white font-bold text-xl px-3 w-full h-[50px] rounded-xl bg-gradient-to-r to-emerald-600 from-sky-400'>Aplicar</button>
          


                  </li>                    

                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>IVA 16%</span>
                    <span className='font-black	'>${getTaxes()}.00+</span>
                  </li>
                  <li className='flex justify-between'>
                    <span className='font-bold text-gray-500'>Total x3</span>
                    <span className='font-black	'>${getTotal()}.00=</span>
                  </li>
                  


                </ul>
            </div>
            <div className='px-10 bg-red w-screen grid justify-items-start'>
              <h3 className='text-start  mt-4 font-black text-2xl'>Continuar a pagar </h3>
              { paymentLoading === true &&
                <form className='w-full' >
                    <button  disabled className='mt-3 px-5 text-white font-bold text-xl px-3 w-full h-[50px] rounded-xl bg-gradient-to-r to-emerald-600 from-sky-400'>
                      Procesando...<i className='fas fa-spinner fa-spin'></i>
                    </button>
                </form>
                          

              }{console.log(order)}
                {paymentLoading === false &&
                      <form  action={`${API_BASE_URL}stripe-checkout/${order}/`} method='POST'>
                        <button onClick={payWithStripe} className="btn btn-primary btn-rounded w-100 mt-2" style={{ backgroundColor: "#635BFF" }}>Pay Now (Stripe)</button>
                      </form>
                      
                        
                }
            </div>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            
        </div>

    </div>
  )
}

export default Checkout