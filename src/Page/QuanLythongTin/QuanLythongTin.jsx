import React, { useState, useEffect } from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import './QuanLythongTin.css';
import Footer from '../../component/Footer/Footer';
import { FaPencilAlt } from 'react-icons/fa';

function QuanLythongTin() {
    const [currentUser, setCurrentUser] = useState(null);
    const [bookedTours, setBookedTours] = useState([]);
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({ emailOrPhone: '', fullName: '' });

    useEffect(() => {
        // Lấy dữ liệu từ localStorage
        const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
        const storedBookedTours = JSON.parse(localStorage.getItem('bookedTours')) || [];
        const storedRegisteredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        setCurrentUser(storedCurrentUser);
        setBookedTours(storedBookedTours);
        setRegisteredUsers(storedRegisteredUsers);
    }, []);

    const handleEditClick = () => {
        setEditedData({
            emailOrPhone: currentUser.emailOrPhone,
            fullName: currentUser.fullName,
        });
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSave = () => {
        const updatedUser = { ...currentUser, ...editedData };
        setCurrentUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        setIsEditing(false);
    };

    return (
        <div>
            <CustomNavbar />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Quản Lý Thông Tin</h2>
                <div className="card p-3 mb-4">
                    <h4>Thông Tin Người Dùng Hiện Tại</h4>
                    {currentUser ? (
                        isEditing ? (
                            <div>
                                <div className="mb-3">
                                    <label>Email/SDT:</label>
                                    <input
                                        type="text"
                                        name="emailOrPhone"
                                        value={editedData.emailOrPhone}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Họ và Tên:</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={editedData.fullName}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <button onClick={handleSave} className="btn btn-success me-2">
                                    Lưu
                                </button>
                                <button onClick={() => setIsEditing(false)} className="btn btn-secondary">
                                    Hủy
                                </button>
                            </div>
                        ) : (
                            <ul>
                                <li>
                                    <strong>Email/SDT:</strong> {currentUser.emailOrPhone}{' '}
                                    <button onClick={handleEditClick} className="btn btn-link text-primary">
                                        <FaPencilAlt />
                                    </button>
                                </li>
                                <li>
                                    <strong>Họ và Tên:</strong> {currentUser.fullName}{' '}
                                    <button onClick={handleEditClick} className="btn btn-link text-primary">
                                        <FaPencilAlt />
                                    </button>
                                </li>
                            </ul>
                        )
                    ) : (
                        <p>Không có thông tin người dùng hiện tại.</p>
                    )}
                </div>

                <div className="card p-3 mb-4">
                    <h4>Danh Sách Tour Đã Đặt</h4>
                    {bookedTours.length > 0 ? (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Hình Ảnh</th>
                                    <th>Tên Tour</th>
                                    <th>Đánh Giá</th>
                                    <th>Số Lượng Khách</th>
                                    <th>Giá Gốc</th>
                                    <th>Giá Giảm</th>
                                    <th>Người Đặt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookedTours.map((tour, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img src={tour.img} alt={tour.title} width="100" />
                                        </td>
                                        <td>{tour.title}</td>
                                        <td>
                                            {tour.rating} ({tour.Evaluate})
                                        </td>
                                        <td>{tour.count}</td>
                                        <td>{tour.discount}</td>
                                        <td>{tour.price}</td>
                                        <td>{tour.userId}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p style={{ color: '#333' }}>Không có tour nào đã đặt.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default QuanLythongTin;
