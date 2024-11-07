import React from 'react';
import dataLayoutCenter from '../../Data/DataLayoutCenter';
import './LayoutCenter.css';

function LayoutCenter() {
    return (
        <div className="container layout-center">
            <div className="layout-top">
                {dataLayoutCenter.slice(0, 2).map(item => (
                    <div key={item.id} className={`layout-top-${item.id === 1 ? 'left' : 'right'} card position-relative`}>
                        <img src={item.image} alt={item.title} style={{ objectFit: 'cover' }} />
                        <div className="card-img-overlay d-flex flex-column justify-content-end text">
                            <strong><h2>{item.title}</h2></strong>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="layout-bottom">
                {dataLayoutCenter.slice(2, 5).map(item => (
                    <div
                        key={item.id}
                        className={`layout-bottom-${item.id === 3 ? 'left' : item.id === 4 ? 'center' : 'right'} card position-relative`}
                    >
                        <img src={item.image} alt={item.title} style={{ objectFit: 'cover' }} />
                        <div className="card-img-overlay d-flex flex-column justify-content-end text">
                            <strong><h2>{item.title}</h2></strong>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default LayoutCenter;
