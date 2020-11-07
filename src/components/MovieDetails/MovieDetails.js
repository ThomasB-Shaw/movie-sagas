import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieDetails extends Component {
  // Renders the entire app on the DOM

  returnToGallery = () => {
      this.props.history.push('/');
  }

  render() {
    return (
      <div className="MovieDetails">
          <h1>DETAILS</h1>
          <button onClick={this.returnToGallery}>Return to Gallery</button>
          {/* <h3>{this.props.reduxState.thisMovie.title}</h3> */}
          {/* <img src={this.props.reduxState.thisMovie.poster} alt={this.props.reduxState.thisMovie.title}/> */}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieDetails);