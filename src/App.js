import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Card from './components/Cards';
import AddCard from './components/AddCard';
import NewGame from './components/NewGame';


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/addgame' component={NewGame} />
      </Switch>  
    </div>    
  </Router>
);

export default App;
