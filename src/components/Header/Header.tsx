import React from 'react'

import s from './Header.module.css';
import Nav from "../Nav/Nav";



export default function Header() {
    return (
        <div className={s.header}>
            <Nav/>
        </div>


)
}