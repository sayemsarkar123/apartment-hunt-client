import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';

export const LoginContext = createContext();

const App = () => {
  const [user, setUser] = useState({});
  return (
    <LoginContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/notFount">

          </Route>
          <Route path="*">

          </Route>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
