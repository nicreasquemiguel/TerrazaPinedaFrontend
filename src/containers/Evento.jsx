import React, { useEffect, useState } from 'react'
import apiInstance from '../utils/axiosAPI'
import useToken from '../utils/useToken'
import { useParams } from 'react-router-dom'
import Heading from '../components/Heading'
import { FaRegCalendarCheck, FaPeopleRobbery, FaRegMoneyBill1, FaMoneyBillTrendUp,FaFileContract } from "react-icons/fa6";
import { FaCheck, FaRegStar } from "react-icons/fa";
import { MdAddTask, MdAddCard, MdOutlineDescription, MdRemove , MdLaptopChromebook } from "react-icons/md";
import { GiMoneyStack, GiPayMoney } from "react-icons/gi";
import { TbDoorExit, TbCash } from "react-icons/tb";
import { PiHandsClapping } from "react-icons/pi";
import { RiFolderTransferLine } from "react-icons/ri";

import { LuClock, LuPalmtree } from "react-icons/lu";
import moment from 'moment'
import { STATUS } from '../utils/constants'
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth'
import { login } from '../utils/auth'
import { API_BASE_URL } from '../utils/constants'
import UserData from '../views/plugin/UserData'
import Rating from '../components/Rating'


const Evento = () => {
    const [isLoading, setIsLoading] = useState(false)
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn) 
    
    const navigate = useNavigate()
    const params = useParams()
    const axiosToken = useToken()
    const userData = UserData()
    
    useEffect(() => {
        if(!isLoggedIn()){
          navigate('/login')
        }
    }, [])


    const [event, setEvent] = useState('')
    const [status, setStatus]= useState(0)
    const [orders, setOrders] = useState('')
    const [cantidad, setCantidad] = useState(1000)
    const { eventId } = useParams()

    const  callEvent = async  ()  => {
        await axiosToken.get(`eventos/${eventId}`).then((res)=>{
            setEvent(res.data)
            statusHandler(res.data)
        })
    }
    const statusHandler = (e) =>{
        STATUS.map((s,index)=> {

            if(s.name == e.status){
                setStatus(index)

            }
        })
    }

    const getOrders = async () =>{
        // const formData = new FormData();
        // formData.append('event', event.eid)
        await axiosToken.get(`mis-eventos/${eventId}/orders/`).then(res => {
            setOrders(res.data)
        })
    }

    const formData = new FormData()

    const  payWithStripe =  async (e) => {
        e.preventDefault();
        formData.append('event_id',event.id)
        formData.append('client', userData?.user_id)
        formData.append('subtotal', cantidad)
        console.log(event)
        console.log(formData);
        await apiInstance.post(`${API_BASE_URL}stripe-checkout/`, formData).then(res => {
          console.log(res['data']['url'])
          const url = (res['data']['url'])
          
          window.location.href = url
          // navigate(url)
        })
    }
    useEffect(()=>{
        callEvent()
        getOrders()

    },[eventId])

    console.log(event);
  return (
    <div className=' flex flex-col max-w-7xl  min-w-80 !w-full !p-50 md:w-full md:min-w-3xl justify-center items-center'>



        <div className="w-[90%] min-w-80 mb-3 items-start mx-10 max-w-5xl p-4 border border-gray-200 rounded-lg shadow sm:p-8 ">
            <div className=" mb-4">
                {/* <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Detalles de la Reserva</h5> */}
                <Heading title={'Detalles de la reserva'} logo={false}/>
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
                                <LuClock className='w-8 h-8'/>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 capitalize truncate dark:text-white">
                                {event.arrival }am - {event.departure} am

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
                            <div className=" mi0 ms-4">
                                <p className="text-sm text-clip font-medium text-gray-900  dark:text-white">
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
                                <FaPeopleRobbery className='w-8 h-8'/>
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
                                <MdRemove className='w-8 h-8'/>

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
                                <FaRegMoneyBill1 className='w-8 h-8'/>
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


        <div className="w-[90%] min-w-80 mb-3 items-start mx-10 max-w-5xl p-4 border border-gray-200 rounded-lg shadow sm:p-8 ">
            <div className="flex  items-start justify-between mb-4">
                {/* <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Pasos a seguir</h5> */}
                <Heading title={'Pasos a seguir'} logo={false}/>
        </div>
        <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/> */}
                                <FaCheck className='w-8 text-green-500 h-8'/>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm  font-bold text-gray-900 capitalize truncate dark:text-white">
                                    Solicitud de reserva

                                </p>
                                <p className="text-sm text-gray-500  dark:text-gray-400">
                                    Se tomará una decisión en max. 24 hrs analizando sú solicitud
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                                {status < 1 ? <MdOutlineDescription className='w-8 h-8'/> : <FaCheck className='w-8 text-green-500 h-8'/> }
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-bold text-gray-900  dark:text-white">
                                    Aceptación de Solicitud
                                </p>
                                <p className="text-sm text-gray-500  dark:text-gray-400">
                                    Una vez aceptado se tiene 3 días para hacer el apartado, con minimo $1000 
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
                                {status < 2 ? <FaRegCalendarCheck className='w-8 h-8'/> : <FaCheck className='w-8 text-green-500 h-8'/> }
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                                    Fecha agendada satisfactoriamente
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Apartado recibido y se te agrega al calendario
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                                {status < 3 ? <GiMoneyStack className='w-8 h-8'/> : <FaCheck className='w-8 text-green-500 h-8'/> }
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-bold text-gray-900  dark:text-white">
                                    Liquidación de total
                                </p>
                                <p className="text-sm text-gray-500  dark:text-gray-400">
                                    Debe quedar liquidado antes o al momento de la entrega del lugar.
                                </p>
                            </div>
                            <div  className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                                {status < 4 ? <LuPalmtree className='w-8 h-8'/> : <FaCheck className='w-8 text-green-500 h-8'/> }
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-bold text-gray-900  dark:text-white">
                                    Entrega del lugar
                                </p>
                                <p className="text-sm text-gray-500  dark:text-gray-400">
                                    Se entregará a la hora acordada el lugar, limpio y montado con sus servicios respectivos. Se debe entregar un documento(INE) de quien se haga responsable.
                                </p>
                            </div>
                            <div  className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                                {status < 5 ? <TbDoorExit className='w-8 h-8'/> : (false ? <FaCheck className='w-8 text-green-500 h-8'/> : <FaCheck className='w-8 text-red-500 h-8'/>  ) }
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-bold text-gray-900  dark:text-white">
                                    Finalización
                                </p>
                                <p className="text-sm text-gray-500  dark:text-gray-400">
                                    Terminará a la hora indicada, llegará un representante a revisar el lugar y regresar su documento entregado
                                </p>
                            </div>
                            <div  className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                                <FaRegStar className='w-8 h-8'/>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-bold text-gray-900  dark:text-white">
                                    Paso opcional
                                </p>
                                <p className="text-sm text-gray-500  dark:text-gray-400">
                                    Ayudanos calificando y comentando, estamos abiertos a sus opiniones para seguir creciendo!
                                </p>
                            </div>

                        </div>

                        {event.status == "finalizado"}{
                            
                        } 
                        <Rating eid={eventId} commented={event?.event_review} rating={event?.event_rating}/>
                    </li>


                </ul>
        </div>
        </div>


        <div className="w-[90%]  min-w-80 mb-3 items-start mx-10 max-w-5xl p-4 border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div className=" mb-4">
            {/* <h5 className="text-xl font-bold leading-none text-gray-90 dark:text-white">Detalles de pagos</h5> */}
            <Heading title={'Detalles de pago'} logo={false}/>
        </div>
        <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        { event.advance == 0 && event.status == "aceptacion" ?
                            <>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center ">
                                    <div className="flex-shrink-0">
                                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                                        <PiHandsClapping className='w-8 h-8'/>
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                                           Felicidades! Ha sido aceptado tú evento
                                        </p>
                                        <p className="text-sm text-gray-500  dark:text-gray-400">
                                            Se necesita tú apartado para asegurarla
                                        </p>

                                    </div>

                                </div>
                            </li>
                            </>
                            :
                            <p></p>
                        }

                        { orders && event.advance ?

                            Object.values(orders).map((order, index)=> {
                                return (
                                 
                                <li  key={index} className="py-3 sm:py-4 hover:bg-gray-300 rounded-lg">
                                    <div  className="flex items-center pb-2">
                                    <div className="flex-shrink-0">
                                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/> */}
                                        <MdAddCard className='w-8 h-6'/>
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                            <a href={`/mis-eventos/${eventId}/ordenes/${order.oid}`} className="text-sm font-bold text-gray-900 truncate dark:text-white">
                                                Orden de pago (#{order.oid})
                                            </a>
                                            <p className="text-sm text-gray-500  dark:text-gray-400">
                                                Tipo de transacción: <span className='uppercase text-xs'>{order.payment_type}</span>

                                            </p>
                                            <p className="text-sm text-gray-500  dark:text-gray-400">
                                                Fecha realizada: {new Date(order.created).toDateString()}
                                            </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                       + ${order.subtotal}
                                    </div>
                                </div>
                                </li>
                                )
                            })
                            : <></>
                            } 
                                                        <li className="py-3 sm:py-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                                            <FaMoneyBillTrendUp className='text-green-500 w-8 h-8'/>
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                                                Total
                                            </p>
                                            <p className="text-sm text-gray-500  dark:text-gray-400">
                                                Pagos recibidos
          
                                            </p>
                                            <p className="text-sm text-gray-500  dark:text-gray-400">
                                                Excluyendo IVA de la transacción
                                            </p>
    
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                             = ${event.advance}.00 
                                        </div>
                                    

                                    </div>
                                </li> 
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                                            <FaMoneyBillTrendUp className='w-8  text-red-600 h-8'/>
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                                                Restante
                                            </p>
                                            <p className="text-sm text-gray-500  dark:text-gray-400">
                                                Total que falta por liquidar

                                            </p>
                                            <p className="text-sm text-gray-500  dark:text-gray-400">
                                                Excluyendo IVA de la transacción
                                            </p>
    
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            - ${event.total_price - event.advance}.00
                                        </div>
                                    

                                    </div>
                                </li> 
                                { event.advance < event.total_price ?
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                                            <FaMoneyBillTrendUp className='w-8  text-blue-600 h-8'/>
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                                                Elije la cantidad para tú pago
                                            </p>
                             

                                            <div className=" mt-2 flex">
                                                <label htmlFor="currency-input" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                                                <div className="relative w-full">
                                                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                        {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg> */}
                                                    $
                                                    </div>
                                                    <input onChange={(e)=>{setCantidad(e.target.value)}} value={cantidad} type="number" step={'50'} min={event.advance < 1000 ? 1000 : 500} max={event.total_price-event.advance ? event.total_price-event.advance : 0} id="cantidad" className="block p-2.5 w-full z-20 ps-10 text-smd text-right font-bold text-gray-900 bg-gray-50 rounded-lg border-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder={`Min: $${250} - Max: $${event.total_price - event.advance}`} required />
                                                </div>

                                            </div>
                                            <p className="text-sm text-gray-500  mt-1 dark:text-gray-400">
                                                Despúes debajo elije tú método de pago preferido
                                            </p>

    
                                        </div>
                                        {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        ${event.total_price - event.advance}.00
                                        </div> */}
                                    

                                    </div>
                                </li> 
                            : <></>    
                        }
                        { event.advance < event.total_price?
                            <>

                                <li className="py-3 sm:py-4">


                                        <div id="accordion-open" data-accordion="open">
                                            <h2 id="accordion-open-heading-1">
                                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                                                <span className="flex items-center"><MdLaptopChromebook className='mr-3 text-black'/> Pago Online</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                                </svg>
                                                </button>
                                            </h2>
                                            <div id="accordion-open-body-1" className="" aria-labelledby="accordion-open-heading-1">
                                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                                    <button onClick={payWithStripe} className="p-3 text-white font-bold  rounded-xl w-full bg-blue-500 btn-rounded w-100 mt-2" >Pagar ahora (Stripe)</button>
                                                
                                                </div>
                                            </div>
                                            <h2 id="accordion-open-heading-2">
                                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                                                <span className="flex items-center"><RiFolderTransferLine className='mr-3 text-black'/>Transferencias y Depositos</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                                </svg>
                                                </button>
                                            </h2>
                                            <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                                <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                                </div>
                                            </div>
                                            <h2 id="accordion-open-heading-3">
                                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                                                <span className="flex items-center"><TbCash className='mr-3 text-black'/>Efectivo</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                                </svg>
                                                </button>
                                            </h2>
                                            <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
                                                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                                    <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                            </div>

                         
                                </li>   </>
                            :


                            
                 <>


                 

                </>
               

               
                }
            </ul>
    </div>
        </div>




    </div>
  )
}


export default Evento