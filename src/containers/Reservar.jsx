import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import SliderPersonas from '../components/ReservarForm/SliderPersonas'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { REACT_APP_API_URL, get_venues , getVenues, getPaquetes } from '../actions/booking'
import Stepper from '../components/ReservarForm/Stepper'
import CalendarPicker from '../components/form/Calendar'
import Swal from 'sweetalert2'
import { Button } from 'primereact/button';                             
import 'primereact/resources/themes/saga-blue/theme.css';         
import 'primereact/resources/primereact.min.css';
import  ReservarForm  from '../components/form/ReservarForm'
import { set } from 'date-fns'
import apiInstance from '../utils/axiosAPI'
import ExtrasCheckbox from '../components/ReservarForm/ExtrasCheckbox'
import Description from '../components/ReservarForm/Description'
import DetailsBooking from '../components/ReservarForm/DetailsBooking'
import UserData from '../views/plugin/UserData'
import UseProfileData from '../views/plugin/UserProfileData'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

const Reservar =  () => {
        
  const [step, setStep]= useState(1)
  const [date, setDate] = useState('')

  const [people, setPeople] = useState(30)
  const [price, setPrice] = useState(3500)
  const [extras, setExtras] = useState('')
  const [extrasAmount, setExtrasAmount] = useState(0)
  const [extrasSelected, setExtrasSelected] = useState(new Set())
  const [description, setDescription] = useState('')
  const [mayor, setMayor] = useState(false)
  const [acepto, setAcepto] = useState(false)

  const data = UseProfileData()
  const user = data?.user
  const userData = UserData()
  const navigate = useNavigate()


  const costos = {
    10 : 3500,
    20 : 3500,
    30 : 3500,
    40 : 3850,
    50 : 4150,
    60 : 4500,
    70 : 4850,
    80 : 5000
  }


  useEffect(() => {
    fetchData()
  
  },[])
  
  const fetchData = async () => {
    try {
      apiInstance.get('extras').then(response => {
        setExtras(response.data)
        console.log(response)
      })
    } catch (error) {

      console.error('Error fetching data:', error);
    }
  };



  const [formData, setFormData] = useState({
    date: "",
    people: "",
    extras: "",
    description: "",
    user_id: "",
  });

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
});


  if (date)
    console.log(date)

  const callbackState = (tmp) => {
    setStep(tmp)

  }

  const callbackMayor = (value) => {
    setMayor(value)
  }

  const callbackAcepto = (value) => {
    setAcepto(value)
  }


  const onSubmit = async e => {
    e.preventDefault();
    if (step == 6) {

      const formData = new FormData()
  
      if (!userData){
        Toast.fire({
          icon: 'warning',
          title: 'Inicia session o crea tu cuenta para Reservar!'
      });
        navigate('/registrar')
      }

      if (mayor && acepto){
  
      // formData.append("event_id", event.id)
      formData.append("user_id", userData?.user_id)
      formData.append("date", date.toISOString().split('T')[0])
      formData.append("people", people)
      console.log([...extrasSelected])
      formData.append("extras", JSON.stringify([...extrasSelected]))
      formData.append("description", description)
      
      console.log(people)
      apiInstance.post('add-event/', formData).then(res => {
        console.log(res.data)
   
        navigate(`/mis-eventos/${res.data?.eid}`, {state: {event : res.data?.eid}})
      })
      } else {

        setStep(5)
        Toast.fire({
          icon: 'warning',
          title: 'Te falto aceptar terminos y condiciones!'
      });

      }

    }
  
 




}; 

  const callbackFromCalendarDate = (value) => {
    var dateString = new Date(value)
    setDate(dateString)
  }

  const callbackSlider = (value) => {
    setPeople(value)
    setPrice(costos[value])
  }


  const callbackDescription = (value) => {
    setDescription(value)
  }

  const onExtrasChange = (e) => {

    console.log(e.target.value)
    const id = e.target.value
    const extra = extras.find(extra => extra.id == id)
    if (e.target.checked){
      setExtrasSelected([...extrasSelected, extra])
      setExtrasAmount(extrasAmount + extra.price)
    }else {
      setExtrasSelected(extrasSelected.filter( extra =>  extra.id != id ))
      setExtrasAmount(extrasAmount - extra.price)
    }
  }


  const PageDisplay = () => {
    if (step == 1) 
      return <CalendarPicker callback={callbackFromCalendarDate} />
    else if (step == 2 ){
      if (date)
        return <SliderPersonas costos={costos} callback={callbackSlider}/>
      else {
        setStep(1)
        Toast.fire({
          icon: 'error',
          title: 'Falta ingresar fecha!',
        })       
        
      }
    } else if (step == 3){
      return <ExtrasCheckbox extras={extras} onExtrasChange={onExtrasChange}/>
    }  else if (step == 4){
        return <Description callback={callbackDescription}/>
  
    } else if(step == 5){
      if (description && description.length > 80 ){
        return <DetailsBooking callbackMayor={callbackMayor} callbackAcepto={callbackAcepto} description={description} extrasSelected={extrasSelected} fecha={date} personas={people} precio={price}/>

      }
        else {
          setStep(4)
          Toast.fire({
            icon: 'error',
            title: 'Falta y/o detalla más tu descripción!',
          })       
          
        }
          
    }
 
 
  
  }



  return (
    <div className=' flex flex-col  min-w-80 !w-full  md:w-full md:min-w-3xl justify-start items-center'>
        <Heading title={'Solcita tú Reserva'} sentence={'Se aprobará según los detalles de tu evento, tales como fecha, paquete, descripción, seguir pasos...'} logo={false}/>
        <form onSubmit={e => onSubmit(e)} className=' w-full h-3/4 flex flex-col items-center  '>
            {/* <ReservarForm/> */}
            
            <Stepper callb ackState={callbackState} step={step}/>
            <div className='bg-white w-full pt-5 flex flex-row justify-center items-center item '>

              {PageDisplay()}
            </div>
            <div className='w-full flex flex-row justify-evenly'>
            <button type="button" className="text-white bg-[#24292F] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2" onClick={() => {

              // <button type="button" class="text-white bg-[#24292F] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2" onClick={() => {
                {
                  step > 1 && setStep(prev => prev - 1)
                }
              }}>
                <MdNavigateBefore/>
                Regresar
              </button>

              <button type="submit" cassName="text-white bg-[#24292F] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2" onClick={() => {
              setStep(prev => prev + 1)}}>
                {step == 5 ? "Enviar solicitud" : "Continuar"}
                <MdNavigateNext className='font-bold'/>
              </button>
            </div>

        </form>

    </div>
  )
}

export default Reservar