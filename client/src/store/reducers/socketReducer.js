import {SocketActions} from "../action-creator/socket";

export const socketReducer = (state={}, action) => {
    switch (action.type){
        case SocketActions.SOCKET_INIT:
            return action.payload;
        default:
            return state
    }
}