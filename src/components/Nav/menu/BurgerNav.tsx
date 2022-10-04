import React, {useState} from 'react'
import s from './BurgerNav.module.scss';
import {Link} from 'react-scroll';
import {Turn as Hamburger} from 'hamburger-react'


export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link
                    activeClass={s.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={s.active}
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={s.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Contacts</Link>
            </div>
            <div className={s.burgerBtn}>
                <Hamburger color="#4e93e6" size={30} toggled={menuIsOpen} toggle={setMenuIsOpen}/>
            </div>
        </div>
    );
};