import React from 'react'

const Regla = ({regla, explicacion}) => {
  return (
<li className="pb-3 min-h-16 sm:pb-4 pt-3">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">

            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900  dark:text-white">
                {regla}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                { explicacion }
                </p>    
           </div>
        </div>
    </li>
  )
}

export default Regla