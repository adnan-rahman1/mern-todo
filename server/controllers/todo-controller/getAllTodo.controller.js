const Todo = require('../../models/todo/Todo');

module.exports = async (req, res) => {
    try {
        let todos = await Todo.find();
        // console.log(req.headers['authorization']);
        res.send({
            todos
        });
        
    } catch (err) {
        res.send(err);
    }
}