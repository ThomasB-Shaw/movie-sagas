import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGallery extends Component {
  // Renders the entire app on the DOM

    movieClick = () => {
        // console.log('You Selected', this.props.movie.title);
        this.props.history.push('/details');
        this.props.dispatch({ type: 'FETCH_THAT_MOVIE'});
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