import React from "react";
import CustomNavbar from "../../component/Navbar/CustomNavbar";
import Banner from "../../component/Banner/Banner";
import bannerData from "../../Data/Data.js"; 

function KhachSanPage() {
  return (
    <div>
      <CustomNavbar />
      <Banner {...bannerData} />
    </div>
  );
}

export default KhachSanPage;
