import s from './Skill.module.css'
import React from "react";

type SlillsType = {
    id: string
    title: string
    description: string
    backgroundImage: string
}

export const Skill:React.FC<SlillsType>= ({title,description,backgroundImage})=>{
    return (
        <div className={s.skill}>
            <div className={s.icon} style={{backgroundImage}}></div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>
        {description}
             </span>
        </div>


    )
        ;
}