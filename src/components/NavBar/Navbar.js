import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>Navbar </h1>
                <h1>Hello <Link to="/nav">LInk</Link></h1>
            </div>
        );
    }
}

export default Navbar