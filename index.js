/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {CinemaProvider} from './src/context/CinemaContext';

const CinemaApp = () => {
  return (
    <CinemaProvider>
      <App />
    </CinemaProvider>
  );
};
AppRegistry.registerComponent(appName, () => CinemaApp);
