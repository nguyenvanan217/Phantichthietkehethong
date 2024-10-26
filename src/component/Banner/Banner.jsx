import React from "react";
import "./Banner.css"; // Tùy chỉnh thêm CSS nếu cần
import { CiLocationOn } from "react-icons/ci";
const Banner = ({ title, titleChild, background, placeholder,icon_btt_left,icon_btt_riht }) => {
  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2>{title}</h2>
      <h5>{titleChild}</h5>
      <div className="form">
        <div className="big-input">
          {icon_btt_left}
          <input type="text" placeholder={placeholder} />
        </div>
        <div className="child-input-btt">
            <div className="child-input-left">

            </div>
            <div className="child-iput-right">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
