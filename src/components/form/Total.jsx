import React, { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/es'


const Total = ({price,date, people, extras}) => {
//    console.log(date)
   const [selectedDate , setSelectedDate] = useState(new Date(date))
   moment.locale('es')
  return (
    <div className='xxs:w-full rounded-2xl col-span-2 shadow-md  text-center'>



    <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
            <dl className="grid place-items-center  max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 s dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2v  capitalize text-xl font-extrabold">{new Date(date).toLocaleDateString("es-ES",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}</dt>
                    <dd className="text-sky-500 dark:text-gray-400">Fecha elegida</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-xl font-extrabold">${price + parseInt(extras)}</dt>
                    <dd className="text-sky-500 dark:text-gray-400">Total</dd>
                </div>
            </dl>
        </div>
</div>

  )
}

export default Total