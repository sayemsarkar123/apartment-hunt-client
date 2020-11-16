import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import About from './components/Home/Pages/About/About';
import Concrens from './components/Home/Pages/Concrens/Concrens';
import Contact from './components/Home/Pages/Contact/Contact';
import Event from './components/Home/Pages/Event/Event';
import NotFound from './components/Home/Pages/NotFound/NotFound';
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
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
              <Dashboard />
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/concerns">
              <Concrens />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/event">
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
