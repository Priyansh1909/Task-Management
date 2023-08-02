const { default: mongoose } = require("mongoose");

const TaskSchema = new mongoose.Schema({
    Title:String,
    Description: String,
    Status: Boolean
})


module.exports = mongoose.model('addtask',TaskSchema)
