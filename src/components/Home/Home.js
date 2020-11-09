import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css'
import MovieGallery from '../MovieGallery/MovieGallery.js'

class Home extends Component {
  // On Page load will get all movies from database and Display them on the DOM
  componentDidMount = () => {
      this.getMovies();
  }
  // Dispatch to SAGA to get Movie Data from Database
  getMovies = () => {
    this.props.dispatch({ type: 'FETCH_MOVIES'});
  }
  // Navigates user to the AddMovie Page
  addClick = () => {
      this.props.history.push('/addMovie');
  }

  render() {
    return (
      <div className="Home">
          <ul>
              {this.props.reduxState.movies.map((movie) => {
                  return <li className='movieGalleryItem' key={movie.id}><MovieGallery movie={movie} history={this.props.history}/></li>
              })}
          </ul>
        <button id='addBtn'onClick={this.addClick}>ADD NEW MOVIE</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Home);