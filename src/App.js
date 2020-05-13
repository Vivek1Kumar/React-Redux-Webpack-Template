import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar'

class App extends Component {
    render() {
        return (
            <div>
                
                <BrowserRouter>
                <NavBar />

                    <Route exact path='/nav' component={ NavBar } />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;