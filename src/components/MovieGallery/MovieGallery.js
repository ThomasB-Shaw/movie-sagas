import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGallery extends Component {
  // Renders the entire app on the DOM

    movieClick = () => {
        console.log('You Selected', this.props.movie.title);
    }

  render() {
    return (
      <div className="Movie">
        <li key={this.props.movie.id}>
            <button onClick={this.movieClick}><img src={this.props.movie.poster} alt={this.props.movie.title}/></button>
            <p>{this.props.movie.title}</p>
        </li>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieGallery);