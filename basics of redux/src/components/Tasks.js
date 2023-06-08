import React,{useContext,useEffect,useState} from 'react'
import {addTask,removeTask,completedTask} from "../store/Task";
import StoreContext from '../context/storeContext'
const Tasks = ()=> {
   const store = useContext(StoreContext);
   const [tasks,setTasks] = useState(store.getState())
   useEffect(()=>{
    store.dispatch(addTask("Task-1"));
    console.log(store.getState());
    
   },[])
   
  return (
    <div>Tasks</div>
  )
}

export default Tasks