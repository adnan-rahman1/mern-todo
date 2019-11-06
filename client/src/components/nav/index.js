import React from 'react';
import Header from "../header";
import { NavLink } from 'react-router-dom';

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
                    <li><NavLink exact to="/" activeStyle={{ fontWeight: "bold", color: "blue" }}>Home</NavLink></li>
                    <li><NavLink to="/todo" activeStyle={{ fontWeight: "bold", color: "blue" }}>Todo</NavLink></li>
                    <li><NavLink to="/profile" activeStyle={{ fontWeight: "bold", color: "blue" }}>Profile</NavLink></li>
                    <li><NavLink to="/signin" activeStyle={{ fontWeight: "bold", color: "blue" }}>Sign In</NavLink></li>
                    <li><NavLink to="/signup" activeStyle={{ fontWeight: "bold", color: "blue" }}>Sign Up</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;