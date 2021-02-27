import React from 'react';
import { useParams, useRouteMatch, Route, Switch } from 'react-router-dom';
import Catfish from './Catfish';
import Flounder from './Flounder'


export default function Karoline() {
  const { path } = useRouteMatch();

  return (
    <div className="kWrapper">
    <h2>Karoline</h2>
    <Switch>
    <Route path={`${path}/Catfish`}>
      <Catfish />
    </Route>
    <Route path={`${path}/Flounder`}>
      <Flounder />
    </Route>
  </Switch>
  </div>
  );
}