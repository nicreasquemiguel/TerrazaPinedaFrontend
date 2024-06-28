import React from 'react'
import Day  from './Day'

const Week = () => {
  return (
    <div className='grid w-full justify-items-center pb-3'>
    <div className='grid grid-cols-1    text-center'>

        <p className='font-bold text-sm'>FECHAS DISPONIBLES POR CADA DIA</p>
    </div>
    <div className='grid  grid-cols-7  place-self-center   justify-items-center  xxs:w-full xxs:mx-3 sm:w-5/6  xxs:gap-2 sm:gap-8 '>
      <Day dia={'Lunes'} numero={'21'}/>
      <Day dia={'Martes'} numero={'21'}/>
      <Day dia={'Miercoles'} numero={'21'}/>
      <Day dia={'Jueves'} numero={'21'}/>
      <Day dia={'Viernes'} numero={'21'}/>
      <Day dia={'Sabado'} numero={'21'}/>
      <Day dia={'Domingo'} numero={'21'}/>
        
    </div>
    </div>
  )
}

export default Week