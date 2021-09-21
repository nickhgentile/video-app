import { combineReducers, configureStore } from '@reduxjs/toolkit';
import alert from './reducers/alert';
import room from './reducers/room';

const reducer = combineReducers({
  alert,
  room
});

const store = configureStore({
  reducer: reducer
});

const Store = () => {
  return {
    store
  };
};

export default Store;
