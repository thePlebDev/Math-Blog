import React from 'react';
import { Switch,Route } from 'react-router';

import Home from '../Home'
import Editor from '../Editor';
import RouteError from '../RouteError';


const App =()=>{

    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/edit" exact component={Editor}/>
            <Route component={RouteError}/>
        </Switch>
    )
}


export default App;