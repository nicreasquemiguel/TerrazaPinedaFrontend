import React from 'react'

const ExtraCard = ({extra, precio, descripcion, gradient}) => {
    
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

    
  return (
    <>
        <div  className="container xxs:snap-center xxs:w-3/4 md:w-full border  height: 400px border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
            <form method='GET'  action='/reservar'>
                <div className={colors}  >
                    <h3  className="mb-4 inline-block align-middle uppercase text-xl font-black text-white dark:text-gray-400">{extra}</h3>
                </div>
                <div className='container pt-4 pb-6 px-8 xxs:w-3/4  '>
                <div className="flex   items-end justify-center  text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">{precio}</span>
                    <br/>
                </div>
                <ul role="list" className="space-y-5 my-7 ">


                    <li className="flex items-center justify-center">
                        <span className="text-base font-normal leading-tight text-gray-700 dark:text-gray-400 ms-3">{}</span>
                    </li>
                    <li className="flex items-center justify-center">
                        <svg className="flex-shrink-0 w-4 h-4 text-blackdark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span className=" text-gray-700 dark:text-gray-400 ms-3">{descripcion}</span>
                    </li> 

                </ul>
                <button type="sumbit" className="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Selecciona este paquete</button>

                </div>
                </form>
            </div> 
    </>
  )
}

export default ExtraCard