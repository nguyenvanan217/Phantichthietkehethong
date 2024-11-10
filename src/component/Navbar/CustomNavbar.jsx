import React from 'react';
import imglogo from '../../assets/Image/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { MdPhoneInTalk } from 'react-icons/md';
import { ImClock } from 'react-icons/im';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CustomNavbar.css';
import { NavLink } from 'react-router-dom';

function CustomNavbar() {
    return (
        <div className="navbar-container">
            <Navbar expand="lg" className="back_group">
                <Container className="d-flex col-12">
                    <Navbar.Brand className="logo d-flex justify-content-between align-items-center">
                        <a href="/"><img src={imglogo} alt="Logo" /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex align-items-center">
                        <Nav className="me-auto d-flex gap-4 ms-3 align-items-center">
                            <NavLink to="/quang-ba" className="text-link ml-3">
                                <strong>Quảng Bá</strong>
                            </NavLink>
                            <NavLink to="/tour-du-lich" className="text-link ml-3">
                                <strong>Tour Du Lịch</strong>
                            </NavLink>
                        </Nav>
                        <Nav className="ms-lg-5">
                            <NavDropdown
                                title={
                                    <span className="dropup-center">
                                        <IoPersonCircleOutline className="IoPersonCircleOutline" />
                                    </span>
                                }
                                id="basic-nav-dropdown"
                                drop="down"
                                className="drop-css ms-4 d-flex flex-column align-items-center justify-content-center dropdown-margin"
                            >
                                <NavDropdown.Item as={NavLink} to="/dang-ky" className="dropdown-item">
                                    <button className="register">Đăng Ký</button>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-item">
                                    <p className="have-account">Bạn đã có tài khoản ?</p>
                                    <p className="register-now">Đăng ký ngay</p>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Row className="d-flex flex-column align-content-end">
                                <Col xxl={12} className="phone-css d-flex justify-content-center align-items-center gap-2">
                                    <MdPhoneInTalk className="MdPhoneInTalk" />
                                    <a href="tel:+1900 1870">1900 1870</a>
                                </Col>
                                <Col className="time-css d-flex justify-content-center align-items-center gap-2">
                                    <ImClock />
                                    <span>
                                        <strong>7h30</strong>
                                    </span>
                                    <IoIosArrowRoundForward />
                                    <span>&#8572;</span>
                                    <IoLocationSharp />
                                    <span>
                                        <strong>IVIVU Hồ Chí Minh</strong>
                                    </span>
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;
