import React, {useCallback, useEffect, useState} from 'react';
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
import UserInactivity from 'react-native-user-inactivity';

const Home = () => {
  const sessionStatus = useSessionStore();
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(false);

  const INACTIVITY_CHECK_INTERVAL_MS = 600000; // change this to lower the logout time interval

  useEffect(() => {
    let event = AppState.addEventListener('change', handleChange);
    // point 2: logs out user when app is closed and launched 2nd time
    performAutoLogout();
    return () => {
      event.remove();
    };
  }, []);

  const handleChange = (newState: AppStateStatus) => {
    if (newState === 'background' || newState === 'inactive') {
      // start timer once user is in bg or inactive state
      setActive(true);
    }
  };

  const performAutoLogout = useCallback(() => {
    dispatch({type: 'UPDATE_SESSION', payload: false});
  }, []);

  const onTogglePressed = () => {
    dispatch({
      type: 'UPDATE_SESSION',
      payload: !sessionStatus?.isSessionActive,
    });
  };

  return (
    <UserInactivity
      isActive={active}
      timeForInactivity={INACTIVITY_CHECK_INTERVAL_MS}
      onAction={(isActive: boolean) => {
        // if timer exceeds 10min then isActive = false and logout user
        if (!isActive) {
          performAutoLogout();
        }
      }}>
      <View style={styles.container}>
        <Text style={styles.sessionText}>SESSION STATUS</Text>
        {sessionStatus?.isSessionActive ? (
          <Text style={styles.sessionActive}>{'ACTIVE'}</Text>
        ) : (
          <Text style={styles.sessionInactive}>{'INACTIVE'}</Text>
        )}
        <Button title={'TOGGLE SESSION'} onPress={onTogglePressed} />
      </View>
    </UserInactivity>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  sessionText: {fontSize: 24, color: 'black'},
  sessionActive: {fontSize: 18, color: 'green', marginVertical: 15},
  sessionInactive: {fontSize: 18, color: 'red', marginVertical: 15},
});
