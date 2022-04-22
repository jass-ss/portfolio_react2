import { createStore, applyMiddleware } from 'redux';
import allReducer from './reducers';
import createSagaMiddleware from '@redux-saga/core';

const sageMiddleware = createSagaMiddleware();
const store = createStore(allReducer, applyMiddleware(sageMiddleware));

export default store;
