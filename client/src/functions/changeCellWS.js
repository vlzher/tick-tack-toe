

export function changeCellWS(isCross, isNought, key, id, socket){

    socket.send(JSON.stringify({
        method: "changeCell",
        id: id,
        isCross: isCross,
        isNought: isNought,
        key: key,
    }))
    return (changeCell) => {
        changeCell(isCross, isNought, key)
    }

}

