const router = require('express').Router();
const auth = require('../middleware/auth');


// CONTROLLERS
const createTodoController = require('../../controllers/todo-controller/createTodo.controller');
const getAllTodoController = require('../../controllers/todo-controller/getAllTodo.controller');
// CREATE TODO
router.post('/create', createTodoController);
router.get("/readall", getAllTodoController);



module.exports = router;