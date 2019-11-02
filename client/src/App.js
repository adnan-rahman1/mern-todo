import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "Anonymous",
      login: false,
    }
  }
  
  getText = async () => {
    try {
      const res = await axios.get("http://localhost:5000/", {
        headers: { "Authorization": localStorage.getItem('token') ? true : undefined }
      })
      this.setState({
        user: res.data.name,
        login: res.data.login,
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  postUserInfo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/post", {
        username: e.target.username.value,
        password: e.target.password.value,
      });
      localStorage.setItem("token", res.data.token);
      console.log(res.data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { user, login } = this.state;
    return (
      <div className="App">
        <h1>Front End Get Request</h1>
        <button onClick={this.getText}>Get Text</button>

        <h1>Front End Post Request</h1>
        <form onSubmit={e => this.postUserInfo(e)}>
          <input name="username" type="text" placeholder="username"></input>
          <input name="password" type="password" placeholder="password"></input>
          <button type="submit">Send</button>
        </form>

        <h1>Back End</h1>
        <h3>User: { user }</h3>
        <h3>Login: { login ? "true" : "false" }</h3>
      </div>
    );
  }
}

export default App;
