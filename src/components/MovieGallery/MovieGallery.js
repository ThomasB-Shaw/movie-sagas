import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGallery extends Component {
  // Upon click of movie poster will take user to the details page to display that movies Title, Poster, Description and Genres
  movieClick = () => {
      this.props.history.push('/details');
      this.props.dispatch({ type: 'FETCH_THAT_MOVIE', payload: this.props.movie.id});
  }

  render() {
    return (
      <div className="Movie">
            <button onClick={this.movieClick}><img src={this.props.movie.poster} alt={this.props.movie.title}/></button>
            <p>{this.props.movie.title}</p>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieGallery);