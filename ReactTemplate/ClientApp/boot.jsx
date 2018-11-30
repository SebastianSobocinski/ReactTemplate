import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

//css import
import './css/site.scss';

function renderApp()
{
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
    ReactDOM.render(<App />,document.getElementById('root'));

}
renderApp();