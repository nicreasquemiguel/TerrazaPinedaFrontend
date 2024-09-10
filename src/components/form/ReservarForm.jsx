import React , {useState,useEffect, useRef} from 'react'
import CalendarPicker from './Calendar'
import Details from './Details'
import Week from './Week'
import Total from './Total'

import CartID from '../../views/plugin/CartID'
import UserData from '../../views/plugin/UserData'
import UseProfileData from '../../views/plugin/UserProfileData'
import apiInstance from '../../utils/axiosAPI'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const ReservarForm = () => {
  const [people, setPeople] = useState(30);
  const [price, setPrice] = useState(3500)
  const [extrasAmount, setExtrasAmount] = useState(0)
  const [extrasSelected, setExtrasSelected] = useState(new Set())
  const [extras, setExtras] = useState([])
  const [total, setTotal] = useState(0)
  const [date, setDate] = useState(new Date())

  const data = UseProfileData()
  const user = data?.user
  const userData = UserData()
  const cart_id = CartID()


  console.log(userData)
  console.log(user)
  // Importing Swal (SweetAlert2) for displaying toast notifications

// Configuring global toast notifications using Swal.mixin
  const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: true,
      timer: 2500,
      timerProgressBar: true,
  });
  // console.log(cart_id);
  // console.log(data)
  const navigate = useNavigate()

  let ex = new Set ()

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData()

    if (!userData){
      Toast.fire({
        icon: 'warning',
        title: 'Inicia session o crea tu cuenta para Reservar!'
    });
      navigate('/registrar')
    }

    // formData.append("event_id", event.id)
    formData.append("user_id", userData?.user_id)
    formData.append("date", date.toISOString().split('T')[0])
    formData.append("people", people)
    console.log([...extrasSelected])
    formData.append("extras", JSON.stringify([...extrasSelected]))
    
    console.log(formData)
    apiInstance.post('add-event/', formData).then(res => {
      console.log(res.data)
 
      navigate('/checkout', {state: {event : res.data?.event_id}})
    })
 




}; 


const onExtrasLoad = () => {
        apiInstance.get('extras/').then((res) => {
          // console.log(res.data)
          setExtras(res.data)
        })
    }

const callbackFromCalendarDate = (value) => {
  var dateString = new Date(value)
  // console.log(dateString.toDateString())
  setDate(dateString)

}

const onPeopleChange = (event) => {
  let element = parseInt(event.target.value)
  // console.log(element  )
  setPeople(element)

}

const onPriceChange = () => {
  if(people <= 30 ){
      setPrice(3500)   

  } else if(people == 60) {
    setPrice(4500)


  } else if (people  == 80 ){
    setPrice(5000)
  } else {
      setPrice(Math.ceil( 3500 + ((people - 30) * (1500/ (50)) )))
  }
  

  // console.log(price)
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


    

useEffect(() => {
  onPriceChange()
  onExtrasLoad()
},[])


  return (
 
    <div className='   grid  grid-cols-1 xxs:w-full  justify-items-center pb-10 '>
      <form className='grid place-items-center'onSubmit={e => onSubmit(e)}>

        <div className='grid gap-6 justify-self-center grid-cols-1   '>

            <Week/>
        </div>
        <div className='grid place-content-center gap-5 justify-items-center  xxs:w-full sm:w-4/5 grid-cols-1 sm:grid-cols-2 '>
            <CalendarPicker callback={callbackFromCalendarDate} />

            <Details  extras={extras} date={date} people={people} price={price}  onExtrasChange={onExtrasChange} onPeopleChange={onPeopleChange}/>
            <Total people={people} date={date} price={price} extras={extrasAmount}/>
            <input value={userData ? userData.id : 0} type='hidden'/>
            <button type="submit" className="text-white col-span-2 w-full font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 hover:font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              CONTINUAR CON SOLICITUD
            </button>
        </div>

      </form>
    </div>
  )
}

export default ReservarForm