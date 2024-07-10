import {combineReducers} from '@reduxjs/toolkit';
import appReducer from '../store/reducers/app';

export const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
