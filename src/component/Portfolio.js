import React from 'react';
import './../App.css';
import { Card, Row, Col, Divider } from 'antd';

const Portfolio = (props) => {
    let resumeData = props.resumeData;
    return (
        <section id='portfolio'>
            <h2>Check out of some works done by me.</h2>
            <Row>
                {
                    resumeData.portfolio && resumeData.portfolio.map((item, index) => {
                        return (
                            <Col key={index} span={6}>
                                <Card  hoverable={true}
                                    className="work-card"
                                    title={item.name}
                                    cover={<img src={item.imgurl} />}
                                >
                                    <a href={item.url}></a>
                                </Card>
                            </Col>
                        )
                    })
                }
                <Divider />
            </Row>
        </section>
    )
}

export default Portfolio;   