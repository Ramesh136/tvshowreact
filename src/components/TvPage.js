import { PlusCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const TvPage = () => {

  const [searchParam] = useSearchParams()
  const [details , setDetails] = useState()
  
  const id = searchParam.get('id')
  const parser = new DOMParser();
  const doc = parser.parseFromString(details?.summary, 'text/html');
  let doc2
  if(doc.getElementsByTagName('p')[0]?.childNodes.length===2){
    doc2 = doc.getElementsByTagName('p')[0]?.childNodes[1]?.data
  }
  else{
    doc2 = doc.getElementsByTagName('p')[0]?.childNodes[0]?.data + doc.getElementsByTagName('p')[0]?.childNodes[2]?.data
  }

  const data = {
    show:{
      name : details?.name ,
      language : details?.language ,
      genres : details?.genres.map((item)=>item),
      status : details?.status ,
      image    : {
        medium : details?.image?.medium}
    } 

  }
    
  const storeData = ()=>{
    localStorage.setItem("item" , JSON.stringify(data))
  }

  

  
  useEffect(()=>{
    const getTvPage = async()=>{
      const data = await fetch('https://api.tvmaze.com/shows/'+id)
      const json = await data.json()
      setDetails(json)
    }
  getTvPage()

  } ,[])
  return (
   
    <div className='flex h-1/2'>
      
      <img 
      className='rounded h-96  w-1/4'
      alt='NA'
      src={details?.image?.medium}
      />

      <div className='pl-5 space-y-2'>
        <div className='flex'> <h2 className='text-4xl font-semibold'>{details?.name}</h2>
            <button  
            className='content-end ml-5 pt-2'
            onClick={storeData}><PlusCircle /></button>
        </div>
        
        <h2 className='text-2xl '>IMDB - {details?.rating?.average}</h2>
        <div>
         {doc.getElementsByTagName('p')[0]?.childNodes.length===2? <b>{details?.name}</b> : null}{doc2}
        </div>
        <div className='text-gray-500'>{details?.genres?.join(' ,')}</div>
        <div><b>Available on :</b> {details?.network?.name} {details?.network?.country?.code}</div>
        <h2><b>Runtime :</b> {details?.runtime} mins/ep</h2>
        <h2 className='text-xl hover:underline'><a href={details?.url} target="_blank">Click here to know more</a></h2>
        
      </div>
      

    </div>
  )
}

export default TvPage