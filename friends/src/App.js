import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link> 
        </nav>
      </div>

      <Switch>
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
