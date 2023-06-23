import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import reducer1Slice from "./reducer_1"
import reducer2Slice from "./reducer_2"
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from "redux-persist"

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer1Slice)


export const store = configureStore({
    reducer: combineReducers({
        state_1: persistedReducer,
        state_2: reducer2Slice,
    }),
    devTools: process.env.NODE_ENV == "development",
})

export const persistor = persistStore(store)