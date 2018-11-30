import * as React from 'react';

//router imports
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

//components imports
import Home from './Home';
import Test from './Test';

//Redux
import { Provider } from 'react-redux';
import store from '../store';

export class App extends React.Component {

    render() 
    {
        return <Provider store={store} >
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/test" component={Test} />
                </Switch>
            </BrowserRouter>
        </Provider>
    }
}

export default App;