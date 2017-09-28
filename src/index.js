import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home'
import '../src/components/slider/image-slider.css'
// import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <Home />
        </Provider>
    </HashRouter>
    , document.getElementById('root'));
// registerServiceWorker();
