import React from 'react';
import './ListTour.css';
import tourData from '../../Data/DataListTour';

function ListTour() {
    return (
        <div className="container">
            <div className="row">
                {tourData.map((tour, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="tour-item">
                            <p className='tour-header'>{tour.header}</p>
                            <img src={tour.img} alt={tour.title} className="tour-image" width="100%" />
                            <h5 style={{ color: '#003C71', padding: '5px 10px 0px 10px', fontWeight: 'bold' }}>{tour.title}</h5>
                            <div className="review-tour d-flex align-items-center gap-1 ms-2">
                                <p className="rating">{tour.rating}</p>
                                <p style={{ color: '#9FC43A' }}>{tour.Evaluate} </p>
                                <p style={{ color: '#333', fontSize: '20px' }}>&#8739;</p>
                                <p style={{ color: '#828282' }}> {tour.reviews} Đánh Giá</p>
                            </div>
                            <div className="hightlight-content d-flex align-items-center justify-content-start">
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
                            <p className="discount">{tour.discount}</p>
                            <p className='price'> {tour.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListTour;
