import React, { Component } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';

class Index extends Component {
    render() {
        return (
            <div>
               <App /> 
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
// export default index;