import React from 'react'
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { FaRegCalendarPlus } from "react-icons/fa";

const AdminStatsCards = ({stats}) => {
    stats = stats[0]
    const monthPercentaje = (stats?.event_count_last_month - stats?.event_count_month) * 100
    const yearPercentaje = (stats?.event_count_last_year - stats?.event_count_year) * 100
    
  return (
    <div className='grid grid-cols-3 justify-items-center place-content-evenly content-between gap-4 w-[100dvw] my-4'>
        
        <div className="p-4 col-span-3  sm:col-span-1 w-3/4  sm:w-[150px] sm:min-w-[150px] bg-gray-300 -500 h-[50px] sm:h-[150px] rounded-lg shadow ">
            <div className="flex justify-between h-full w-full  dark:border-gray-700 pb-3">
                <dl className='flex '>
                    <dt className="text-xs mb-1 mr-3 font-xs text-gray-500 dark:text-gray-400 pb-1 ">Agregar Evento </dt>
                    <FaRegCalendarPlus size={12} />
                    {/* <dd className="leading-none text-xs mt-1 font-normal text-white "> .</dd> */}

                </dl>
            </div>
        </div>
         
        <div className="p-4 w-[120px] min-w- sm:w-[150px] sm:min-w-[150px] bg-blanco -500 h-[100px] sm:h-[150px] rounded-lg shadow ">
            <div className="flex justify-between h-full w-full  dark:border-gray-700 pb-3">
                <dl className='flex flex-col justify-center items-start'>
                    <dt className="text-xs mb-1 font-xs text-gray-500 dark:text-gray-400 pb-1 ">Agregar Evento</dt>
                    <FaRegCalendarPlus size={32} /> 
                    <dd className="leading-none text-xs mt-1 font-normal text-white "> .</dd>

                </dl>
            </div>
        </div>
 


        <div className="p-4 w-[120px] min-w- sm:w-[150px] sm:min-w-[150px] bg-white h-[100px] sm:h-[150px] rounded-lg shadow ">
            <div className="flex justify-between dark:border-gray-700 pb-3">
                <dl>
                    <dt className="text-xs sm:text-base  font-xs text-gray-500 dark:text-gray-400 pb-1 ">Por Aprobar</dt>
                    <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-white">{stats?.events_to_approve}</dd>
                    <dd className="leading-none text-xs mt-1 font-normal text-gray-400 dark:text-white">Aprobar abajo</dd>
                </dl>
            </div>        
        </div>

        <div className="p-4 w-[120px] min-w- sm:w-[150px] sm:min-w-[150px] bg-red-500 h-[100px] sm:h-[150px] rounded-lg shadow ">
            <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
                <dl>
                    <dt className="text-base  font-xs text-gray-500 dark:text-gray-400 pb-1 ">Eventos del mes</dt>
                    <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-white">{stats?.event_count_month}</dd>
                    <dd className="leading-none text-xs mt-1 font-normal text-gray-400 dark:text-white">Mes pasado: {stats?.event_count_last_month}</dd>
                </dl>
                <div>
                    <span className={`text-xs font-medium inline-flex items-center px-2 py-1 rounded-md dark:bg-green-900 dark:text-green-300 ${monthPercentaje > 0 ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>
                        {monthPercentaje > 0 ? <FaArrowUpLong className='mr-1' size={6} />  : <FaArrowDownLong className='mr-1' size={6}/>}
                        {monthPercentaje}%
                    </span>
                </div>
            </div>
        </div>

        <div className="p-4 w-[120px] min-w- sm:w-[150px] sm:min-w-[150px] bg-red-500 h-[100px] sm:h-[150px] rounded-lg shadow ">
            <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
                <dl>
                    <dt className="text-base  font-xs text-gray-500 dark:text-gray-400 pb-1 ">Eventos del año</dt>
                    <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-white">{stats?.event_count_year}</dd>
                    <dd className="leading-none text-xs mt-1 font-normal text-gray-400 dark:text-white">Año pasado: {stats?.event_count_last_year}</dd>
                </dl>
                <div>
                    <span className={`text-xs font-medium inline-flex items-center px-2 py-1 rounded-md dark:bg-green-900 dark:text-green-300 ${yearPercentaje > 0 ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>
                        {yearPercentaje > 0 ? <FaArrowUpLong className='mr-1' size={6} />  : <FaArrowDownLong className='mr-1' size={6}/>}
                        {yearPercentaje}%
                    </span>
                </div>
            </div> 
        </div>



    </div>
  )
}

export default AdminStatsCards