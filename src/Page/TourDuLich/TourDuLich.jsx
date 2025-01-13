import React from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import Banner from '../../component/Banner/Banner';
import { bannerData2 } from '../../Data/Data';
import BannerBottom from '../../component/BannerBottom/BannerBottom';
import BestTourDeals from '../../component/Best-Tour-Deals/BestTourDeals';

import ListTour from '../../component/List-Tour/ListTour';
import LayoutRight from '../../component/Layout-Right/LayoutRight';
import Footer from '../../component/Footer/Footer';
import { tourData, tourDataTwo,tourDataThree, tourDataFour, tourDataFive, tourDataSix, tourDataSeven, tourDataEight } from '../../Data/DataListTour';
import IconViewTourBooked from '../../component/IconViewTourBooked/IconViewTourBooked';

function TourDuLich() {
    return (
        <>
            <CustomNavbar />
            <div>
                <Banner {...bannerData2} isTour={true} />
                <BannerBottom />
                <div style={{ backgroundColor: '#FEEEC7' }}>
                    <BestTourDeals bigTitle={'Tour Ưu Đãi Tốt Nhất Hôm Nay'} smallTitle={'Nhanh Tay Đặt Ngay. Để Mai Sẽ Lỡ'} />
                    <ListTour tours={tourData} />
                </div>
                <div style={{ backgroundColor: '#F6F8FA' }}>
                    <BestTourDeals bigTitle={'Tour Du Lịch Tết Nguyên Đán'} smallTitle={'Chơi Tết Thả Ga, Không Lo Về Giá'} />
                    <ListTour tours={tourDataTwo} />
                </div>
                <div style={{ backgroundColor: '#ECF0F5' }}>
                    <BestTourDeals bigTitle={'Tour Du Lịch Trung Quốc - Hồng Kông - Đài Loan'} smallTitle={'Chinh Phục Trung Hoa, Khám Phá Di Sản'} />
                    <ListTour tours={tourDataThree} />
                </div>
                <div style={{ backgroundColor: '#F6F8FA' }}>
                    <BestTourDeals bigTitle={'Tour Trải Nghiệm Cao Cấp Không Mua Sắm'} smallTitle={'Thoải Mái Khám Phá, Trọn Vẹn Niềm Vui'} />
                    <ListTour tours={tourDataFour} />
                </div>
                <div style={{ backgroundColor: '#ECF0F5' }}>
                    <BestTourDeals bigTitle={'Tour Du Lịch Nước Ngoài Cao Cấp'} smallTitle={'Trải Nghiệm Thế Giới, Khám Phá Bản Thân'} />
                    <ListTour tours={tourDataFive} />
                </div>
                <div style={{ backgroundColor: '#F6F8FA' }}>
                    <BestTourDeals bigTitle={'Tour Du Lịch Nhật Bản - Hàn Quốc'} smallTitle={'Văn Hóa Độc Đáo, Cảnh Sắc Tuyệt Vời'} />
                    <ListTour tours={tourDataSix} />
                </div>
                <div style={{ backgroundColor: '#ECF0F5' }}>
                    <BestTourDeals bigTitle={'Tour Du Lịch Siêu Du Thuyền 5 Sao'} smallTitle={'Trải Nghiệm Thời Thượng, Dẫn Đầu Xu Hướng'} />
                    <ListTour tours={tourDataSeven} />
                </div>
                <div style={{ backgroundColor: '#F6F8FA' }}>
                    <BestTourDeals bigTitle={'Tour Du Lịch Miền Trung'} smallTitle={'Trải Nghiệm Hành Trình Di Sản'} />
                    <ListTour tours={tourDataEight} />
                </div>
            </div>
            <LayoutRight/>
            <Footer />
            <IconViewTourBooked />
        </>
    );
}

export default TourDuLich;
