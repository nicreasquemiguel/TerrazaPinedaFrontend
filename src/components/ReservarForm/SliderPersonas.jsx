
import React, {  useContext, useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from "react-query";
import { getVenues } from '../../actions/booking';



const SliderPersonas = () => {
  const [params, setParams] = useSearchParams()
  const [nPersonas, setPersonas ] = useState(0)
  const [slider, setSlider] = useState(30);
  const [price, setPrice] = useState(3500)
  const personas = params.get('personas')

  useEffect(() => {

      if (personas <= 80){
        setPersonas(personas)
        setSlider(Math.ceil(personas / 10) * 10 )
      }
  }, [])



const onPriceChange = () => {
    if(slider <= 30 ){
        setPrice(3500)   

    } else {

        setPrice(Math.ceil( 3500 + ((slider - 30) * (2000/ (70)) )))
    } 
    

    console.log(price)
}

useEffect(() => {
    onPriceChange()
},[slider])

const onSliderChange = (event) => {
    let element = parseInt(event.target.value)
    console.log(element)
    setSlider(element)

}



  console.log(personas)


  return (
    <>
  
    <div className='w-1/2 rounded-2xl shadow-md  text-center'>
        <span className='text-xs font-bold'>ARMA TU PAQUEsTE</span><br/>
        <input id='nPeople' value={slider}  onChange={onSliderChange} className ="w-11/12 accent-sky-400 " type='range' min="10" max="100" step="10"></input><br/>
        <span className='text-xs font-bold'>{slider} PERSONAS</span><br/>
        <span className='text-xs text-green-500 font-bold m-0'>${price}</span><br/>


    
    </div>



    </>
  )
}

export default SliderPersonas