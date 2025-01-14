import React, { useState } from 'react';
import './ListTour.css';
import ViewMore from '../ViewMore/ViewMore';
import ModalBuyTour from '../ModalBuyTour/ModalBuyTour';

function ListTour({ tours }) {
    const [selectedTour, setSelectedTour] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTourClick = (tour) => {
        setSelectedTour(tour);
        setIsModalOpen(true);
    };

    return (
        <div className="container">
            {tours.length === 0 ? (
                <div className="no-results">
                    <p>Hiện tại chưa có tour nào được tìm thấy ở tour này</p>
                </div>
            ) : (
                <>
                    <div className="row">
                        {tours.map((tour, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                                <div className="tour-item" onClick={() => handleTourClick(tour)}>
                                    <p className="tour-header">{tour.header}</p>
                                    <img src={tour.img} alt={tour.title} className="tour-image" width="100%" />
                                    <div className="tour-content">
                                        <div className="card-top">
                                            <h5 style={{ color: '#003C71', padding: '5px 10px 0px 10px', fontWeight: 'bold' }}>
                                                {tour.title}
                                            </h5>
                                        </div>
                                        <div className="card-center-bottom">
                                            <div className="card-center">
                                                <div className="review-tour d-flex align-items-center gap-1 ms-2">
                                                    <p className="rating">{tour.rating}</p>
                                                    {tour.Evaluate ? (
                                                        <p className="evaluate">{tour.Evaluate}</p>
                                                    ) : (
                                                        <div style={{ display: 'none' }}></div>
                                                    )}
                                                    {tour.rating ? (
                                                        <p style={{ color: '#333', fontSize: '20px' }}>&#8739;</p>
                                                    ) : (
                                                        <div style={{ display: 'none' }}></div>
                                                    )}
                                                    {tour.rating && <p style={{ color: '#828282' }}> {tour.reviews} Đánh Giá</p>}
                                                </div>
                                                <div className="hightlight-content">
                                                    <ul className="highlight1">
                                                        {tour.highlights.slice(2).map((highlight, index) => (
                                                            <li key={index}>{highlight}</li>
                                                        ))}
                                                    </ul>
                                                    <ul className="highlight2">
                                                        {tour.highlights.slice(2).map((highlight, index) => (
                                                            <li key={index}>{highlight}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-bottom">
                                                {tour.discount && <p className="discount">{tour.discount}</p>}
                                                <div className="count-price">
                                                    <p className="price"> {tour.price}</p>
                                                    {tour.count && <p className="count-tour">{tour.count}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ViewMore />
                </>
            )}
            {selectedTour && <ModalBuyTour tour={selectedTour} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default ListTour;
