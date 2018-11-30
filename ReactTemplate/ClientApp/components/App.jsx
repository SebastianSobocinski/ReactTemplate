import * as React from 'react';

//router imports
import { Route, Switch } from 'react-router-dom';

//components imports
import Home from './Home';
import Test from './Test';

export class App extends React.Component {

    render() 
    {
        return <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Test} />
        </Switch>
    }
}

export default App;