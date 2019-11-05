const Todo = require('../../models/todo/Todo');

module.exports = async (req, res) => {
    try {
        let todos = await Todo.find();
        res.send({
            todos
        });
        
    } catch (err) {
        res.send(err);
    }
}