/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import configureStore from 'AppLevelComponents/Redux/Store/Store';

const store = configureStore()

const reduxRoot= () =>
<Provider store={store} >
    <App />
</Provider>

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => reduxRoot);
