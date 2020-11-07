import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js'
import Home from '../Home/Home.js'
import MovieDetails from '../MovieDetails/MovieDetails.jsx'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          {/* Route Collection */}
          <Route exact path='/' component={Home}/>
          <Route exact path='/details' component={MovieDetails}/>
        </Router>
      </div>
    );
  }
}

export default App;
