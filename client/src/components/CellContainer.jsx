import React, {useEffect, useRef} from 'react';
import "../styles/cellContainer.scss"
import Cell from "./Cell";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
import {useParams} from 'react-router-dom'
import {changeCellWS} from "../functions/changeCellWS";
const CellContainer = () => {
    const cells = useSelector(state => state.cells);
    const user = useSelector(state => state.user);
    const socket = useSelector(state => state.socket);

    const {changeCell,socketInit,restartGame} = useActions();
    const params = useParams()
    useEffect(() => {
        if(user.username){
            const socket = new WebSocket('ws://localhost:5000/')
            socket.onopen = () => {
                socket.send(JSON.stringify({
                    id:params.id,
                    username: user.username,
                    method: "connection"
                }))
            }
            socketInit(params.id,socket)
            socket.onmessage = (e) => {
                let msg = JSON.parse(e.data)
                switch(msg.method){
                    case "connection":
                        console.log(`User ${msg.username} has connected`)
                        break
                    case "changeCell":
                        changeCell(msg.isCross,msg.isNought, msg.key)
                        break
                    case "restartGame":
                        restartGame()
                        break

                }
            }
        }
    },[user.username])

    return (
        <div className="body">
            <div className="cell-container">
                {cells.cells.map((cell) => <Cell func={()=>changeCell(changeCellWS(user.isCross, user.isNought,cell.key, params.id,socket.socket))} isCross={cell.isCross} isNought={cell.isNought} key={cell.key} keyCell={cell.key}/>)}
            </div>
        </div>
    )

}
export default CellContainer;



