import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import UserRegister from './components/UserRegister';
import MyProfile from './components/MyProfile';
import UserLogin from './components/UserLogin';
import React from 'react';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/register" component={UserRegister} />
            <Route path="/login" component={UserLogin} />
            <Route path="/profile" component={MyProfile}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
