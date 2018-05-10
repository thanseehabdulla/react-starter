import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import App from './component/container/App';


import asyncComponent from 'helpers/AsyncFunc';



const PublicRoutes = ({ history, isLoggedIn }) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Switch>


                    {/*<Route*/}
                        {/*exact*/}
                        {/*path={'/Failed'}*/}
                        {/*component={asyncComponent(() => import('syf/containers/custom/Page/Failed'))}*/}
                    {/*/>*/}
                    {/*<Route*/}
                        {/*exact*/}
                        {/*path={'/404'}*/}
                        {/*component={asyncComponent(() => import('syf/containers/custom/Page/404'))}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*exact*/}
                    {/*path={'/500'}*/}
                    {/*component={asyncComponent(() => import('syf/containers/custom/Page/500'))}*/}
                    {/*/>*/}

                    {/*<RestrictedRoute
            path="/dashboard"
            component={App}
            isLoggedIn={isLoggedIn}
          />*/}

                    <Route
                        path="/*"
                        component={App}
                    />

                    {/*<Redirect*/}
                        {/*from="*"*/}
                        {/*to={'/404'}*/}
                    {/*/>*/}
                </Switch>
            </div>
        </ConnectedRouter>
    );
};

export default connect(
)(PublicRoutes);
