import React, { Component } from 'react';
import {createStore, /* applyMiddleware */ } from 'redux';
import { Provider } from 'react-redux'
// import logger from 'redux-logger';
import indexReducer from './redux/Reducer';
import Routes from './routes';
// import thunk from 'redux-thunk';


let store = createStore(indexReducer);

class Store extends Component {
    render() {
      return (
        <Provider store={store}>
          <Routes/> 
        </Provider>
      )
    }
}

export default Store;
