import React from 'react'

const Day = ({dia, numero}) => {
  return (
    <div>
    <input  id={dia} type="radio"  name='days' className="peer hidden"/>
    <label tabIndex={0} htmlFor={dia} className=" hover:shadow-lg ring-2 ring-transparent hover:cursor-pointer hover:bg-sky-100 peer-checked:text-white peer-checked:bg-sky-300  peer-checked:shadow-2xl peer-checked:ring-sky-400 peer-checked:ring-offset-2 rounded-[16px] p-3  grid shadow-md xxs:truncate xxs:min-w-12 sm:max-w-20 xxs:w-full shadow-green-500 xxs:w-15 xxs:h-20  xxs:my-3 sm:w-20 sm:h-20  bg-white transition-all">

    <div className=''>

    <p className='xxs:text-[15px]  sm:text-sm text-center  text-sky-700 truncate  font-extrabold'>
    {dia[0]}
    </p>
    {/* <p className='xxs:text-[15px] capitalize  sm:text-sm text-center  text-green-700 truncate  font-extrabold'>
    enero
  </p>   */}
    
    <span className='xxs:text-[20px] sm:text-[20px] font-extrabold text-green-700'>
    {numero}
    </span>
    </div>   
  </label>

  </div>
  )
}

export default Day