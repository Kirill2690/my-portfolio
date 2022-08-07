import React from 'react'
import s from './Footer.module.css'

import classes from "../../common/Container.module.css";


export default function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${classes.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Kirill Muraviev</h2>
                <div className={s.socialContainer}>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                </div>

                <span className={s.footerText}>© 2012 All Rights Reserved.</span>

            </div>
        </div>
    );
}