import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            edit: false,
            currentItemEditId: "",
            currentEditItem: "",
        }
    }
    componentDidMount = async () => {
        let todos = await axios.get("http://localhost:5000/todo/readall");
        this.setState({ ...todos.data });
    }

    getTodoInfo = async (e) => {
        e.preventDefault();
        try {
            let res = "";
            if (!this.state.edit){
                res = await axios.post("http://localhost:5000/todo/create/", {
                    title: e.target.todo.value
                });
            }
            else {
                res = await axios.put(`http://localhost:5000/todo/${this.state.currentItemEditId}`, {
                    title: e.target.todo.value
                });
            }
            this.setState({ ...res.data, edit: false, currentItemEditId: "" });
        } catch (err) {
            console.log(err);
        }
    }

    editTodo = (currentTodo) => {
        this.setState({ 
            edit: true, 
            currentItemEditId: currentTodo._id,
            currentEditItem: currentTodo.title,
        });
    }

    deleteTodo = async (e) => {
        try {
            const res = await axios.delete(`http://localhost:5000/todo/${e.target.value}`);
            this.setState({ ...res.data });
        } catch (err) {
            console.log(err);
        }
    }
    
    render() {
        const { todos } = this.state;
        return (
            <div>
                { this.props.isLoggedIn ? <h2>Welcome to Home</h2> : <Redirect to="/signin" /> }
                <h1>{ this.state.edit ? "Edit Todo" : "Create Todo" }</h1>
                <form onSubmit={e => { this.getTodoInfo(e); e.target.reset(); }}>
                    <input type="text" name="todo" placeholder="Enter todo" required />
                    { this.state.edit ? <button>Edit</button> : <button>Add</button> }
                </form>
                <ol>
                    {
                       todos.map(todo => (
                           <li key={todo._id}>
                                { todo.title }&nbsp;
                                <button onClick={e => this.editTodo(todo)}>Edit</button>&nbsp;
                                <button onClick={this.deleteTodo} value={todo._id}>x</button>
                            </li>
                       )) 
                    }
                </ol>
                { this.state.edit && <p>{`Edit "${this.state.currentEditItem}" To`}</p> }
            </div>
        )
    }

}
export default Home;