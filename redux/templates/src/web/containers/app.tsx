/// <reference path='../typings/tsd.d.ts'/>

import * as React from 'react';

import {
  Store,
  createStore
} from 'redux';

import {
  Provider
} from 'react-redux';

import App from './containers/App';
import { rootReducer } from '../flux/reducers/root';

const initialState = {};

const store: Store = createStore(rootReducer, initialState);

import React from "react-native";
const { StyleSheet, Text, View } = React;

interface Props {
}

export default class App extends React.Component<Props, {}> {
  render() {
    return <Provider store={store}>
      <App />
    </Provider>;
  }
}
