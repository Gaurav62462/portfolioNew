import React from 'react';
import 'antd/dist/antd.css';
import { Typography, Row, Col } from 'antd';

const About = (props) => {
	let resumeData = props.resumeData;
	const { Title, Paragraph } = Typography;


	return (
		<section id="about" className="aboutSection">
			<Row>
				<Col span={12} className="aboutParagraph">
					<Title id='aboutSe' > Hi! This is Gaurav.</Title>
					<Paragraph className='paragraph'>
						{
							resumeData.aboutme
						}
					</Paragraph>
				</Col>
			</Row>
		</section>

	)
}

export default About;