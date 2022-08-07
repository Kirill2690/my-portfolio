import React from 'react'
import s from './../Works/Works.module.css'

import classes from "../../common/Container.module.css";
import Work from "./Work/Work";


export default function Works() {
    return (
        <div className={s.worksBlock}>
            <div className={`${classes.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <Work title={'Social network'} description={'brief description of the project'}/>
                    <Work title={'Todolist'} description={'brief description of the project'}/>



                </div>
            </div>
        </div>
    );
}