import React from 'react'
import './ViewMore.css'
import { MdNavigateNext } from "react-icons/md";
function ViewMore() {
  return (
    <div className='d-flex justify-content-center mt-3'>
      <button className='view-more col-xs-12 text-center'>Xem Thêm Tours <span className='next'><MdNavigateNext /></span></button>
    </div>
  )
}

export default ViewMore
