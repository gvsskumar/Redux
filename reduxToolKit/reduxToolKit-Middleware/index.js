import store from "./store/storeConfig";
import {addTask,removeTask,completedTask} from "./store/slice/taskSlice"
//-------------Redux Toolkit --No-Middleware---------------//
store.dispatch({type:"SHOW_ERROR",payload:{error:"getting Error "}})
store.dispatch(addTask({task:"TASK3"}))
store.dispatch(addTask({task:"TASK4"}))
console.log(store.getState());
store.dispatch(removeTask({id:1}))
store.dispatch(completedTask({id:2}))
console.log(store.getState()); 


//-------------Core redux dispatch---------------//
/*store.dispatch({type:'ADD_TASK',payload:{
    task:"Task 1"
}});
store.dispatch({type:'ADD_TASK',payload:{
    task:"Task 2"
}});
console.log(store.getState());
store.dispatch({type:'REMOVE_TASK',payload:{
    id:1
}})
console.log(store.getState());
store.dispatch({type:'TASK_COMPLETED',payload:{
    id:2
}})
console.log(store.getState()); */