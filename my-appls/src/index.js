import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

// var config = {
//     apiKey: "AIzaSyBGflsX38vQ4SVYcsPDXySUmIWZFnbIwao",
//     authDomain: "cmvdb-555bc.firebaseapp.com",
//     databaseURL: "https://cmvdb-555bc.firebaseio.com",
//     projectId: "cmvdb-555bc",
//     storageBucket: "cmvdb-555bc.appspot.com",
//     messagingSenderId: "869787015915"
// };
// firebase.initializeApp(config);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
