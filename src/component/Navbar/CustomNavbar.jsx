import React from 'react';
import imglogo from '../../assets/Image/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CustomNavbar.css';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { MdPhoneInTalk } from 'react-icons/md';
import { ImClock } from 'react-icons/im';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
function CustomNavbar() {
    return (
        <div className="navbar-container">
            <Navbar expand="lg" className="back_group">
                <Container>
                    <Navbar.Brand href="#home" className="logo d-flex justify-content-between align-items-center">
                        <img src={imglogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex align-items-center">
                            <Nav.Link className="text-link ml-3" href="#home">
                                Khách Sạn
                            </Nav.Link>
                            <Nav.Link className="text-link ml-3" href="#link">
                                Tour
                            </Nav.Link>
                            <Nav.Link className="text-link ml-3" href="#home">
                                Vé Máy Bay
                            </Nav.Link>
                            <Nav.Link className="text-link ml-3" href="#link">
                                Vé Vui Chơi
                            </Nav.Link>
                            <Nav>
                                <NavDropdown
                                    title={
                                        <span className="dropup-center">
                                            <IoPersonCircleOutline className="IoPersonCircleOutline" />
                                        </span>
                                    }
                                    id="basic-nav-dropdown"
                                    className="drop-css dropdown-margin"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        <button className="">Đăng Ký</button>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Bạn đã có tài khoản ?</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Đăng ký ngay</NavDropdown.Item>
                                </NavDropdown>
                                <div className="right-container  ml-3">
                                    <div className="phone-css d-flex gap-3 align-items-center ">
                                        <MdPhoneInTalk className="MdPhoneInTalk" />
                                        <a href="tel:+1900 1870">1900 1870</a>
                                    </div>
                                    <div className="time-css d-flex gap-2 align-items-center">
                                        <ImClock />
                                        <span><strong>7h30</strong></span>
                                        <IoIosArrowRoundForward />
                                        <span>&#8572;</span>
                                        <IoLocationSharp />
                                        <span>
                                            <strong>IVIVU Hồ Chí Minh</strong>
                                        </span>
                                    </div>
                                </div>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;
