import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Roles from './pages/Roles';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/db1-be-light/" exact component={Login} />
        <Route path="/db1-be-light/main" component={Main} />
        <Route path="/db1-be-light/roles" component={Roles} />
      </Switch>
    </BrowserRouter>
  );
}
