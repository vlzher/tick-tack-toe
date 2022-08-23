import React, {useState} from 'react';
import Modal from "./Modal";
import "../styles/winLossModal.scss"
import {checkIfWin} from "../functions/checkIfWin";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
const WinLossModal = () => {
    const cells = useSelector(state => state.cells);
    const socket = useSelector(state => state.socket)
    const {username, isCross, isNought} = useSelector(state => state.user);
    const [crossWin, noughtWin, tie] = checkIfWin(cells.cells)
    const {restartGame} = useActions();
    let active = false;
    const restart = () => {
        restartGame()
        socket.socket.send(JSON.stringify({method: "restartGame"}))
        active = false;
    }
    const winCondition = (isCross && crossWin) || (isNought && noughtWin);
    const lossCondition = (isCross && noughtWin) || (isNought && crossWin);
    if(winCondition || lossCondition || tie){
        active = true
    }
    let txt;
    if(winCondition){
        txt = "YOU WON"
    }
    if(lossCondition){
        txt = "YOU LOST"
    }
    if(tie){
        txt = "TIE"
    }
    return (
        <Modal active={active}>
            <div className="content">
                <div className="text-area">
                    <div className="text">
                        {txt}
                    </div>
                </div>
                <div className="button-area">
                    <button onClick={()=>{restart()}} className="button2">REMATCH</button>
                </div>
            </div>

        </Modal>
    );
};

export default WinLossModal;