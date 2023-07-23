export const addTask = {
    type:"ADD_TASK",
    payload:{
        task:"Sample Task"
    }
}
export const removeTask = {
    type:"REMOVE_TASK",
    payload:{
        id:1
    }
}

export const completedTask = {
    type:"TASK_COMPLETED",
    payload:{
        id:2
    }
}