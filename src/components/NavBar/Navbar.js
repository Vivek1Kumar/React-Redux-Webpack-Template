import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PP  from '../../assets/pp.jpeg';

class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>Navbar </h1>
                <img src={PP}  width='300px' height='300px' />
                <h1>Hello <Link to="/nav">LInk</Link></h1>
            </div>
        );
    }
}

export default Navbar