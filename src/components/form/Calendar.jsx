import React, {useEffect, useState } from 'react'

import apiInstance from '../../utils/axiosAPI';

// import { Datepicker } from "flowbite-react";

// import 'react-calendar/dist/Calendar.css';

import  Calendar  from 'react-calendar'   
import { differenceInCalendarDays, format } from 'date-fns';
import moment from 'moment';

function CalendarPicker({ callback }) {
  const [value, setValue] = useState('')
  const [disabledDates, setDisabledDates] = useState([])

  useEffect(() =>{

        apiInstance.get('eventos/ocupados/').then((res) => {
      // console.log(res.data)

      setDisabledDates(res.data?.map( date => moment(date.date).toDate()))

    })
    // console.log(disabledDates)

},[])

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  function tileDisabled({ date, view }) {
    // Disable tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of disabled dates
      return disabledDates.find(dDate => isSameDay(dDate, date));
    }
  }

  function tileClassName({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (disabledDates.find(dDate => isSameDay(dDate, date))) {
        return '';
      }
    }
  }


  function onChange(nextValue) {
    setValue(nextValue);
    // console.log(nextValue)
    callback(nextValue)
  }


  return (
    <div className='xxs:w-full px-3 h-max xxs:col-span-2 mt-2 sm:col-span-1 max-w-xl flex flex-col pb-10 text-center flex justify-center'>
        {/* <div id='datepickerId' className='  accent-sky-400'></div> */}

        {/* <h2>Elije tu Fecha </h2> */}
        <Calendar locale='es-ES' maxDetail="month"  maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))} minDate={new Date(new Date().setDate(new Date().getDate()  ))} tileClassName={tileClassName}  onChange={onChange} tileDisabled={tileDisabled} value={value}  />
        

        <span className="pt-5  text-teal-700 capitalize text-lg font-extrabold">{value && new Date(value).toLocaleDateString("es-ES",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}</span>
        <span className='pt-0 text-sm uppercase'>Fecha Seleccionada</span>

    </div>
    
    
  )}


export default CalendarPicker

