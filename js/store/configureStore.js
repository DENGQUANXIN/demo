"use strict";

import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';
import promise from './promise';

const isDebuggingInChrome = true;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

const config = {
  key: 'root',
  storage: AsyncStorage
}

async function configureStore(onComplete: ?() => void) {
  let reducer = persistCombineReducers(config, reducers);
  const store = createStore(reducer, undefined, compose(applyMiddleware(thunk, logger, promise)));
  let persistor = persistStore(store, null, onComplete());

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}

export default configureStore;