import { Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { FaRegCalendarCheck, FaPeopleRobbery, FaRegMoneyBill1, FaFileContract } from "react-icons/fa6";
import { MdAddTask, MdOutlineDescription, MdRemove } from "react-icons/md";

const DetailsBooking = ({description, fecha, personas, precio, extrasSelected, callbackMayor, callbackAcepto}) => {

    const extras = [...extrasSelected]
    const [total, setTotal] = useState(0)
    const [mayor, setMayor] = useState(false)
    const [acepto, setAcepto] = useState(false)
    const getExtrasPrecios = () => {
        extras.forEach((extra)=> {
            setTotal(prevTotal => prevTotal + extra.price)
        })

    }

    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  

    function closeModal() {
      setIsOpen(false);
    }


    useEffect(()=>{
        getExtrasPrecios()
    }, [])
    console.log(total);
  return (
    <>



<div className=' flex flex-col max-w-7xl  min-w-80 !w-full !p-50 md:w-full md:min-w-3xl justify-center items-center'>


<div className="w-[90%] min-w-80 mb-3 items-start mx-10 max-w-5xl p-4 border border-gray-200 rounded-lg shadow sm:p-8 ">
<div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Detalles de la Reserva</h5>

   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/> */}
                        <FaRegCalendarCheck className='w-8 h-8'/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 capitalize truncate dark:text-white">
                        { new Date(fecha).toLocaleDateString("es-ES",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}

                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Fecha seleccionada
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                    <div className="flex-shrink-0">
                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                        <MdOutlineDescription className='w-8 h-8'/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900  dark:text-white">
                            {description}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Descripción del evento
                        </p>
                    </div>
                    <div  className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                    <div className="flex-shrink-0">
                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                        <FaPeopleRobbery className='w-8 h-8'/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {personas} personas
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Paquete
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${precio}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">

                {

                    extras.length > 0 ? extras.map((extra, index)=> {
                        return (
                            <div key={index} className="flex items-center pb-2">
                            <div className="flex-shrink-0">
                                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/> */}
                                <MdAddTask className='w-8 h-6'/>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {extra.title}
                                </p>
                                <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                                Extra
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                ${extra.price}
                            </div>
                        </div>
                        )
                    }) :              (               <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/> */}
                        <MdRemove className='w-8 h-8'/>

                    </div>
                    <div className="flex-1 min-w-0 ms-4">

                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Sin extras seleccionados... 
                                                </p>
                    </div>

                </div>)
                    
                }
              

                
            </li>
          
            <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                    <div className="flex-shrink-0">
                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/> */}
                        <FaRegMoneyBill1 className='w-8 h-8'/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Total
                        </p>
                        <p className="text-xs text-gray-500  dark:text-gray-400">
                            
                            Se aparta apartir de $1000. 
                        </p>
                        <p className="text-xs text-gray-500  dark:text-gray-400">
                             El pago se hará una vez aceptada la reservación.
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${precio + total}
                    </div>
                </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                    <div className="flex-shrink-0">
                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/> */}
                        <FaFileContract className='w-8 h-8'/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            
                        </p>

                            
                        <fieldset>
                            <legend className="sr-only">Checkbox variants</legend>


                             <div className="flex mb-4"> 
                                <div className="flex items-center h-5">
                                <input required defaultChecked={acepto} onChange={callbackAcepto} id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                <div className="ms-2 text-sm">
                                    <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">Leí y acepto los <button onClick={openModal}  className="text-blue-600 hover:underline dark:text-blue-500">terminos y condiciones</button></label>
                                    <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-400">Pasos y reglamento </p>
                                </div>
                            </div>


                            {/* <div className="flex items-center mb-4">
                                <input id="checkbox-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I want to get promotional offers</label>
                            </div> */}

                            <div className="flex items-center mb-4">
                                <input id="checkbox-3" type="checkbox" value={mayor} onChange={callbackMayor} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Soy mayor de edad (+18)</label>
                            </div>
                            
                            {/* <div className="flex mb-4">
                                <div className="flex items-center h-5">
                                    <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                </div>
                                <div className="ms-2 text-sm">
                                    <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
                                    <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-400">For orders shipped from $25 in books or $29 in other categories</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input id="international-shipping-disabled" type="checkbox" value="" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" disabled/>
                                <label htmlFor="international-shipping-disabled" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Eligible for international shipping (disabled)</label>
                            </div> */}
                        </fieldset>

                 
                    </div>

                </div>
            </li>
        </ul>
   </div>
</div>

</div>
<Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >    <div className="relative p-4 w-full max-w-2xl max-h-full">

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
        </div>
    </div>
</Modal>








    </>
  )
}



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


export default DetailsBooking