import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';

// Initialize Firebase
 firebase.initializeApp ({
    apiKey: "AIzaSyAzOHheguFXoCuXIPtx8UiheNw8GuXxRF0",
    authDomain: "react-todo-app-2a191.firebaseapp.com",
    databaseURL: "https://react-todo-app-2a191.firebaseio.com",
    storageBucket: "react-todo-app-2a191.appspot.com",
    messagingSenderId: "1038030051370"
  });
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
