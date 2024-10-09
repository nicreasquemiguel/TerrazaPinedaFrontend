import React, { useEffect, useState } from 'react'

const Description = ({callback}) => {
    const [value, setValue] = useState('')

    useEffect(()=>{
        callback(value)
    },[value])
  return (
    <div className='p-10 text-center max-w-4xl w-full flex flex-col  justify-center items-center'>
        
        <label htmlFor="message" className="block mb-2 px-1 text-sm font-medium text-gray-900 dark:text-white">Explicanos un poco tú evento, tipo de musica/sonido, etc...</label>

        <label htmlFor="message" className="block mb-2 px-1 text-sm font-medium text-gray-900 dark:text-white">También otras peticiones.</label>
        <textarea  id="message" onChange={(e)=>{
            setValue(e.target.value)

        }} rows="4" className="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lo tomaremos en cuenta para la aprobación de su evento (MIN 65 chars)..."></textarea>

    </div>
  )
}

export default Description