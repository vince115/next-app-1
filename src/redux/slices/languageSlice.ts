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
<<<<<<< HEAD

// API URL 對照表
const apiUrlMap: { [key: string]: string } = {
  'en' : 'https://api.jsonstorage.net/v1/json/7ea283c6-ccff-43ac-bab8-bca3e6ea94a9/d68af286-9d57-4e64-8c67-c854cf464cad',
  'zh-tw' : 'https://api.jsonstorage.net/v1/json/7ea283c6-ccff-43ac-bab8-bca3e6ea94a9/d9b98e16-9a61-4f36-a3b8-2ea224cdf724'
};
=======
  
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
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
<<<<<<< HEAD
      const apiUrl = apiUrlMap[language];
      if (!apiUrl) {
        throw new Error(`No API URL found for language: ${language}`);
      }
  
      //const response = await axios.get(apiUrl);

=======
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
      dispatch(setTranslations(response.data));
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  };
export default languageSlice.reducer;