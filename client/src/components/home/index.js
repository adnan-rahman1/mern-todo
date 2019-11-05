import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';




class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }
    componentDidMount = async () => {
        let todos = await axios.get("http://localhost:5000/todo/readall");
        this.setState({ ...todos.data });
    }

    getTodoInfo = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/todo/create/", {
                title: e.target.todo.value
            });
            // e.target.reset();
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
                <h1>Todo</h1>
                <form onSubmit={e => { this.getTodoInfo(e); e.target.reset(); }}>
                    <input type="text" name="todo" placeholder="Enter todo" required />
                    <button>Add</button>
                </form>
                <ol>
                    {
                       todos.map(todo => (
                           <li key={todo._id}>{ todo.title }&nbsp;<button onClick={e => console.log(e.target.value)} value={todo._id}>x</button></li>
                       )) 
                    }
                </ol>
                
            </div>
        )
    }

}
export default Home;