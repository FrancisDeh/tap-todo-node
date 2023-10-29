const Todo = require("../models/todoModel")

exports.getAllTodos = async (req, resp) =>  {
    try {
        let tds = await Todo.find()
        return resp.status(200).json(tds)
    } catch (error) {
        return resp.status(500).json({"message": error.message})
    }
}

exports.getATodo = async(req, resp) => {
    try {
        let todo = await Todo.findById(req.params.id)
        return resp.status(200).json(todo)
    } catch (error) {
        return resp.status(404).json({"message": "Could not find todo"})
    }
}

exports.addTodo = async (req, resp) => {
    try {
        let todo = await Todo.create(req.body)
        return resp.status(201).json(todo)
    } catch (error) {
        return resp.status(400).json({"message": error.message})
    }
}