import React, {useState} from 'react';
import CustomInput from "./CustomInput";
import Modal from "./Modal";
import CustomOptionMenu from "./CustomOptionMenu";
import "../styles/startForm.scss"
import {useActions} from "../hooks/useActions";
import {useParams} from "react-router-dom";
const StartForm = () => {
    const params = useParams();
    const [active, setActive] = useState(true)
    const [username, setUsername] = useState("")
    const [isCross, setCross] = useState(false);
    const [isNought, setNought] = useState(false);
    const [labelText, setLabelText] = useState("")
    const {initUser} = useActions()


    const check = () => {
        if(username.length<4 || username.length>10 || !(isNought || isCross)){
            setLabelText(`Username > 4 and < 10 characters\nOption must be selected`)
            return
        }
        setLabelText(`Share id session ${params.id}`)
        setTimeout(()=>{setActive(false)},2000)
        initUser(username,isCross,isNought)


    }

    return (
        <Modal active={active}>
            <CustomInput placeholder="Enter your username" type="text" onChange={setUsername}/>
            <CustomOptionMenu isCross={isCross} setCross={setCross} isNought={isNought} setNought={setNought}/>
            <div className="bottom-part">
                <label className="label-error">{labelText}</label>
                <button className="button-submit" onClick={check}>ENTER</button>
            </div>
        </Modal>
    );
};

export default StartForm;