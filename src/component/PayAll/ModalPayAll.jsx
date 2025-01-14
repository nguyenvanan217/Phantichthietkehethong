import React from 'react';
import pay from '../../assets/Image/thanhtoan.png';
import './ModalPayAll.css';
import { toast } from 'react-toastify';

function ModalPayAll({ isOpen, onClose, bookedTours, setBookedTours }) {
    const handlePayAll = () => {
        // Xóa tất cả tour trong localStorage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;

        // Lấy tất cả các tour trong localStorage
        const allBookedTours = JSON.parse(localStorage.getItem('bookedTours')) || [];

        // Lọc ra các tour không phải của user hiện tại
        const otherTours = allBookedTours.filter((tour) => tour.userId !== currentUser.emailOrPhone);

        // Cập nhật lại localStorage
        localStorage.setItem('bookedTours', JSON.stringify(otherTours));

        // Cập nhật state ở parent component
        setBookedTours([]);

        // Tạo sự kiện cập nhật số lượng tour
        const bookingEvent = new CustomEvent('bookingUpdated', {
            detail: {
                userId: currentUser.emailOrPhone,
                action: 'pay',
            },
        });
        window.dispatchEvent(bookingEvent);
        alert('Thanh toán thành công!');
        toast.success('Thanh toán thành công!');
        onClose(); // Đóng modal
    };

    return (
        <>
            {isOpen && (
                <div style={{ zIndex: '1000000' }} className="modal-overlay2" onClick={onClose}>
                    <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close2" onClick={onClose}>
                            &times;
                        </button>
                        <div className="modal-image-container2">
                            <img src={pay} alt="Thanh toán" className="ml-30" />
                        </div>
                        <button className="checkout-button2 mt-3" onClick={handlePayAll}>
                            Xác nhận thanh toán
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalPayAll;
