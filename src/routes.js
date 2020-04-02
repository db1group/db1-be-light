import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import RolesAndResponsibilities from './pages/RolesAndResponsibilities';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:roles" component={RolesAndResponsibilities} />
      </Switch>
    </BrowserRouter>
  );
}
