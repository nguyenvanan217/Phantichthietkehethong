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
    const [searchTerm, setSearchTerm] = useState('');

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

    // Hàm lọc tour theo từ khóa tìm kiếm
    const filterTours = (tours) => {
        if (!searchTerm.trim()) return tours;

        const searchStr = searchTerm.toLowerCase();
        return tours.filter((tour) => {
            // Kiểm tra null/undefined trước khi gọi toLowerCase()
            const title = tour?.title?.toLowerCase() || '';
            const header = tour?.header?.toLowerCase() || '';
            const highlights = tour?.highlights || [];

            return (
                title.includes(searchStr) ||
                header.includes(searchStr) ||
                highlights.some((highlight) => (highlight || '').toLowerCase().includes(searchStr))
            );
        });
    };

    return (
        <>
            <CustomNavbar />
            <div>
                <Banner {...bannerData2} isTour={true} />
                <BannerBottom />
                <div className="search-section" style={{ zIndex: '10000' }}>
                    <SearchBar onSearch={setSearchTerm} />
                    {searchTerm && (
                        <div className="search-results-count" style={{ color: 'red' }}>
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
                <div style={{ backgroundColor: '#ECF0F5' }}>
                    <BestTourDeals
                        bigTitle={'Tour Du Lịch Trung Quốc - Hồng Kông - Đài Loan'}
                        smallTitle={'Chinh Phục Trung Hoa, Khám Phá Di Sản'}
                    />
                    <ListTour tours={filterTours(tourDataThree)} />
                </div>
                <div style={{ backgroundColor: '#F6F8FA' }}>
                    <BestTourDeals
                        bigTitle={'Tour Trải Nghiệm Cao Cấp Không Mua Sắm'}
                        smallTitle={'Thoải Mái Khám Phá, Trọn Vẹn Niềm Vui'}
                    />
                    <ListTour tours={filterTours(tourDataFour)} />
                </div>
                <div style={{ backgroundColor: '#ECF0F5' }}>
                    <BestTourDeals
                        bigTitle={'Tour Du Lịch Nước Ngoài Cao Cấp'}
                        smallTitle={'Trải Nghiệm Thế Giới, Khám Phá Bản Thân'}
                    />
                    <ListTour tours={filterTours(tourDataFive)} />
                </div>
                <div style={{ backgroundColor: '#F6F8FA' }}>
                    <BestTourDeals
                        bigTitle={'Tour Du Lịch Nhật Bản - Hàn Quốc'}
                        smallTitle={'Văn Hóa Độc Đáo, Cảnh Sắc Tuyệt Vời'}
                    />
                    <ListTour tours={filterTours(tourDataSix)} />
                </div>
                <div style={{ backgroundColor: '#ECF0F5' }}>
                    <BestTourDeals
                        bigTitle={'Tour Du Lịch Siêu Du Thuyền 5 Sao'}
                        smallTitle={'Trải Nghiệm Thời Thượng, Dẫn Đầu Xu Hướng'}
                    />
                    <ListTour tours={filterTours(tourDataSeven)} />
                </div>
                <div style={{ backgroundColor: '#F6F8FA' }}>
                    <BestTourDeals bigTitle={'Tour Du Lịch Miền Trung'} smallTitle={'Trải Nghiệm Hành Trình Di Sản'} />
                    <ListTour tours={filterTours(tourDataEight)} />
                </div>
            </div>
            <LayoutRight />
            <Footer />
        </>
    );
}

export default TourDuLich;
