const TaskSchema = require('../models/task')

module.exports = async(req,res)=>{
    console.log(req.body)


    try {
        const add_task = await TaskSchema.findByIdAndUpdate(req.body.id,{
            Status:false
        })
    
        

        res.send({Status:true,Message:"Task Updated"})
        

    } catch (error) {
        console.log(error)
        res.send({Status:false, Message: "Error"})
    }




}