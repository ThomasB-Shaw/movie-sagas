import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {

    state = {
        title: '',
        url: '',
        description: '',
        genre: Number(0)
    }

    componentDidMount = () => {
        this.getGenres();
    }

    returnToGallery = () => {
        this.props.history.push('/');
    }

    handleChange = (event, typeOfKey) => {
        console.log('There was a change!');
        this.setState({
            ...this.state,
            [typeOfKey]: event.target.value
        })
        console.log(this.state)
    }

    getGenres = () => {
        this.props.dispatch({ type: 'FETCH_GENRES'});
    }

    submitClick = () => {
        console.log('click')
    }

  render() {
    return (
      <div className="AddMovie">
          <form>
        <button onClick={this.returnToGallery}>CANCEL</button>
        <br/>
        <input type='text' onChange={(event) => this.handleChange(event, 'title')}/>
        <br/>
        <input type='text' onChange={(event) => this.handleChange(event, 'url')}/>
        <br/>
        <input type='text' onChange={(event) => this.handleChange(event, 'description')}/>
        <br/>
        <label htmlFor='genre'>Choose Genre  </label>
            <select name='genre' onChange={(event) => this.handleChange(event,'genre')}>
            <option value=''></option>
              {this.props.reduxState.genres.map((genre) => {
                return <option key={genre.id}  value={genre.id}>{genre.name}</option>
              })}
            </select>
            <button onClick={this.submitClick}>SUBMIT</button>
            </form>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);