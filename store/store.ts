import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import newsReducer from  './slices/newsSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        news: newsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;