export function checkIfWin(cells) {
    const possibleWins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    const crosses = cells.filter(cell => cell.isCross === true).map(cell => cell.key)
    const noughts = cells.filter(cell => cell.isNought === true).map(cell => cell.key)
    const crossWin = possibleWins.some(winArr => {return includesArray(crosses,winArr)})
    const noughtWin = possibleWins.some(winArr => {return includesArray(noughts,winArr)})
    let tie = false
    if(crosses.length+noughts.length===9){
        tie = true
    }
    return [crossWin, noughtWin,tie]

}

function includesArray(arr1, arr2){
    return arr2.every(element => {return arr1.includes(element)})
}