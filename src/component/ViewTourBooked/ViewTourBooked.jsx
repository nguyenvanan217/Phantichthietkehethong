import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HiPaperAirplane } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import './ViewTourBooked.css';
import CustomNavbar from '../Navbar/CustomNavbar';
import Footer from '../Footer/Footer';
import ModalPayAll from '../PayAll/ModalPayAll';

function ViewTourBooked() {
    const history = useHistory();
    const [bookedTours, setBookedTours] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [selectedDates, setSelectedDates] = useState({});

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        // Lấy thông tin user hiện tại
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) {
            toast.error('Vui lòng đăng nhập để xem tour đã đặt!');
            history.push('/login');
            return;
        }
        setCurrentUser(user);

        // Lọc tour theo user hiện tại
        const allBookedTours = JSON.parse(localStorage.getItem('bookedTours')) || [];
        const userTours = allBookedTours.filter((tour) => tour.userId === user.emailOrPhone);
        setBookedTours(userTours);
    }, [history]);

    const handleRemoveTour = (tourIndex) => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // Lấy tất cả tour
        const allBookedTours = JSON.parse(localStorage.getItem('bookedTours')) || [];

        // Lọc ra các tour của user hiện tại
        const userTours = allBookedTours.filter((tour) => tour.userId === currentUser.emailOrPhone);
        // Xóa tour được chọn
        const updatedUserTours = userTours.filter((_, index) => index !== tourIndex);

        // Cập nhật lại localStorage với các tour còn lại
        const otherTours = allBookedTours.filter((tour) => tour.userId !== currentUser.emailOrPhone);
        const newBookedTours = [...otherTours, ...updatedUserTours];
        localStorage.setItem('bookedTours', JSON.stringify(newBookedTours));

        // Cập nhật state
        setBookedTours(updatedUserTours);

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
        setIsModalOpen(true);
    };

    const handleCancelAllTours = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;

        // Lấy tất cả tour
        const allBookedTours = JSON.parse(localStorage.getItem('bookedTours')) || [];

        // Lọc ra các tour không phải của user hiện tại
        const otherTours = allBookedTours.filter((tour) => tour.userId !== currentUser.emailOrPhone);

        // Cập nhật localStorage chỉ với tour của user khác
        localStorage.setItem('bookedTours', JSON.stringify(otherTours));

        // Cập nhật state
        setBookedTours([]);

        // Kích hoạt event để cập nhật số lượng tour
        const bookingEvent = new CustomEvent('bookingUpdated', {
            detail: {
                userId: currentUser.emailOrPhone,
                action: 'remove',
            },
        });
        window.dispatchEvent(bookingEvent);

        toast.success('Đã hủy toàn bộ tour!');
    };

    const handleDateChange = (date, tourId) => {
        setSelectedDates((prev) => ({
            ...prev,
            [tourId]: date,
        }));

        // Cập nhật localStorage
        const allBookedTours = JSON.parse(localStorage.getItem('bookedTours')) || [];
        const updatedTours = allBookedTours.map((tour) => {
            if (tour.userId === currentUser.emailOrPhone && tour.id === tourId) {
                return { ...tour, selectedDate: date };
            }
            return tour;
        });
        localStorage.setItem('bookedTours', JSON.stringify(updatedTours));
    };

    return (
        <>
            <ModalPayAll
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bookedTours={bookedTours}
                setBookedTours={setBookedTours}
            />
            <CustomNavbar />
            <div className="booked-tours-page">
                <div className="container py-5">
                    <h1 className="page-title">Các Tour mà bạn {currentUser ? currentUser.fullName : ''} đã đặt:</h1>

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
                                                <div className="tour-date-picker">
                                                    <h4>Chọn ngày khởi hành:</h4>
                                                    <input
                                                        type="date"
                                                        value={selectedDates[tour.id] || ''}
                                                        onChange={(e) => handleDateChange(e.target.value, tour.id)}
                                                        min={new Date().toISOString().split('T')[0]}
                                                        className="date-input"
                                                    />
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
                                    <button
                                        className="cancel-all-button"
                                        onClick={handleCancelAllTours}
                                        disabled={bookedTours.length === 0}
                                    >
                                        Hủy toàn bộ Tour
                                    </button>
                                    <button
                                        className="checkout-button"
                                        onClick={handleCheckout}
                                        disabled={bookedTours.length === 0}
                                    >
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
