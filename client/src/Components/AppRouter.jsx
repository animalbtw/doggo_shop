import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {SHOP_ROUTE} from "../Utils/consts";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

function AppRouter() {
  const {user} = React.useContext(Context);
  console.log(user)
  return (
    <Switch>
      {
        user.isAuth && authRoutes.map(({path, component}) =>
          <Route path={path} component={component} exact key={path}/>
        )
      }
      {
        publicRoutes.map(({path, component}) =>
          <Route path={path} component={component} exact key={path}/>
        )
      }
      <Redirect to={SHOP_ROUTE}/>
    </Switch>
  )
}

export default AppRouter