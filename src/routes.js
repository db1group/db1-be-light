import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Roles from './pages/Roles';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/db1-be-light/" exact component={Roles} />
      </Switch>
    </BrowserRouter>
  );
}