import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ModalBuyTour.css';
import { HiPaperAirplane } from 'react-icons/hi2';

function ModalBuyTour({ tour, isOpen, onClose }) {
    const history = useHistory();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const [rating, setRating] = useState(''); // Lưu đánh giá từ người dùng

    const handleBuyTour = () => {
        if (!currentUser) {
            toast.error('Vui lòng đăng nhập để đặt tour!');
            history.push('/login');
            return;
        }

        const bookedTours = JSON.parse(localStorage.getItem('bookedTours')) || [];
        const isAlreadyBooked = bookedTours.some((bookedTour) => bookedTour.title === tour.title);

        if (isAlreadyBooked) {
            toast.warning('Tour này đã được đặt trước đó!');
            return;
        }

        const tourWithUser = {
            ...tour,
            userId: currentUser.emailOrPhone,
        };

        bookedTours.push(tourWithUser);
        localStorage.setItem('bookedTours', JSON.stringify(bookedTours));

        const bookingEvent = new CustomEvent('bookingUpdated', {
            detail: {
                userId: currentUser.emailOrPhone,
                action: 'add',
            },
        });
        window.dispatchEvent(bookingEvent);

        toast.success('Đặt tour thành công!');
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value); // Cập nhật giá trị đánh giá
    };

    const handleSubmitRating = () => {
        if (!rating) {
            toast.error('Vui lòng chọn một đánh giá!');
            return;
        }

        toast.success(`Đánh giá của bạn: "${rating}" đã được gửi!`);
        setRating('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>

                <div className="modal-header">
                    <h2>{tour.title}</h2>
                </div>

                <div className="modal-body">
                    <img src={tour.img} alt={tour.title} className="modal-image" />

                    <div className="tour-details">
                        <div className="tour-info">
                            <p className="tour-header">{tour.header}</p>
                            <div className="review-info">
                                {tour.rating && (
                                    <>
                                        <span className="rating">{tour.rating}</span>
                                        <span className="evaluate">{tour.Evaluate}</span>
                                        <span className="reviews">({tour.reviews} Đánh giá)</span>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="price-info">
                            {tour.discount && <p className="discount">{tour.discount}</p>}
                            <p className="price">{tour.price}</p>
                        </div>

                        <div className="highlights">
                            <h3>Điểm nổi bật:</h3>
                            <ul className="flex justify-content-center flex-column align-items-center">
                                {tour.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <div className="rating-section">
                        <button className="review-tour-2">Đánh giá tour:</button>
                        <select className="rating-select" value={rating} onChange={handleRatingChange}>
                            <option value="" disabled>
                                Chọn đánh giá
                            </option>
                            <option value="Tuyệt vời">Tuyệt vời</option>
                            <option value="Rất tốt">Rất tốt</option>
                            <option value="Khá">Khá</option>
                            <option value="Kém">Kém</option>
                        </select>
                        <button className="submit-rating" onClick={handleSubmitRating}>
                            Gửi ngay
                        </button>
                    </div>

                    <button className="buy-button" onClick={handleBuyTour}>
                        Đặt Tour Để Đi Du Lịch Ngay Nào
                        <HiPaperAirplane />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalBuyTour;
