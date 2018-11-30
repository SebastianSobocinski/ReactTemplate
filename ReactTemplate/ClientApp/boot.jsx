import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

//css import
import './css/site.scss';

function renderApp()
{
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('root'));

}
renderApp();