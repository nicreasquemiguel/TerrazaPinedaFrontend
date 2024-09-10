import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import apiInstance from '../utils/axiosAPI'
import UserData from '../views/plugin/UserData.jsx'
import Heading from '../components/Heading.jsx';
import { FaRegCalendarCheck } from 'react-icons/fa6';

const PagoExitoso = () => {

    const [loading, setIsLoading] = useState(true)
    const [orderResponse, setOrderResponse] = useState([])
    const [order, setOrder] = useState('')
    const [orderID, setOrderID] = useState('')
    const [total, setTotal] = useState(0)
    const [stripeSession, setStripeSession] = useState('')

    const axios = apiInstance
    const param = useParams()
    const userData = UserData()


    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    // const payaplOrderId = urlParams.get('payapl_order_id');

    console.log(param?.order_id);

    console.log(sessionId);
    // console.log(payaplOrderId);

    // Get order details
    // useEffect(() => {
    //     setOrderID(param?.order_id)
        
    // }, [param])



    const getSession = async () => { 
        await apiInstance.get(`orders/${param?.order_id}/`).then(res => {
        console.log(res.data)
        console.log(res.data.stripe_session)
        const stripe_session = res.data.stripe_session
        setStripeSession(stripe_session)
    })
    }

    


    // Payment Processing
    useEffect(() => {
        const formData = new FormData();
        // formData.append('order_oid', orderID);
        formData.append('session_id', sessionId);
        // formData.append('payapl_order_id', payaplOrderId);

        setIsLoading(true)
        console.log(orderID);
        apiInstance.patch(`pago-exitoso/${param?.order_id}/`, formData).then((res) => {
            setOrder(res.data)
            
            console.log(res.data)
            if (res.data.payment_status == 'pagado') {
                setIsLoading(false)
            }
            getSession()
        

        

            if (res.data.message === "Already Paid") {
                setIsLoading(false)
            }

        })

    }, [])


    console.log(stripeSession);
  return (
    <div className='w-full mt-5'>
        <div className='w-full flex flex-col  px-5 justify-center'>




        <div className="w-full mb-3  max-w-md p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className=" mb-4">
                {/* <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Detalles de la Reserva</h5> */}
                <Heading title={'Pago exitoso'} logo={false}/>
        </div>
        <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/> */}
                                <FaRegCalendarCheck className='w-8 h-8'/>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 capitalize truncate dark:text-white">
                                { new Date(event?.date).toLocaleDateString("es-ES",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}

                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Fecha seleccionada
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                
                            </div>
                        </div>

                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">


                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/> */}
                                {/* <LuClock className='w-8 h-8'/> */}
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 capitalize truncate dark:text-white">

                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Horario de llegada y salida
                                </p>
                            </div>

                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                                {/* <MdOutlineDescription className='w-8 h-8'/> */}
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900  dark:text-white">
                                    {event?.description}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Descripción del evento
                                </p>
                            </div>
                            <div  className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                                {/* <FaPeopleRobbery className='w-8 h-8'/> */}
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {event?.package?.n_people} personas
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Paquete
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                ${event?.package?.price}
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">

                        {

                            event.extras ? event.extras.map((extra, index)=> {
                                return (
                                    <div key={index} className="flex items-center pb-2">
                                    <div className="flex-shrink-0">
                                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/> */}
                                        <MdAddTask className='w-8 h-6'/>
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {extra.title}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                                        Extra
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        ${extra.price}
                                    </div>
                                </div>
                                )
                            }) :              (               <div className="flex items-center">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/> */}
                                {/* <MdRemove className='w-8 h-8'/> */}

                            </div>
                            <div className="flex-1 min-w-0 ms-4">

                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                Sin extras seleccionados... 
                                                        </p>
                            </div>

                        </div>)
                            
                        }
                    

                        
                    </li>
                
                    <li className="pt-3 pb-0 sm:pt-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/> */}
                                {/* <FaRegMoneyBill1 className='w-8 h-8'/> */}
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Total
                                </p>
                                <p className="text-xs text-gray-500  dark:text-gray-400">
                                    
                                    Se aparta apartir de $1000. 
                                </p>
                                <p className="text-xs text-gray-500  dark:text-gray-400">
                                    El pago se hará una vez aceptada la reservación.
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                ${event.total_price}
                            </div>
                        </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">
                        
                    </li>
                </ul>
        </div>
        </div>
</div>
</div>
  )
}

export default PagoExitoso