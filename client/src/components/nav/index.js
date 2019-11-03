import React from 'react';
import Header from "../header";
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <nav>
                <Header />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/signin">Sign in</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;