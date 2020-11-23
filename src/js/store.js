/* eslint-disable */
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { createPromise } from 'redux-promise-middleware';

import reducer from "./reducers";

const promise = createPromise({ types: { fulfilled: 'success' } });
const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
const middleware = applyMiddleware(promise, reduxImmutableStateInvariant, thunk, createLogger());

export default createStore(reducer, middleware);
