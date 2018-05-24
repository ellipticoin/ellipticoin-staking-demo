import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import web3 from "./web3";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
