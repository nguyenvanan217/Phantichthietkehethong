import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slider1 from '../../assets/Image/slider3.webp';
import slider2 from '../../assets/Image/slider2.webp';
import slider3 from '../../assets/Image/slider1.webp';
import slider4 from '../../assets/Image/slider4.webp';
import slider5 from '../../assets/Image/slider5.webp';
import './Slider.css'
function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="slider-container slider container">
            <Slider {...settings}>
                <div>
                    <img src={slider1} alt="" width="1295px" height="270px" class="img-fluid" />
                </div>
                <div>
                    <img src={slider2} alt="" width="1295px" height="270px" class="img-fluid" />
                </div>
                <div>
                    <img src={slider3} alt="" width="1295px" height="270px" class="img-fluid" />
                </div>
                <div>
                    <img src={slider4} alt="" width="1295px" height="270px" class="img-fluid" />
                </div>
                <div>
                    <img src={slider5} alt="" width="1295px" height="270px" class="img-fluid" />
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;
