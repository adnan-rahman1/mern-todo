import React from 'react';
import { Redirect } from 'react-router-dom';


const UserProfile = ({ isLoggedIn }) => (
    <div>
        { isLoggedIn ? <h2>Profile</h2> : <Redirect to="/signin" /> }
    </div>
);

export default UserProfile;