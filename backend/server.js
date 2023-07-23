const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

let tasks = [
    {id:1,task:"start creating Redux",completed:true},
    {id:2,task:"start creating React",completed:true},
    {id:3,task:"start creating CSS",completed:true},
    {id:4,task:"start creating Javascript",completed:true},
    {id:5,task:"start creating MongoDB",completed:true},
]
// get all tasks
app.get("/api/tasks",(req,res)=>{
    res.json(tasks);
});

//Add new Task
app.post("/api/tasks",(req,res)=>{
    const newTask ={id:tasks.length+1,...req.body,completed:false};
    tasks.push(newTask);
    console.log(tasks);
    res.json(newTask);
});

//Change task completed property
app.patch("/api/tasks/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task)=>task.id===id);
    const task = tasks[index];
    task.completed=req.body.completed;
    res.json(task);
});

app.delete("/api/task/id",(req,res)=>{
    const id = parseInt(req.params.id);
    tasks = tasks.filter((task)=>task.id !==id);

    res.json({id});
})
app.listen(5000,()=>console.log("Server runing port:5000"))
