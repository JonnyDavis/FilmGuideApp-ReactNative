import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Navigator from './src/navigator';
import filmsReducer from './src/store/films';

const reducers = combineReducers({
  films: filmsReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
