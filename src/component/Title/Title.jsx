import React from 'react';
import './Title.css';

function Title({ strong, icon, customs, bookingnow }) {
    return (
        <div>
            <div className="container d-flex align-items-center best-combo">
                <h2>
                    <strong>{strong}</strong>
                </h2>
                <div className="fire-customs">
                    {icon}
                    <p className="customs_24h">{customs}</p>
                </div>
            </div>
            <div className="container booking-now">
                <p>{bookingnow}</p>
            </div>
        </div>
    );
}

export default Title;
