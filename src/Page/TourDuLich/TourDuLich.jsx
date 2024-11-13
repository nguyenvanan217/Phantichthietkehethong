import React from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import Banner from '../../component/Banner/Banner';
import { bannerData2 } from '../../Data/Data';
import BannerBottom from '../../component/BannerBottom/BannerBottom';
import BestTourDeals from '../../component/Best-Tour-Deals/BestTourDeals';

import ListTour from '../../component/List-Tour/ListTour';
import { tourData, tourDataTwo } from '../../Data/DataListTour';

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
            </div>
        </>
    );
}

export default TourDuLich;
