import React from 'react';
import { Button, Menu,Row, Col } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebook, faInstagram, faTwitter, faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faFile, faHome, faLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    {link:'#home', iconName:faHome,name:'Home'},
    {link:'#resume', iconName:faFile,name:'Resume'},
    {link:'#about', iconName:faAddressBook,name:'About'},
    {link:'#portfolio', iconName:faLaptop,name:'Works'},
    {link:'#contact', iconName:faPhone,name:'Contact me'},
]

const  socialMedia = [
    {link:'https://www.facebook.com/gouarv.saini',icon:faFacebook},
    {link:'https://www.instagram.com/gauravkumar5467/',icon:faInstagram},
    {link:'https://twitter.com/Gauravk15740056',icon:faTwitter},
    {link:'https://github.com/Gaurav62462',icon:faGithub},
]

const menus = ()=>{
    return (menuItems || []).map((menu)=>{
        return(
            <li><Button style={{color:'white',marginLeft:'1px'}} type="link" href={menu.link}><FontAwesomeIcon icon={menu.iconName} size="1.8px" color='white' /> {menu.name}</Button></li>
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
                    <div className='socialicon'>
                        {
                            (socialMedia || []).map((media)=>{
                                return(
                                    <a href={media.link}><FontAwesomeIcon icon={media.icon} size="2x" color='white' />  </a>
                                )
                            })
                        }
                    </div>
                </nav>
            </header>
        </Menu>
    )
}

export default Header;