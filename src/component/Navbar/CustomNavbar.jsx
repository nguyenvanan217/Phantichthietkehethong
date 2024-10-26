import React from "react";
import imglogo from "../../assets/Image/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { ImClock } from "react-icons/im";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CustomNavbar.css";

function CustomNavbar() {
  return (
    <div className="navbar-container">
      <Navbar expand="lg" className="back_group">
        <Container className="d-flex col-sm-10-12">
          <Navbar.Brand
            href="#home"
            className="logo d-flex justify-content-between align-items-center"
          >
            <img src={imglogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center">
            <Nav className="me-auto d-flex align-items-center">
              <Nav.Link className="text-link ml-3" href="#home">
                Khách Sạn
              </Nav.Link>
              <Nav.Link className="text-link ml-3" href="#link">
                Tour Du Lịch
              </Nav.Link>
              <Nav.Link className="text-link ml-3" href="#home">
                Vé Máy Bay
              </Nav.Link>
              <Nav.Link className="text-link ml-3" href="#link">
                Vé Vui Chơi
              </Nav.Link>
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
                  <NavDropdown.Item href="#action/3.1" className="dropdown-item">
                    <button className="register ">Đăng Ký</button>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className="dropdown-item">
                    <p className="have-account">Bạn đã có tài khoản ?</p>
                   <p className="register-now">Đăng ký ngay</p>
                  </NavDropdown.Item>
                </NavDropdown>
                <Row className="d-flex flex-column align-content-end">
                  <Col xxl={12} className="phone-css d-flex justify-content-center align-items-center gap-2" >
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
