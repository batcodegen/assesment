import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  AppState,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './js/component/home';
import createReduxStore from './js/store/createReduxStore';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const store = createReduxStore();
  const persistor = persistStore(store);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
