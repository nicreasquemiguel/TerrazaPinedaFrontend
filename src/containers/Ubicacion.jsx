import React from 'react'
import Heading from '../components/Heading'

const Ubicacion = () => {
  return (
    <div className='grid grid-cols-1 md:px-5 text-center'>
        <Heading title={'Ubicacion'} sentence={'Como llegar'} sentence2={'de'}/>
        {/* <div className=' ' ><iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.548448413886!2d-103.43580638991213!3d20.76908848073603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a5ec0537448b%3A0x2716b6256bff8055!2sTerraza%20Pineda!5e0!3m2!1sen!2smx!4v1708999617413!5m2!1sen!2smx"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div> */}
        <div><iframe className='w-full h-[500px] rounded-lg pt-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.548448413886!2d-103.43580638991213!3d20.76908848073603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a5ec0537448b%3A0x2716b6256bff8055!2sTerraza%20Pineda!5e0!3m2!1sen!2smx!4v1708999964105!5m2!1sen!2smx"   allowFullScreen="" loading="async" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  )
}

export default Ubicacion