import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id:1, message:'Hi', likesCount: 22},
    {id:2, message:'Hello', likesCount: 21},
    {id:3, message:'Yo', likesCount: 12},
    {id:3, message:'Yo', likesCount: 12},
    {id:3, message:'Yo', likesCount: 12},
]


let dialogs = [
    {id:1, name:'Ivan'},
    {id:2, name:'Max'},
    {id:3, name:'Olena'},
    {id:4, name:'Petro'},
    {id:5, name:'Ira'},
    {id:6, name:'Andrei'}
]

let messages = [
    {id:1, message:'Hi'},
    {id:2, message:'Hello'},
    {id:3, message:'Yo'},
    {id:3, message:'Yo'},
]



ReactDOM.render(<React.StrictMode><App posts = {posts}   dialogs={dialogs}   messages={messages} /></React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
