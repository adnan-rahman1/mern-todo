import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// USER DEFINED COMPONENTS
import Nav from "./components/nav";
import Home from "./components/home";
import UserProfile from "./components/user/profile";
import SignIn from './components/signin';
import SignUp from './components/signup';
// END

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  
  render() {
    return (
      <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={() => <Home isLoggedIn={this.state.isLoggedIn} /> }/>
            <Route path="/profile" component={() => <UserProfile isLoggedIn={this.state.isLoggedIn} /> } />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
