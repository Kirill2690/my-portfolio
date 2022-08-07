import s from './Skill.module.css'

type SlillsType = {
    title: string,
    description: string
}

export default function Skill(props: SlillsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
                <h3>{props.title}</h3>
                <span className={s.description}>
        {props.description}
             </span>
            </div>


    )
        ;
}