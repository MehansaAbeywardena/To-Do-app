const ToDoSchema = require('../schemas/ToDoSchema')

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoSchema.find()
    res.send(todo)
}

module.exports.saveToDo = async(req,res) => {
    const {text} = req.body

    ToDoSchema.create({text})
    .then((data)=>{
        console.log("Added the task Successfuly!");
        console.log(data);
        res.send(data)
    })
    
}