import React,{useContext} from 'react'
import {store} from './App'

const Count = () => {
    const [data,setData]=useContext(store)
  return (
    <div className='col-sm-2 card'>
      <div className='card-body badge bg-primary'>
            <h6>No. of Tasks : {data.length-1}</h6>
      </div>
    </div>
  )
}

export default Count
