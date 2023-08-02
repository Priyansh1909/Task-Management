const TaskSchema = require('../models/task')


module.exports = async (req,res)=>{

    try {
        const get_task = await TaskSchema.find()
        
            
            // let all_Task = {}

            // get_task.forEach((task) => {
            //     all_Task[task._id] = task
            // });
            

            res.send(get_task)
        

    } catch (error) {
        console.log(error)
        res.send({Status:false, Message: "Error"})
    }


}