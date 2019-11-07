import React from 'react';
import axios from 'axios';

const getSignInInfo = async (props, e) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:5000/user/signin", {
            email: e.target.email.value,
            password: e.target.password.value
        });
        props.setMsg(res.data.msg)
        localStorage.setItem('token', res.data.token);
    } catch(err) {
        props.setMsg('There is something wrong. Try again...');
    }
}
const SignIn = (props) => (
    <div>
        <h2>Sign In</h2>
        <p>{ props.msg || "Please sign in to continue" }</p>
        <form 
            onSubmit={ e => { 
                getSignInInfo(props, e); 
                e.target.reset(); 
            }
        }>
            <input type="email" name="email" placeholder="Email" required/><br/>
            <input type="password" name="password" placeholder="Password" required/><br/>
            <button>Sign In</button>
        </form>
    </div>
)

export default SignIn;