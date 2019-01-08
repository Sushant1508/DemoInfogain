import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app.js';
import configureStore from './redux/store/configureStore';

import './css/mui.min.css';
import './css/style.scss';

const store = configureStore();

render(
    <Provider store={store}>
                    <App />
    </Provider>,
    document.getElementById('app')
);
