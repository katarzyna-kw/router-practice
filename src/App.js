import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Amelia from './components/Amelia/Amelia'
import Karoline from './components/Karoline/Karoline'
import Julia from './components/Julia/Julia'


function App() {
  return (
    <div className="wrapper">
      <h1>AKJ</h1>
      <nav>
        <ul>
          <li><Link to="/Amelia">Amelia</Link></li>
          <li><a href="/Karoline">Karoline</a></li>
          <li><a href="/Julia">Julia</a></li>
        </ul>
      </nav>
      <BrowserRouter>
        <Switch>
          <Route path="/Amelia">
            <Amelia />
          </Route>
          <Route path="/Karoline">
            <Karoline />
          </Route>
          <Route path="/Julia">
            <Julia />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
