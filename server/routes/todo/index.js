const router = require('express').Router();
const auth = require('../middleware/auth');


// CONTROLLERS
const createTodoController = require('../../controllers/todo-controller/createTodo.controller');
const getAllTodoController = require('../../controllers/todo-controller/getAllTodo.controller');
const updateTodoController = require('../../controllers/todo-controller/updateTodo.controller');
const deleteSingleTodoController = require('../../controllers/todo-controller/deleteTodo.controller');

// CREATE TODO
router.post('/create', createTodoController);
router.get("/readall", getAllTodoController);
router.delete("/:id", deleteSingleTodoController);
router.put("/:id", updateTodoController);


module.exports = router;