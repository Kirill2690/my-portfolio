import React from 'react';
import s from './Main.module.css';
import classes from './../../common/Container.module.css';

export default function Main() {
    return (
        <div className={s.main}>
            <div className={classes.container}>
                <div className={s.mainText}>
                    <span>Hi There</span>
                    <h1>I'm Kirill Muraviev</h1>
                    <p>Fronted Developher.</p>
                </div>
                <div className={s.mainPhoto}>
<img src=''/>
            </div>
        </div>
        </div>
    );
}