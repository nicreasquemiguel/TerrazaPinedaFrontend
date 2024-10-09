import React, {useState, useEffect} from 'react'
import PriceCard from '../components/PriceCard'
import ExtraCard from '../components/ExtraCard'
import Heading from '../components/Heading'
import apiInstance from '../utils/axiosAPI'
import useToken from '../utils/useToken'
import IncludedCard from '../components/IncludedCard'
import getIcon from '../utils/getIcon'


const Precios = () => {

  const [paquetes, setPaquetes] = useState([])
  const [extras, setExtras] = useState([])
  const detallesMobiliario = ['Mesas y Tablon', 'Sillas Acojinadas', 'Manteleria']
  const detallesHorario = ['10 de la mañana a', '12 de la noche', 'Sin horas contadas dentro del horario']
  const detallesAlberca = ['Climatizada', '1.20mts Profundo', 'Bancas']
  const detallesOtros = ['Futbolito','WIFI', 'Piñatero', 'Asador', 'Barra', 'Hielera', 'Baños']

  const axiosToken = useToken()

  getIcon("FaPeopleLine/ fa6")
  
  useEffect(() =>{


      // Bearer
      apiInstance.get('paquetes/').then((res)=> {
          console.log(res.data)
          setPaquetes(res.data)
      })

      apiInstance.get('extras/').then((res) => {
        console.log(res.data)
        setExtras(res.data)
      })


  },[])
  
  return (
    <div className=' md:px-5 text-center max-w-7xl '>
        <Heading title={'Precios'} sentence={'Eche un vistazo a los paquetes hechos para cualquier ocasion y no dude en contactarnos si tiene alguna duda.'} sentence2={'de'}/>
        <h2 className='font-black bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  text-3xl  '> Paquetes</h2>
        <div className=' grid pt-4 xxs:snap-y xxs:snap-mandatory md:w-full sm:w-3/4 sm:grid-cols-1 md:grid-cols-4 gap-5 sm:px-5 '>


            {paquetes?.map((paquete, index) => (
              <PriceCard key={index} precio={paquete.price} personas = {paquete.n_people} paquete={paquete.title} horario={paquete.hours} gradient={'bluep'} icon={paquete.icon} />
            ))}

                                  
        </div>
        <h2 className='font-black pt-12 text-3xl font-bluep'>¿Qué incluyen?</h2>
      <div className=' grid pt-4 xxs:snap-y xxs:snap-mandatory   md:w-full sm:w-3/4 sm:grid-cols-1 md:grid-cols-4 gap-5 sm:px-5 '>
              <IncludedCard titulo='Mobiliario' detalles={detallesMobiliario} gradient={'terraza'} icon={"FaPeopleLine/ fa6"}/>
              <IncludedCard titulo='Horario' detalles={detallesHorario} gradient={'terraza'} icon={"FaRegClock / fa"}/>
              <IncludedCard titulo='Alberca' detalles={detallesAlberca} gradient={'terraza'} icon={"MdPool/ fa"}/>
              <IncludedCard titulo='Otras Amenidades' detalles={detallesOtros} gradient={'terraza'} icon={"FaRegSmileBeam/ fa"}/>
      </div>
      <h2 className='font-black pt-2 text-3xl font-bluep'> Extras</h2>
      <div className=' grid pt-4 xxs:snap-y xxs:snap-mandatory  md:w-full sm:w-3/4 sm:grid-cols-1 md:grid-cols-4 gap-5 sm:px-5 '>

            {extras?.map((extra, index) => (
              <ExtraCard key={index} extra={extra.title} precio={extra.price} descripcion={extra.description} gradient={'bluep'} />
            ))}
                            
        </div>
    </div>
  )
}

export default Precios