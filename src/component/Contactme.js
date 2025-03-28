import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, Col, Row } from 'antd';
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import MapStyle from './MapStyle';

const Contactme = (props) => {
    const { google, resumeData } = props || {}
    const [showingInfoWindow, setshowingInfoWindow] = React.useState(false);
    const { TextArea } = Input;
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    // const _mapLoaded = (mapProps, map) => {
    //     map.setOptions({
    //         styles: MapStyle
    //     });
    // }

    const onSubmit = (event) => {
        event.preventDefault();
        setName('');
        setMessage('');
        setEmail('');

        axios({
            method: "POST",
            url: "http://localhost:4200/contact",
            data: { name, message, email }
        }).then((response) => {
            console.log(response, 'response')
            if (response.data.status === 'success') {
                alert("Message Sent.");
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })

    }
    const onMarkerClick = () => {
        setshowingInfoWindow(true)
    }
    return (
        <section id='contact'>
            <Row>
                <Col span={12}>
                    <h1>Get In Touch</h1>
                    <Form action="/contact" method="post" role="form" id='contact'>
                        <Input size='large' type='text' name='name' value={name} placeholder='Enter Your Name' onChange={e => setName(e.target.value)} />
                        <br />
                        <br />
                        <Input size='large' placeholder='Enter Your Email' type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
                        <br />
                        <br />
                        <TextArea rows={4} size='large' placeholder='Type Your Message Here' type='text' name='message' value={message} onChange={e => setMessage(e.target.value)} />
                        <br />
                        <br />
                        <Button type='submit' onClick={onSubmit}>Submit</Button>
                    </Form>
                </Col>
                {/* <Col span={12}>
                    <Map
                        google={google}
                        onClick={() => setshowingInfoWindow(false)}
                        zoom={15}
                        //onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
                        className="mapstyle"
                        initialCenter={{ lat: 30.713296, lng: 76.7075761 }}>
                        <Marker
                            onClick={() => onMarkerClick()}
                            position={{ lat: 30.713296, lng: 76.7075761 }}
                        />
                        <InfoWindow
                            visible={showingInfoWindow}
                            position={{ lat: 30.713296, lng: 76.7075761 }}
                        >
                            <h5>{resumeData.infoWindow}</h5>
                            <p>{resumeData.infoWindow1}</p>
                        </InfoWindow>
                    </Map>
                </Col> */}
            </Row>
        </section>
    )
}

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyD5fopwUV7qSvU7HTfXhsntbAwWF0nLDqY'
// })(Contactme)
export default Contactme