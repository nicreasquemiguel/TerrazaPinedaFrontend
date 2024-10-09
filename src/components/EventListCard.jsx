import React from 'react'
import moment from 'moment'
import { FaFlagCheckered } from 'react-icons/fa6'
import { LuPartyPopper, LuBookOpenCheck } from "react-icons/lu";
import { MdOutlineScheduleSend, MdOutlineDateRange } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";

import { STATUS } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const EventListCard = ({event}) => {
    const date = new Date(event.date).toLocaleDateString("es-ES",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })
    const splitDate = date.split(" ")
    const navigate = useNavigate()
  return (
    <li onClick={()=>{navigate(`/mis-eventos/${event.eid}`)}} className='bg-white shadow-xl rounded-xl text-teal-800  m-1 h-36 grid grid-cols-4  hover:bg-gray-300'>
        <div className='col-span-3 pr-6 p-3 pt-1 rounded-r-xl '>
            <div className='grid grid-cols-3 font-bold text-start gap-y-1'>

                <span className=' text-sm font-black'>{event.package.n_people} personas</span>
                <span className=' text-sm  font-black'>{event.extras.length}</span>
                <span className=' text-sm font-black'>${event.total_price} </span>
                <span className='text-[6px]'>Paquete</span>
                <span className='text-[6px]'>Extra(s)</span>
                <span className='text-[6px]'>Total</span>




                <span className=' text-sm font-black'>{event.arrival} am</span>
                <span className=' text-sm font-black'>{event.departure} am</span>
                <span className=' text-sm font-black'>${event.total_price - event.advance} </span>
                <span className='text-[6px]'>Entrega</span>
                <span className='text-[6px]'>Salida</span>
                <span className='text-[6px]'>Restante</span>
                <span className=' text-sm font-black col-span-3'> {STATUS.find(x => x.name == event.status).title} </span>
                <span className='text-[6px]'>Status actual</span>
            </div>

        </div>
        <div className='bg-teal-800 capitalize rounded-r-xl pt-2 max-h-36 pl-3 text-white  grid'>
            <div className='grid grid-cols-1 font-bold justify-start align-start'>
                <span className='  text-[6px] uppercase '>Fecha</span>
                <span className=' text-[9px] uppercase'>{splitDate[0].substring(0, splitDate[0].length - 1)}</span>
                <span className='text-4xl'>{splitDate[1].padStart(2, "0")}</span>
            </div>
            <div className=' grid grid-cols-1 normal-case uppercase font-bold'>
                <span className=' text-[9px]'>{splitDate[3]}</span>
                <span className=' text-[10px]'>{splitDate[5]}</span>
                
            </div>
        </div>

    </li>
  )
}

export default EventListCard