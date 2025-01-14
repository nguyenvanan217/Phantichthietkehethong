import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoArrowBack } from 'react-icons/io5';
import CustomNavbar from '../Navbar/CustomNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer';

function Register() {
    const history = useHistory();

    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            toast.info('Vui lòng đăng xuất trước khi đăng ký tài khoản mới!');
            history.push('/');
        }
    }, [history]);
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    const [formData, setFormData] = useState({
        fullName: '',
        emailOrPhone: '',
        password: '',
        confirmPassword: '',
    });

    const [fieldErrors, setFieldErrors] = useState({
        fullName: false,
        emailOrPhone: false,
        password: false,
        confirmPassword: false,
    });

    const [errors, setErrors] = useState({
        fullName: '',
        emailOrPhone: '',
        password: '',
        confirmPassword: '',
    });

    const fullNameRef = useRef(null);
    const emailPhoneRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

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
        // Reset error state when user types
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
        const newFieldErrors = {
            fullName: false,
            emailOrPhone: false,
            password: false,
            confirmPassword: false,
        };
        const newErrors = {
            fullName: '',
            emailOrPhone: '',
            password: '',
            confirmPassword: '',
        };

        // Check họ tên trước
        if (!formData.fullName.trim()) {
            newFieldErrors.fullName = true;
            newErrors.fullName = 'Vui lòng nhập họ tên';
            toast.error('Vui lòng nhập họ tên');
            setFieldErrors(newFieldErrors);
            setErrors(newErrors);
            fullNameRef.current.focus();
            return false;
        }

        // Kiểm tra email/phone không được trống
        if (!formData.emailOrPhone) {
            newFieldErrors.emailOrPhone = true;
            newErrors.emailOrPhone = 'Vui lòng nhập email hoặc số điện thoại';
            toast.error('Vui lòng nhập email hoặc số điện thoại');
            setFieldErrors(newFieldErrors);
            setErrors(newErrors);
            emailPhoneRef.current.focus();
            return false;
        }

        // Nếu email ok, check mật khẩu
        if (!formData.password) {
            newFieldErrors.password = true;
            newErrors.password = 'Vui lòng nhập mật khẩu';
            toast.error('Vui lòng nhập mật khẩu');
            setFieldErrors(newFieldErrors);
            setErrors(newErrors);
            passwordRef.current.focus();
            return false;
        }

        if (formData.password.length < 3) {
            newFieldErrors.password = true;
            newErrors.password = 'Mật khẩu phải có ít nhất 3 ký tự';
            toast.error('Mật khẩu phải có ít nhất 3 ký tự');
            setFieldErrors(newFieldErrors);
            setErrors(newErrors);
            passwordRef.current.focus();
            return false;
        }

        // Cuối cùng check nhập lại mật khẩu
        if (!formData.confirmPassword) {
            newFieldErrors.confirmPassword = true;
            newErrors.confirmPassword = 'Vui lòng nhập lại mật khẩu';
            toast.error('Vui lòng nhập lại mật khẩu');
            setFieldErrors(newFieldErrors);
            setErrors(newErrors);
            confirmPasswordRef.current.focus();
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            newFieldErrors.confirmPassword = true;
            newErrors.confirmPassword = 'Mật khẩu nhập lại không khớp';
            toast.error('Mật khẩu nhập lại không khớp');
            setFieldErrors(newFieldErrors);
            setErrors(newErrors);
            confirmPasswordRef.current.focus();
            return false;
        }

        // Nếu tất cả đều ok
        setFieldErrors({
            fullName: false,
            emailOrPhone: false,
            password: false,
            confirmPassword: false,
        });
        setErrors({
            fullName: '',
            emailOrPhone: '',
            password: '',
            confirmPassword: '',
        });
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Lấy danh sách tài khoản đã đăng ký
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        // Kiểm tra email/phone đã tồn tại chưa
        if (registeredUsers.some((user) => user.emailOrPhone === formData.emailOrPhone)) {
            toast.error('Email/Số điện thoại đã được đăng ký!');
            return;
        }

        // Thêm tài khoản mới vào danh sách
        registeredUsers.push(formData);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        toast.success('Đăng ký thành công! Vui lòng đăng nhập.');
        history.push('/login');
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
                            <h1 className="text-2xl font-bold text-center text-[#003C71] w-full">Đăng ký</h1>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Họ tên <span className="text-red-500">*</span>
                                </label>
                                <input
                                    ref={fullNameRef}
                                    type="text"
                                    name="fullName"
                                    placeholder="Ví dụ: Nguyen Van A"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, emailPhoneRef)}
                                    className={`w-full p-3 border ${
                                        fieldErrors.fullName ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                />
                                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                            </div>

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
                                    onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
                                    className={`w-full p-3 border ${
                                        fieldErrors.password ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nhập lại mật khẩu <span className="text-red-500">*</span>
                                </label>
                                <input
                                    ref={confirmPasswordRef}
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleSubmit(e);
                                        }
                                    }}
                                    className={`w-full p-3 border ${
                                        fieldErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full p-3 bg-[#f79321] hover:bg-[#f79321]/90 text-white font-medium rounded-md"
                            >
                                Đăng ký
                            </button>
                        </form>

                        <div className="mt-4 text-center">
                            <span className="text-gray-600">Bạn đã có tài khoản? </span>
                            <NavLink to="/login" className="text-blue-600 hover:underline font-medium">
                                Đăng nhập ngay
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

                        {/* Terms */}
                        <p className="mt-6 text-sm text-gray-600 text-center">
                            Bằng cách đăng ký, Quý khách đồng ý với tất cả{' '}
                            <a href="#" className="text-blue-600 hover:underline">
                                điều kiện & điều khoản
                            </a>{' '}
                            của iVIVU
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
