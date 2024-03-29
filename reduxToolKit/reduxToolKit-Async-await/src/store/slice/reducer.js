let id=0;
export default function reducer(state=[],action){
    switch(action.type){
        case "ADD_TASK":
            return [
                ...state,
                {
                    id:++id,
                    task:action.payload.task,
                    completed:false
                }
            ]
        case "REMOVE_TASK":
            return state.filter((task)=>task.id!==action.payload.id)
        
        case "TASK_COMPLETED":
            const index = state.findIndex((task)=>task.id===action.payload.id);  
        return state[index].completed=true;  
    }
}
