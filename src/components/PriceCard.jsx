import React from 'react'
import { getIcon } from '../utils/getIcon'
// import getIcon from '../utils/getIcon'

const PriceCard = ({precio, personas, paquete, horario, gradient, icon}) => {
    
    const gradients = {
        redo : 'bg-gradient-to-r from-redo to-oranger',
        bluep : 'bg-gradient-to-r from-bluep to-purpleb',
        jshine : 'bg-gradient-to-r from-skyp via-pinkp to-fush',
        terraza: ' bg-gradient-to-r to-emerald-600 from-sky-400'
    }

    let green = 'green-500'
    let colors = 'bg-gradient-to-r from-'+ gradients[gradient] + ' flex items-center justify-center rounded-t-lg h-16 w-full'
    let colors2 = 'bg-gradient-to-r from-redo to-oranger items-center flex justify-center rounded-t-lg h-16 w-full'
    let colors3 = `bg-gradient-to-r from-indigo-500 from-10% via-sky-500 items-center flex justify-center rounded-t-lg h-16 w-full`

    let icon2 = getIcon(icon)
    console.log(icon2)
    console.log(icon)
  return (
    <>
        <div  className="container   xxs:snap-center xxs:w-3/4 md:w-full  min-h-[250px]   border-gray-200 rounded-lg shadow-xl  dark:bg-gray-800 dark:border-gray-700 ">
            <form method='GET' className='h-3/4'  action='/reservar'>
                <div className={colors}  >
                    <h3  className="mb-4 inline-block align-middle uppercase text-xl font-bold text-white dark:text-gray-400">{paquete}</h3>
                </div>
                <div className='container grid grid-rows-2 content-between pt-4 pb-6 px-8 xxs:w-3/4 h-full '>
                    {icon}
                <div className="flex   items-end justify-center  text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold space-x-5 tracking-tight">{precio > 0 ? precio : "__"}</span>
                    <br/>
                    <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/dia</span>
                </div>
                <ul role="list" className="space-y-5 my-7 ">

                    <li className="flex items-center justify-center">

                        <svg className="flex-shrink-0 w-4 h-4 text-blackdark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span className="text-2xl font-extrabold leading-tight text-gray-700 dark:text-gray-400 ms-3">{personas > 0 ? personas : "__"} Personas</span>
                        <input className='hidden' id='personas' name='personas' type='hidden' value={personas}/>
                    </li>
                    Mas detalles abajo

                </ul>
                <button type="sumbit" className="text-white bg-gray-800 w-full font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Selecciona este paquete</button>

                </div>
                </form>
            </div> 
    </>
  )
}

export default PriceCard