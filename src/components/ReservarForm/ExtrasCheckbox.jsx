import React, { useEffect } from 'react'
import { login } from '../../utils/auth'

const ExtrasCheckbox = ({extras , onExtrasChange}) => {
    console.log(extras);

  return (

<div className="pt-3 grid grid-cols-3 gap-12 justify-around ">

    {extras?.map((extra, index ) => {
        return ( 
        <div key={index} className="flex h-32 place-items-center">
            <div  className='text-center'>

            <input  id={"inline-checkbox-"+extra.title} type="checkbox" value={extra.id} onClick={ onExtrasChange }   className="w-4 h-4 text-sky-400 accent-sky-400 bg-gray-100 border-gray-300   focus:ring-sky-400 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-full"/>

            <label htmlFor={"inline-checkbox-"+extra.title}  className="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">{extra.title}</label>
            <br/>
            <label htmlFor={"inline-checkbox-"+extra.title}className="text-xl text-green-500 font-bold m-0 mb-5 col-span-3 dark:text-gray-300 text-center">${extra.price}</label>
            </div>
        </div>
        )
    })}

</div>




  )
}

export default ExtrasCheckbox