import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TAppState = boolean;

export interface IAppState {
  loading: boolean;
}

const initialState: IAppState = {
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, {payload}: PayloadAction<boolean>) {
      state.loading = payload;
    },
  },
});

export const {setLoading} = appSlice.actions;

export default appSlice.reducer;
