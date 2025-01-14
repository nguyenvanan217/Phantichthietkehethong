import React, { useState, useEffect } from 'react';
import CustomNavbar from '../../component/Navbar/CustomNavbar';
import './QuanLythongTin.css';
import Footer from '../../component/Footer/Footer';
import { FaPencilAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
function QuanLythongTin() {
    const history = useHistory();

    // Redirect to login if no user is found
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            history.push('/login');
        }
    }, [history]);

    const [currentUser, setCurrentUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState('');

    // Load user data from localStorage
    useEffect(() => {
        const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(storedCurrentUser);
    }, []);
    const handleEditClick2 = () => {
        toast.error('Email/SDT chỉ quảng trị viên mới được sửa!');
    };
    // Enable editing mode for fullName
    const handleEditClick = () => {
        setEditedName(currentUser.fullName);
        setIsEditing(true);
    };

    // Handle name input changes
    const handleInputChange = (e) => {
        setEditedName(e.target.value);
    };

    // Save changes and update localStorage
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
                <div className="card p-3 mb-4">
                    <h4>Thông Tin Người Dùng:</h4>
                    {currentUser ? (
                        isEditing ? (
                            <div>
                                <div className="mb-3">
                                    <label>Họ và Tên:</label>
                                    <input type="text" value={editedName} onChange={handleInputChange} className="form-control" />
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
            </div>
            <Footer />
        </div>
    );
}

export default QuanLythongTin;
