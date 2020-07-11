import React from 'react';

import Login from './containers/login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './containers/Friends';

import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends">Protected Page</Link>
            </li>
          </ul>
          <Switch>
          <PrivateRoute exact path="/friends" component={Friends}/>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
