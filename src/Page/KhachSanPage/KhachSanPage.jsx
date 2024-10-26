import React from "react";
import CustomNavbar from "../../component/Navbar/CustomNavbar";
import Banner from "../../component/Banner/Banner";
import { CiLocationOn } from "react-icons/ci";
import imgBanner from "../../assets/Image/khachsanbanner.webp";
function KhachSanPage() {
  return (
    <div>
      <CustomNavbar />
      <Banner
        title="Trải nghiệm kỳ nghỉ tuyệt vời"
        titleChild="Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất"
        background={imgBanner} 
        placeholder="Bạn muốn đi đâu?"
        icon_btt_left={<CiLocationOn />}
      />   
    </div>
  );
  
}

export default KhachSanPage;
