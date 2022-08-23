import React from 'react';
import cross from "../assets/cross.png"
import nought from "../assets/nought.png"
import nothing from "../assets/epmty.png"
import "../styles/cell.scss"



const Cell = ({isCross, isNought, keyCell, func}) => {
    if(isCross){
        return (

            <div onClick={(e) => func()} key={keyCell} className="cell">
                <img src={cross} alt="Cross"/>
            </div>
        )
    }
    if(isNought){
        return (
            <div onClick={() => func()} key={keyCell} className="cell">
                <img src={nought} alt="Nought"/>
            </div>
        )
    }
    return (
        <div onClick={() => func()} key={keyCell} className="cell">
            <img src={nothing} alt="nothing"/>
        </div>
    );
};

export default Cell;