import {UserActions} from "../action-creator/user";

export const userReducer = (state={}, action) => {
    switch (action.type){
        case UserActions.USER_INIT:
            return action.payload;

        default:
            return state
    }
}