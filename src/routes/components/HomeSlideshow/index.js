import React from "react";
import {Fade} from 'react-slideshow-image';
import slide1 from '../../../Resources/images/slide1.jpg'
import slide2 from '../../../Resources/images/slide2.jpg'
import slide3 from '../../../Resources/images/slide3.jpg'
import slide4 from '../../../Resources/images/slide4.jpg'
import slide5 from '../../../Resources/images/slide5.jpg'
import './HomeSlideshow.scss'


const HomeSlideshow = () => {
    return (
    <div className="HomeSlideshow">
        <Fade easing="ease" autoplay={true}>
        <div className="each-slide">
            <div>
                <img src={slide1} alt="slide1" height="100%"/>
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={slide2} alt="slide2" height="100%"/>
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={slide3} alt="slide3" height="100%"/>
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={slide4} alt="slide4" height="100%"/>
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={slide5} alt="slide5" />
            </div>
        </div>
        </Fade>
    </div>
    )
};

export default HomeSlideshow;
  