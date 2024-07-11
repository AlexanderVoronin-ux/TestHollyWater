import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IContentPayload {
  id: number;
  text: string;
}

interface IAppState {
  loading: boolean;
  content: IContentPayload[];
  chapterNumber: number;
}

const initialState: IAppState = {
  loading: false,
  content: [],
  chapterNumber: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, {payload}: PayloadAction<boolean>) {
      state.loading = payload;
    },
    setChapterNumber(state, {payload}: PayloadAction<number>) {
      state.chapterNumber = payload;
    },
    updateContent(state, {payload}: PayloadAction<IContentPayload>) {
      let newArray = [];
      newArray.push(payload);
      state.content = [...state.content, ...newArray];
    },
  },
});

export const {setLoading, updateContent, setChapterNumber} = appSlice.actions;

export default appSlice.reducer;
