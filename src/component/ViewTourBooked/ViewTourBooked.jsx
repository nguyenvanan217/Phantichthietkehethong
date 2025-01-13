import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HiPaperAirplane } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import './ViewTourBooked.css';
import CustomNavbar from '../Navbar/CustomNavbar';
import Footer from '../Footer/Footer';

function ViewTourBooked() {
    const history = useHistory();
    const [bookedTours, setBookedTours] = useState(JSON.parse(localStorage.getItem('bookedTours')) || []);

    const handleRemoveTour = (tourIndex) => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const newBookedTours = bookedTours.filter((_, index) => index !== tourIndex);
        setBookedTours(newBookedTours);
        localStorage.setItem('bookedTours', JSON.stringify(newBookedTours));

        // Tạo custom event để thông báo tour đã bị xóa
        const bookingEvent = new CustomEvent('bookingUpdated', {
            detail: {
                userId: currentUser.emailOrPhone,
                action: 'remove',
            },
        });
        window.dispatchEvent(bookingEvent);

        toast.success('Đã xóa tour khỏi giỏ hàng!');
    };

    const handleBuyNow = (tour) => {
        // Xử lý logic mua tour
        toast.success('Đang chuyển đến trang thanh toán...');
    };

    const calculateTotal = () => {
        return bookedTours.reduce((total, tour) => {
            const price = parseFloat(tour.price.replace(/[^\d]/g, ''));
            return total + price;
        }, 0);
    };

    const handleCheckout = () => {
        if (bookedTours.length === 0) {
            toast.error('Giỏ hàng của bạn đang trống!');
            return;
        }
        // Xử lý logic thanh toán tất cả
        toast.success('Đang chuyển đến trang thanh toán...');
    };

    return (
        <>
            <CustomNavbar />
            <div className="booked-tours-page">
                <div className="container py-5">
                    <h1 className="page-title">Các Tour của tôi</h1>

                    {bookedTours.length > 0 ? (
                        <div className="row">
                            <div className="col-lg-8">
                                {bookedTours.map((tour, index) => (
                                    <div key={index} className="booked-tour-card">
                                        <img src={tour.img} alt={tour.title} className="tour-image" />
                                        <div className="tour-details">
                                            <h3>{tour.title}</h3>
                                            <div className="tour-info">
                                                <div className="rating-reviews">
                                                    <span className="rating">{tour.rating}</span>
                                                    <span className="evaluate">{tour.Evaluate}</span>
                                                    <span className="reviews">({tour.reviews} Đánh giá)</span>
                                                </div>
                                                <div className="highlights">
                                                    <h4>Điểm nổi bật:</h4>
                                                    <ul>
                                                        {tour.highlights.slice(0, 2).map((highlight, idx) => (
                                                            <li key={idx}>{highlight}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="price-actions">
                                                <div className="price-info">
                                                    <p className="price">{tour.price}</p>
                                                </div>
                                                <div className="actions">
                                                    <button className="remove-button" onClick={() => handleRemoveTour(index)}>
                                                        Hủy Tour
                                                    </button>
                                                    <button className="buy-now-button" onClick={() => handleBuyNow(tour)}>
                                                        Mua ngay
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-4">
                                <div className="checkout-summary">
                                    <h3>Tổng đơn hàng</h3>
                                    <div className="summary-details">
                                        <div className="summary-item">
                                            <span>Số lượng tour:</span>
                                            <span>{bookedTours.length}</span>
                                        </div>
                                        <div className="summary-item total">
                                            <span>Tổng tiền:</span>
                                            <span>{calculateTotal().toLocaleString('vi-VN')} VND</span>
                                        </div>
                                    </div>
                                    <button className="checkout-button" onClick={handleCheckout}>
                                        Thanh toán tất cả
                                        <HiPaperAirplane />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="empty-cart">
                            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
                                Hiện Bạn Chưa Đặt Tour Nào Ở Website Của Chúng Tôi
                            </p>
                            <button className="continue-shopping" onClick={() => history.push('/tour-du-lich')}>
                                Tiếp tục xem Tour
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ViewTourBooked;
