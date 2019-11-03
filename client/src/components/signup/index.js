import React from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "Please sign up before you continue",
            duplicateUser: false,
            redirect: false,
        }
    }

    userRegistered = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/user/signup", {
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                email: e.target.email.value,
                password: e.target.password.value,
            });
            if(!res.data.duplicateUser) {
                this.setState({ redirect: true });
            }
            this.setState({ msg: res.data.msg })
        } catch (err) {
            this.setState({ msg: err })
        }
    }

    render() {
        return (
            <div>
                {   
                    this.state.redirect && <Redirect to={{ pathname: "/signin", msg: this.state.msg }} /> 
                }

                <h2>Sign Up</h2>
                <p>{ this.state.redirect || this.state.msg  }</p>
                <form onSubmit={e => this.userRegistered(e)}>
                    <input type="text" name="firstName" placeholder="First Name" required/><br/>
                    <input type="text" name="lastName" placeholder="Last Name" required/><br/>
                    <input type="email" name="email" placeholder="Email" required/><br/>
                    <input type="password" name="password" placeholder="Password" required/><br/>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;