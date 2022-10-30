import React from 'react'
import s from './Contacts.module.scss'
import axios from 'axios';
import {Title} from "../../common/components/title/Title";
import {useForm} from "react-hook-form";
import {Button} from "../../common/components/button/Button";

const Fade = require('react-reveal/Zoom')


interface IFormInputs {
    name: string
    email: string
    message: string
}

export default function Contacts() {
    const {register, formState: {errors}, handleSubmit} = useForm<IFormInputs>();
    const onSubmit = (data: IFormInputs, e: any) => {
        e.preventDefault()
        axios.post('https://gmail-smtp-nodejs-serv.herokuapp.com/sendMessage', {data})
            .then((res) => {
                alert('Your message has been send');
            });
        e.target.reset()
    }
    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <Fade right>
            <div className={s.container}>
                <Title text={'Contacts'}/>
                <form onSubmit={handleSubmit(onSubmit)} id={'contact-form'} className={s.form}>
                    <input {...register('name', {required: true})} placeholder={'Name'} type={'text'}
                           className={s.input}/>
                    {errors.name && <p style={{color: '#fff'}}>Name is required</p>}
                    <input {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })} placeholder={'E-mail'} type={'text'} className={s.input}/>
                    {errors.email && <p style={{color: '#fff'}}>E-mail is required</p>}
                    <textarea {...register('message', {required: true})} placeholder={'Your message'}
                              className={s.textarea}/>
                    <Button type="submit" buttonTitle={'Send Me ➢ '}/>

                </form>

            </div>
            </Fade>
        </div>

    );
}