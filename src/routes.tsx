import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Roles from './pages/Roles';
import MyData from './pages/MyData';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          render={() => <Redirect to={process.env.PUBLIC_URL + '/login'} />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/login`}
          exact
          component={Login}
        />
        <Route path={`${process.env.PUBLIC_URL}/home`} component={MyData} />
        <Route path={`${process.env.PUBLIC_URL}/roles`} component={Roles} />
      </Switch>
    </BrowserRouter>
  );
}
