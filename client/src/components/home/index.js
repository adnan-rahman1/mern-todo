import React from 'react';
import { Redirect } from 'react-router-dom';


const Home = (props) => (
    <div>
        { props.isLoggedIn ? <h2>Welcome to Home</h2> : <Redirect to="/signin" /> }
    </div>
)
export default Home;