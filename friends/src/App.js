import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import axiosWithAuth from './utils/axiosWithAuth'
import axios from 'axios';

function App() {

  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
          <Link to="/login" className="nav-link">Login</Link> 
          <Link to="/protected" className="nav-link">Friends List</Link>
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
