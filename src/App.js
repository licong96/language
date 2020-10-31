import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import DetailAudio from './pages/detailAudio';
import DetailImage from './pages/detailImage';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/detailAudio' component={DetailAudio} />
      <Route exact path='/detailImage' component={DetailImage} />
    </Router>
    
  );
}

export default App;
