import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";






const Message = (props) =>{
    return <div>
        <div className={s.dialogs}>{props.message}</div>

    </div>
}




export default Message;
