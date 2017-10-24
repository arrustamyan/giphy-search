/**
 * this is a simple app to play around with webpack builder and preact library
 * try out:
 *
 * + simple app
 * + preact-router
 * + server side rendering
 * + redux
 * + production configuration
 * + source maps
 * + eslint
 * - redux async
 * - service worker
 * - .editorconfig
 * - application shell
 */
import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import { createStore } from 'redux';
import Router from 'preact-router';

import App from './components/app';
import appReducer from './reducers';

import './index.css';

let store = createStore(appReducer);

render((
    <Provider store={store}>
        <Router>
            <App path="/" />
        </Router>
    </Provider>
), document.body);
