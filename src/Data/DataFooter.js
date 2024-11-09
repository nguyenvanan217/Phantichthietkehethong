import imgThienMinh from '../assets/Image/footer-tmg.png';
import bocongthuong from '../assets/Image/footer-bocongthuong.png';
import iata from '../assets/Image/footer-iata.png';
import travelgold from '../assets/Image/footer-travelgold.svg';
import statue from '../assets/Image/footer-statue.png';
import cup from '../assets/Image/footer-cup.png';
import qr from '../assets/Image/footer-qr.png';
import appstore from '../assets/Image/footer-appstore.png';
import googleplay from '../assets/Image/footer-ggplay.png';
import fb from '../assets/Image/footer-fb.svg';
import zalo from '../assets/Image/footer-zalo.svg';
import insta from '../assets/Image/footer-insta.svg';
import tiktok from '../assets/Image/footer-tiktok.svg';
import youtube from '../assets/Image/footer-youtube.svg';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
const DataFooter = {
    aboutUs: ['Về iVIVU.com', 'Chúng tôi', 'iVIVU Blog', 'PMS - Miễn phí'],
    information: ['Thông Tin Cần Biết', 'Điều kiện & Điều khoản', 'Quy chế hoạt động', 'Câu hỏi thường gặp'],
    partners: ['Đối tác', 'Quy chế bảo hiểm Cathay', 'Yêu cầu bồi thường Cathay', 'Quy chế trả góp'],
    group: ['Thành viên của', 'Thiên Minh Group'],
    thienminhImg: imgThienMinh,
    certifications: ['Được chứng nhận'],
    certificationsImg: [{ img: bocongthuong, alt: 'Bộ Công Thương' }],
    iataImg: iata,
    travelgold: [{ img: travelgold, alt: 'Travel Gold' }, { content: 'Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam' }],
    statue: [{ img: statue, alt: 'Statue' }, { content: 'Best Companies to Work for in Asia' }],
    cup: [{ img: cup, alt: 'Cup' }, { content: 'APEA Inspirational Brand Award' }],
    support: {
        hotline: '1900 1870',
        hours: '7h30 → 21h  iVIVU HCM',
        chatbot: 'Tư vấn với Olivia - chatbot của iVIVU',
    },
    bookingroom: [{ content: 'Đặt phòng dễ dàng hơn qua ứng dụng iVIVU' }],
    apps: [
        { img: qr, alt: 'QR' },
        { img: appstore, alt: 'Appstore' },
        { img: googleplay, alt: 'Google Play' },
    ],
    legalInfo: ['DKKD: 0312788481, Ngày cấp: 21/05/2014, Sở kế hoạch đầu tư thành phố Hồ Chí Minh'],
    addresses: [
        {
            icon: <FaLocationDot />,
            text: 'HCM: Lầu 2, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh',
        },
        {
            icon: <FaLocationDot />,
            text: 'HN: P308, Tầng 3, tòa nhà The One, số 2 Chương Dương Độ, P.Chương Dương, Q.Hoàn Kiếm, Hà Nội',
        },
        {
            icon: <FaLocationDot />,
            text: 'Cần Thơ: Tầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, TP. Cần Thơ',
        },
    ],
    like: ['Like để cập nhật cẩm nang du lịch'],
    mail: [{ icon: <IoIosMail />, text: 'annguyenmxh@gmail.com' }],
    socialLinks: [
        { img: fb, link: 'https://www.facebook.com/ivivu' },
        { img: zalo, link: 'https://zalo.me/ivivu' },
        { img: insta, link: 'https://www.instagram.com/ivivucom' },
        { img: tiktok, link: 'https://www.tiktok.com/@ivivucom' },
        { img: youtube, link: 'https://www.youtube.com/user/ivivucom' },
    ],
};

export default DataFooter;
