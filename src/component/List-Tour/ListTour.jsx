import React from 'react';
import './ListTour.css';
import ViewMore from '../ViewMore/ViewMore';

function ListTour({ tours }) {
    return (
        <div className="container">
            <div className="row">
                {tours.map((tour, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="tour-item">
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
                                            <p style={{ color: '#9FC43A' }}>{tour.Evaluate} </p>
                                            <p style={{ color: '#333', fontSize: '20px' }}>&#8739;</p>
                                            <p style={{ color: '#828282' }}> {tour.reviews} Đánh Giá</p>
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
                                        {tour.discount && ( <p className="discount">{tour.discount}</p>) : ( <p className=""></p>)}
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
        </div>
    );
}

export default ListTour;
