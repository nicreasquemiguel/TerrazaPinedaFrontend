import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import HomeDetails from '../components/home/details/HomeDetails';
import ServicesLayout from '../components/home/carrosel/ServicesLayout';
import { useAuthStore } from '../store/auth';

const Home = () =>{

    const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
 return (

    

    <div className='flex flex-col h-screen px-5  items-center w-full max-w-7xl md:min-w-xl'>

    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <Heading title={'Celebra y disfruta' }  sentence={'Cualquier tipo de evento'} sentence2={'en'} />
            <div className="flex pt-3 flex-col space-y-0 sm:flex-row sm:justify-center sm:space-y-0">

                <Link to="/reservar" className="inline-flex justify-center  items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Reservar
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
                {
                    !isLoggedIn ? 
                    <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                        Learn more
                     </a>  
                :
                    <a href="/mis-eventos" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                        Mis Eventos
                    </a>  
                }

            </div>
        </div>
    </section>
    <HomeDetails/>
    <ServicesLayout/>

    </div>
)
}

export default Home;