import { Button } from '@material-ui/core';
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
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieDetails);