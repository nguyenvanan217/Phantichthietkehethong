import React from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import Banner from '../../component/Banner/Banner';
import { bannerData2 } from '../../Data/Data';
import BannerBottom from '../../component/BannerBottom/BannerBottom';
import BestTourDeals from '../../component/Best-Tour-Deals/BestTourDeals';
import ListTour from '../../component/List-Tour/ListTour';

function TourDuLich() {
    return (
        <>
            <CustomNavbar />
            <div>
                <Banner {...bannerData2} isTour={true} />
                <BannerBottom />
                <div style={{ backgroundColor: '#FEEEC7' }}>
                    <BestTourDeals />
                    <ListTour />
                </div>
            </div>
        </>
    );
}

export default TourDuLich;
