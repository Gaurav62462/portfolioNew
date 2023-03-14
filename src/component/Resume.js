import React from 'react';
import './../App.css';
import { Card, Progress, Col, Row } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Resume = (props) => {
    let resumeData = props.resumeData;

    const { Meta } = Card;
    return (
        <div id='resume' className='container'>
            <Row gutter={16}>
                <Col span={12}>
                    <h3><FontAwesomeIcon icon={faGraduationCap} color='#252526' />  Education</h3>
                    {
                        resumeData?.education?.map((item, index) => {
                            return (
                                <Card key={index} hoverable className="education_class">
                                    <Meta title={item.specialization} />
                                    <Meta title={item.UniversityName} />
                                    <Meta description={item.PassingDate} />
                                </Card>
                            )
                        })
                    }
                </Col>
                <Col span={12}>
                    <h3><FontAwesomeIcon icon={faBriefcase} color='#252526' />  Experience</h3>
                    {
                        resumeData?.work?.map((item, index) => {
                            return (
                                <Card key={index} hoverable className="education_class">
                                    <Meta title={item.CompanyName} />
                                    <Meta title={item.specialization} />
                                    <Meta description={item.JoiningDate} />
                                </Card>
                            )
                        })
                    }
                </Col>
            </Row>
            <hr />
            <Row>
                <Col span={24}>
                    <h3>
                        {
                            resumeData.skillsDescription
                        }
                    </h3>
                    {
                        resumeData.progress?.map((progres, index) => {
                            return (
                                <>
                                    <label key={index}>{progres.label}</label>
                                    <Progress key={index} strokeColor={{ '0%': '#108ee9', '100%': '#87d068', }} percent={progres.percent} status="active" />
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <hr />
        </div>
    )
}

export default Resume;