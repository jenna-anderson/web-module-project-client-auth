import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link> 
          <Link to="/protected">Friends List</Link>
        </nav>
      </div>

      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
