import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
    users: userReducer
})

const thunkMiddleWare = thunk

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) =>
    {
        const middlewares = getDefaultMiddleWare()
        middlewares.push(thunkMiddleWare)
        return middlewares
    }
})

export type AppDispatch = typeof store.dispatch
export type StoreState = ReturnType<typeof rootReducer>

export default store;