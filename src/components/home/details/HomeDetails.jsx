import React from 'react'
import DetailsGrid from './DetailsGrid'
import DetailCard from './DetailCard'
import Heading from '../../Heading'
import { IoDocumentTextOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const HomeDetails = () => {
  var navigate = useNavigate()
  return (
    <div className=' w-full flex flex-col items-center '>
        <Heading title={"Detalles de Renta"} logo={false}/>
        <DetailsGrid />
        <button onClick={()=> {navigate('/reglamento')}} type="button" className="text-white bg-gray-700  hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

          <IoDocumentTextOutline className='w-10 '/>

          Leer Regalemento Completo
        </button>
    </div>
  )
}

export default HomeDetails