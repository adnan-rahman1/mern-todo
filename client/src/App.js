import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


// USER DEFINED COMPONENTS
import Nav from "./components/nav";
import Home from "./components/home";
import UserProfile from "./components/user/profile";
import SignIn from './components/signin';
// END

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <BrowserRouter>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/signin" component={SignIn} />
      </BrowserRouter>
    );
  }
}

export default App;
