import React from 'react';

const SignIn = (props) => (
    <div>
        <h2>Sign In</h2>
        <p>{ props.location.msg || "Please sign in before you continue" }</p>
        <form>
            <input type="email" name="email" placeholder="Email" required/><br/>
            <input type="password" name="password" placeholder="Password" required/><br/>
            <button>Sign In</button>
        </form>
    </div>
);

export default SignIn;