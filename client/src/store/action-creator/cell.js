export const CellsActions = {
    CELL_CROSS: 'CELL_CROSS',
    CELL_NOUGHT: 'CELL_NOUGHT',
    CELL_INIT: 'CELL_INIT',
    CELL_DELETE: 'CELL_DELETE',
}

export const changeCell = (toCross, toNought, key) => {
    return (dispatch) => {
        if(toCross){
            dispatch({type: CellsActions.CELL_CROSS,payload: key})
        }
        if(toNought){
            dispatch({type: CellsActions.CELL_NOUGHT,payload: key})
        }
    }
}
export const restartGame = () => {
    return(dispatch) => {
        dispatch({type: CellsActions.CELL_DELETE})
    }
}
