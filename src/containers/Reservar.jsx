import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import SliderPersonas from '../components/ReservarForm/SliderPersonas'
import axios from 'axios'
import { REACT_APP_API_URL, get_venues , getVenues, getPaquetes } from '../actions/booking'


import { Button } from 'primereact/button';                             
import 'primereact/resources/themes/saga-blue/theme.css';         
import 'primereact/resources/primereact.min.css';
import  ReservarForm  from '../components/form/ReservarForm'

const Reservar =  () => {
        



  return (
    <div className='grid grid-cols-1 container px-5 text-center justify-items-center place-self-center  min-w-fit w-full max-w-5xl'>
        
        <Heading title={'Reservar'} sentence={'Elije tu fecha y tu paquete'} sentence2={'en'}/>
        <div>
            <ReservarForm/>
        </div>
    </div>
  )
}

export default Reservar