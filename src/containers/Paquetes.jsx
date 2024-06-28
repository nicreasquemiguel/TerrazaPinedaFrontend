import React, { useEffect, useState } from 'react'
import apiInstance from '../utils/axiosAPI'

const Paquetes = () => {

    const [products, setProducts] = useState([])
    useEffect(() =>{

        apiInstance.get('eventos/').then((res)=> {
            console.log(res.data)
            setProducts(res.data)
        })


    },[])
  return (
    <div>Paquetes
        <ul>
            {products?.map((p, index) => (
                <li key={index}>{p.client.first_name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Paquetes