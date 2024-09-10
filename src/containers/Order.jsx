import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import apiInstance from '../utils/axiosAPI'
import UserData from '../views/plugin/UserData.jsx'
import Heading from '../components/Heading.jsx';
import { FaRegCalendarCheck } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import useToken from '../utils/useToken.jsx';
import { MdArrowBack } from "react-icons/md";

const Order = () => {

    const [loading, setIsLoading] = useState(true)
    const [orderResponse, setOrderResponse] = useState([])
    const [order, setOrder] = useState('')
    const [orderID, setOrderID] = useState('')
    const [linked, setLinked] = useState(false)
    const [total, setTotal] = useState(0)
    const [stripeSession, setStripeSession] = useState('')

    const axios = apiInstance
    const axiosToken = useToken()
    const param = useParams()
    const userData = UserData()
    const navigate = useNavigate()

    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    // const payaplOrderId = urlParams.get('payapl_order_id');
 
    console.log(param?.oid);
    console.log(param);
    console.log(sessionId);



    const getSession = async () => { 

        await axiosToken.get(`mis-eventos/${param?.eventId}/orders/${param?.oid}/`).then(res => {
        console.log(res.data)
        console.log(res.data.stripe_session_id)
        const stripe_session = res.data.stripe_session

        setOrder(res.data)
        setStripeSession(stripe_session)
        setLinked(res.data.linked)
            console.log(res.data.linked);
        if(res.data.linked == false){


    //     // formData.append('order_oid', orderID);

    //     // formData.append('payapl_order_id', payaplOrderId);

            axiosToken.patch(`pago-exitoso/${param?.oid}/`).then((res) => {
                setOrder(res.data)
                
                console.log(res.data)
                if (res.data.payment_status == 'pagado') {
                    setIsLoading(false)
                }
                
                
                
                
                
                if (res.data.message === "Already Paid") {
                    setIsLoading(false)
                }
                
            })
        }
    })
    }
 
    useEffect(()=>{
        getSession()
    },[param?.oid])


    // useEffect(()=>{
    //     setLinked(order?.linked)
    // },[order])

    // Payment Processing
    // useEffect(() => {
    //     const formData = new FormData();
    //     // formData.append('order_oid', orderID);
    //     formData.append('session_id', sessionId);
    //     // formData.append('payapl_order_id', payaplOrderId);

    //     console.log(linked);
    //     console.log(order);
    //     setIsLoading(true)
    //     console.log(orderID);
    //     if(!linked && order){

    //         apiInstance.patch(`pago-exitoso/${param?.oid}/`, formData).then((res) => {
    //             setOrder(res.data)
                
    //             console.log(res.data)
    //             if (res.data.payment_status == 'pagado') {
    //                 setIsLoading(false)
    //             }
                
                
                
                
                
    //             if (res.data.message === "Already Paid") {
    //                 setIsLoading(false)
    //             }
                
    //         })
    //     }
            
    //     }, [order])


        return (
            <div className=' flex flex-col max-w-7xl  min-w-80 !w-full !p-50 md:w-full md:min-w-3xl justify-center items-center'>




        <div className="w-[90%] min-w-80 mb-3 items-start mx-10 max-w-5xl p-4 border border-gray-200 rounded-lg shadow sm:p-8 ">
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
                                { new Date(order?.event?.date).toLocaleDateString("es-ES",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}

                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Pago para tú evento 
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
                                   # {order.oid}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Codigo unico de tu orden de pago
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
                                <p className="text-sm font-medium text-gray-900 uppercas dark:text-white">
                                    {order?.payment_type}
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
                                    Subtotal
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                ${order?.subtotal}
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
                                    IVA (16%)
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                ${order?.tax_fee}
                            </div>
                        </div>
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
                                ${order.total}
                            </div>
                        </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">

                        <button onClick={()=>{navigate(`/mis-eventos/${order.event.eid}`) }} className='bg-red-700 hover:bg-teal-900 uppercase font-black text-white rounded-lg p-3 mt-4 w-full flex items-center justify-center '>
                             <MdArrowBack className='pr-1 text-xl'/>
                             Regresar a mi evento
                        </button>
                    </li>   
                </ul>
        </div>
        </div>

</div>
  )
}

export default Order