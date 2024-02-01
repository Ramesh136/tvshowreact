import { Layout, ListPlus, Mail, Search, Shield } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const SideBarNav = () => {

    const navList = [
        
        {
            id : 2,
            name : 'WatchList',
            icon : ListPlus ,
            path : '/watchlist'
        },
        {
            id : 3,
            name : 'Upgrade',
            icon : Shield ,
            path : '/upgrade'
        },
        {
            id : 4,
            name : 'NewsLetter',
            icon : Mail ,
            path : '/newsletter'
        },
        
    ]

    const [activeIndex , setActiveIndex] = useState()
  return (
    <div className='h-full bg-white border-r overflow-y-auto shadow-md flex flex-col'>
      
        <div className='p-5 border-b'>
            <NavLink to={'/'}>
            <img 
            alt='tv-icon'
            width={60}
            height={60}
            src='./tv.jpg'/>
            </NavLink>
            
        </div>
     
        
        {
            navList.map((item , index)=>(
                <NavLink key={index} to={item.path}>
                       <div   className={'flex gap-2 items-center p-4 px-6 hover:bg-gray-100  cursor-pointer' + (activeIndex===index ? ' text-purple-800':'')}  
                
                onClick={()=>setActiveIndex(index)}
                >
                    <item.icon/>
                    <h2>{item.name}</h2>

                </div> 

                </NavLink>
                   
            ))
        }
    </div>
  )
}

export default SideBarNav