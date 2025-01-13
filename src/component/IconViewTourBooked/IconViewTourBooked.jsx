import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { HiPaperAirplane } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import './IconViewTourBooked.css';

function IconViewTourBooked() {
    const history = useHistory();
    const [bookedToursCount, setBookedToursCount] = useState(0);
    const iconRef = useRef(null);
    const countRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const updateBookedToursCount = (event) => {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const allBookedTours = JSON.parse(localStorage.getItem('bookedTours')) || [];

            if (currentUser) {
                const userTours = allBookedTours.filter((tour) => tour.userId === currentUser.emailOrPhone);
                const newCount = userTours.length;

                // Nếu là event bookingUpdated và là user hiện tại
                if (event.type === 'bookingUpdated' && event.detail?.userId === currentUser.emailOrPhone) {
                    // Animation cho cả thêm và xóa tour
                    if (iconRef.current) {
                        void iconRef.current.offsetHeight;
                        iconRef.current.classList.remove('shake-animation');
                        requestAnimationFrame(() => {
                            iconRef.current.classList.add('shake-animation');
                        });
                    }

                    // Animation cho số lượng
                    if (countRef.current) {
                        void countRef.current.offsetHeight;
                        countRef.current.classList.remove('scale-animation');
                        requestAnimationFrame(() => {
                            countRef.current.classList.add('scale-animation');
                        });
                    }

                    // Animation cho button
                    if (buttonRef.current) {
                        void buttonRef.current.offsetHeight;
                        buttonRef.current.classList.remove('button-shake');
                        requestAnimationFrame(() => {
                            buttonRef.current.classList.add('button-shake');
                        });
                    }

                    // Xóa các class animation sau khi hoàn thành
                    setTimeout(() => {
                        if (iconRef.current) iconRef.current.classList.remove('shake-animation');
                        if (countRef.current) countRef.current.classList.remove('scale-animation');
                        if (buttonRef.current) buttonRef.current.classList.remove('button-shake');
                    }, 500);
                }

                setBookedToursCount(newCount);
            } else {
                setBookedToursCount(0);
            }
        };

        // Cập nhật lần đầu
        updateBookedToursCount({ type: 'initial' });

        // Lắng nghe sự kiện
        window.addEventListener('storage', updateBookedToursCount);
        window.addEventListener('bookingUpdated', updateBookedToursCount);

        return () => {
            window.removeEventListener('storage', updateBookedToursCount);
            window.removeEventListener('bookingUpdated', updateBookedToursCount);
        };
    }, []);

    const handleClick = () => {
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            toast.error('Vui lòng đăng nhập để xem tour đã đặt!');
            history.push('/login');
            return;
        }
        history.push('/view-tour-booked');
    };

    return (
        <div className="icon-view-booked">
            <button ref={buttonRef} className="icon-button" onClick={handleClick}>
                <HiPaperAirplane className="airplane-icon" ref={iconRef} />
                {bookedToursCount > 0 && (
                    <span className="tour-count" ref={countRef}>
                        {bookedToursCount}
                    </span>
                )}
            </button>
        </div>
    );
}

export default IconViewTourBooked;
