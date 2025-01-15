import React, { useState, useEffect } from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import Footer from '../../component/Footer/Footer';
import './QuanLythongTin.css';
import { FaPencilAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function QuanLythongTin() {
    const history = useHistory();

   
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            history.push('/login');
        }
    }, [history]);

    const [currentUser, setCurrentUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [bookedTours, setBookedTours] = useState([]);

   
    useEffect(() => {
        const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
        const storedBookedTours = JSON.parse(localStorage.getItem('bookedTours')) || [];

        setCurrentUser(storedCurrentUser);
        setBookedTours(storedBookedTours);
    }, []);

    const handleEditClick2 = () => {
        toast.error('Email/SDT chỉ quản trị viên mới được sửa!');
    };

   
    const handleEditClick = () => {
        setEditedName(currentUser.fullName);
        setIsEditing(true);
    };

   
    const handleInputChange = (e) => {
        setEditedName(e.target.value);
    };

   
    const handleSave = () => {
        const updatedUser = { ...currentUser, fullName: editedName };
        setCurrentUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        setIsEditing(false);
        window.location.reload();
    };

    return (
        <div>
            <CustomNavbar />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Quản Lý Thông Tin</h2>

                {/* User Info Section */}
                <div className="card p-3 mb-4">
                    <h4>Thông Tin Người Dùng:</h4>
                    {currentUser ? (
                        isEditing ? (
                            <div>
                                <div className="mb-3">
                                    <label>Họ và Tên:</label>
                                    <input
                                        type="text"
                                        value={editedName}
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
                                    <strong>Họ và Tên:</strong> {currentUser.fullName}{' '}
                                    <button onClick={handleEditClick} className="btn btn-link text-primary">
                                        <FaPencilAlt />
                                    </button>
                                </li>
                                <li>
                                    <strong>Email/SDT:</strong> {currentUser.emailOrPhone}
                                    <button onClick={handleEditClick2} className="btn btn-link text-danger">
                                        <FaPencilAlt />
                                    </button>
                                </li>
                            </ul>
                        )
                    ) : (
                        <p>Không có thông tin người dùng hiện tại.</p>
                    )}
                </div>

                {/* Booked Tours Section */}
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
                                        <td className='limit-text'>{tour.title}</td>
                                        <td>{tour.rating} ({tour.Evaluate})</td>
                                        <td>{tour.count}</td>
                                        <td>{tour.discount}</td>
                                        <td>{tour.price}</td>
                                        <td>{tour.userId}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Không có tour nào đã đặt.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default QuanLythongTin;
