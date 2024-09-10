import React from 'react'
import moment from 'moment'
import { FaFlagCheckered } from 'react-icons/fa6'
import { LuPartyPopper, LuBookOpenCheck } from "react-icons/lu";
import { MdOutlineScheduleSend, MdOutlineDateRange } from "react-icons/md";
import { STATUS } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const EventListCard = ({event}) => {
    const date = new Date(event.date).toLocaleDateString("es-ES",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })
    const splitDate = date.split(" ")
    const navigate = useNavigate()
  return (
    <li onClick={()=>{navigate(`/mis-eventos/${event.eid}`)}} className='bg-blue-500 rounded-xl text-white  m-1 h-32 grid grid-cols-4 hover:bg-blue-600'>
        <div className='col-span-3 p-2 p-4 rounded-r-xl'>
            <div className='grid grid-cols-3 font-bold'>

                <span className=' text-[9px]'>{event.package.n_people} personas</span>
                <span className='col-span-3 text-[6px]'>Paquete</span>
            </div>
            <div className=' grid grid-cols-1 normal-case uppercase font-bold'>
    

                    <ol className="flex items-center  w-full">
                        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-black after:border-4 after:inline-block dark:after:border-blue-800">
                            <span className="flex items-center justify-center w-8 h-8 bg-black rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">

                                <MdOutlineScheduleSend className='text-white w-4 h-4'/>
                            </span>
                            
                        </li>
                        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                {/* <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg> */}

                                <LuBookOpenCheck className='w-4 h-4'/>
                            </span>
                        </li>
                        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-red-400 after:border-4 after:inline-block dark:after:border-blue-800">
                            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">

                                <LuBookOpenCheck className='w-4 h-4'/>
                            </span>
                        </li>
                        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                {/* <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg> */}
                                <LuPartyPopper className="text-blue-700"/>
                            </span>
                        </li>
                        {/* <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-922o2i m -100 after:border-4 after:inline-block dark:after:border-blue-800">
                            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                            </span>
                            
                        </li> */}
                            <li className="flex items-center w-full">
                            <span className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                {/* <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                                </svg> */}
                                <FaFlagCheckered className='text-blue-700'/>

                            </span>
                        </li>

                    </ol>
                    Status actual: {STATUS.find(x => x.name == event.status).title}
            </div>
        </div>
        <div className='bg-blue-700 capitalize rounded-r-xl pt-2 max-h-32 pl-3 text-white'>
            <div className='grid grid-cols-1 font-bold'>
                <span className='  text-[6px] uppercase '><MdOutlineDateRange/> Fecha</span>
                <span className=' text-[9px]'>{splitDate[0].substring(0, splitDate[0].length - 1)}</span>
                <span className='text-lg'>{splitDate[1].padStart(2, "0")}</span>
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