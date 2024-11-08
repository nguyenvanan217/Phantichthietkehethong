import React from 'react';
import './Title.css';

function Title({ strong, icon, customs, bookingnow }) {
    return (
        <div className="container">
            <div className="container d-flex align-items-center best-combo">
                <h2 className="display-6 display-md-5 display-lg-4">
                    {' '}
                    <strong>{strong}</strong>
                </h2>
                <div className="fire-customs ms-3">
                    <span className="icon-fire">{icon}</span>
                    <p className="customs_24h h6 h5-md h4-lg ms-2">{customs}</p>
                </div>
            </div>
            <div className="container booking-now">
                <p className="h5 h4-md h3-lg">{bookingnow}</p>
            </div>
        </div>
    );
}

export default Title;
