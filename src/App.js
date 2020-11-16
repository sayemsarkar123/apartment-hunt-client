import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import About from './components/Home/Pages/About/About';
import Concrens from './components/Home/Pages/Concrens/Concrens';
import Contact from './components/Home/Pages/Contact/Contact';
import Event from './components/Home/Pages/Event/Event';
import NotFound from './components/Home/Pages/NotFound/NotFound';
import Login from './components/Login/Login/Login';

export const LoginContext = createContext();

const App = () => {
  const [user, setUser] = useState({});
  return (
    <LoginContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
              <Dashboard />
          </Route>
          <Route exact path="/about">
              <About />
          </Route>
          <Route exact path="/concerns">
              <Concrens />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/event">
            <Event />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
