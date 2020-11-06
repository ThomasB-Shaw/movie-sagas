import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js'
import Home from '../Home/Home.js'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          {/* Route Collection */}
          <Route exact path='/' component={Home}/>
        </Router>
      </div>
    );
  }
}

export default App;
