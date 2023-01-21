import React,{useContext} from 'react'
import { store } from './App'

const ComponentB = () => {
    const [data2,setData2]=useContext(store)
  return (
    <div className=' col-sm-3 card'>
        <div className='card-body'>
            Component B : {data2}
        </div>
    </div>
  )
}

export default ComponentB
