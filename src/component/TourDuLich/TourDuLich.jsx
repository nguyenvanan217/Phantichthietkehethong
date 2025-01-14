import React, { useState } from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import Banner from '../../component/Banner/Banner';
import { bannerData2 } from '../../Data/Data';
import BannerBottom from '../../component/BannerBottom/BannerBottom';
import BestTourDeals from '../../component/Best-Tour-Deals/BestTourDeals';
import SearchBar from '../../component/SearchBar/SearchBar';
import ListTour from '../../component/List-Tour/ListTour';
import LayoutRight from '../../component/Layout-Right/LayoutRight';
import Footer from '../../component/Footer/Footer';
import {
    tourData,
    tourDataTwo,
    tourDataThree,
    tourDataFour,
    tourDataFive,
    tourDataSix,
    tourDataSeven,
    tourDataEight,
} from '../../Data/DataListTour';
import './TourDuLich.css';

function TourDuLich() {
    // Gộp tất cả tour thành một mảng
    const allTours = [
        ...tourData,
        ...tourDataTwo,
        ...tourDataThree,
        ...tourDataFour,
        ...tourDataFive,
        ...tourDataSix,
        ...tourDataSeven,
        ...tourDataEight,
    ];

    const [searchTerm, setSearchTerm] = useState('');

    // Hàm lọc tour theo từ khóa tìm kiếm
    const filterTours = (tours) => {
        if (!searchTerm.trim()) return tours;

        const searchStr = searchTerm.toLowerCase();
        return tours.filter(
            (tour) =>
                tour.title.toLowerCase().includes(searchStr) ||
                tour.header.toLowerCase().includes(searchStr) ||
                tour.highlights.some((highlight) => highlight.toLowerCase().includes(searchStr)),
        );
    };

    return (
        <>
            <CustomNavbar />
            <div>
                <Banner {...bannerData2} isTour={true} />
                <BannerBottom />
                <div className="search-section">
                    <SearchBar onSearch={setSearchTerm} />
                    {searchTerm && (
                        <div className="search-results-count" style={{ color: 'red'}}>
                            Tìm thấy {filterTours(allTours).length} tour phù hợp
                        </div>
                    )}
                </div>
                <div style={{ backgroundColor: '#FEEEC7' }}>
                    <BestTourDeals bigTitle={'Tour Ưu Đãi Tốt Nhất Hôm Nay'} smallTitle={'Nhanh Tay Đặt Ngay. Để Mai Sẽ Lỡ'} />
                    <ListTour tours={filterTours(tourData)} />
                </div>
                <div style={{ backgroundColor: '#F6F8FA' }}>
                    <BestTourDeals bigTitle={'Tour Du Lịch Tết Nguyên Đán'} smallTitle={'Chơi Tết Thả Ga, Không Lo Về Giá'} />
                    <ListTour tours={filterTours(tourDataTwo)} />
                </div>
                {/* Các phần ListTour khác tương tự */}
                <div style={{ backgroundColor: '#ECF0F5' }}>
                    <BestTourDeals
                        bigTitle={'Tour Du Lịch Trung Quốc - Hồng Kông - Đài Loan'}
                        smallTitle={'Chinh Phục Trung Hoa, Khám Phá Di Sản'}
                    />
                    <ListTour tours={filterTours(tourDataThree)} />
                </div>
                {/* ... các ListTour khác giữ nguyên và thêm filterTours() ... */}
            </div>
            <LayoutRight />
            <Footer />
        </>
    );
}

export default TourDuLich;
