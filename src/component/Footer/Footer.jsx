import React from 'react';
import dataFooter from '../../Data/DataFooter';
import './Footer.css';

function Footer() {
    return (
        <div className="container-footer">
            <div className="footer-top d-flex justify-content-around align-items-center">
                <div className="about-us">
                    <ul>
                        <h4>{dataFooter.aboutUs[0]}</h4>
                        {dataFooter.aboutUs.slice(1).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="information">
                    <ul>
                        <h4>{dataFooter.information[0]}</h4>
                        {dataFooter.information.slice(1).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="partners">
                    <ul>
                        <h4>{dataFooter.partners[0]}</h4>
                        {dataFooter.partners.slice(1).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="groups">
                    <ul className="mt-4">
                        {dataFooter.group.slice(1).map((item, index) => (
                            <>
                                <li>{dataFooter.group[0]}</li>
                                <h5 key={index}>{item}</h5>
                                <li>
                                    <img
                                        src={dataFooter.thienminhImg}
                                        alt="Thiên Minh Group"
                                        style={{ width: '150px', height: 'auto' }}
                                    />
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
                <div className="certifications">
                    <ul className="d-flex align-item-center justify-content-between gap-4">
                        {dataFooter.certificationsImg.map((item, index) => (
                            <>
                                <ul>
                                    <h4>{dataFooter.certifications[0]}</h4>
                                    <li key={index}>
                                        <img src={item.img} alt={item.alt} style={{ width: '150px', height: 'auto' }} />
                                    </li>
                                </ul>
                                <li>
                                    <img
                                        src={dataFooter.iataImg}
                                        alt="IATA"
                                        style={{ width: '90px', height: 'auto', marginTop: '10px' }}
                                    />
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-center"></div>
            <div className="footer-bottom"></div>
        </div>
    );
}

export default Footer;
