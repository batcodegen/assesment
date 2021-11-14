import React, {useEffect, useState} from 'react';
import {
  AppState,
  AppStateStatus,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSessionStore} from '../../reducers';

const Home = () => {
  const sessionStatus = useSessionStore();
  const dispatch = useDispatch();

  useEffect(() => {
    let event = AppState.addEventListener('change', handleChange);
    return () => {
      event.remove();
    };
  }, []);

  const handleChange = (newState: AppStateStatus) => {
    // if (newState === "active") {
    console.log('state0000', newState);
    // }
  };
  console.log('state0000', sessionStatus);

  const onTogglePressed = () => {
    dispatch({
      type: 'UPDATE_SESSION',
      payload: !sessionStatus?.isSessionActive,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.sessionText}>SESSION</Text>
      {sessionStatus?.isSessionActive ? (
        <Text style={styles.sessionActive}>{'ACTIVE'}</Text>
      ) : (
        <Text style={styles.sessionInactive}>{'INACTIVE'}</Text>
      )}
      <Button title={'TOGGLE SESSION'} onPress={onTogglePressed} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  sessionText: {fontSize: 24, color: 'black'},
  sessionActive: {fontSize: 18, color: 'green', marginVertical: 15},
  sessionInactive: {fontSize: 18, color: 'red', marginVertical: 15},
});
