import React,{ cloneElement } from 'react'
import { getIcon } from '../utils/getIcon'

const IncludedCard = ({titulo, detalles, gradient, icon}) => {
    const gradients = {
        redo : 'bg-gradient-to-r from-redo to-oranger',
        bluep : 'bg-gradient-to-r from-bluep to-purpleb',
        jshine : 'bg-gradient-to-r from-skyp via-pinkp to-fush',
        terraza: ' bg-gradient-to-r to-emerald-600 from-sky-400'
    }

    let colors = 'bg-gradient-to-r from-'+ gradients[gradient] + ' flex items-center justify-center rounded-t-lg h-16 w-full'

    // const iconElement = cloneElement(icon, {size: 30})
     const iconElement = getIcon(icon)
  return (
    <>
        <div  className="container xxs:snap-center xxs:w-3/4 md:w-full border  height: 400px border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                <div className={colors}  >
                    <h3  className="mb-4 inline-block align-middle uppercase text-xl font-bold text-white dark:text-gray-400">{titulo}</h3>

                   
                </div>
                <div className='container pt-4 pb-6 px-8 xxs:w-3/4  '> 

                <div className="flex  items-end justify-center  text-gray-900 dark:text-white">
                    {iconElement}
                </div>
                <ul role="list" className="space-y-5 my-7 ">
                    {detalles?.map((detalle) => (
                        <li  key={detalle} className="flex items-center justify-center">

                                            <svg className="flex-shrink-0 w-4 h-4 text-blackdark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span className="text-xl font-normal leading-tight text-black dark:text-gray-400 ms-3">{detalle}</span>
                                            
                    
                                        </li>
                    ))}


                    {/* <li className="flex items-center justify-center">

                        <svg className="flex-shrink-0 w-4 h-4 text-blackdark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span className="text-base font-normal leading-tight text-gray-700 dark:text-gray-400 ms-3">Sillas acojinadas</span>
                        

                    </li>

                    <li className="flex items-center justify-center">

                        <svg className="flex-shrink-0 w-4 h-4 text-blackdark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span className="text-base font-normal leading-tight text-gray-700 dark:text-gray-400 ms-3">Manteleria</span>
                        

                    </li> */}

                </ul>

                </div>

            </div> 
    </>
  )
}

export default IncludedCard