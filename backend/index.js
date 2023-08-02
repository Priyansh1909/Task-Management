const express = require('express')
require('dotenv').config();
const add_task = require('./routes/add_task')
const cors = require('cors')

const PORT = process.env.port || 4000


const MongoDB = require('./middleware/MongoDB_connect');
const get_task = require('./routes/get_task');
const edit_task = require('./routes/edit_task');
const delete_task = require('./routes/delete_task');
const completed_task = require('./routes/completed_task');


const app = express()
app.use(cors())
app.use(express.json())



app.listen(PORT,()=>{
    console.log("server started at port ", PORT)
})


app.post("/addtask",(req,res)=>{
    add_task(req,res)
})

app.get("/getTask",(req,res)=>{
    get_task(req,res)
})

app.post('/edit_task',(req,res)=>{
    edit_task(req,res)
})

app.post('/delete_task',(req,res)=>{
    delete_task(req,res)
})

app.post('/completed_task',(req,res)=>{
    completed_task(req,res)
})