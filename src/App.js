import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar'
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <NavBar />
                        <Route exact path='/nav' component={ NavBar } />
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;