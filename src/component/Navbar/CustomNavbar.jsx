import React, { useEffect, useState } from 'react';
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
import './CustomNavbar.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function CustomNavbar() {
    const [currentUser, setCurrentUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        toast.success('Đăng xuất thành công!');
        window.location.reload();
        history.push('/');
    };
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        setIsLogin(!!currentUser);
    }, []);
    return (
        <div className="navbar-container">
            <Navbar expand="lg" className="back_group">
                <Container className="d-flex col-sm-10-12">
                    <Navbar.Brand className="logo d-flex justify-content-between align-items-center">
                        <img src={imglogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center">
                        <Nav className="me-auto d-flex align-items-center">
                            <Nav.Link className={`text-link ml-3`}>
                                <NavLink to="/" exact>
                                    <strong>Quảng bá hình ảnh</strong>
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link className={`text-link ml-3`}>
                                <NavLink to="/tour-du-lich">
                                    <strong> Tour Du Lịch</strong>
                                </NavLink>
                            </Nav.Link>
                            {isLogin && (
                                <Nav.Link className={`text-link ml-3`}>
                                    <NavLink to="/quan-ly-thong-tin">
                                        <strong> Hồ sơ của tôi</strong>
                                    </NavLink>
                                </Nav.Link>
                            )}
                        </Nav>
                        <Nav className="ms-lg-5 d-flex align-items-center">
                            <div className="d-flex align-items-center justify-center">
                                <NavDropdown
                                    title={
                                        <div className="dropup-center">
                                            <IoPersonCircleOutline className="IoPersonCircleOutline" />
                                        </div>
                                    }
                                    id="basic-nav-dropdown"
                                    drop="down"
                                    className="drop-css ms-4 d-flex flex-column align-items-center justify-content-center dropdown-margin"
                                >
                                    {currentUser ? (
                                        <>
                                            <NavDropdown.Item className="dropdown-item p-2">
                                                <span className="text-gray-700">
                                                    Xin chào,{' '}
                                                    <span className="font-bold text-blue-600">{currentUser.fullName}</span>
                                                </span>
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={handleLogout} className="dropdown-item">
                                                <button className="text-red-600">Đăng xuất</button>
                                            </NavDropdown.Item>
                                        </>
                                    ) : (
                                        <>
                                            <NavDropdown.Item className="dropdown-item">
                                                <NavLink to="/register">
                                                    <button className="register">Đăng Ký</button>
                                                </NavLink>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item className="dropdown-item">
                                                <p className="have-account">Bạn đã có tài khoản ?</p>
                                                <Link to="/login" className="register-now text-decoration-none">
                                                    Đăng nhập ngay
                                                </Link>
                                            </NavDropdown.Item>
                                        </>
                                    )}
                                </NavDropdown>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="phone-css d-flex align-items-center gap-2">
                                    <MdPhoneInTalk className="MdPhoneInTalk" />
                                    <a href="tel:+1900 1870">1900 1870</a>
                                </div>
                                <div className="time-css d-flex align-items-center gap-2">
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
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;
