
import React, {  useContext, useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from "react-query";
import { getVenues } from '../../actions/booking';



const SliderPersonas = ({costos, callback}) => {

  const [params, setParams] = useSearchParams()
  const [nPersonas, setPersonas ] = useState()
  const [slider, setSlider] = useState(30);
  const [price, setPrice] = useState(3500)
  const personas = parseInt(params.get('personas')) 
  console.log(personas);

  useEffect(() => {
    if (personas > 10 && personas  < 80){
      setSlider(personas)
      console.log(personas * 100);
    }
  },[personas])
  
  // const costos = {
  //   10 : 3500,
  //   20 : 3500,
  //   30 : 3500,
  //   40 : 3850,
  //   50 : 4150,
  //   60 : 4500,
  //   70 : 4850,
  //   80 : 5000
  // }

const onPriceChange = () => {
    setPrice(costos[slider])
    console.log(slider);

}

useEffect(() => {
    onPriceChange()
},[slider])



const onSliderChange = (event) => {
    let element = parseInt(event.target.value)

    setSlider(element)
    callback(element)
}



  return (
    <>
  
    <div className='w-1/2 grid grid-cols-1 rounded-2xl shadow-md  text-center place-items-center justify-center'>
        <span className='text-center text-teal-700 font-black justify-self-center  justify-items-center col-span-3'>Elije tu paquete</span>
        <div className="relative my-12 w-full col-span-3">
             <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 bottom-6">10p</span>
             <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 bottom-6 pl-3">30p</span>

             <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[69%] bottom-6">60p</span>

            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 bottom-6">80p</span>
            <input id="labels-range-input" type="range" value={slider} onChange={onSliderChange}  min="10" max="80" step="10" className="w-full h-2 bg-gray-200 rounded-lg accent-teal-500 cursor-pointer dark:bg-gray-700 "/>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute -start-7 -bottom-6">Min ($3500)</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -bottom-6">$3500</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[66%] -bottom-6">$4500</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute -end-4 -bottom-6">($5000)</span>
        </div> 
        <span className='text-md font-bold col-span-3 mt-20'>{slider} PERSONAS</span><br/>
        <span className='text-xl text-green-500 font-bold m-0 mb-5 col-span-3'>${price}</span><br/> 
    
    </div>



    </>
  )
}

export default SliderPersonas