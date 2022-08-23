import React from 'react';
import '../styles/header.scss'
import {useSelector} from "react-redux";
const Header = () => {
    const user = useSelector(state => state.user)
    return (
        <div className="header">
            <div className="username"></div>
            <div className="headerText">TICK TACK TOE</div>
            <div className="username">{user.username}</div>
        </div>
    );
};

export default Header;