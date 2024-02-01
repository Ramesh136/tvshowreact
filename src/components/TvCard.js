import { Popcorn } from 'lucide-react'
import React from 'react'

const TvCard = ({data}) => {
  return (
    <div className='mt-3 flex-col w-52 h-auto'>
      <div className='border p-2'>
      <img 
        className='rounded'
        src={data.show.image?.medium}
        width={200}
        height={280}
        alt='NA'
        
        />
        <div className='flex pt-2 justify-between ml-2'>
            <div className='font-bold'>{data.show.name}</div>
            
            <div className='flex mr-2 gap-1'>
            <Popcorn />
            {Math.floor(data?.score*100)}%
            
            </div> 
        </div>
        <div className='pl-2'>{data.show.language}</div>
        <div className='pl-2'>{data.show.genres.join(' ,')}</div>
        <div className='pl-2'>Status - {data.show.status}</div>

      </div>
        
    </div>
  )
}

export default TvCard