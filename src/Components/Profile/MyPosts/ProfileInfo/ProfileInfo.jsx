import React from "react";
import s from './ProfileInfo.module.css'




const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.mysmartgroup.co.uk/wp-content/uploads/2017/04/header-bg-test.png'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}



export default ProfileInfo;
