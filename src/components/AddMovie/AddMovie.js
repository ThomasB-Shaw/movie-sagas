import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';



class AddMovie extends Component {

    state = {
        title: '',
        poster: '',
        description: '',
        genre_id: 0
    }

    componentDidMount = () => {
        this.getGenres();
    }

    returnToGallery = () => {
        this.props.history.push('/');
    }

    handleChange = (event, typeOfKey) => {
        console.log('There was a change!');
        if(typeOfKey === 'genre_id'){
            this.setState({
                ...this.state,
                [typeOfKey]: Number(event.target.value)
            })
        } else {
        this.setState({
            ...this.state,
            [typeOfKey]: event.target.value
        })}
        console.log(this.state)
    }

    getGenres = () => {
        this.props.dispatch({ type: 'FETCH_GENRES'});
    }

    addMovie = () => {
        this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state});
    }

    submitClick = () => {
        console.log('click');
        if(this.state.title === '' || this.state.poster === '' || this.state.description === '' || this.state.genre_id === 0) {
            swal("Hold Tight!", "Please Fill Out All Input Fields!", "error");
        } else{
            swal("Success!", "Movie Added, Returning to Movie Gallery!", "success");
            this.addMovie();
        }
    }

  render() {
    return (
      <div className="AddMovie">
          <form>
        <button onClick={this.returnToGallery}>CANCEL</button>
            <br/>
        <label htmlFor='title'>Title:  </label>
            <input type='text' name='title' onChange={(event) => this.handleChange(event, 'title')}/>
            <br/>
        <label htmlFor='url'>Poster URL:  </label>
            <input type='text' name='url' onChange={(event) => this.handleChange(event, 'poster')}/>
            <br/>
        <label htmlFor='description'>Description:  </label>
            <input type='text' name='description' onChange={(event) => this.handleChange(event, 'description')}/>
            <br/>
        <label htmlFor='genre'>Choose Genre  </label>
            <select name='genre' onChange={(event) => this.handleChange(event,'genre_id')}>
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