import React, {  useContext, useState, useEffect } from 'react'
import apiInstance from '../../utils/axiosAPI'
import CartID from '../../views/plugin/CartID'
import UserData from '../../views/plugin/UserData'
import UseProfileData from '../../views/plugin/UserProfileData'

function Details({people, extras, price, onPeopleChange, onExtrasChange}) {



    const data = UseProfileData()
    const user = data?.user
    const userData = UserData()
    const cart_id = CartID()
    // console.log(cart_id);
    useEffect(() =>{

        // apiInstance.get('extras/').then((res) => {
        //   console.log(res.data)
        //   setExtras(res.data)
        // })
  
  
    },[])

    function onChange(nextValue) {
      setValue(nextValue);

    }
    

  return (
    <div className='xxs:w-full xxs:col-span-2 xxs:pb-3 sm:pb-0  sm:col-span-1 rounded-2xl shadow-md  text-center'>
        <span className='text-xs font-bold'>ARMA TU PAQUETE</span><br/>
        <input id='nPeople' value={people}  onChange={ e => onPeopleChange(e)} className ="w-11/12  accent-sky-400" type='range' min="10" max="80" step="10"></input><br/>
        <span className='text-xs font-bold'>{people} PERSONAS</span><br/>
        <span className='text-md text-green-500 font-bold m-0'>${price}</span><br/>
        

        
    <div className="pt-3 flex justify-evenly ">

        {extras.map((extra, index ) => (
            <div key={index} className="grid grid-cols-1 place-items-center">
                <input id={"inline-checkbox-"+extra.title} type="checkbox" value={extra.id} onClick={ onExtrasChange } className="w-4 h-4 text-sky-400 accent-sky-400 bg-gray-100 border-gray-300 rounded  focus:ring-sky-400 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                <label htmlFor={"inline-checkbox-"+extra.title}  className="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">{extra.title}</label>
                <label htmlFor={"inline-checkbox-"+extra.title}className="ms-2 text-md text-green-500 font-bold dark:text-gray-300">${extra.price}</label>
            </div>
        ))}

    </div>


    
    </div>
  )
}

export default Details