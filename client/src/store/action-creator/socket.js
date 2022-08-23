export const SocketActions = {
    SOCKET_INIT: 'SOCKET_INIT',
}
export const socketInit = (sessionID, socket) => {
    return (dispatch) => {
        dispatch({type: SocketActions.SOCKET_INIT, payload:{sessionID, socket}})
    }
}