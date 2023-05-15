import s from './Work.module.css'
import React from "react";

const Zoom = require('react-reveal/Zoom')

type WorksType = {
    title: string,
    description: string
    id: string
    backgroundImage: string
    repoLink: string
    demoLink: string
}

export const Work: React.FC<WorksType> = ({title, description, backgroundImage, demoLink, repoLink}) => {
    return (
        <div className={s.work}>
            <Zoom>
                <div className={s.img_container} style={{backgroundImage}}>
                    <a href={demoLink} className={s.link} target={'_blank'} rel="noopener noreferrer">Look
                        project</a>
                    <a href={repoLink} className={s.link} target={'_blank'} rel="noopener noreferrer">Look
                        code</a>
                </div>
                <div className={s.projectInfo}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.description}>
        {description}
             </span>
                </div>
            </Zoom>


        </div>


    )
        ;
}