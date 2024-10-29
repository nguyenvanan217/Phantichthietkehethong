// src/data/bannerData.js
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarDate,BsPeople  } from "react-icons/bs";
const bannerData = {
    title: "Trải nghiệm kỳ nghỉ tuyệt vời",
    titleChild: "Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất",
    background: require("../assets/Image/khachsanbanner.webp"),
    placeholder: "Bạn muốn đi đâu?",
    set_room: "2 người lớn, 0 trẻ em",
    icon_big_input: <CiLocationOn />,
    icon_btt_left:  <BsCalendarDate />,
    icon_btt_right: <BsPeople/>, 
  };
  
  export default bannerData;
  