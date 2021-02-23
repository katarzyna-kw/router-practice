import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Amelia from './components/Amelia/Amelia'
import Karoline from './components/Karoline/Karoline'
import Julia from './components/Julia/Julia'


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
