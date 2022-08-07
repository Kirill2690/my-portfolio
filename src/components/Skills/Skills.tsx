import React from 'react'
import s from './../Skills/Skills.module.css'
import Skill from "./Skill/Skill"
import classes from "../../common/Container.module.css";


export default function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${classes.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'there will be a text about JS skills'}/>
                    <Skill title={'CSS'} description={'there will be a text about CSS skills'}/>
                    <Skill title={'React'} description={'there will be a text about React skills'}/>
                    <Skill title={'Redux'} description={'there will be a text about Redux skills'}/>



                </div>
            </div>
        </div>
    );
}