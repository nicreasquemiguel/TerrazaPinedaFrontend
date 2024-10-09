import { Sidebar } from 'flowbite-react'
import React, { useEffect } from 'react'
import { AdminSidebar, SidebarItem } from '../../components/admin/AdminSidebar'
import { FcStatistics } from "react-icons/fc";
import { VscGraph } from "react-icons/vsc";
import { LuLayoutDashboard, LuUsers, LuSpeaker, LuHelpCircle } from "react-icons/lu";
import { MdEventAvailable } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbPackages } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import {  FaTools } from "react-icons/fa";
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuthStore } from '../../store/auth';
import UseProfileData from '../../views/plugin/UserProfileData';

const AdminDashboard = ({children}) => {
  const navigate = useNavigate()
  const isAdmin = UseProfileData()?.user?.is_superuser
  
  console.log(UseProfileData()?.user?.is_superuser);
  
  useEffect(() => {
    if(isAdmin){
      navigate('/')
    }
}, [])
  return (
    <div className='h-dvh flex'>
      <AdminSidebar>
        <SidebarItem icon={<LuLayoutDashboard size={20}/>} text="Panel"/>
        <SidebarItem icon={<VscGraph size={20}/>} text="Estadisticas"/>
        <SidebarItem icon={<MdEventAvailable size={20}/>} text="Eventos"/>
        <SidebarItem icon={<LuUsers size={20}/>} text="Usuarios"/>
        <SidebarItem icon={<LiaFileInvoiceDollarSolid size={20}/>} text="Pagos "/>
        <hr className='my-3'/>
        <SidebarItem icon={<TbPackages size={20}/>} text="Paquetes"/>
        <SidebarItem icon={<LuSpeaker size={20}/>} text="Extras"/>
        <SidebarItem icon={<FaLocationDot size={20}/>} text="Lugares"/>
        <hr className='my-3'/>
        <SidebarItem icon={<FaTools size={20}/>} text="Configuración"/>
        <SidebarItem icon={<LuHelpCircle size={20}/>} text="Ayuda"/>
      </AdminSidebar>
      <div>
        <Outlet/>
        {children}
      </div>
    </div>
  )
}

export default AdminDashboard