import React from 'react';
import img1 from '../../assets/Image/layout1.webp';
import img2 from '../../assets/Image/layout2.webp';
import img3 from '../../assets/Image/layout3.webp';
import img4 from '../../assets/Image/layout4.webp';
import './LayoutRight.css';

function LayoutRight() {
    return (
        <div className="container d-flex gap-3">
            <div className="layout-left">
                <div className="layout-left-top card position-relative">
                    <img src={img1} alt="" style={{ objectFit: 'cover' }} />
                    <div className="card-img-overlay d-flex flex-column justify-content-end text">
                        <strong>
                            <h2 className="fs-4 fs-md-3 fs-lg-2">Phú Quốc</h2>
                        </strong>
                        <p className="fs-6 fs-md-5 fs-lg-4">772 khách sạn</p>
                    </div>
                </div>
                <div className="layout-bottom">
                    <div className="layoutleft-bottom-left card position-relative">
                        <img src={img2} alt="" style={{ objectFit: 'cover' }} />
                        <div className="card-img-overlay d-flex flex-column justify-content-end text">
                            <strong>
                                <h2 className="fs-4 fs-md-3 fs-lg-2">Đà Lạt</h2>
                            </strong>
                            <p className="fs-6 fs-md-5 fs-lg-4">842 khách sạn</p>
                        </div>
                    </div>
                    <div className="layoutleft-bottom-right card position-relative">
                        <img src={img3} alt="" style={{ objectFit: 'cover' }} />
                        <div className="card-img-overlay d-flex flex-column justify-content-end text">
                            <strong>
                                <h2 className="fs-4 fs-md-3 fs-lg-2">Quy Nhơn</h2>
                            </strong>
                            <p className="fs-6 fs-md-5 fs-lg-4">85 khách sạn</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout-right card position-relative">
                <img src={img4} alt="" style={{ objectFit: 'cover' }} />
                <div className="card-img-overlay d-flex flex-column justify-content-end text">
                    <strong>
                        <h2 className="fs-4 fs-md-3 fs-lg-2">Vũng Tàu</h2>
                    </strong>
                    <p className="fs-6 fs-md-5 fs-lg-4">677 khách sạn</p>
                </div>
            </div>
        </div>
    );
}

export default LayoutRight;
