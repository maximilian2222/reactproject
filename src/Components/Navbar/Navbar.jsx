import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile/'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs/'> Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Setting'>Settings</NavLink>
            </div>
            <div className={s.item}>
                < NavLink to='/News'>News</NavLink>

            </div>
        </nav>
    )
}


export default Navbar;
