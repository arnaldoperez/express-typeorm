const Express=require("express")
const Cors=require("cors")

const app=Express()
app.use(Cors())
app.use(Express.json())

// Tu código va desde aquí ⬇️


const tasks = [];
let id=0
app.get("/tasks",(req,res)=>{
  return res.status(200).send(tasks)
})

app.post("/tasks",(req,res)=>{
  const body=req.body
  let newTask=body
  id++
  newTask.id=id
  tasks.push(newTask)
  return res.status(201).send(newTask)
})

app.get("/tasks/:id",(req,res)=>{
  const id=req.params.id
  let foundTask=tasks.find(task=>task.id==id)
  return res.status(200).send(foundTask)
})


app.put("/tasks/:id",(req,res)=>{
  const id=req.params.id
  const body=req.body
  let updatedTask=body
  let foundTask=tasks.find(task=>task.id==id)
  foundTask.title=updatedTask.title
  foundTask.description=updatedTask.description
  foundTask.completed=updatedTask.completed
  return res.status(200).send(foundTask)
})

app.delete("/tasks/:id",(req,res)=>{
  let taksIndex=tasks.findIndex(task=>task.id==req.params.id)
  tasks.splice(taksIndex,1)
  return res.status(200).send(tasks)
})
// Hasta aquí ⬇⬆️

module.exports={app}
