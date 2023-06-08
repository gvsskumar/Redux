import store from "./store/configureStore";
import {addTask,removeTask,completedTask,fetchTodo} from "./store/task";
const unsubscribe = store.subscribe(()=>{
    console.log("updated",store.getState());
  });
store.dispatch(addTask("Creating Task-1"));
store.dispatch(addTask("Creating Task-2"));
//unsubscribe();
console.log(store.getState());
store.dispatch(completedTask(2));
console.log(store.getState());
store.dispatch(removeTask(1));
console.log(store.getState());
store.dispatch(fetchTodo());
console.log(store.getState());
// store.dispatch({ type: "InputNumber", payload: { inputVal: "2*8"} });
// console.log(store.getState());
// store.dispatch({ type: "Calculate", payload: { inputVal:"2*8"} });
// console.log(store.getState());
// store.dispatch({ type: "ResetNumber" });
// console.log(store.getState());
//store.dispatch(calculateResult());

// import {addTask,removeTask,completedTask} from "./store/task"
// import {addEmployee} from "./store/emp";

//  store.dispatch(addTask({task:"Task-1"}));
//  store.dispatch(addEmployee({name:"Kumar"}));
//  console.log(store.getState());
//  store.dispatch({type:"SHOW_ERROR",payload:{
//     error:"User Not Found"
//  }});
// store.dispatch(completedTask({id:2}));
// console.log(store.getState());
// store.dispatch(removeTask({id:1}));
// console.log(store.getState());