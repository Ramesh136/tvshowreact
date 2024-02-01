import React, { useEffect, useState } from 'react'
import TvCard from './TvCard'
import { NavLink } from 'react-router-dom'

const MainContainer = () => {

    const [tvData , setTvData] = useState([])

    const getList = async()=>{
        const data = await fetch('https://api.tvmaze.com/search/shows?q=all')
        const json = await data.json()
        console.log(json)
        setTvData(json)
    }
    useEffect(()=>{
        getList()
        
    } ,[])

  return (
    <div className=' flex flex-wrap gap-2'>

        {tvData.map((data)=>{
            return <NavLink  key={data.show.id} to={'/tvpage?id='+data.show.id}><TvCard data = {data}/> </NavLink> 
        })}  
    </div>
  )
}

export default MainContainer