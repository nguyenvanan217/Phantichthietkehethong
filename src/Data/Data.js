// src/data/bannerData.js
import { CiLocationOn } from 'react-icons/ci';
import { BsCalendarDate, BsPeople } from 'react-icons/bs';
import { IoMdPaperPlane } from 'react-icons/io';
import globalTourImg from '../assets/Image/global-tour.svg';
import fellingImg from '../assets/Image/felling.svg';
import moneyImg from '../assets/Image/money.svg';
const bannerData = {
    title: 'Trải nghiệm kỳ nghỉ tuyệt vời',
    titleChild: 'Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất',
    background: require('../assets/Image/khachsanbanner.webp'),
    placeholder: 'Bạn muốn đi đâu?',
    set_room: '2 người lớn, 0 trẻ em',
    icon_big_input: <CiLocationOn />,
    icon_btt_left: <BsCalendarDate />,
    icon_btt_right: <BsPeople />,
};
const bannerData2 = {
    title: 'Thế giới tour trong tay bạn ',
    titleChild: 'Phục vụ tận tâm, giá siêu ưu đãi',
    background: require('../assets/Image/bannertour.png'),
    placeholder: 'Khởi hành từ?',
    set_room: 'Khởi hành từ: Hồ Chí Minh',
    icon_big_input: <CiLocationOn />,
    icon_btt_left: <BsCalendarDate />,
    icon_btt_right: <IoMdPaperPlane />,
};

const dataBannerBtt = [
  {
    img: globalTourImg,
    alt: 'global-tour',
    title: '1.000+ tours',
    content: 'Chất lượng trong và ngoài nước',
  },
  {
    img: fellingImg,
    alt: 'felling',
    title: '10K+ đánh giá 5 sao',
    content: 'Từ những khách hàng đã đặt tour',
  },
  {
    img: moneyImg,
    alt: 'money',
    title: '100+ ưu đãi mỗi ngày',
    content: 'Cho khách đặt sớm, theo nhóm, phút chót',
  },
];
export { bannerData, bannerData2, dataBannerBtt };
