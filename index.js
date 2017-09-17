import "babel-polyfill"

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery'


const render = (content) =>{
    ReactDOM.render(
        content,
        document.getElementById('root')
    );
}

const Hello = () => (<h3>Hello</h3>)
render(<Hello/>);

//const url = 'https://api.darksky.net/forecast/4eb02e88a7064c4146c89cdeef7fa452/-36.8617074,174.3050262';
//const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=2bd20fa4d63937bb5855140a22789899';

const url = 'https://demo5794066.mockable.io/testget';
//you can create your own mock with https://www.mockable.io/

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var myInit = { method: 'GET',
               headers: myHeaders
            };

var myRequest = new Request(url, myInit);
fetch(myRequest).then(function(r) {
    return r.json();
  }).then(result => {
      console.log(result);
  });

