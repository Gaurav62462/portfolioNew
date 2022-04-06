import React from 'react';
import { BiBuildingHouse, BiMailSend } from 'react-icons/bi';
import { Col, Row } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook, faInstagram, faTwitter, faGithub
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <Row>
            <Col span={12}>
                <h2>Address</h2>
                <p><BiBuildingHouse style={{ fontSize: '30px', color: '#08c' }} />3rd Floor, Elina 8, SBP City of Dreams,
               <br /> Sector 116, Mohali, Punjab</p>
            </Col>
            <Col span={12}>
                <h2>Follow me</h2>
                <a href={'https://www.facebook.com/gouarv.saini'}><FontAwesomeIcon icon={faFacebook} size="2x" color='#08c' />  </a>
                <a href='https://www.instagram.com/gauravkumar5467/'><FontAwesomeIcon icon={faInstagram} size="2x" color='#08c' /> </a>
                <a href='https://twitter.com/Gauravk15740056'><FontAwesomeIcon icon={faTwitter} size="2x" color='#08c' /> </a>
                <a href='https://github.com/Gaurav62462'><FontAwesomeIcon icon={faGithub} size="2x" color='#08c' /> </a><br />
                <p><BiMailSend fontSize='25px' color='#08c' /> Gaurav62462@gmail.com</p>
            </Col>
        </Row>
    )
}

export default Footer;