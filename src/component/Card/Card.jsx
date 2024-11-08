import React from 'react';
import card1 from '../../assets/Image/card1.png';
import card2 from '../../assets/Image/card2.png';
import card3 from '../../assets/Image/card3.png';
import card4 from '../../assets/Image/card4.png';
import './Card.css';    
function Card() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 col-lg-3 mb-4 d-flex justify-content-center align-items-center">
                    <div className="card position-relative" style={{ width: '320px', height: '420px' }}>
                        <img
                            src={card1}
                            alt=""
                            class="img-fluid"
                            className="card-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h1 className="card-title text-white">
                                <strong>Quốc tế</strong>
                            </h1>
                            <p className="card-text text-white">
                                Khám phá thế giới trong sắc màu diệu kỳ mùa thu -
                                <span style={{ textDecoration: 'underline' }}>10 khách sạn</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3 mb-4 d-flex justify-content-center align-items-center">
                    <div className="card position-relative" style={{ width: '320px', height: '420px' }}>
                        <img
                            src={card2}
                            alt=""
                            class="img-fluid"
                            className="card-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h1 className="card-title text-white">
                                <strong>Lãng mạn</strong>
                            </h1>
                            <p className="card-text text-white">
                                Lãng mạn mùa thu – Chỉ có hai ta giữa đất trời! -
                                <span style={{ textDecoration: 'underline' }}>10 khách sạn</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3 mb-4 d-flex justify-content-center align-items-center">
                    <div className="card position-relative" style={{ width: '320px', height: '420px' }}>
                        <img
                            src={card3}
                            alt=""
                            class="img-fluid"
                            className="card-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h1 className="card-title text-white">
                                <strong>Đẳng cấp</strong>
                            </h1>
                            <p className="card-text text-white">
                                Resort số một thế giới, nay đã trong tầm với
                                <span style={{ textDecoration: 'underline' }}> 10 khách sạn</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 mb-4 d-flex justify-content-center align-items-center">
                    <div className="card position-relative" style={{ width: '320px', height: '420px' }}>
                        <img
                            src={card4}
                            alt=""
                            class="img-fluid"
                            className="card-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h1 className="card-title text-white">
                                <strong>Gift Voucher</strong>
                            </h1>
                            <p className="card-text text-white">Lưu giữ khoảnh khắc, trải nghiệm hành trình</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
