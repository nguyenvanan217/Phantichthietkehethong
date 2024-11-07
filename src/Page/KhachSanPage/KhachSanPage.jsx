import React from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import Banner from '../../component/Banner/Banner';
import bannerData from '../../Data/Data.js';
import './KhachSanPage.css';
import { FaFire } from 'react-icons/fa';
import SimpleSlider from '../../component/Slider/Slider.jsx';
import Card from '../../component/Card/Card.jsx';
import Title from '../../component/Title/Title.jsx';

function KhachSanPage() {
    return (
        <div>
            <CustomNavbar />
            <Banner {...bannerData} />
            <Title
                strong="Combo tốt nhất hôm nay"
                icon={<FaFire className="fire" />}
                customs="270 khách đã đặt phòng trong 24h qua"
                bookingnow="Nhanh tay đặt ngay. Để mai sẽ lỡ"
            />
            <div className="container">
                <SimpleSlider />
            </div>
            <div className="container">
                <Card />
            </div>
            <Title
                strong="Điểm đến yêu thích trong nước"
                icon={<FaFire className="fire" />}
                customs="Super Hot"
                bookingnow="Lên rừng xuống biển. Trọn vẹn việt nam"
            />
        </div>
    );
}

export default KhachSanPage;
