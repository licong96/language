import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;