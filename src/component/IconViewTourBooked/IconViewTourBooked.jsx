import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HiPaperAirplane } from "react-icons/hi2";
import './IconViewTourBooked.css';

function IconViewTourBooked() {
    const history = useHistory();
    const [bookedToursCount, setBookedToursCount] = useState(
        JSON.parse(localStorage.getItem('bookedTours'))?.length || 0
    );

    useEffect(() => {
        // Hàm cập nhật số lượng tour
        const updateBookedToursCount = () => {
            const tours = JSON.parse(localStorage.getItem('bookedTours')) || [];
            setBookedToursCount(tours.length);
        };

        // Lắng nghe sự kiện storage change
        window.addEventListener('storage', updateBookedToursCount);

        // Tạo một custom event để lắng nghe thay đổi từ các component khác
        window.addEventListener('bookingUpdated', updateBookedToursCount);

        return () => {
            window.removeEventListener('storage', updateBookedToursCount);
            window.removeEventListener('bookingUpdated', updateBookedToursCount);
        };
    }, []);

    const handleClick = () => {
        history.push('/view-tour-booked');
    };

    return (
        <div className="icon-view-booked">
            <button className="icon-button" onClick={handleClick}>
                <HiPaperAirplane className="airplane-icon" />
                {bookedToursCount > 0 && (
                    <span className="tour-count">{bookedToursCount}</span>
                )}
            </button>
        </div>
    );
}

export default IconViewTourBooked;
