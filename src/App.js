import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import './index.css'
import Amelia from './components/Amelia/Amelia'
import Karoline from './components/Karoline/Karoline'
import Julia from './components/Julia/Julia'


function App() {
  return (
    <div className="wrapper">
      <h1>AKJ</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/Amelia">Amelia</Link></li>
            <li><Link to="/Karoline">Karoline</Link></li>
            <li><Link to="/Julia">Julia</Link></li>
          </ul>
        </nav>
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
