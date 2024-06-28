import { cloneElement } from "react";
import renderHTML from 'react-html-parser'; 
import { FaChair , FaRegClock, FaRegSmileBeam }  from "react-icons/fa";
import { MdPool } from "react-icons/md"

export const getIcon = (icon) => {
    icon = icon.split("/")[0]
    const element = renderHTML(`<${icon}  />`)
    console.log(element)
    const iconElement = cloneElement(icon, {size: 30})
    console.log(iconElement)

  return (
    <>
<div dangerouslySetInnerHTML={{ __html: iconElement }}/>
    </>
  )
}

export default getIcon