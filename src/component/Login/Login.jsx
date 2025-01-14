import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoArrowBack } from 'react-icons/io5';
import CustomNavbar from '../Navbar/CustomNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer';

function Login() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    const history = useHistory();
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',
    });

    const [fieldErrors, setFieldErrors] = useState({
        emailOrPhone: false,
        password: false,
    });

    const [errors, setErrors] = useState({
        emailOrPhone: '',
        password: '',
    });

    const emailPhoneRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            toast.info('Bạn đã đăng nhập!');
            history.push('/');
        }
    }, [history]);

    const handleKeyDown = (e, nextRef) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (nextRef && nextRef.current) {
                nextRef.current.focus();
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFieldErrors({
            ...fieldErrors,
            [name]: false,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            emailOrPhone: '',
            password: '',
        };

        // Kiểm tra email/phone
        if (!formData.emailOrPhone) {
            newErrors.emailOrPhone = 'Vui lòng nhập email hoặc số điện thoại';
            isValid = false;
        }

        // Kiểm tra password
        if (!formData.password) {
            newErrors.password = 'Vui lòng nhập mật khẩu';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Lấy danh sách tài khoản đã đăng ký
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        // Tìm user trong danh sách đã đăng ký
        const user = registeredUsers.find(
            (user) => user.emailOrPhone === formData.emailOrPhone && user.password === formData.password,
        );

        if (!user) {
            toast.error('Email/SĐT hoặc mật khẩu không chính xác!');
            return;
        }

        // Nếu đăng nhập thành công
        const userData = {
            emailOrPhone: formData.emailOrPhone,
            fullName: user.fullName, // Lấy thêm thông tin từ tài khoản đã đăng ký
        };

        localStorage.setItem('currentUser', JSON.stringify(userData));

        // Kích hoạt event cập nhật số lượng tour
        const bookingEvent = new CustomEvent('bookingUpdated', {
            detail: {
                userId: userData.emailOrPhone,
                action: 'login',
            },
        });
        window.dispatchEvent(bookingEvent);

        toast.success('Đăng nhập thành công!');
        history.push('/');
    };

    return (
        <>
            <CustomNavbar />
            <ToastContainer />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="p-6">
                        {/* Header */}
                        <div className="relative mb-8">
                            <NavLink to="/" className="absolute left-0 top-1/2 -translate-y-1/2 text-blue-600">
                                <IoArrowBack className="text-2xl" />
                            </NavLink>
                            <h1 className="text-2xl font-bold text-center text-[#003C71] w-full">Đăng nhập</h1>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email / Số điện thoại di động <span className="text-red-500">*</span>
                                </label>
                                <input
                                    ref={emailPhoneRef}
                                    type="text"
                                    name="emailOrPhone"
                                    placeholder="Ví dụ: 0901234567 hoặc email@gmail.com"
                                    value={formData.emailOrPhone}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                                    className={`w-full p-3 border ${
                                        fieldErrors.emailOrPhone ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                />
                                {errors.emailOrPhone && <p className="text-red-500 text-sm mt-1">{errors.emailOrPhone}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Mật khẩu <span className="text-red-500">*</span>
                                </label>
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleSubmit(e);
                                        }
                                    }}
                                    className={`w-full p-3 border ${
                                        fieldErrors.password ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full p-3 bg-[#f79321] hover:bg-[#f79321]/90 text-white font-medium rounded-md"
                            >
                                Đăng nhập
                            </button>
                        </form>

                        <div className="mt-4 text-center">
                            <span className="text-gray-600">Bạn chưa có tài khoản? </span>
                            <NavLink to="/register" className="text-blue-600 hover:underline font-medium">
                                Đăng ký ngay
                            </NavLink>
                        </div>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Hoặc</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="space-y-3">
                            <button className="w-full p-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50">
                                <FaFacebook className="text-blue-600 text-xl" />
                                <span>Facebook</span>
                            </button>
                            <button className="w-full p-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50">
                                <FcGoogle className="text-xl" />
                                <span>Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
