import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import HomeDetails from './components/HomeDetails/HomeDetails/HomeDetails';
import Login from './components/Login/Login/Login';

export const LoginContext = createContext();

const App = () => {
  const [user, setUser] = useState({});
  return (
    <LoginContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <HomeDetails></HomeDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
              <Dashboard></Dashboard>
          </Route>
          <Route path="*">

          </Route>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
