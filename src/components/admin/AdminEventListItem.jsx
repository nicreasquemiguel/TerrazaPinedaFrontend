import React, { useEffect, useState } from 'react'
import useToken from '../../utils/useToken'
import AdminDescriptionModal from './AdminDescriptionModal'

const AdminEventListItem = ({event}) => {
    const tokenInstance = useToken()
    const [status, setStatus] = useState(event.status)
    const approveEvent =  async () => {
        const formData = new FormData()
        formData.append("status", "aceptacion")
        await tokenInstance.patch(`approve/${event.eid}/`, formData).then(res => {
            console.log(res.data);
            setStatus("aceptacion")
        })
    }
    useEffect(() => {

    },[status])

    const denyEvent =  async () => {
        const formData = new FormData()
        formData.append("status", "rechazado")
        await tokenInstance.patch(`approve/${event.eid}/`, formData).then(res => {
            console.log(res.data);
            setStatus(res.data.status)
            
        })
    }
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            #{event.eid}
        </th>
        <td className="px-6 py-4">
            {event.date}
        </td>
        <td className="px-6 py-4">
            {event.package.n_people}
        </td>
        <td className="px-6 py-4">
        {event.venue.name}
        </td>
        <td className="px-6 py-4">
        <AdminDescriptionModal description={event.description}/>
        </td>
        <td className="px-6 py-4">
        {status}

            {status == "solicitud" &&
                 <button onClick={() => approveEvent()} className='m-2 bg-red-500 text-white'>
                    Aprobar
                </button>
                
            }

        </td>
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        { event?.client.first_name}

        </td>
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        { event?.admin.first_name}

        </td>
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${event.advance}
        </td>
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${event.total_price}
        </td>
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${event.total_price - event.advance}
        </td>
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {event.rating}
        </td>

    </tr>
  )
}

export default AdminEventListItem