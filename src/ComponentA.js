import React,{useContext} from 'react'
import {store} from './App'

const ComponentA = () => {
    const [data1,setData1]=useContext(store)
  return (
    <div className='col-sm-3 card'>
        <div className='card-body'>
            Component A : {data1}
        </div>
    </div>
  )
}

export default ComponentA
