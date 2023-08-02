const TaskSchema = require('../models/task')

module.exports = async(req,res)=>{
    console.log(req.body)


    try {
        const add_task = await TaskSchema.create({
            Title:req.body.Title,
            Description:req.body.Description,
            Status:req.body.Status
        })
    
        await add_task.save().then((data)=>{
            console.log(data._id)
            res.send({Status:true,Message:"Task Saved", id: data._id})
        })

        

    } catch (error) {
        console.log(error)
        res.send({Status:false, Message: "Error"})
    }




}