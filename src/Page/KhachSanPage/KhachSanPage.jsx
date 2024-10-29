import React from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import Banner from '../../component/Banner/Banner';
import bannerData from '../../Data/Data.js';
import './KhachSanPage.css';
import { FaFire } from 'react-icons/fa';
import SimpleSlider from '../../component/Slider/Slider.jsx';
import Card from '../../component/Card/Card.jsx';
function KhachSanPage() {
    return (
        <div>
            <CustomNavbar />
            <Banner {...bannerData} />
            <div className="container d-flex align-item best-combo">
                <h2>
                    <strong>Combo tốt nhất hôm nay </strong>
                </h2>
                <div className="fire-customs">
                    <FaFire className="fire" />
                    <p className="customs_24h">270 khách đã đặt phòng trong 24h qua</p>
                </div>
            </div>
            <div className='container booking-now'>
                <p>Nhanh tay đặt ngay. Để mai sẽ lỡ</p>
            </div>
            <div className="container">
                <SimpleSlider />
            </div>
            <div className='container'>
                <Card/>
            </div>
        </div>
    );
}

export default KhachSanPage;
