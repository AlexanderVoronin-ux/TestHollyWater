import {RootState} from '../rootReducer';

export const s_Loading = (state: RootState) => state.app.loading;
export const s_Content = (state: RootState) => state.app.content;
export const s_chapterNumber = (state: RootState) => state.app.chapterNumber;
