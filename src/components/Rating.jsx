import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import useToken from '../utils/useToken'
import { FaStar } from 'react-icons/fa6'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const Rating = ({eid, commented ="", rating = 0}) => {

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(0);
    const [comment, setComment ] = useState(commented)

    const axiosToken = useToken()
    const stars = Array(5).fill(0)


    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
  

    const handleRating = async () => {
        const formData = new FormData()
        formData.append("event", eid)
        formData.append("review", comment)
        formData.append("rating", currentValue)
        
        await axiosToken.post('reviews/', formData).then((res)=>{ 
            console.log(res.data);
        })
    }

    useEffect(()=>{
            setComment(commented)
            setCurrentValue(rating)
    }, [commented, rating])

    
  return (
  
    <>


    {/* // <!-- Modal toggle --> */}

    <button  data-modal-target="static-modal" data-modal-toggle="static-modal" className='bg-yellow-200 hover:bg-yellow-400 uppercase font-black text-white rounded-lg p-3 mt-4 w-full'>
        Calificar y opinar aqui
    </button>
    {/* // <!-- Main modal --> */}
    <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">

                    <Heading title={"Califica el evento en"} logo={false} />
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-y-4">
 

                        {/* <StarRate com={commented} rat={rating}  callbackRate={callbackRate} callbackComment={callbackComment}/> */}
                        <div style={styles.container}>

                                <div style={styles.stars}>
                                {stars.map((_, index) => {
                                    return (
                                    <FaStar
                                        key={index}
                                        size={50}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        style={{
                                        marginRight: 10,
                                        cursor: "pointer"
                                        }}
                                    />
                                    )
                                })}
                                </div>
                                <textarea value={ comment ? comment : "" } onChange={(e)=> setComment(e.target.value)}
                                placeholder="Cuentanos tú opinion..."
                                style={styles.textarea}
                                />



                                </div>
                        
                </div>
                {/* <!-- Modal footer --> */}
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button onClick={handleRating} data-modal-hide="static-modal" type="button" className="text-white w-full bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
                    <button data-modal-hide="static-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}



const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    }
  
  
  };
  
export default Rating