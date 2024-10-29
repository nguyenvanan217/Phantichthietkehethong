import React, { useState } from 'react';
import './Banner.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Banner = ({ title, titleChild, background, placeholder, icon_big_input, icon_btt_left, icon_btt_right, set_room }) => {
    // Khởi tạo state cho từng loại số lượng
    const [counts, setCounts] = useState({
        room: 1,
        adult: 1,
        child: 1,
    });

    const increment = (type, e) => {
        e.stopPropagation();
        setCounts((prevCounts) => ({
            ...prevCounts,
            [type]: prevCounts[type] + 1,
        }));
    };

    const decrement = (type, e) => {
        e.stopPropagation();
        setCounts((prevCounts) => ({
            ...prevCounts,
            [type]: prevCounts[type] > 1 ? prevCounts[type] - 1 : 1,
        }));
    };

    return (
        <div className="banner-container" style={{ backgroundImage: `url(${background})` }}>
            <h1>{title} !</h1>
            <h5>{titleChild}</h5>
            <div className="form">
                <div className="over-lay">
                    <div className="big-input d-flex align-items-center">
                        <span className="icon-big-input">{icon_big_input}</span>
                        <input type="text" placeholder={placeholder} />
                    </div>
                    <div className="child-input-btt d-flex align-items-center">
                        <div className="child-input-left d-flex align-items-center">
                            <span className="icon-left">{icon_btt_left}</span>
                            <input type="datetime-local" />
                        </div>
                        <div className="child-input-right d-flex align-items-center">
                            <span className="icon-right">{icon_btt_right}</span>
                            <div className="drop-down">
                                <Dropdown drop="down">
                                    <Dropdown.Toggle
                                        variant="white"
                                        id="dropdown-basic"
                                        style={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                        }}
                                    >
                                        {set_room}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="force-dropdown-down">
                                        <div className="dropdown-item">
                                            <strong>Đặt Phòng</strong>
                                            <InputGroup className="mt-2 input-count">
                                                <Button className="decrement round-button" onClick={(e) => decrement('room', e)}>
                                                    -
                                                </Button>
                                                <FormControl
                                                    style={{ fontWeight: 'bold' }}
                                                    value={counts.room}
                                                    readOnly
                                                    className="text-center"
                                                />
                                                <Button className="increment round-button" onClick={(e) => increment('room', e)}>
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </div>
                                        <Dropdown.Item href="#/action-2">
                                            <strong>Vé người lớn</strong>
                                            <InputGroup className="mt-2 input-count">
                                                <Button className="decrement round-button" onClick={(e) => decrement('adult', e)}>
                                                    -
                                                </Button>
                                                <FormControl
                                                    style={{ fontWeight: 'bold' }}
                                                    value={counts.adult}
                                                    readOnly
                                                    className="text-center"
                                                />
                                                <Button className="increment round-button" onClick={(e) => increment('adult', e)}>
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <strong>Vé trẻ em</strong>
                                            <InputGroup className="mt-2 input-count">
                                                <Button className="decrement round-button" onClick={(e) => decrement('child', e)}>
                                                    -
                                                </Button>
                                                <FormControl
                                                    style={{ fontWeight: 'bold' }}
                                                    value={counts.child}
                                                    readOnly
                                                    className="text-center"
                                                />
                                                <Button className="increment round-button" onClick={(e) => increment('child', e)}>
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </Dropdown.Item>
                                        <NavDropdown.Divider />
                                        <div className="button_booking-main">
                                            <button className="button_booking">Đặt Ngay</button>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <button className="button_search">Tìm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
