import React from 'react'
import Heading from '../../Heading'
import Carrousel from './Carrousel'

const ServicesLayout = () => {
  return (
    <div className=' w-full flex flex-col items-center pt-10 '>
    <Heading title={"Servicios"} logo={false}/>


      <Carrousel/>

    </div>
  )}
export default ServicesLayout