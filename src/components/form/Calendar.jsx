import React, {useEffect, useState } from 'react'
import Datepicker from 'flowbite-datepicker/Datepicker';

import apiInstance from '../../utils/axiosAPI';

import es from "flowbite-datepicker/locales/es";
// import { Datepicker } from "flowbite-react";

// import 'react-calendar/dist/Calendar.css';

import  Calendar  from 'react-calendar'   
import { differenceInCalendarDays, format } from 'date-fns';
import moment from 'moment';

function CalendarPicker({ callback }) {
  const [value, setValue] = useState(new Date() )
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
    <div className='xxs:w-full h-max xxs:col-span-2 sm:col-span-1   text-center flex justify-center'>
        {/* <div id='datepickerId' className='  accent-sky-400'></div> */}

        <Calendar locale='es-ES'  maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))} minDate={new Date(new Date().setDate(new Date().getDate()  ))} tileClassName={tileClassName}  onChange={onChange} tileDisabled={tileDisabled} value={value} />
        {/* <input type='date' id='date' value={null} /> */}

    </div>
    
    
  )}


export default CalendarPicker

