import React from 'react'

const Heading = ({title, sentence, sentence2, logo = true}) => {
  return (
    
    <div className='text-center xxs:px-10 sm:px-3  inline-block '>
        <div className='flex justify-center items-center'>
            <h1 className="mb-1 text-3xl font-extrabold text-gray-900 inline dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent pr-2 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{title}</span> {sentence2}   </h1>
            { logo ? <img src="tp.svg" className="xxs:h-6  sm:h-9 pl-4" alt="Flowbite Logo" /> : <></>}
        </div>       
        <p className="text-sm justify-start font-bold  uppercase text-black dark:text-gray-400">{sentence}</p>

    </div>
  )
}

export default Heading