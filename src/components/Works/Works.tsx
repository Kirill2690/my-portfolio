import React from 'react'
import s from './../Works/Works.module.css'
import classes from "../../common/Container.module.css";

import {projectsData} from "../../common/data/projects";
import {Title} from "../../common/components/title/Title";
import {Work} from "./Work/Work";


export default function Works() {
    return (
        <div className={s.worksBlock} id={'works'}>
            <div className={`${classes.container} ${s.worksContainer}`}>
                <Title text={'My project'}/>
                <div className={s.works}>
                    {projectsData.map(p =>
                        <Work key={p.id}
                              id={p.id}
                              title={p.title}
                              description={p.description}
                              backgroundImage={p.backgroundImage}
                              repoLink={p.repoLink}
                              demoLink={p.demoLink}
                        />)}


                </div>
            </div>
        </div>
    );
}