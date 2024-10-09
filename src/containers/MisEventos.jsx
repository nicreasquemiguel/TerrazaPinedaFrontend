import React, {useEffect, useState} from 'react'
import apiInstance from '../utils/axiosAPI'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Heading from '../components/Heading'
import EventListCard from '../components/EventListCard'
import useToken from '../utils/useToken'
import { useAuthStore } from '../store/auth'
// import useAxios from '../utils/useAxios'
// import axiosInstance


const MisEventos = () => {
  const [events, setEvents] = useState('')
  const [active, setActive] = useState(0);
  const [tabType, setTabType] = useState('solicitud')

  const axiosToken = useToken()
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn) 
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoggedIn()){
      navigate('/')
    }
}, [])

  const eventList = ["todos","solicitud","aceptacion","apartado","liquidado","finalizado"]
  const typesEvents = {"solicitud":"solicitud", "Terminados":"aceptacion"}


    useEffect(()=>{
      axiosToken.get('mis-eventos').then(res => {
        console.log(res.data)
        setEvents(res.data)
      })
    },[])

    const updateToggle = (type) =>{
      console.log(type)
      setTabType(type)

    }

    const filterEvents = (type) => {

    }

    if (!events) {return null}

    return (
      <div className=' flex flex-col max-w-7xl  min-w-80 !w-full !p-50 md:w-full md:min-w-3xl justify-center items-center'>
      <div className="   flex flex-col justify-center max-w-sm w-full">


            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-start space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-start">
                  <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    Inicio
                  </a>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Mis Eventos</span>
                  </div>
                </li>
              </ol>
            </nav>

          <Heading title="Mis Eventos" logo={false}/>
  
        </div>
        <div className='  flex flex-col  justify-center items-center overflow-y-auto'>
          <ul className=' flex flex-row  gap-4'>


              {
                eventList.map((type) => (
                  <li key={type} onClick={()=>updateToggle(type)} className={tabType == type ? ' px-2 py-1 font-bold truncate uppercase text-sm bg-teal-700 text-white  min-w-fit max-h-8  rounded-full text-teal-900 '  : ' px-2 py-1 truncate uppercase text-sm  min-w-fit max-h-8  rounded-full text-teal-900 font-bold '}>
                    {type}
                  </li>
                  
              ))
            }

        </ul>
        </div>
        <div className='mt-3 text-center max-w-5xl w-full lg:w-2/3 flex flex-col  justify-center items-center'>
            <ul className='flex flex-col md:w-3/4 w-full'>
              {
                events.map(event => (
                    event.status == tabType &&
                  <EventListCard key={event.id}  event={event} />
                )
              ) 

              }
            </ul>
        </div>
      </div>

  )
}

export default MisEventos