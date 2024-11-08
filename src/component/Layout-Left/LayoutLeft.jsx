import React from 'react';
import img5 from '../../assets/Image/layout5.webp';
import img6 from '../../assets/Image/layout6.png';
import img7 from '../../assets/Image/layout7.webp';
import img8 from '../../assets/Image/layout8.webp';
import './LayoutLeft.css';

function LayoutLeft() {
    return (
        <div className="container d-flex gap-3 layout-main">
            <div className="layout-right card position-relative">
                <img src={img5} alt="" style={{ objectFit: 'cover' }} />
                <div className="card-img-overlay d-flex flex-column justify-content-end text">
                    <strong>
                        <h2 className="fs-4 fs-md-3 fs-lg-2">Nha Trang</h2>
                    </strong>
                    <p className="fs-6 fs-md-5 fs-lg-4">677 khách sạn</p>
                </div>
            </div>
            <div className="layout-left">
                <div className="layout-left-top card position-relative">
                    <img src={img6} alt="" style={{ objectFit: 'cover' }} />
                    <div className="card-img-overlay d-flex flex-column justify-content-end text">
                        <strong>
                            <h2 className="fs-4 fs-md-3 fs-lg-2">Đà Nẵng</h2>
                        </strong>
                        <p className="fs-6 fs-md-5 fs-lg-4">772 khách sạn</p>
                    </div>
                </div>
                <div className="layout-bottom">
                    <div className="layoutleft-bottom-left card position-relative">
                        <img src={img7} alt="" style={{ objectFit: 'cover' }} />
                        <div className="card-img-overlay d-flex flex-column justify-content-end text">
                            <strong>
                                <h2 className="fs-4 fs-md-3 fs-lg-2">Phan Thiết</h2>
                            </strong>
                            <p className="fs-6 fs-md-5 fs-lg-4">842 khách sạn</p>
                        </div>
                    </div>
                    <div className="layoutleft-bottom-right card position-relative">
                        <img src={img8} alt="" style={{ objectFit: 'cover' }} />
                        <div className="card-img-overlay d-flex flex-column justify-content-end text">
                            <strong>
                                <h2 className="fs-4 fs-md-3 fs-lg-2">Phú Yên</h2>
                            </strong>
                            <p className="fs-6 fs-md-5 fs-lg-4">85 khách sạn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutLeft;
