import React from 'react';
import slid1 from './image/slid1.jpg';
import slid2 from './image/slid2.jpg';
import clark from './image/clark.jpg';
import key from './image/key.jpg';
import { Carousel } from 'antd';

const data = [
    { img: slid1 },
    { img: slid2 },
    { img: key },
    { img: clark }
]
const Slider = () => {
    return (
        <div>
            <Carousel autoplay effect='fade'>
                {(data || []).map((el, key) => {
                    return (
                        <img key={key} alt='' src={el.img} className='sliderimg' />
                    )
                })}
            </Carousel>

        </div>
    )
}
export default Slider;