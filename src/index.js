import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_THAT_MOVIE', getThatMovie);
    yield takeEvery('ADD_MOVIE', addMovie);
}

function* fetchMovies () {
    try {
        const moviesResponse = yield Axios.get('/api/movie');
        yield put({type: 'SET_MOVIES', payload: moviesResponse.data})
        } catch(err) {
            console.log('err fetching', err);
        }
}

function* fetchGenres () {
    try {
        const detailsResponse = yield Axios.get('/api/genre');
        yield put({type: 'SET_GENRES', payload: detailsResponse.data})
        } catch(err) {
            console.log('err fetching', err);
        }
}

function* getThatMovie (action) {
    console.log('In That Movie', action.payload)
    try {
        const thatMovieResponse = yield Axios.get(`/api/thatMovie/${action.payload}`);
        yield put({type: 'SET_THAT_MOVIE', payload: thatMovieResponse.data})
        } catch(err) {
            console.log('err fetching', err);
        }
}

function* addMovie(action) {
    console.log(action.payload);
    try {
      yield Axios.post('/api/movie', action.payload)
    } catch (error) {
      console.log('error in post', error);
    }
  }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const thatMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_THAT_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        thatMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
