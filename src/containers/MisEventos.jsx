import React, {useEffect, useState} from 'react'
import apiInstance from '../utils/axiosAPI'
import Cookies from 'js-cookie'
import Heading from '../components/Heading'
import EventListCard from '../components/EventListCard'
import useToken from '../utils/useToken'
// import useAxios from '../utils/useAxios'
// import axiosInstance

const MisEventos = () => {
  const [events, setEvents] = useState('')
  const [active, setActive] = useState(0);
  const [tabType, setTabType] = useState('solicitud')

  const axiosToken = useToken()

  const eventList = ["todos","solicitud","aceptacion","apartado","liquidado",]
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
      <div className=" xxs:h-full  container">
        <div className=" mx-auto   flex flex-col justify-center max-w-sm">
          <Heading title="Mis Eventos" logo={false}/>
  
        </div>
        <div className='  flex flex-col  justify-center items-center overflow-y-auto'>
          <ul className=' flex flex-row  gap-4'>


              {
                eventList.map((type) => (
                  <li key={type} onClick={()=>updateToggle(type)} className={tabType == type ? ' px-2 py-1 font-bold truncate uppercase text-sm bg-blue-700 text-white  min-w-fit max-h-8  rounded-full text-blue-700 '  : ' px-2 py-1 truncate uppercase text-sm  min-w-fit max-h-8  rounded-full text-blue-700 font-bold '}>
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