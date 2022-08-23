import {rootReducer} from "./reducers";
import{configureStore} from '@reduxjs/toolkit'
export const store = configureStore({reducer:rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
})});