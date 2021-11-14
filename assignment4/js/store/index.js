import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {sessionData} from '../reducers/session';

// perist sessiondata using asyncstorage
export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['sessionData'],
};

const BaseReducer = combineReducers({
  sessionData,
});

const AppReducer = (state, action) => {
  return BaseReducer(state, action);
};

export default persistReducer(persistConfig, AppReducer);
