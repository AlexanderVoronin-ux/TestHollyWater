import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TAppState = boolean;

interface IContentPayload {
  id: number;
  text: string;
}

interface IAppState {
  loading: boolean;
  content: IContentPayload[];
}

const initialState: IAppState = {
  loading: false,
  content: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, {payload}: PayloadAction<boolean>) {
      state.loading = payload;
    },
    updateContent(state, {payload}: PayloadAction<IContentPayload>) {
      let newArray = [];
      newArray.push(payload);
      state.content = [...state.content, ...newArray];
    },
  },
});

export const {setLoading, updateContent} = appSlice.actions;

export default appSlice.reducer;
