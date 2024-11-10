import React from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import Banner from '../../component/Banner/Banner';
import { bannerData2 } from '../../Data/Data';
import BannerBottom from '../../component/BannerBottom/BannerBottom';

function TourDuLich() {
    return (
        <>
            <CustomNavbar />
            <div>
                <Banner {...bannerData2} isTour={true} />
                <BannerBottom />
            </div>
        </>
    );
}

export default TourDuLich;
