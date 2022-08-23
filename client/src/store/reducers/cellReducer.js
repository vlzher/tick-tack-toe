import {CellsActions} from "../action-creator/cell";

function initCells(){
    const IDs = [0,1,2,3,4,5,6,7,8]
    const cells = []
    IDs.map((key)=>cells.push({isCross: false, isNought: false, key: key}))
    return cells;
}

const initialState = {
    cells: initCells()
}

export const cellReducer = (state= initialState, action) => {
    let newArray;
    switch(action.type){
        case CellsActions.CELL_INIT:
            return {
                ...state,
                cells: action.payload,
            }
        case CellsActions.CELL_CROSS:
            newArray = [...state.cells];
            try {newArray[action.payload].isCross = true;}
            catch(e){}
            return {
                ...state,
                cells: newArray, }
        case CellsActions.CELL_NOUGHT:
            newArray = [...state.cells];
            newArray[action.payload].isNought = true;
            return {
                ...state,
                cells: newArray
            }
        case CellsActions.CELL_DELETE:
            return {
                cells: initCells()
            };

        default:
             return state;
    }
}