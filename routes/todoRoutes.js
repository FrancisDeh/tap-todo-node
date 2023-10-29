const express = require("express")
let todoController = require("../controllers/todoController")

let router = express.Router()


router.get("/", todoController.getAllTodos)
router.get("/:id", todoController.getATodo)
router.post("/",  todoController.addTodo)
// update a todo - 
// delete a todo - with id
module.exports = router