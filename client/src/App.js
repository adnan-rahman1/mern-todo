import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';


// USER DEFINED COMPONENTS
import Nav from "./components/nav";
import Home from "./components/home";
import Todo from "./components/todo";
import UserProfile from "./components/user/profile";
import SignIn from './components/signin';
import SignUp from './components/signup';
// END

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      todos: [],
    }
  }

  componentDidMount = async () => {
        let todos = await axios.get("http://localhost:5000/todo/readall");
        this.setState({ ...todos.data });
  }

  allTodos = (todos) => {
    this.setState({ ...todos });
  }

  render() {
    return (
      <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={() => <Home todos={this.state.todos}/> } />
            <Route path="/todo" component={() => <Todo todos={this.state.todos} getTodos={this.allTodos} isLoggedIn={this.state.isLoggedIn} /> }/>
            <Route path="/profile" component={() => <UserProfile isLoggedIn={this.state.isLoggedIn} /> } />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
