import React from 'react'
import s from './Contacts.module.css'

import classes from "../../common/Container.module.css";


export default function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${classes.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.formContainer}>
                    <input type='text' placeholder='Name'/>
                    <input type='text' placeholder='Email'/>
                    <textarea placeholder='Your message'></textarea>
                </form>
                <button className={s.button}>Send</button>





            </div>
        </div>
    );
}