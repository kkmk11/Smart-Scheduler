import React,{useContext,useState} from 'react'
import {store} from './App'

const Todolist = () => {
    const [data,setData]=useContext(store)
    const [nametask,setNametask]=useState('');
    const [nametime,setNametime]=useState('');
    const [namedate,setNamedate]=useState('');
    const submitHandler=e=>{
        e.preventDefault();
        setData([...data,{task:nametask,time:nametime,date:namedate}])
    }
  return (
    <div className='col-sm-3 card bg-light'>
      <div className='card-body'>
            <form className='form' onSubmit={submitHandler}>
                <input type="text" style={{height:"38px", width:"200px"}} onChange={(e)=> setNametask(e.target.value)} placeholder='Enter the task'  />
                <input type="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" style={{height:"38px", width:"200px"}} onChange={(e)=> setNametime(e.target.value)} placeholder='Enter the time'  />
                <input type="date" style={{height:"38px", width:"200px"}} onChange={(e)=> setNamedate(e.target.value)} placeholder='Enter the date'  /><br/>
                <input className='btn btn-success' type="submit" style={{height:"38px"}} value="Add"/>
            </form>
            {data.slice(1).map(item => 
                <div className='card'>
                    <div className='card-body'>
                    <p style={{"font-family": 'Trebuchet MS'}}>{item.task}</p>
                    <span>{"Time : "+item.time}<br/>{"Date : "+item.date}</span>
                    </div>
                </div>
            )}
      </div>
    </div>
  )
}

export default Todolist
