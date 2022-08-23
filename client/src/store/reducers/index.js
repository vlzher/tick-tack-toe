import {combineReducers} from 'redux'
import {cellReducer} from "./cellReducer";
import {userReducer} from "./userReducer";
import {socketReducer} from "./socketReducer";
export const rootReducer = combineReducers({
    cells: cellReducer,
    user: userReducer,
    socket: socketReducer,
})