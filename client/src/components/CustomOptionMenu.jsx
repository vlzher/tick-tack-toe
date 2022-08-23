import React, {useEffect, useState} from 'react';
import "../styles/custom-option-menu.scss"
const CustomOptionMenu = ({isNought, setNought, isCross, setCross}) => {

    const nought = () => {
        setNought(true)
        setCross(false)
    }
    const cross = () => {
        setNought(false)
        setCross(true)
    }
    return (
        <div className="menu">
            <button
                onClick={cross}
                className={isCross ? "button cross active" : "button cross"}>

            </button>
            <button onClick={nought}
                    className={isNought ? "button nought active" : "button nought"}>
            </button>
        </div>
    );
};

export default CustomOptionMenu;