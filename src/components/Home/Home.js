import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css'

class Home extends Component {
  // Renders the entire app on the DOM

  componentDidMount = () => {
      console.log('All Mounted der boss');
      this.getMovies();
  }

  getMovies = () => {
    this.props.dispatch({ type: 'FETCH_MOVIES'});
  }

  logClick = () => {
      this.getMovies();
  }

  render() {
    return (
      <div className="Home">
          <ul>
              {this.props.reduxState.movies.map((movie) => {
                  return <li key={movie.id}>
                      <button><img src={movie.poster} alt={movie.title}/></button>
                      <p>{movie.title}</p>
                  </li>
              })}
          </ul>
        <button onClick={this.logClick}>LOG</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Home);