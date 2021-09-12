import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes} from "../routes";
import {publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../Utils/consts";


function AppRouter() {
    const isAuth = false
    return (
        <Switch>
            {
                isAuth && authRoutes.map(({path, component}, index) => (
                    <Route
                        path={path}
                        component={component}
                        exact
                        key={index}
                    />
                ))
            }
            {
                publicRoutes.map(({path, component}, index) => (
                    <Route
                        path={path}
                        component={component}
                        exact
                        key={index}
                    />
                ))
            }
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;
