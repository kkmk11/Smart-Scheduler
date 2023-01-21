// import React,{createContext,useState} from 'react'
// import ComponentA from './ComponentA'
// import ComponentB from './ComponentB'

// export const store=createContext();

// const App = () => {
//   const [data1,setData1]=useState(0);
//   const [data2,setData2]=useState(100);
//   return (
//     <div>
//       <center>
//       <store.Provider value={[data1,setData1]}>
//         <ComponentA/>
//         <button className='btn btn-primary' onClick={()=>setData1(1+data1)}>Increment</button>
//       </store.Provider><br/><br/>
//       <store.Provider value={[data2,setData2]}>
//         <ComponentB/>
//         <button className='btn btn-danger' onClick={()=>setData2(data2-1)}>Decrement</button>
//       </store.Provider><br/><br/>
//       <div className='col-sm-3 card'>
//         <div className='card-body'>
//             <h3>Total sum is : {data1+data2}</h3>
//         </div>
//       </div>
//       </center>
//     </div>
//   )
// }

// export default App



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

