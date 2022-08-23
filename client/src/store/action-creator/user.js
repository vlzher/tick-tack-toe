
export const UserActions = {
    USER_INIT: "USER_INIT"
}

export const initUser = (username, isCross, isNought) => {
    return (dispatch) => {
        dispatch({type: UserActions.USER_INIT,payload: {username, isCross, isNought}})
    }
}