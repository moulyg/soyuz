import React from 'react';
import {render} from 'react-dom';
import storage from 'electron-storage';
import { Provider } from 'react-redux';

import store from './store';

import Home from './container/home.js';

let mainElement = document.getElementById('main');
storage.set('connection', {
    connections: [
        {
            name: "Group 1",
            type: "GROUP",
            uuid: "0001010101"
        },
        {
            name: "Group 2",
            type: "GROUP",
            uuid: "0001010102",
            children: [
                {
                    name: "Connection 21",
                    type: "CONNECTION",
                    "ip": "127.0.0.1",
                    "username": "git",
                    "password": "gituser",
                    uuid: "0001010103"
                },
                {
                    name: "Connection 22",
                    type: "CONNECTION",
                    "ip": "127.0.0.1",
                    "username": "git",
                    "password": "gituser",
                    uuid: "0001010444"
                }
            ]
        },
        {
            name: "Group 2",
            type: "GROUP",
            uuid: "0001010104"
        }
    ]
}, (err) => {
    if (err) {
        console.error(err)
    }
});


render(
    <Provider store={store}>
        <Home />
    </Provider>,
    mainElement
);