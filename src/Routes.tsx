import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Film from '~/pages/Film';

const routes = [
  {
    component: () => <Redirect to="films/1" />,
    path: '/',
    exact: true,
  },
  {
    component: () => <Film />,
    path: '/films/:filmId',
  },
];

export default function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
