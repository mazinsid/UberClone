/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';

import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearch />
    </>
  );
};

export default App;
