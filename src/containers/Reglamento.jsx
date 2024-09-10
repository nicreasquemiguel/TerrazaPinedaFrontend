import React from 'react'
import Heading from '../components/Heading'
import Regla from '../components/Regla'

const Reglamento = () => {
  return (
    <div className='grid grid-cols-1 md:px-5 text-center max-w-7xl'>
        <Heading title={'Reglamento'} sentence={'Leáse con atención'} sentence2={' de '}/>
    <ul className="w-3/4 place-self-center pt-3 text-start divide-y divide-gray-200 dark:divide-gray-700">
    <Regla regla={'Cambios de fecha se tendran que hacer con 3 semanas de anticipacion, cancelaciones se pierde el apartado, SIN EXCEPCION.'} explicacion={'Porque si'}/>
    <Regla regla={'Se debe entregar una identificación vigente y domicilio para que se les entregue el lugar, quien se vaya a hacer responsable.'}/>
    <Regla regla={'Por el momento, el Ayuntamiento nos ah limitado, al horario de 10 de la mañana hasta 10 de la noche. Estamos en proceso de recuperarlo, sin embargo, hasta nuevo aviso estaremos manejando este horario.'}/>
    <Regla regla={'Cualquier mal uso de las instalaciones y mobiliario, y actos de violencia son causa para la suspension del evento'}/>
    <Regla regla={'Si el lugar esta sobre el numero de personas acordadas es causa para la suspension del evento.'}/>
    <Regla regla={'Queda estrictamente prohibido ingresar automoviles o motos, a las areas verdes.'} />
    <Regla regla={'Se debera entregar la terraza limpia, se tiene que recoger la basura y los objetos ajenos a la terraza. (Al menos de que hayan pagado el servicio de limpieza).'}/>
    <Regla regla={'En caso de daños o extravios del mobiliario de la terraza, quien quedo responsable debe recuperarlo o pagar el costo correspondiente.'}/>
    <Regla regla={'Esta totalmente prohibido el uso de confetis, brillantina o cosas parecidas (si se encuentran residuos se cobraran $300 de servicio de limpieza adicionales)'}/>
    <Regla regla={'La musica en vivo como norteños, bandas etc, están prohibidas hasta nuevo aviso, igual por Ayuntamiento.'}/>
    <Regla regla={'La música esta permitido sin problema, sin embargo, tenemos un limitante de 65 decibeles por el Municipio, cualquier falta/descumplimiento la multa será otorgada a el responsable. Más info en este link https://www.zapopan.gob.mx/aprueba-zapopan-armonizacion-de-la-normatividad-municipal-a-la-ley-antirruido/'}/>
    <Regla regla={'Al incumplir este reglamento, se podrá retener la credencial hasta que se resuelva el hecho'}/>
    <Regla />
    </ul>

    </div>
  )
}

export default Reglamento