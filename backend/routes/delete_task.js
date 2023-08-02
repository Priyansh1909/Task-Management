const TaskSchema = require('../models/task')


module.exports = async (req,res)=>{
    console.log(req.body)

    try {

         delete_task = await TaskSchema.findByIdAndDelete(req.body.id)

         
        
    } catch (error) {

        
    }

}