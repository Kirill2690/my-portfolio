import React from 'react'
import s from './Footer.module.scss'
import {contactsData} from "../../common/data/contacts";


export default function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <div className={s.author}>
                <h2>Kirill Muraviev</h2>
            </div>
                <div className={s.footerContacts}>
                    {contactsData.map(contact =>
                        <a  href={contact.link} target={'_blank'} rel="noopener noreferrer">
                            <img src={contact.logo} className={s.footerItem} alt={'logo'}/>
                        </a>
                    )}
                </div>
                <div className={s.copyright}>© 2022 All Rights Reserved.</div>
            </div>
            </div>



    );
}

