import s from './Work.module.css'
import React from "react";

type WorksType = {
    title: string,
    description: string
}

export default function Work(props: WorksType) {
    return (
        <div className={s.work}>
            <div className={s.img_container}>
                <a href='' className={s.link}>Look</a>
            </div>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>
        {props.description}
             </span>
            </div>


    )
        ;
}