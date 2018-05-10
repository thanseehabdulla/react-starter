import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

//import App from 'containers/App/App';
import SYFApp from 'syf/SYFApp/SYFApp';
import SYFAdminApp from 'syf/SYFApp/SYFAdminApp';

import asyncComponent from 'helpers/AsyncFunc';



const PublicRoutes = ({ history, isLoggedIn }) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    {/*<Route
            exact
            path={'/'}
            component={asyncComponent(() => import('syf/containers/custom/Page/signin'))}
          />*/}

                    <Route
                        exact
                        path={'/Failed'}
                        component={asyncComponent(() => import('syf/containers/custom/Page/Failed'))}
                    />
                    <Route
                        exact
                        path={'/404'}
                        component={asyncComponent(() => import('syf/containers/custom/Page/404'))}
                    />
                    <Route
                        exact
                        path={'/500'}
                        component={asyncComponent(() => import('syf/containers/custom/Page/500'))}
                    />
                    <Route
                        exact
                        path={'/signin'}
                        component={asyncComponent(() => import('syf/containers/custom/Page/signin'))}
                    />
                    <Route
                        exact
                        path={'/signup'}
                        component={asyncComponent(() => import('syf/containers/custom/Page/signup'))}
                    />
                    <Route
                        exact
                        path={'/forgotpassword'}
                        component={asyncComponent(() =>
                            import('syf/containers/custom/Page/forgotPassword')
                        )}
                    />
                    <Route
                        exact
                        path={'/resetpassword'}
                        component={asyncComponent(() =>
                            import('syf/containers/custom/Page/resetPassword')
                        )}
                    />



                    {/*<RestrictedRoute
            path="/dashboard"
            component={App}
            isLoggedIn={isLoggedIn}
          />*/}
                    <Route
                        path="/admin"
                        component={SYFAdminApp}
                    />
                    <Route
                        path="/*"
                        component={SYFApp}
                        isLoggedIn={isLoggedIn}
                    />

                    <Redirect
                        from="*"
                        to={'/404'}
                    />
                </Switch>
            </div>
        </ConnectedRouter>
    );
};

export default connect(state => {
    return {
        isLoggedIn: state.auth.get('isLoggedIn')
    };
})(PublicRoutes);
