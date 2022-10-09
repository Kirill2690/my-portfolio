import React from 'react'
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill"
import {skillsData} from "../../common/data/skills";
import {Title} from "../../common/components/title/Title";


export default function Skills() {
    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={s.skillsContainer}>
              <Title text={'Skills'}/>
                <div className={s.skills}>
                    {skillsData.map(s =>
                        <Skill key={s.id}
                               id={s.id}
                               title={s.title}
                               description={s.description}
                               backgroundImage={s.backgroundImage}
                        />
                    )}



                </div>
            </div>
        </div>
    );
}