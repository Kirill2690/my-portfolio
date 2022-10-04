import React from 'react'

import s from './Header.module.scss';
import {Nav} from "../Nav/Nav";
import {BurgerNav} from "../Nav/menu/BurgerNav";




export default function Header() {
    return (
        <div className={s.header}>
            <Nav/>
            <BurgerNav/>
        </div>


)
}