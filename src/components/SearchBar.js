import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SearchBar = () => {

  const [seachVal , setSearchVal] = useState('')
  return (
    <div className='flex gap-3 items-center text-[14px]  rounded-md p-1   text-gray-500'>
        <Search />
        <input 
        type='text' 
        placeholder='search' 
        className='border bg-gray-50 p-[10.5px] bg-transparent outline-none'
        onChange={(e)=>{setSearchVal(e.target.value)}}/>
        <button>Search</button>
    </div>
  )
}

export default SearchBar