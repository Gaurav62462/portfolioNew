import React from 'react';
import './../App.css';
import { Card, Row, Col, Divider, Carousel } from 'antd';

const Portfolio = (props) => {
    let resumeData = props.resumeData;
    const { Meta } = Card;

    return (
        <section id='portfolio'>
            <h2>Projects</h2>
            <Row>
            <Carousel autoplay effect='fade'>
                {
                    resumeData?.portfolio.map((item, index) => {
                        return (
                                <Card style={{width:'200px'}} hoverable={true}
                                    className="work-card"
                                    title={item.name}
                                >
                                    <Meta title={item.name} />
                                </Card>
                        )
                    })
                }
                </Carousel>
            </Row>
        </section>
    )
}

export default Portfolio;   