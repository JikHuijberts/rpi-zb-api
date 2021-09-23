import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { HomePage } from './Pages/lander/homepage';
import { Dashboard } from './Pages/Dashboard/dashboard';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { PrivateRoute } from './helpers/privateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact component={HomePage} path="/"/>
        <Route exact component={HomePage} path="/register"/>
        <PrivateRoute exact component={Dashboard} path="/dashboard"/>
      </Switch>
    </div>
  );
}


export default App;
