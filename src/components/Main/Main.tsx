import React  from 'react';
import s from './Main.module.scss';
import ReactTypingEffect from "react-typing-effect";
import Particles from "react-tsparticles";


const Fade = require('react-reveal/Fade')

const particlesOptions = {
    particles: {
        color: {
            value: 'blue',
        },
        links: {
            color: '#dc965a',
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            enable: true,
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 1000,
            },
            value: 150,
        },
        opacity: {
            value: 0.7,
        },
        shape: {
            type: 'circle',
        },
    },
    fullScreen: {
        enable: false
    }
}

export default function Main() {

    return (
        <div className={s.mainBlock} id={'main'} >
            <Particles className={s.particles} params={particlesOptions}/>
            <div className={s.container}>
                <Fade left>
                    <div className={s.greeting}>
                        <span>Hi, I'm</span>
                        <span>Kirill<span>Muraviev</span></span>
                        <span> <ReactTypingEffect text={'Front-end Developer'}/></span>
                    </div>
                    </Fade>
                        <div className={s.photo}>
                            <div className={s.image}>
                            </div>
                        </div>

            </div>
        </div>
    );
};


