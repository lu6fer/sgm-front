import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login';

const Routes = () => (
    <div>
        <Route exact path="/login" component={Login} />
    </div>
);

export default Routes;
