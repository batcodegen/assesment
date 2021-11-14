/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './js/navigation/AppNavigator';
import colors from './js/utils/globalcolors';

const App = () => {
  const backgroundStyle = {
    backgroundColor: colors.secondary_light,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.secondary_light}
      />
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
