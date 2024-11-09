import React from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import Banner from '../../component/Banner/Banner';
import bannerData from '../../Data/Data.js';
import './KhachSanPage.css';
import { FaFire } from 'react-icons/fa';
import SimpleSlider from '../../component/Slider/Slider.jsx';
import Card from '../../component/Card/Card.jsx';
import Title from '../../component/Title/Title.jsx';
import LayoutRight from '../../component/Layout-Right/LayoutRight.jsx';
import LayoutLeft from '../../component/Layout-Left/LayoutLeft.jsx';
import LayoutCenter from '../../component/Layout-Center/LayoutCenter.jsx';
import Footer from '../../component/Footer/Footer.jsx';

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
            <LayoutRight />
            <LayoutLeft />
            <Title
                strong="Điểm đến yêu thích nước ngoài"
                icon={<FaFire className="fire" />}
                customs="270 khách đã đặt phòng trong 24h qua"
                bookingnow="Bao la thế giới. Bốn bể là nhà"
            />
            <div className="container">
                <LayoutCenter />
            </div>
            <Footer />
        </div>
    );
}

export default KhachSanPage;
