//src/redux/slices/languageSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import type { ThunkAction } from 'redux-thunk';
import type { RootState } from '@/redux/store';

interface LanguageState {
    currentLanguage: string;
    translations: { [key: string]: any };
  }

// 初始 state
const initialState: LanguageState = {
    currentLanguage: 'en',  // 默認語言
    translations: {}
  };
  
const languageSlice = createSlice({
    name:'language',
    initialState,
    reducers:{
        setLanguage: (state, action: PayloadAction<string>) => {
            state.currentLanguage = action.payload;
          },
        setTranslations: (state, action: PayloadAction<{ [key: string]: any }>) => {
            state.translations = action.payload;
        }
    },
});

export const {setLanguage, setTranslations} = languageSlice.actions;
// 定義 ThunkAction 類型
export type AppThunk = ThunkAction<void, RootState, unknown, any>;

// 異步加載翻譯數據
export const loadTranslations = (language: string) => async (dispatch: any) => {
    try {
      const response = await axios.get(`/languages/${language}/common.json`);
      dispatch(setTranslations(response.data));
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  };
export default languageSlice.reducer;