import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Amelia from './components/Amelia/Amelia'

function App() {
  return (
    <div className="wrapper">
      <h1>AKJ</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Amelia />
          </Route>
          <Route path="/">
            <Karoline />
          </Route>
          <Route path="/">
            <Julia />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
