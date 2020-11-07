import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieDetails extends Component {
  // Renders the entire app on the DOM

  state = {
      main: this.props.reduxState.thatMovie
  }

  returnToGallery = () => {
      this.props.history.push('/');
  }

  render() {
    return (
      <div className="MovieDetails">
          <h1>DETAILS</h1>
          <button onClick={this.returnToGallery}>Return to Gallery</button>

          {this.props.reduxState.thatMovie[0] &&
          <h2>{this.props.reduxState.thatMovie[0].title}</h2>
          }
          {this.props.reduxState.thatMovie[0] &&
          <img src={this.props.reduxState.thatMovie[0].poster} alt={this.props.reduxState.thatMovie[0].title}/>
          }
          {this.props.reduxState.thatMovie[0] &&
          <p>{this.props.reduxState.thatMovie[0].description}</p>
          }
          <h4>Genres</h4>
          <ul>
          {this.props.reduxState.thatMovie.map((info) => {
              return <li key={info.name}>{info.name}</li>
          })}
          </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieDetails);