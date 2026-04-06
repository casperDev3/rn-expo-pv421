import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage";
import counterReducer from './slices/counterSlice'
import newsReducer from  './slices/newsSlice'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['counter', 'news'],
}

const rootReducer = combineReducers({
    counter: counterReducer,
    news: newsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;