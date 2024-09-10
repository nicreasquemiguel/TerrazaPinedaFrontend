const DetailCard = ({icon, title, text}) => {


  return (
    <div className='flex flex-col text-center rounded-2xl justify gap-3 m-6 p-4 bg-white items-center'>
        {icon}
        <p className='uppercase font-bold'>{title}</p>

        <span dangerouslySetInnerHTML={{__html: text}} className="text-md sm:text-xs"></span>
    </div>
  )
}

export default DetailCard