import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {

    returnToGallery = () => {
        this.props.history.push('/');
    }

  render() {
    return (
      <div className="AddMovie">
        <button onClick={this.returnToGallery}>CANCEL</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);