import React,{createContext,useState} from 'react'
import Count from './Count'
import Todolist from './Todolist';

export const store=createContext();

const App = () => {
  const [data,setData]=useState([
    {
      task:"",
      time:"",
      date:"",
    }
  ])
  return (
    <div>
      <center>
        <br/>
      <div className='col-sm-3 card bg-dark'>
        <div className='card-body'>
              <h3 className='text-white'>Scheduler</h3>
        </div>
      </div>
        <br/><br/>
      <store.Provider value={[data,setData]}>
        <Count/><br/><br/>
        <Todolist/>
      </store.Provider><br/><br/>
      </center>
    </div>
  )
}

export default App

