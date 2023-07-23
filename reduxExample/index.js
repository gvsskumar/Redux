import store from "./store/storeConfig";
store.dispatch({type:'ADD_TASK',payload:{
    task:"Task 1"
}});
store.dispatch({type:'ADD_TASK',payload:{
    task:"Task 2"
}});
console.log(store.getState());
store.dispatch({type:'REMOVE_TASK',payload:{
    id:1
}})
store.dispatch({type:'TASK_COMPLETED',payload:{
    id:2
}})
console.log(store.getState());