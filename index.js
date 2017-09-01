import "babel-polyfill"

import React from 'react';
import ReactDOM from 'react-dom';

var myInit = { method: 'GET',
               mode: 'no-cors' };

const render = (content) =>{
    ReactDOM.render(
        content,
        document.getElementById('root')
    );
}

const Hello = () => (<h3>Hello</h3>)
render(<Hello/>);

fetch('https://api.darksky.net/forecast/4eb02e88a7064c4146c89cdeef7fa452/-36.8617074,174.3050262', myInit).then((response) => {
     console.log(JSON.stringify(response));
})

