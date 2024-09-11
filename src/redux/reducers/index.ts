//src/redux/reducers/index.ts
import { combineReducers } from "@reduxjs/toolkit";
import languageSlice from "../slices/languageSlice";

const rootReducer = combineReducers({
    language:languageSlice,
},
)

export default rootReducer