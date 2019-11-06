import React from 'react';
import axios from 'axios';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "",
        }
    }
    
    getSignInInfo = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/user/signin", {
                email: e.target.email.value,
                password: e.target.password.value
            });
            this.setState({ msg: res.data.msg })
            console.log(res.data);
        } catch(err) {
            this.setState({ msg: 'There is something wrong. Try again...' });
        }
    }

    render() {
        let { msg } = this.state;
        return (
            <div>
                <h2>Sign In</h2>
                <p>{ msg || ( this.props.location.msg || "Please sign in before you continue" ) }</p>
                <form onSubmit={e => { this.getSignInInfo(e); e.target.reset(); }}>
                    <input type="email" name="email" placeholder="Email" required/><br/>
                    <input type="password" name="password" placeholder="Password" required/><br/>
                    <button>Sign In</button>
                </form>
            </div>
        )
    };
}

export default SignIn;