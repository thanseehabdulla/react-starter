import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {connect} from 'react-redux';

import App from './component/container/App';
import asyncComponent from './helpers/AsyncFunc';


const PublicRoutes = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Switch>


                    <Route
                        path="/*"
                        component={App}
                    />


                </Switch>
            </div>
        </ConnectedRouter>
    );
};

export default connect(
)(PublicRoutes);
