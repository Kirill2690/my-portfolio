import React, {useRef} from 'react'
import s from './Contacts.module.scss'
import {Title} from "../../common/components/title/Title";
import {Button} from "../../common/components/button/Button";
import emailjs from '@emailjs/browser'


const Fade = require('react-reveal/Zoom')


export const Contacts = () => {
    const form = useRef<HTMLFormElement>(null);


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        emailjs.sendForm(
            'service_lg98nsy',
            'template_b7sjcgi',
            form.current || '',
            'Mednwvai4zvRamymU'
        )
            .then((res) => {
                form.current && form.current.reset()
                alert('Your message has been send')
            })
    };
    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <Fade right>
                <div className={s.container}>
                    <Title text={'Contacts'}/>
                    <form onSubmit={sendEmail} id={'contact-form'} className={s.form} ref={form}>
                        <label htmlFor="name">Name:</label>
                        <input name='user_name' placeholder={'Name'} type={'text'}
                               className={s.input} required/>
                        <input name="user_email" placeholder={'E-mail'} type={'text'} className={s.input} required/>
                        <textarea placeholder={'Your message'}
                                  className={s.textarea}/>
                        <Button type="submit" buttonTitle={'Send Me ➢ '}/>
                    </form>
                </div>
            </Fade>
        </div>

    );
}