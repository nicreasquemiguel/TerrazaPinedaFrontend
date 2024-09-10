import React from 'react'
import DetailCard from './DetailCard'
import { FaClockRotateLeft, FaBroomBall} from "react-icons/fa6";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { HiOutlineIdentification } from "react-icons/hi";
import { TbExchangeOff } from "react-icons/tb";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineMoneyOff } from "react-icons/md";
import { Button } from 'primereact/button';

const DetailsGrid = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3'>
        <DetailCard icon={<GrDocumentUpdate className='w-12 h-12'/>} title={"Solicitud de Reserva"} text={"Para apartados en linea, se requiere de una solicitud la cual nos ayudará a comprender su tipo de evento, en caso de aceptarse se les notificará para seguir con el apartado"}/>
        <DetailCard icon={<LiaMoneyCheckAltSolid className='w-12 h-12'/>} title={"Apartado"} text={"Se aparta fecha solamente con $1000, los cuales pueden ser depositados, o en la seccion de <a>Reservar</a> de esta página o entregados en la terraza."}/>
        <DetailCard icon={<MdOutlineMoneyOff className='w-12 h-12'/>} title={"Liquidar"} text={"Debe quedar liquidado antes o al momento de la entrega del lugar. En caso de requerir algún otro servicio durante su evento, notificar al personal correspondiente"}/>
        <DetailCard icon={<HiOutlineIdentification className='w-12 h-12'/>} title={"Persona Responsable"} text={"Una persona qudara responsable del lugar, se tendrá que entragar una credencial vigente, para cualquier caso de irregularidad."}/>
        <DetailCard icon={<FaClockRotateLeft className='w-12 h-12'/>} title={"Horario de Renta"} text={"Por el momento, el Ayuntamiento nos a limitado, al horario de 10 de la mañana hasta 10 de la noche. Estamos en proceso de recuperarlo, sin embargo, hasta nuevo aviso estaremos manejando este horario."}/>

        <DetailCard icon={<TbExchangeOff className='w-12 h-12'/>} title={"Cambios o cancelaciones"} text={"Cambios de fechas se necesitan hacer con 3 semanas de anticipación. Cancelaciones se pierde apartado, sin excepción."}/>
        <DetailCard icon={<FaBroomBall className='w-12 h-12'/>} title={"Limpieza"} text={"Se tendrá que hacer la limpieza del lugar, se tiene que entregar con la basura y objetos ajenos a la terraza recogidos."}/>

        
        <DetailCard icon={<TbExchangeOff className='w-12 h-12'/>} title={"Cambios o cancelaciones"} text={"Cambios de fechas se necesitan hacer con 3 semanas de anticipación. Cancelaciones se pierde apartado, sin excepción."}/>
        <DetailCard icon={<FaBroomBall className='w-12 h-12'/>} title={"Limpieza"} text={"Se tendrá que hacer la limpieza del lugar, se tiene que entregar con la basura y objetos ajenos a la terraza recogidos."}/>

    </div>
  )
}

export default DetailsGrid