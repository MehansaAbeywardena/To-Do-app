const ToDoSchema = require('../schemas/ToDoSchema')

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoSchema.find()
    res.send(todo)
}

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body

    ToDoSchema.create({ text })
        .then((data) => {
            console.log("Added the task Successfuly!");
            console.log(data);
            res.send(data)
        })

}

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body
    ToDoSchema
        .findByIdAndUpdate(_id, { text })
        .then(() =>
            res.send("Task Successfully Updated!"))
        .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const { _id, text } = req.body
    ToDoSchema
        .findByIdAndDelete(_id)
        .then(() =>
            res.send("Task Successfully Deleted!"))
        .catch((err) => console.log(err))

}