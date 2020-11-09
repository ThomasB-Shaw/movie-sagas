import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieDetails.css';

class MovieDetails extends Component {
  // Returns user to Gallery Home Page on click of Return to Gallery button
  returnToGallery = () => {
      this.props.history.push('/');
  }

  render() {
    return (
      <div className="MovieDetails">
        {this.props.reduxState.thatMovie[0] &&
        <h2 className='titleDetail'>{this.props.reduxState.thatMovie[0].title}</h2>
        }
        {this.props.reduxState.thatMovie[0] &&
        <img id='imgDetail' src={this.props.reduxState.thatMovie[0].poster} alt={this.props.reduxState.thatMovie[0].title}/>
        }
        {this.props.reduxState.thatMovie[0] &&
        <p id='descriptionDetail'>{this.props.reduxState.thatMovie[0].description}</p>
        }
        <h3 id='genreDetail'>Genres</h3>
        <ul id='listGenreDetail'>
        {this.props.reduxState.thatMovie.map((info) => {
            return <li key={info.name}>{info.name}</li>
        })}
        </ul>
        <button id='returnDetail' onClick={this.returnToGallery}>Return to Gallery</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieDetails);