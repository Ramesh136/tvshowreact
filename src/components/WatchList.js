import React from 'react'
import TvCard from './TvCard'

const WatchList = () => {

  const usersdata = JSON.parse( localStorage.getItem('item'))
  console.log(usersdata)
  return (
    <div>
      <TvCard data={usersdata} />
    </div>
  )
}

export default WatchList