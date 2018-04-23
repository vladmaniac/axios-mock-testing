import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
 
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/users').reply(200, {
  users: [
    { id: 1, name: 'John Smith is testing mock apis' }
  ]
});

axios.get('/users')
  .then(function(response) {
    console.log(response.data);
});
