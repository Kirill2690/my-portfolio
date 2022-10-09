import React from 'react';
import s from './Main.module.scss';
import ReactTypingEffect from "react-typing-effect";

export default function Main() {
    return (
        <div  className={s.mainBlock} id={'main'}>
            <div className={s.container}>
                    <div className={s.greeting}>
                        <span>Hi, I'm</span>
                        <span>Kirill<span>Muraviev</span></span>
                        <span> <ReactTypingEffect text={'Front-end Developer'}/></span>
                    </div>
                        <div className={s.photo}>
                            <div className={s.image}>
                            </div>
                        </div>

            </div>
        </div>
    );
};
