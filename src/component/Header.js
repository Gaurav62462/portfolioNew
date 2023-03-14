import React from 'react';
import { Button, Menu } from 'antd';
import { faAddressBook, faFile, faHome, faLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    { link: '#home', iconName: faHome, name: 'Home' },
    { link: '#resume', iconName: faFile, name: 'Resume' },
    { link: '#about', iconName: faAddressBook, name: 'About' },
    { link: '#portfolio', iconName: faLaptop, name: 'Works' },
    { link: '#contact', iconName: faPhone, name: 'Contact me' },
]

const menus = () => {
    return (menuItems || []).map((menu, key) => {
        return (
            <li key={key}><Button style={{ color: 'white' }} type="link" href={menu.link}>{menu.name}</Button></li>
        )
    })
}
const Header = () => {
    return (
        <Menu>
            <header id='home'>
                <nav className='navbar navbar bg-dark fixed-top scrolling-navbar' id='nav-wrap'>
                    <ul className='nav'>
                        {menus()}
                    </ul>
                </nav>
            </header>
        </Menu>
    )
}

export default Header;