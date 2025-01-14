import React from 'react';
import dataFooter from '../../Data/DataFooter';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';

import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="container-footer">
                <div className="footer-top">
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
                                            style={{ width: '70px', height: 'auto', marginTop: '10px' }}
                                        />
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer-center">
                    <div className="content-left">
                        <div className="left-content">
                            {dataFooter.travelgold.map((item, index) => (
                                <div key={index}>
                                    <img src={item.img} alt={item.alt} style={{ width: '150px', height: 'auto' }} />
                                    <li>{item.content}</li>
                                </div>
                            ))}
                        </div>
                        <div className="center-content">
                            {dataFooter.statue.map((item, index) => (
                                <div key={index}>
                                    <img src={item.img} alt={item.alt} style={{ width: '110px', height: 'auto' }} />
                                    <li>{item.content}</li>
                                </div>
                            ))}
                        </div>
                        <div className="right-content">
                            {dataFooter.cup.map((item, index) => (
                                <div key={index}>
                                    <img src={item.img} alt={item.alt} style={{ width: '60px', height: 'auto' }} />
                                    <li>{item.content}</li>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="content-right">
                        <h6>Bạn cần trợ giúp? Hãy gọi ngay!</h6>
                        <div className="hotline-phone d-flex justify-content-between">
                            <h5>
                                <FaPhoneAlt /> {dataFooter.support.hotline}
                            </h5>
                            <li>{dataFooter.support.hours}</li>
                        </div>
                        <li>{dataFooter.support.chatbot}</li>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        {dataFooter.addresses.map((address, index) => (
                            <div key={index} className="addresses">
                                <span className="icon-address">{address.icon}</span>
                                <span className="address-text">{address.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="footer-bottom-right">
                        <div className="qrcode">
                            {dataFooter.bookingroom.map((item, index) => (
                                <h6>
                                    <strong>{item.content}</strong>
                                </h6>
                            ))}
                        </div>
                        <div className="app">
                            <div className="app-qr">
                                <img
                                    src={dataFooter.apps[0].img}
                                    alt={dataFooter.apps[0].alt}
                                    style={{ width: '100px', height: 'auto' }}
                                />
                            </div>
                            <div className="app-download">
                                {dataFooter.apps.slice(1).map((item, index) => (
                                    <div key={index}>
                                        <img src={item.img} alt={item.alt} style={{ width: '110px', height: 'auto' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="like">
                    <div className="like-left-content">
                        {dataFooter.like.map((item, index) => (
                            <div className="like-left">
                                <li key={index} style={{ color: '#3B5998' }}>
                                    {item}
                                </li>
                                <button className="">
                                    <AiFillLike /> Like 1.3M
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="like-right-content">
                        {dataFooter.mail.map((item, index) => (
                            <li
                                className="flex gap-1 align-items-center"
                                key={index}
                                style={{ color: '#818180', fontSize: '18px' }}
                            >
                                <span className="mt-1"> {item.icon}</span>
                                <span> {item.text}</span>
                            </li>
                        ))}
                    </div>
                </div>
                <div className="social-icon">
                    {dataFooter.socialLinks.map((item, index) => {
                        return (
                            <a key={index} href={item.link}>
                                <img src={item.img} alt="social" style={{ width: '37px', height: 'auto' }} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Footer;
