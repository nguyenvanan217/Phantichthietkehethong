import React from 'react';
import './BannerBottom.css';
import { dataBannerBtt } from '../../Data/Data';

function BannerBottom() {
    return (
        <div className="container ">
            <div className="banner d-flex justify-content-around">
                {dataBannerBtt.map((item, index) => {
                    return (
                        <div className="banner-item d-flex justify-content-center gap-3 mt-4" key={index}>
                            <div className="banner-item-img">
                                <img src={item.img} alt={item.alt} style={{height: "auto", width: "50px"}}/>
                            </div>
                            <div className="banner-item-content d-flex flex-column">
                                <h3>{item.title}</h3>
                                <p style={{ color: '#828282' }}>{item.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BannerBottom;
